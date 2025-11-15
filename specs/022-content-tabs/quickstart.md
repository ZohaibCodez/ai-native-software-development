# Quickstart Guide: Interactive Content Tabs with AI Summarization

**Feature**: 022-content-tabs  
**Last Updated**: 2025-11-15

## Overview

This guide helps developers quickly set up and test the interactive content tabs feature. Follow these steps to run the feature locally and verify it works correctly.

---

## Prerequisites

**Required**:
- Node.js 18+ and npm/pnpm
- Python 3.11+
- OpenAI API key (for summary generation)
- Git (for cloning repository)

**Recommended**:
- VS Code with TypeScript and Python extensions
- Chrome or Firefox browser (for testing)

---

## Quick Start (5 minutes)

### 1. Clone & Install

```bash
# Clone repository (if not already cloned)
git clone https://github.com/ZohaibCodez/ai-native-software-development.git
cd ai-native-software-development

# Checkout feature branch
git checkout 022-content-tabs

# Install frontend dependencies
cd book-source
pnpm install

# Install backend dependencies
cd ../api
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate
pip install -r requirements.txt
```

### 2. Configure Environment

```bash
# Backend configuration
cd api
cp .env.example .env
# Edit .env and add your OpenAI API key:
# OPENAI_API_KEY=sk-...
```

### 3. Start Services

**Terminal 1 - Backend**:
```bash
cd api
source venv/bin/activate  # On Windows: venv\Scripts\activate
uvicorn src.main:app --reload --port 8000
```

**Terminal 2 - Frontend**:
```bash
cd book-source
pnpm start
```

### 4. Test the Feature

1. Open browser: http://localhost:3000
2. Navigate to any content page (e.g., "Introducing AI-Driven Development")
3. Verify three tabs appear at the top: **Original**, **Summary**, **Personalized**
4. Click **Summary** tab:
   - Should redirect to dummy login page (or show summary if already "logged in")
   - Click "Login" button on dummy page
   - Should return to content page with Summary tab active
   - Summary should stream in progressively with auto-scroll
5. Verify cached behavior:
   - Switch to Original tab, then back to Summary
   - Summary should appear instantly (no API call)
6. Click **Personalized** tab:
   - Should show "Feature coming soon" placeholder

---

## Development Workflow

### Project Structure

```
├── book-source/              # Docusaurus frontend
│   ├── src/
│   │   ├── components/
│   │   │   └── ContentTabs/  # Tab UI components
│   │   ├── services/         # Auth, summary, cache services
│   │   └── theme/            # Docusaurus theme overrides
│   └── tests/                # Frontend tests
│
└── api/                      # FastAPI backend
    ├── src/
    │   ├── main.py           # FastAPI app entry
    │   ├── routers/
    │   │   └── summarize.py  # Summary endpoint
    │   └── services/
    │       └── openai_agent.py  # OpenAI integration
    └── tests/                # Backend tests
```

### Running Tests

**Frontend Tests**:
```bash
cd book-source
pnpm test                    # Run all tests
pnpm test:watch              # Watch mode
pnpm test:coverage           # With coverage report
```

**Backend Tests**:
```bash
cd api
pytest                       # Run all tests
pytest -v                    # Verbose output
pytest --cov=src             # With coverage
```

### Making Changes

**Frontend (Tab UI)**:
1. Edit components in `book-source/src/components/ContentTabs/`
2. Hot reload is enabled - changes appear instantly
3. Run tests to verify: `pnpm test`

**Backend (Summary Logic)**:
1. Edit services in `api/src/services/` or routers in `api/src/routers/`
2. FastAPI auto-reloads with `--reload` flag
3. Test endpoint: `curl http://localhost:8000/api/v1/health`
4. Run tests: `pytest`

**Styling**:
1. Edit `book-source/src/components/ContentTabs/styles.module.css`
2. Preview changes in browser (hot reload)
3. Test mobile responsive: Browser DevTools → Toggle device toolbar

---

## Common Tasks

### Adding a New Tab

1. Create new component: `book-source/src/components/ContentTabs/NewTab.tsx`
2. Add tab to TabBar options in `TabBar.tsx`
3. Add tab rendering logic in `ContentTabs/index.tsx`
4. Add tests in `tests/components/ContentTabs.test.tsx`

### Modifying Summary Prompt

1. Edit prompt in `api/src/services/openai_agent.py`
2. Update `SUMMARY_PROMPT` constant
3. Test with: `curl -N http://localhost:8000/api/v1/summarize?pageId=test-page`
4. Verify output length (150-500 words)

### Changing Cache Strategy

1. Edit `book-source/src/services/cacheService.ts`
2. Current: sessionStorage → Future: API calls to backend
3. Interface stays the same: `getCachedSummary()`, `cacheSummary()`
4. Update tests to match new implementation

### Adding Authentication (SSO)

1. Install SSO SDK (e.g., `npm install @auth0/auth0-react`)
2. Replace dummy login in `book-source/src/services/authService.ts`
3. Update backend token validation in `api/src/routers/auth.py`
4. Update tests to mock SSO responses

