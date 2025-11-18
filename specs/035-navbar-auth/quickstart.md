# Developer Quickstart: Navbar Authentication UI

**Feature**: 035-navbar-auth  
**Branch**: `035-navbar-auth`  
**Prerequisites**: Node.js 18+, npm/yarn

## Overview

This guide walks through testing the navbar authentication button feature locally. The feature adds a login/logout button between the GitHub link and theme toggle in the Docusaurus navbar.

## Setup

### 1. Install Dependencies

```bash
cd book-source
npm install
```

### 2. Start Development Server

```bash
npm start
```

Docusaurus will start at `http://localhost:3000`

---

## Manual Testing Guide

### Test 1: Guest User Login (P1 - Critical)

**Objective**: Verify login button appears and triggers authentication flow

**Steps**:
1. Open `http://localhost:3000` in browser
2. **Verify**: "Login" button appears in navbar between GitHub link and theme toggle (top-right)
3. Click "Login" button
4. **Verify**: DummyLoginWithProfile modal opens
5. Fill form:
   - Name: `Test User`
   - Email: `test@example.com`
   - Programming Experience: Select `Intermediate`
   - AI Proficiency: Select `Beginner`
6. Submit form
7. **Verify**: 
   - Modal closes
   - "Login" button replaced with user icon
   - Hover over icon shows "Logout" tooltip (if implemented)

**Expected Result**: ✅ Login flow completes, navbar shows authenticated state

**Acceptance Criteria** (from spec):
- ✅ FR-001: "Login" button displays when not authenticated
- ✅ FR-002: Button positioned between GitHub and theme toggle
- ✅ FR-003: Clicking opens DummyLoginWithProfile modal
- ✅ FR-004: Button changes to "Logout" after authentication
- ✅ FR-005: User icon displayed on logout button

---

### Test 2: Session Persistence (P1 - Critical)

**Objective**: Verify auth state persists across page navigation

**Prerequisite**: Complete Test 1 (logged in state)

**Steps**:
1. Navigate to different documentation page (e.g., `/docs/preface-agent-native`)
2. **Verify**: User icon still visible in navbar (not reverted to "Login")
3. Refresh page (F5 or Ctrl+R)
4. **Verify**: User icon still visible after refresh
5. Open browser DevTools → Application → Session Storage
6. **Verify**: `authSession` key exists with token and profile data

**Expected Result**: ✅ Auth state persists across navigation and refresh

**Acceptance Criteria** (from spec):
- ✅ FR-007: Auth state persists across page navigations
- ✅ SC-003: 100% persistence during browser session

---

### Test 3: Logout Functionality (P2 - Essential)

**Objective**: Verify logout clears session and returns to guest state

**Prerequisite**: Complete Test 1 (logged in state)

**Steps**:
1. Click user icon / "Logout" button
2. **Verify**: 
   - Button immediately changes to "Login"
   - No confirmation dialog (instant logout)
3. Open DevTools → Application → Session Storage
4. **Verify**: `authSession` key removed or null
5. Try to access personalized content (if available)
6. **Verify**: System prompts for login

**Expected Result**: ✅ Logout clears session, navbar returns to guest state

**Acceptance Criteria** (from spec):
- ✅ FR-006: Logout button clears authentication state
- ✅ User Story 2 scenarios: All 3 acceptance scenarios pass

---

### Test 4: Keyboard Accessibility (P3 - Quality)

**Objective**: Verify full keyboard navigation support (WCAG 2.1 AA)

**Steps**:
1. **Logout first** (if logged in)
2. Press `Tab` repeatedly until "Login" button is focused
3. **Verify**: Focus indicator visible (browser default outline)
4. Press `Enter` key
5. **Verify**: DummyLoginWithProfile modal opens
6. Press `Escape` key
7. **Verify**: Modal closes without logging in
8. Press `Tab` to focus "Login" button again
9. Press `Space` key (not Enter)
10. **Verify**: Modal opens (Space bar should also activate button)
11. Fill form and submit to log in
12. Press `Tab` to focus logout button (user icon)
13. Press `Enter` key
14. **Verify**: Logout completes

**Expected Result**: ✅ All functionality accessible via keyboard only (no mouse)

**Acceptance Criteria** (from spec):
- ✅ FR-015: Button keyboard accessible (Tab, Enter, Space)
- ✅ FR-016: Modal supports Escape to close
- ✅ SC-007: 100% keyboard-only completion rate

---

### Test 5: Screen Reader Accessibility (P3 - Quality)

**Objective**: Verify ARIA labels work with screen readers

**Prerequisites**: 
- NVDA (Windows) or VoiceOver (macOS) installed
- Basic screen reader familiarity

**Steps (NVDA example)**:
1. Start NVDA screen reader
2. Navigate to navbar (NVDA+Down Arrow)
3. **Verify**: NVDA announces "Login button, Login to access personalized content"
4. Activate button (Enter)
5. Fill form and submit
6. Navigate back to navbar logout button
7. **Verify**: NVDA announces "Logout button" (icon hidden from screen reader)

**Expected Result**: ✅ Screen reader announces correct button labels and roles

**Acceptance Criteria** (from spec):
- ✅ FR-017: ARIA labels for screen reader accessibility

