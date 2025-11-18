# Research: Navbar Authentication UI

**Feature**: 035-navbar-auth  
**Date**: 2025-11-18  
**Purpose**: Resolve technical unknowns and establish implementation patterns for navbar authentication button

## Research Tasks

### 1. Docusaurus Navbar Swizzling Pattern

**Question**: How do we safely override the Docusaurus navbar to add a custom authentication button without breaking existing functionality?

**Decision**: Use Docusaurus swizzle command to eject the Navbar component into `src/theme/Navbar/`

**Rationale**:
- Docusaurus Theme Override Pattern: Official method for customizing theme components
- Swizzling `Navbar/Content/index.tsx` provides access to navbar items array where we can inject the auth button
- Maintains upgrade path: Docusaurus preserves swizzled component structure across minor versions
- Type safety: Swizzled components retain full TypeScript definitions from @docusaurus/theme-common

**Alternatives Considered**:
- **Wrapper Component**: Rejected - Cannot control button positioning between specific navbar items (GitHub and theme toggle)
- **CSS Injection**: Rejected - Cannot add interactive elements, only styling
- **Plugin Hook**: Rejected - navbar.items in docusaurus.config.ts doesn't support conditional/dynamic items based on auth state

**Implementation Pattern**:
```bash
npx docusaurus swizzle @docusaurus/theme-classic Navbar/Content --typescript
```

This creates `src/theme/Navbar/Content/index.tsx` where we can:
1. Import authService and DummyLoginWithProfile
2. Add conditional rendering for login/logout button
3. Position button in navbar items array between GitHub link and ColorModeToggle

