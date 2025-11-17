"""
OpenAI Agent Service - integrates with OpenAI Agents SDK for summary generation
"""
import os
import logging
from typing import AsyncGenerator
from agents import Runner, Agent, OpenAIChatCompletionsModel, SQLiteSession,set_tracing_disabled
from openai import AsyncOpenAI
from dotenv import load_dotenv, find_dotenv

load_dotenv(find_dotenv())

logger = logging.getLogger(__name__)

GOOGLE_API_KEY = os.getenv("GOOGLE_API_KEY")

if not GOOGLE_API_KEY:
    logger.error("GOOGLE_API_KEY not found in environment variables. Please set it in .env file.")
    raise ValueError(
        "GOOGLE_API_KEY is required. Please:\n"
        "1. Copy api/.env.example to api/.env\n"
        "2. Add your Google API key to GOOGLE_API_KEY in .env file"
    )

set_tracing_disabled(False)

external_client = AsyncOpenAI(
    base_url="https://generativelanguage.googleapis.com/v1beta/openai/",
    api_key=GOOGLE_API_KEY
)

model = OpenAIChatCompletionsModel(
    openai_client=external_client,
    model="gemini-2.0-flash",
)

async def generate_summary(content: str, page_id: str) -> AsyncGenerator[str, None]:
    """
    Generate AI-powered summary of content using OpenAI Agents SDK.
    
    Uses Runner.run_streamed() with Agent for streaming responses with
    proportional summary length calculation (30-35% of original, 150-500 word bounds).
    
    Args:
        content: Full page content text to summarize
        page_id: Unique identifier for the content page (for logging)
    
    Yields:
        str: Chunks of summary text as they are generated
    
    Raises:
        Exception: If OpenAI Agents SDK call fails
    """
    logger.info(f"Starting summary generation for page_id: {page_id}")
    
    # Calculate word count for proportional summary
    word_count = len(content.split())
    target_word_count = max(150, min(500, int(word_count * 0.225)))  # 20-25%, bounded
    
    logger.info(f"Content word count: {word_count}, Target summary: {target_word_count} words")
    
    instructions = f"""You are an expert content summarizer. Your task is to create a clear, concise summary of the provided text in natural paragraph form.

Requirements:
- Target length: {target_word_count} words (±10%)
- Write in flowing paragraphs, not bullet points or lists
- Use single line breaks between paragraphs
- Maintain key concepts and insights
- Use clear, professional language
- Preserve important technical details
- Do not add information not present in the original text
- No markdown formatting (no ###, **, or -)

Structure your response as natural paragraphs covering: brief overview, main points, and key takeaways.
"""
    
    try:
        # Create Agent instance
        agent = Agent(
            name="Content Summarizer",
            instructions=instructions,
            model=model,
        )
        
        # Create in-memory session (no file needed)
        session = SQLiteSession(session_id=page_id)  # Defaults to in-memory
        
        # Run agent with streaming
        result = Runner.run_streamed(
            starting_agent=agent,
            input=f"Summarize this content:\n\n{content}",
            session=session,
        )
        
        # Stream response chunks - iterate over events
        async for event in result.stream_events():
            # Log event type for debugging
            logger.debug(f"Event type: {event.type}")
            
            # Handle different event types for text streaming
            if event.type == "raw_response_event":
                # Check various possible delta locations in the event
                delta_text = None
                
                if hasattr(event, 'data'):
                    # Try event.data.delta
                    if hasattr(event.data, 'delta') and event.data.delta:
                        delta_text = event.data.delta
                    # Try event.data.content if delta not available
                    elif hasattr(event.data, 'content') and event.data.content:
                        delta_text = event.data.content
                
                # Direct event.delta check
                if not delta_text and hasattr(event, 'delta') and event.delta:
                    delta_text = event.delta
                
                # Direct event.content check
                if not delta_text and hasattr(event, 'content') and event.content:
                    delta_text = event.content
                
                if delta_text:
                    logger.debug(f"Yielding delta: {delta_text[:50]}...")
                    yield delta_text
        
        logger.info(f"Summary generation completed for page_id: {page_id}")
        
    except Exception as e:
        logger.error(f"Error generating summary for page_id {page_id}: {str(e)}")
        raise