---

### Test 6: Mobile Responsive Design (P3 - Quality)

**Objective**: Verify button works on mobile viewport sizes

**Steps**:
1. Open browser DevTools (F12)
2. Enable Device Toolbar (Ctrl+Shift+M)
3. Select `iPhone SE` (375px width)
4. **Verify**: "Login" button visible and not cut off
5. Tap "Login" button
6. **Verify**: Modal is readable and form fields accessible
7. Complete login flow
8. **Verify**: User icon visible and clickable

**Expected Result**: ✅ Navbar auth button functional on small screens

**Acceptance Criteria** (from spec):
- ✅ SC-005: Button visible and functional on all screen sizes (desktop, tablet, mobile)

---

### Test 7: Browser Session Timeout (Clarification)

**Objective**: Verify session clears when browser closes (not on tab close)

**Steps**:
1. Log in successfully
2. **Close browser tab** (not entire browser)
3. Open new tab, navigate to `http://localhost:3000`
4. **Verify**: Still logged in (sessionStorage persists across tabs in same window)
5. **Close entire browser** (all windows)
6. Reopen browser, navigate to `http://localhost:3000`
7. **Verify**: "Login" button shown (session cleared)

**Expected Result**: ✅ Session cleared on browser close, not tab close

**Acceptance Criteria** (from spec):
- ✅ FR-008: Session cleared when browser closes
- ✅ Edge case: Browser close behavior documented

---

### Test 8: Multi-Tab Independence (Clarification)

**Objective**: Verify logout in one tab doesn't affect other tabs

**Steps**:
1. Open `http://localhost:3000` in Tab 1, log in
2. Open new tab (Tab 2), navigate to `http://localhost:3000`
3. **Verify**: Tab 2 shows "Login" button (independent state)
4. Log in on Tab 2
5. Switch to Tab 1, click logout
6. **Verify**: Tab 1 shows "Login" button
7. Switch to Tab 2
8. **Verify**: Tab 2 still shows user icon (not logged out)

**Expected Result**: ✅ Each tab maintains independent session state

**Acceptance Criteria** (from spec):
- ✅ FR-010: No cross-tab synchronization
- ✅ Edge case: Multi-tab logout behavior clarified

---

## Automated Testing (Future)

This MVP uses manual testing only. Future improvements:

- **Unit Tests**: Test navbar component rendering (Jest + React Testing Library)
- **Integration Tests**: Test authService integration (Playwright)
- **Accessibility Tests**: Automated WCAG checks (axe-core, Lighthouse)

---

## Troubleshooting

### Issue: "Login" button not visible in navbar

**Possible Causes**:
1. Navbar component not swizzled correctly
2. React component not imported
3. CSS display:none hiding button

**Debug Steps**:
```bash
# Verify swizzled component exists
ls book-source/src/theme/Navbar/Content/

# Check browser console for React errors
# Open DevTools → Console tab
```

**Fix**: Re-run swizzle command:
```bash
npx docusaurus swizzle @docusaurus/theme-classic Navbar/Content --typescript
```

---

### Issue: Modal doesn't close after login

**Possible Cause**: `onSuccess` callback not wired to `setShowLoginModal(false)`

**Debug Steps**:
```typescript
// Add console.log in handleLoginSuccess
const handleLoginSuccess = () => {
  console.log('Login success callback triggered');
  setShowLoginModal(false);
  setIsAuthenticated(true);
};
```

**Fix**: Verify DummyLoginWithProfile calls `onSuccess` prop after `authService.saveSession()`

---

### Issue: Logout button doesn't clear session

**Possible Cause**: `authService.clearToken()` not called or sessionStorage not cleared

**Debug Steps**:
```typescript
// Add console.log in handleLogout
const handleLogout = () => {
  console.log('Before logout:', authService.isAuthenticated());
  authService.clearToken();
  console.log('After logout:', authService.isAuthenticated());
  setIsAuthenticated(false);
};
```

**Fix**: Verify `authService.clearToken()` removes `authSession` from sessionStorage

---

### Issue: Keyboard navigation doesn't work

**Possible Cause**: `<div>` used instead of `<button>`, or `tabindex="-1"` preventing focus

**Debug Steps**:
```bash
# Inspect element in DevTools
# Verify it's a <button> element, not <div role="button">
```

**Fix**: Use semantic HTML `<button type="button">`, not custom div

---

## Success Criteria Checklist

Run all tests above and verify:

- ✅ **SC-001**: Login button located within 3 seconds of page load
- ✅ **SC-002**: Complete login flow in under 30 seconds
- ✅ **SC-003**: Auth state persists across 100% of page navigations
- ✅ **SC-004**: No UI breakage or misalignment in navbar
- ✅ **SC-005**: Button functional on all screen sizes
- ✅ **SC-006**: User icon visible 100% of the time when logged in
- ✅ **SC-007**: Keyboard-only completion rate 100%

**If all checkboxes pass**: Feature is ready for `/sp.tasks` and implementation.

---

## Next Steps

After manual testing validates the design:
1. Run `/sp.tasks` to generate implementation task breakdown
2. Implement navbar swizzle + auth button component
3. Test against this quickstart guide
4. Submit PR with test evidence (screenshots/video)