---

## Troubleshooting

### Frontend Issues

**Tabs not appearing**:
- Verify swizzling worked: Check `book-source/src/theme/DocItem/Content/index.tsx` exists
- Check browser console for errors
- Verify component import: `import { ContentTabs } from '@site/src/components/ContentTabs'`

**Summary not loading**:
- Check backend is running: `curl http://localhost:8000/api/v1/health`
- Verify API URL in `book-source/src/services/summaryService.ts`
- Check browser console Network tab for failed requests
- Verify auth token in sessionStorage: `sessionStorage.getItem('authToken')`

**Styling broken**:
- Clear browser cache and hard refresh (Ctrl+Shift+R)
- Verify CSS module import: `import styles from './styles.module.css'`
- Check Docusaurus build logs for CSS errors

### Backend Issues

**Server won't start**:
- Verify virtual environment activated: `which python` should show venv path
- Check all dependencies installed: `pip list`
- Verify port 8000 not in use: `lsof -i :8000` (Unix) or `netstat -ano | findstr :8000` (Windows)

**OpenAI API errors**:
- Verify API key set: `echo $OPENAI_API_KEY`
- Check API key valid: https://platform.openai.com/api-keys
- Review rate limits: https://platform.openai.com/account/rate-limits
- Check error logs in terminal

**Streaming not working**:
- Verify SSE support: Open http://localhost:8000/api/v1/summarize?pageId=test-page directly
- Check CORS headers in `api/src/main.py`
- Browser DevTools → Network → Check event-stream content type
- Try different browser (Firefox has better SSE debugging)

### Cache Issues

**Summaries not cached**:
- Check sessionStorage: Browser DevTools → Application → Session Storage
- Verify cache key format: `summary_{pageId}`
- Check cache service calls: Add console.log in `cacheService.ts`

**Stale cache**:
- Clear sessionStorage: `sessionStorage.clear()` in browser console
- Or close all browser tabs (session ends)
- Future: Implement cache invalidation based on content hash

---

## Performance Optimization

### Frontend

**Bundle size**:
```bash
cd book-source
pnpm build
pnpm run analyze  # Analyze bundle size
```

**Lazy loading**:
- Summary component already lazy-loaded (only renders when tab active)
- Consider code-splitting for large dependencies

### Backend

**Response time**:
- Monitor streaming start time (should be <3s per success criteria)
- Use `time` command: `time curl -N http://localhost:8000/api/v1/summarize?pageId=test`
- Check OpenAI API latency in logs

**Rate limiting** (future):
```python
# Add to api/src/main.py
from slowapi import Limiter
limiter = Limiter(key_func=get_remote_address)

@app.get("/api/v1/summarize")
@limiter.limit("10/minute")
async def summarize(...):
    ...
```

---

## Deployment Checklist

**Before deploying to production**:

- [ ] Remove dummy authentication, implement SSO
- [ ] Set production OpenAI API key in environment variables
- [ ] Configure CORS for production domain
- [ ] Enable rate limiting on backend
- [ ] Set up error monitoring (Sentry, LogRocket)
- [ ] Test on multiple browsers (Chrome, Firefox, Safari, Edge)
- [ ] Test mobile responsive design
- [ ] Run full test suite: `pnpm test && pytest`
- [ ] Build production bundle: `pnpm build`
- [ ] Verify bundle size acceptable (<500KB added)
- [ ] Set up backend health monitoring
- [ ] Configure caching headers for static assets
- [ ] Test streaming with poor network conditions
- [ ] Verify session storage limits won't be exceeded (typical: 5-10MB)

---

## Next Steps

1. **Implement**: Follow `tasks.md` for detailed implementation tasks
2. **Test**: Write tests as defined in acceptance criteria
3. **Review**: Code review checklist in `.github/pull_request_template.md`
4. **Deploy**: Follow deployment guide in `docs/deployment.md`

---

## Useful Commands Reference

```bash
# Frontend
pnpm start                 # Start dev server
pnpm build                 # Production build
pnpm test                  # Run tests
pnpm run swizzle           # Customize Docusaurus theme
pnpm run clear             # Clear cache

# Backend
uvicorn src.main:app --reload  # Start with auto-reload
pytest -v                  # Run tests verbosely
pytest --cov=src           # Run with coverage
python -m pdb src/main.py  # Debug mode

# Both
docker-compose up          # Start all services (future)
```

---

## Support & Resources

- **Spec**: `specs/022-content-tabs/spec.md`
- **Plan**: `specs/022-content-tabs/plan.md`
- **Data Model**: `specs/022-content-tabs/data-model.md`
- **API Docs**: `specs/022-content-tabs/contracts/summarize-api.yaml`
- **Research**: `specs/022-content-tabs/research.md`
- **Issues**: [GitHub Issues](https://github.com/ZohaibCodez/ai-native-software-development/issues)
- **Docusaurus Docs**: https://docusaurus.io/docs
- **FastAPI Docs**: https://fastapi.tiangolo.com
- **OpenAI SDK**: https://platform.openai.com/docs