# T037-T042: Separate personalization agent
async def generate_personalized_content(
    content: str,
    page_id: str,
    programming_level: str,
    ai_proficiency: str
) -> AsyncGenerator[str, None]:
    """
    Generate AI-personalized content based on user proficiency levels.
    
    Uses separate Agent instance (Content Personalizer) with proficiency-specific
    instructions to tailor content complexity to user's programming experience
    and AI knowledge.
    
    Args:
        content: Full page content text to personalize
        page_id: Unique identifier for the content page
        programming_level: User's programming proficiency (Novice/Beginner/Intermediate/Expert)
        ai_proficiency: User's AI knowledge proficiency (Novice/Beginner/Intermediate/Expert)
    
    Yields:
        str: Chunks of personalized content as they are generated
    
    Raises:
        Exception: If OpenAI Agents SDK call fails
    """
    logger.info(f"Starting personalization for page_id: {page_id}, Programming: {programming_level}, AI: {ai_proficiency}")
    
    # T039: Build proficiency-specific instructions
    instructions = build_personalization_instructions(programming_level, ai_proficiency)
    
    try:
        # T038: Create separate Agent instance (Content Personalizer)
        agent = Agent(
            name="Content Personalizer",
            instructions=instructions,
            model=model,
        )
        
        # T040: Construct session_id with proficiency levels for context isolation
        session_id = f"{page_id}_{programming_level}_{ai_proficiency}"
        session = SQLiteSession(session_id=session_id)
        
        # T041: Implement streaming with Runner.run_streamed()
        result = Runner.run_streamed(
            starting_agent=agent,
            input=f"Personalize this content for the user:\n\n{content}",
            session=session,
        )
        
        # Stream response chunks
        async for event in result.stream_events():
            logger.debug(f"Event type: {event.type}")
            
            if event.type == "raw_response_event":
                delta_text = None
                
                if hasattr(event, 'data'):
                    if hasattr(event.data, 'delta') and event.data.delta:
                        delta_text = event.data.delta
                    elif hasattr(event.data, 'content') and event.data.content:
                        delta_text = event.data.content
                
                if not delta_text and hasattr(event, 'delta') and event.delta:
                    delta_text = event.delta
                
                if not delta_text and hasattr(event, 'content') and event.content:
                    delta_text = event.content
                
                if delta_text:
                    logger.debug(f"Yielding personalized delta: {delta_text[:50]}...")
                    yield delta_text
        
        logger.info(f"Personalization completed for page_id: {page_id}")
        
    except Exception as e:
        logger.error(f"Error generating personalized content for page_id {page_id}: {str(e)}")
        raise


