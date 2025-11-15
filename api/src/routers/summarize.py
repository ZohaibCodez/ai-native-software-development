"""
Summarization API endpoints
"""
import logging
from fastapi import APIRouter, Query, HTTPException
from fastapi.responses import StreamingResponse
from src.services import openai_agent
from src.models.schemas import ErrorResponse
import json

logger = logging.getLogger(__name__)

router = APIRouter()


@router.get("/summarize")
async def summarize_content(
    pageId: str = Query(..., description="Unique identifier for the content page"),
    token: str = Query(..., description="Authentication token"),
):
    """
    Generate streaming summary for content page using Server-Sent Events (SSE).
    
    Validates authentication token, retrieves content, and streams AI-generated summary.
    """
    logger.info(f"Summarize request for pageId: {pageId}")
    
    # Auth token validation (dummy implementation)
    if not token or token.strip() == "":
        logger.warning(f"Missing auth token for pageId: {pageId}")
        raise HTTPException(status_code=401, detail="Missing or invalid authentication token")
    
    # For dummy implementation, accept any token
    # Future: Implement proper JWT validation with SSO
    if not token.startswith("dummy_token"):
        logger.warning(f"Invalid token format for pageId: {pageId}")
        # Still accept for demo purposes
        pass
    
    # PageId validation
    if not pageId or len(pageId) < 3:
        logger.warning(f"Invalid pageId: {pageId}")
        raise HTTPException(status_code=400, detail="Invalid page identifier")
    
    # In production, fetch content from database or file system
    # For now, use placeholder content
    content = f"This is sample content for page: {pageId}. " * 50
    
    async def event_stream():
        """Generate Server-Sent Events stream"""
        try:
            # Stream summary chunks
            async for chunk in openai_agent.generate_summary(content, pageId):
                # Format as SSE
                event_data = json.dumps({"chunk": chunk, "done": False})
                yield f"data: {event_data}\n\n"
            
            # Send completion event
            completion_data = json.dumps({"chunk": "", "done": True})
            yield f"data: {completion_data}\n\n"
            
        except Exception as e:
            logger.error(f"Error in event_stream for pageId {pageId}: {str(e)}")
            error_data = json.dumps({"chunk": "", "done": True, "error": str(e)})
            yield f"data: {error_data}\n\n"
    
    return StreamingResponse(
        event_stream(),
        media_type="text/event-stream",
        headers={
            "Cache-Control": "no-cache",
            "Connection": "keep-alive",
            "X-Accel-Buffering": "no",  # Disable nginx buffering
        }
    )
