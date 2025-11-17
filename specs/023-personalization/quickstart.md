# Quickstart: Personalization Feature Development

**Feature**: 023-personalization | **Date**: 2025-11-17
**Prerequisites**: Node.js 18+, Python 3.11+, Git

## Overview

This guide helps developers set up and work with the personalization feature that generates tailored educational content based on user proficiency levels (programming + AI).

---

## Architecture Quick Reference

**Frontend** (Docusaurus + React):
- `PersonalizationTab.tsx` - Main UI component
- `DummyLoginWithProfile.tsx` - Enhanced login with profiling form
- `authService.ts` - Session management (stores token + profile)
- `personalizationService.ts` - SSE client for streaming

**Backend** (FastAPI):
- `/api/v1/auth/dummy-login-with-profile` - Auth + profiling endpoint
- `/api/v1/personalize` - Personalization streaming endpoint (SSE)
- `openai_agent.py` - **Separate** Content Personalizer agent

**Key Pattern**: Mirrors existing summarization architecture (SummaryTab → PersonalizationTab, summary agent → personalizer agent)

---

## Local Development Setup

### 1. Backend Setup (FastAPI)

```bash
# Navigate to API directory
cd api

# Create virtual environment (if not exists)
python -m venv venv

# Activate (Windows)
venv\Scripts\activate
# Activate (macOS/Linux)
source venv/bin/activate

# Install dependencies
pip install -r requirements.txt

# Set environment variables
copy .env.example .env  # Windows
cp .env.example .env    # macOS/Linux

# Edit .env and add your API key
# OPENAI_API_KEY=your-key-here
# or
# GOOGLE_API_KEY=your-gemini-key-here

# Run backend server
uvicorn src.main:app --reload --port 8000

# Backend now running at http://localhost:8000
# API docs at http://localhost:8000/docs
```

### 2. Frontend Setup (Docusaurus)

```bash
# Navigate to book source directory
cd book-source

# Install dependencies
npm install

# Run development server
npm start

# Frontend now running at http://localhost:3000
```

### 3. Verify Setup

1. Open http://localhost:3000
2. Navigate to any content page
3. Click "Personalization" tab
4. See login form with 4 fields:
   - Name
   - Email
   - Programming Experience (dropdown: Novice/Beginner/Intermediate/Expert)
   - AI Proficiency (dropdown: Novice/Beginner/Intermediate/Expert)
5. Complete form and click "Login (Demo)"
6. Click "Generate Personalized Content"
7. Watch streaming personalized content appear

---

## Key Files to Modify

### Frontend Changes

#### New Files:
```
book-source/src/components/ContentTabs/
├── PersonalizationTab.tsx          # Main personalization UI
└── DummyLoginWithProfile.tsx       # Enhanced login form

book-source/src/services/
└── personalizationService.ts       # SSE client

book-source/tests/components/
├── PersonalizationTab.test.tsx
└── DummyLoginWithProfile.test.tsx
```

####Modified Files:
```
book-source/src/components/ContentTabs/
├── index.tsx                       # Add Personalization tab
├── SummaryTab.tsx                  # Use DummyLoginWithProfile
└── styles.module.css               # Add personalization styles

book-source/src/services/
└── authService.ts                  # Store profile with token

book-source/src/types/
└── contentTabs.ts                  # Add types: UserProfile, PersonalizationCacheEntry
```

### Backend Changes

#### New Files:
```
api/src/routers/
└── personalize.py                  # /personalize endpoint

api/tests/
└── test_personalize.py             # Personalization tests
```

#### Modified Files:
```
api/src/
├── main.py                         # Register personalization router

api/src/routers/
└── auth.py                         # Add /dummy-login-with-profile

api/src/services/
├── openai_agent.py                 # Add generate_personalized_content()
└── __init__.py                     # Export new function

api/src/models/
└── schemas.py                      # Add UserProfile, PersonalizationRequest

api/tests/
└── test_openai_agent.py            # Test personalization agent
```

---

## Testing Strategy

### Manual Testing Checklist