**References**:
- [Docusaurus Swizzling Guide](https://docusaurus.io/docs/swizzling)
- [Navbar Theme Component](https://github.com/facebook/docusaurus/tree/main/packages/docusaurus-theme-classic/src/theme/Navbar)

---

### 2. React Hook for Authentication State in Navbar

**Question**: How do we reactively update the navbar button when authentication state changes (login/logout)?

**Decision**: Use React.useState + React.useEffect to subscribe to auth state changes

**Rationale**:
- **useState for Re-renders**: Navbar button text/icon must update immediately when user logs in/out
- **useEffect on Mount**: Check initial auth state from sessionStorage via authService.isAuthenticated()
- **Event-Driven Updates**: authService already uses sessionStorage, which triggers storage events
- **No Global State Library Needed**: Single component subscription, no prop drilling, no Redux/Context overhead

**Alternatives Considered**:
- **Direct sessionStorage Reads**: Rejected - No reactivity, button wouldn't update until page refresh
- **Context API**: Rejected - Overkill for single component, adds complexity
- **Custom Event Bus**: Rejected - authService doesn't emit events, would require refactoring

**Implementation Pattern**:
```typescript
const [isAuthenticated, setIsAuthenticated] = useState(false);
const [userProfile, setUserProfile] = useState<UserProfile | null>(null);

useEffect(() => {
  // Check initial state
  setIsAuthenticated(authService.isAuthenticated());
  setUserProfile(authService.getProfile());
  
  // Listen for storage events (cross-component auth changes)
  const handleStorageChange = () => {
    setIsAuthenticated(authService.isAuthenticated());
    setUserProfile(authService.getProfile());
  };
  
  window.addEventListener('storage', handleStorageChange);
  return () => window.removeEventListener('storage', handleStorageChange);
}, []);
```

**References**:
- [React useState Hook](https://react.dev/reference/react/useState)
- [Storage Event API](https://developer.mozilla.org/en-US/docs/Web/API/Window/storage_event)

---

### 3. Keyboard Accessibility Pattern (Tab, Enter, Space, Escape)

**Question**: How do we implement WCAG 2.1 AA keyboard accessibility for the login/logout button and modal?

**Decision**: Use semantic HTML `<button>` + ARIA labels + DummyLoginWithProfile's existing keyboard support

**Rationale**:
- **Native Button Semantics**: `<button>` elements are keyboard-focusable by default (Tab navigation)
- **Enter/Space Activation**: Browser handles automatically for `<button>` onClick handlers
- **ARIA Labels**: `aria-label` provides screen reader context ("Login to access personalized content" / "Logout")
- **Escape Key**: DummyLoginWithProfile already implements Escape to close (from clarification session)
- **Focus Management**: Modal should trap focus when open (prevent Tab escaping modal)

**Alternatives Considered**:
- **Custom Keyboard Handlers**: Rejected - Reinventing browser accessibility, error-prone
- **div with role="button"**: Rejected - Requires manual keydown handlers for Space/Enter
- **Link (`<a>`) Element**: Rejected - Semantically incorrect (button triggers action, link navigates)

**Implementation Pattern**:
```tsx
// Login button (not authenticated)
<button
  className={styles.navbarAuthButton}
  onClick={() => setShowLoginModal(true)}
  aria-label="Login to access personalized content"
  type="button"
>
  Login
</button>

// Logout button (authenticated)
<button
  className={styles.navbarAuthButton}
  onClick={handleLogout}
  aria-label="Logout"
  type="button"
>
  <UserIcon aria-hidden="true" />
  <span className="sr-only">Logout</span>
</button>
```

**WCAG 2.1 Compliance Checklist**:
- ✅ 2.1.1 Keyboard (Level A): All functionality via keyboard
- ✅ 2.1.2 No Keyboard Trap (Level A): Focus can move away from modal (Escape)
- ✅ 2.4.7 Focus Visible (Level AA): Browser default focus indicators
- ✅ 4.1.2 Name, Role, Value (Level A): ARIA labels + semantic button

**References**:
- [WCAG 2.1 Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)
- [ARIA Authoring Practices - Button](https://www.w3.org/WAI/ARIA/apg/patterns/button/)
- [WebAIM Keyboard Accessibility](https://webaim.org/techniques/keyboard/)

---

### 4. Icon Asset for Authenticated State

**Question**: What icon should we use for the generic avatar/user icon in the logout button?

**Decision**: Use Font Awesome's `fa-user-circle` icon (already loaded in project)

**Rationale**:
- **Already Available**: Font Awesome 6.5.1 is loaded in `docusaurus.config.ts` headTags
- **Generic Avatar**: `fa-user-circle` is a standard user profile icon (circle with person silhouette)
- **Accessibility**: Icon can be aria-hidden with adjacent sr-only text for screen readers
- **Scalability**: SVG icon scales to any navbar size (desktop/tablet/mobile)
- **Consistency**: Matches existing icon usage in footer social links

**Alternatives Considered**:
- **Custom SVG**: Rejected - Adds asset management overhead, no visual benefit
- **Emoji**: Rejected - Inconsistent rendering across platforms, accessibility issues
- **Initials Circle**: Rejected - Requires dynamic generation based on user name (clarification chose icon-only)

**Implementation Pattern**:
```tsx
<button className={styles.navbarAuthButton} onClick={handleLogout} aria-label="Logout">
  <i className="fa-solid fa-user-circle" aria-hidden="true"></i>
  <span className="sr-only">Logout</span>
</button>
```

**CSS for sr-only** (screen reader only text):
```css
.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}
```

**References**:
- [Font Awesome Icons](https://fontawesome.com/icons/user-circle)
- [WebAIM: Invisible Content for Screen Readers](https://webaim.org/techniques/css/invisiblecontent/)

---

### 5. DummyLoginWithProfile Modal Trigger Pattern

**Question**: How do we trigger the existing DummyLoginWithProfile modal from the navbar button without creating tight coupling?

**Decision**: Use React state to control modal visibility + pass callback to handle successful login

**Rationale**:
- **Controlled Component Pattern**: Navbar owns modal visibility state (`showLoginModal`)
- **Callback for Success**: DummyLoginWithProfile calls `onLoginSuccess` callback after authService.saveSession()
- **No Prop Drilling**: Modal state is local to Navbar component
- **Existing Modal Logic**: DummyLoginWithProfile already handles form validation, authService integration, error states

**Alternatives Considered**:
- **Global Modal Manager**: Rejected - Overkill for single modal trigger, adds complexity
- **Portal to Body**: Not needed - DummyLoginWithProfile likely already uses React Portal for z-index
- **URL-Based Modal**: Rejected - Adds routing complexity, not RESTful (login is action, not route)

**Implementation Pattern**:
```tsx
const [showLoginModal, setShowLoginModal] = useState(false);

const handleLoginSuccess = () => {
  setShowLoginModal(false);
  // Force re-render to update button (auth state in authService)
  setIsAuthenticated(true);
  setUserProfile(authService.getProfile());
};

return (
  <>
    {!isAuthenticated && (
      <button onClick={() => setShowLoginModal(true)}>Login</button>
    )}
    
    {showLoginModal && (
      <DummyLoginWithProfile 
        onClose={() => setShowLoginModal(false)}
        onSuccess={handleLoginSuccess}
      />
    )}
  </>
);
```

**Assumption**: DummyLoginWithProfile accepts `onClose` and `onSuccess` props. If not, will need minor refactor to add these callbacks.

**References**:
- [React Controlled Components](https://react.dev/learn/sharing-state-between-components)
- Existing: `book-source/src/components/ContentTabs/DummyLoginWithProfile.tsx`

---

### 6. Positioning Between GitHub Link and Theme Toggle

**Question**: How do we ensure the auth button appears exactly between the GitHub link and theme toggle in the navbar?

**Decision**: Inject auth button into navbar items array at index after GitHub link, before ColorModeToggle

**Rationale**:
- **Navbar Items Array**: Docusaurus navbar renders items sequentially from items array
- **GitHub Link**: Position="right", appears before theme toggle
- **ColorModeToggle**: Always last item on right side of navbar
- **Array Splice**: Insert auth button at `items.length - 1` (before last item = theme toggle)

**Alternatives Considered**:
- **CSS Order**: Rejected - Cannot override Flexbox order without breaking responsive layout
- **Hardcoded Index**: Rejected - Fragile if navbar config changes
- **Find by Type**: Better approach - search for ColorModeToggle component in items array

**Implementation Pattern**:
```tsx
// In Navbar/Content/index.tsx
const renderNavbarItems = () => {
  const items = /* original navbar items */;
  const authButton = (
    <div className="navbar__item" key="auth-button">
      {isAuthenticated ? (
        <button onClick={handleLogout} aria-label="Logout">
          <i className="fa-solid fa-user-circle" aria-hidden="true"></i>
        </button>
      ) : (
        <button onClick={() => setShowLoginModal(true)} aria-label="Login">
          Login
        </button>
      )}
    </div>
  );
  
  // Find ColorModeToggle index
  const toggleIndex = items.findIndex(item => 
    item.type?.name === 'ColorModeToggle' || item.key === 'colorMode'
  );
  
  // Insert before toggle (or at end if not found)
  const insertIndex = toggleIndex !== -1 ? toggleIndex : items.length;
  items.splice(insertIndex, 0, authButton);
  
  return items;
};
```

**Edge Case**: If ColorModeToggle not found, append to end (defensive fallback).

**References**:
- Docusaurus Navbar source: `@docusaurus/theme-classic/src/theme/Navbar/Content/index.tsx`

---

## Summary of Decisions

| Research Area | Decision | Key Rationale |
|--------------|----------|---------------|
| Navbar Customization | Swizzle Navbar/Content component | Official Docusaurus pattern, maintains upgrade path |
| State Management | React useState + useEffect | Simple reactive updates, no global state needed |
| Keyboard Accessibility | Semantic `<button>` + ARIA labels | WCAG 2.1 AA compliance, browser-native support |
| Icon Asset | Font Awesome fa-user-circle | Already loaded, standard avatar icon |
| Modal Trigger | Controlled component pattern | Clean callback interface, no tight coupling |
| Button Positioning | Array splice before ColorModeToggle | Deterministic placement, handles config changes |

**All NEEDS CLARIFICATION items from Technical Context resolved.**

## Next Steps (Phase 1)

1. Create data-model.md documenting AuthState and UserProfile entities (reference existing types)
2. Generate quickstart.md with developer testing instructions
3. No API contracts needed (UI-only feature)
4. Proceed to implementation tasks
