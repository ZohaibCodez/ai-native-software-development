/**
 * Summary Service - API client for streaming summary generation
 */

/**
 * Fetch summary with Server-Sent Events (SSE) streaming
 * 
 * @param pageId - Unique identifier for the content page
 * @param content - Full page content text
 * @param token - Authentication token
 * @param onChunk - Callback for each received chunk
 * @param onComplete - Callback when streaming completes
 * @param onError - Callback for errors
 */
export async function fetchSummary(
  pageId: string,
  content: string,
  token: string,
  onChunk: (chunk: string) => void,
  onComplete: () => void,
  onError: (error: string) => void
): Promise<void> {
  try {
    const apiUrl = process.env.NODE_ENV === 'production' 
      ? '/api/v1/summarize' 
      : 'http://localhost:8000/api/v1/summarize';

    const url = new URL(apiUrl, window.location.origin);
    url.searchParams.append('pageId', pageId);
    url.searchParams.append('token', token);

    const es = new EventSource(url.toString());

    es.onmessage = (event) => {
      try {
        const data = JSON.parse(event.data);

        if (data.error) {
          es.close();
          onError(data.error);
          return;
        }

        if (data.chunk) {
          onChunk(data.chunk);
        }

        if (data.done) {
          es.close();
          onComplete();
        }
      } catch (err) {
        console.error('Error parsing SSE data:', err);
        es.close();
        onError('Failed to parse server response');
      }
    };

    es.onerror = (error) => {
      console.error('EventSource error:', error);
      es.close();
      onError('Connection error. Please try again.');
    };

    // Timeout after 30 seconds
    const timeout = setTimeout(() => {
      es.close();
      onError('Request timeout. Please try again.');
    }, 30000);

    // Cleanup timeout on close
    es.addEventListener('close', () => {
      clearTimeout(timeout);
    });
  } catch (error) {
    console.error('Fetch summary error:', error);
    onError(error instanceof Error ? error.message : 'Unknown error occurred');
  }
}
