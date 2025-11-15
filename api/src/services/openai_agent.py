"""
OpenAI Agent Service - integrates with OpenAI Agents SDK for summary generation
"""
import os
import logging
from typing import AsyncGenerator
from agents import Runner, Agent, OpenAIChatCompletionsModel, SQLiteSession
from openai import AsyncOpenAI
from dotenv import load_dotenv, find_dotenv

load_dotenv(find_dotenv())

logger = logging.getLogger(__name__)

OPENAI_API_KEY = os.getenv("OPENAI_API_KEY")

external_client = AsyncOpenAI(
    base_url="https://generativelanguage.googleapis.com/v1beta/openai/",
    api_key=os.getenv("GOOGLE_API_KEY")
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
    
    instructions = f"""You are an expert content summarizer. Your task is to create a clear, 
    concise summary of the provided text.
    
    Requirements:
    - Target length: {target_word_count} words (±10%)
    - Maintain key concepts and insights
    - Use clear, professional language
    - Preserve important technical details
    - Do not add information not present in the original text
    - Structure: Brief overview, main points, key takeaways
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
            # Log all events to debug
            logger.debug(f"Event type: {event.type}, Event: {event}")
            
            # Filter for text delta events (streaming text chunks)
            if event.type == "raw_response_event":
                # Check if it has delta content
                if hasattr(event, 'data') and hasattr(event.data, 'delta'):
                    if event.data.delta:
                        logger.debug(f"Yielding chunk: {event.data.delta[:50]}...")
                        yield event.data.delta
        
        logger.info(f"Summary generation completed for page_id: {page_id}")
        
    except Exception as e:
        logger.error(f"Error generating summary for page_id {page_id}: {str(e)}")
        raise