def build_personalization_instructions(programming_level: str, ai_proficiency: str) -> str:
    """
    Build proficiency-specific instructions for the personalization agent.
    
    Decision 5 from research.md: Level-specific instruction templates
    
    Args:
        programming_level: Novice, Beginner, Intermediate, or Expert
        ai_proficiency: Novice, Beginner, Intermediate, or Expert
    
    Returns:
        str: Tailored instructions for the agent
    """
    
    # Define unified reader personas
    personas = {
        ("Novice", "Novice"): "a complete beginner to both programming and AI. Use very simple language and everyday analogies throughout. Explain all technical terms. Focus on 'what' and 'why' before 'how'.",
        ("Novice", "Beginner"): "new to programming but has heard about AI tools. Keep programming explanations very simple with analogies, but you can mention AI tools and concepts directly without over-explaining them.",
        ("Novice", "Intermediate"): "new to programming but comfortable with AI concepts. Simplify programming explanations heavily with analogies, while using proper AI terminology naturally (agents, prompts, models).",
        ("Novice", "Expert"): "new to programming but an AI expert. Use beginner-friendly programming analogies while freely discussing advanced AI patterns, agent architectures, and prompt engineering.",
        
        ("Beginner", "Novice"): "has basic coding knowledge but new to AI. Use simple programming examples and syntax, but explain AI concepts from first principles (what agents are, how they help).",
        ("Beginner", "Beginner"): "a beginner in both programming and AI. Use clear code examples and straightforward AI tool explanations. Balance simplicity with building understanding.",
        ("Beginner", "Intermediate"): "a beginner programmer comfortable with AI tools. Keep programming examples simple, but reference AI frameworks and concepts naturally.",
        ("Beginner", "Expert"): "a beginner programmer but an AI expert. Use basic programming explanations while discussing advanced AI agent patterns and architectures.",
        
        ("Intermediate", "Novice"): "an experienced programmer new to AI. Use standard programming terminology and patterns freely, but explain AI concepts from scratch.",
        ("Intermediate", "Beginner"): "an experienced programmer learning AI. Reference programming best practices normally while explaining AI tools and concepts clearly.",
        ("Intermediate", "Intermediate"): "experienced in both programming and AI. Use technical terminology naturally for both domains. Focus on practical integration.",
        ("Intermediate", "Expert"): "an experienced programmer and AI expert. Use standard programming terminology while diving deep into AI agent orchestration and advanced patterns.",
        
        ("Expert", "Novice"): "a senior developer new to AI. Discuss architectural patterns and advanced programming freely, but introduce AI concepts from first principles.",
        ("Expert", "Beginner"): "a senior developer learning AI. Use advanced programming terminology while explaining AI tools and workflows clearly.",
        ("Expert", "Intermediate"): "a senior developer comfortable with AI. Discuss architecture, performance, and trade-offs naturally while referencing AI frameworks and patterns.",
        ("Expert", "Expert"): "a senior developer and AI expert. Focus on advanced techniques, architectural decisions, production considerations, and cutting-edge AI patterns."
    }
    
    persona = personas.get((programming_level, ai_proficiency), personas[("Beginner", "Beginner")])
    
    instructions = f"""You are rewriting educational content for {persona}

CRITICAL RULES - READ CAREFULLY:
1. Write ONE seamless explanation - NOT separate sections for different skill levels
2. NEVER use these phrases: "Programming Experience:", "AI Proficiency:", "Here's the content, adapted for", "Okay, here's a personalized version", "tailored for"
3. NEVER create headers with skill level labels
4. NEVER start with meta-commentary about personalization
5. Start directly with the actual content
6. Use proper markdown formatting to match the original content structure

FORMATTING REQUIREMENTS (match original content style):
- Use ## for main section headings (Part A, Part B, etc.)
- Use ### for subsections  
- Use #### for minor headings
- Use **bold text** for emphasis and key terms
- Use numbered lists (1. 2. 3.) for sequential steps
- Use bullet points (-) for feature lists
- Include code blocks with ```bash or ```python when showing commands
- Preserve any special callouts or examples from original
- Keep the professional, educational tone

Your task:
- Rewrite the provided content to match this reader's background
- Maintain the SAME structure and formatting as the original (headings, lists, code blocks)
- Adjust explanations, terminology, and depth to suit the reader
- Add helpful context where needed, simplify where appropriate
- Keep all important information and examples from the original
- Length: Aim to match the original content length (typically 400-600 words for this type of content)

EXAMPLE OF GOOD OUTPUT (properly formatted):
\"\"\"
## Part A: What Is Spec-Kit Plus?

Before getting started, let's understand what Spec-Kit Plus actually is.

### The Architecture: Three Independent Layers

Spec-Kit Plus is a toolkit for specification-driven development with three components:

**1. The Framework** - This is the core toolkit providing:
- File templates for specs, plans, and tasks
- Directory structure enforcing the workflow
- Slash commands like `/sp.specify` and `/sp.plan`

**2. The AI Orchestrator** - Your chosen AI tool:
- Claude Code (recommended)
- Gemini CLI (alternative)
- Acts as your main collaborator

**3. Vertical Intelligence** - Specialized subagents for different tasks

### Installation Steps

**Step 1: Verify Python Version**

Check your Python installation:

\`\`\`bash
python --version
\`\`\`

You need Python 3.12 or higher.
\"\"\"

EXAMPLES OF BAD OUTPUT (DO NOT DO THESE):
❌ \"Okay, here's a personalized version for intermediate programmers with novice AI proficiency:\"
❌ \"Here's the content, adapted for you:\"
❌ \"Programming Experience (Intermediate): The framework provides...\"
❌ Plain text without any markdown formatting
❌ Missing code blocks, headings, or lists from the original

Write naturally for your specific reader using proper markdown formatting. Start directly with content.
"""
    
    return instructions