**Login & Profiling**:
- [ ] Login form validates all 4 fields (name, email, programming, AI)
- [ ] Inline error messages appear for missing fields
- [ ] Email validation works (invalid formats rejected)
- [ ] Proficiency dropdowns show all 4 options
- [ ] Session token + profile stored after successful login
- [ ] Navigating away and back doesn't require re-login

**Personalization Generation**:
- [ ] "Generate" button disabled during streaming
- [ ] Button shows "Generating..." text while active
- [ ] Content streams progressively (not all at once)
- [ ] Auto-scroll works during streaming
- [ ] Different proficiency levels produce different content
- [ ] Cache indicator shows when content is from cache

**Caching**:
- [ ] First generation takes 2-5 seconds
- [ ] Second visit to same page loads instantly (<500ms)
- [ ] Changing proficiency levels generates new content
- [ ] Cache key format correct: `personalized_{pageId}_{Level-Level}`

**Error Handling**:
- [ ] Streaming failure preserves partial content
- [ ] Error message displayed clearly
- [ ] Retry button appears after error
- [ ] Session expiration shows notification
- [ ] Can view current content after expiration
- [ ] New requests require re-login after expiration

### Automated Tests

```bash
# Frontend tests
cd book-source
npm test -- PersonalizationTab
npm test -- DummyLoginWithProfile
npm test -- personalizationService

# Backend tests
cd api
pytest tests/test_personalize.py -v
pytest tests/test_openai_agent.py::test_generate_personalized_content -v
```

---

## Common Issues & Troubleshooting

### Issue: "OPENAI_API_KEY not set"
**Solution**: Add API key to `api/.env` file:
```
OPENAI_API_KEY=sk-...
```

### Issue: CORS errors when calling /personalize
**Check**: 
1. Backend running on port 8000?
2. Frontend `personalizationService.ts` uses correct URL:
   ```typescript
   const apiUrl = process.env.NODE_ENV === 'production' 
     ? '/api/v1/personalize' 
     : 'http://localhost:8000/api/v1/personalize';
   ```

### Issue: Streaming never starts
**Debug**:
1. Check browser console for EventSource errors
2. Verify `/personalize` endpoint returns `text/event-stream`
3. Check backend logs: `uvicorn` should show SSE connection
4. Ensure all query params sent (pageId, content, token, programmingLevel, aiLevel)

### Issue: Cache not working
**Check**:
1. SessionStorage enabled in browser?
2. Cache key format correct? Should be: `personalized_{pageId}_{Level-Level}`
3. Profile fingerprint constructed correctly in `authService`?

### Issue: Content same for all proficiency levels
**Debug**:
1. Verify `programmingLevel` and `aiLevel` passed to backend
2. Check `build_personalization_instructions()` in `openai_agent.py`
3. Confirm separate Agent instance created (not reusing summary agent)
4. Review agent logs for instruction details

### Issue: Login form doesn't validate
**Check**:
1. All 4 fields marked as `required` in HTML?
2. Form submission handler prevents default?
3. Validation logic in `DummyLoginWithProfile.tsx` working?
4. Inline error messages displaying correctly?

---

## API Reference Quick Links

- **OpenAPI Spec**: `specs/023-personalization/contracts/personalization-api.yaml`
- **Data Model**: `specs/023-personalization/data-model.md`
- **Research Decisions**: `specs/023-personalization/research.md`

## Development Workflow

1. **Before coding**: Read `data-model.md` and `contracts/personalization-api.yaml`
2. **Start backend first**: API must be running for frontend testing
3. **Check browser console**: Errors often show there first
4. **Use API docs**: http://localhost:8000/docs for manual endpoint testing
5. **Test incrementally**: Don't build everything at once
   - Phase 1: Enhanced login form
   - Phase 2: Backend endpoints
   - Phase 3: PersonalizationTab UI
   - Phase 4: Streaming integration
   - Phase 5: Caching

---

## Next Steps

After completing local development:
1. Run full test suite (frontend + backend)
2. Verify all acceptance criteria from `spec.md`
3. Check performance metrics (SC-001 through SC-007)
4. Review code against constitution principles
5. Create PR with descriptive title and spec reference
