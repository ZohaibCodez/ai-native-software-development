/**
 * Navbar Content Component - Swizzled from Docusaurus theme
 * Feature: 035-navbar-auth
 * 
 * This component has been swizzled (ejected) from @docusaurus/theme-classic
 * to add authentication UI (login/logout button) to the navbar.
 * 
 * Swizzling Pattern:
 * - Command used: npx docusaurus swizzle @docusaurus/theme-classic Navbar/Content --typescript --danger --eject
 * - Location: book-source/src/theme/Navbar/Content/index.tsx
 * - Reason: Need full control over navbar item positioning to place auth button between GitHub and ColorModeToggle
 * 
 * Authentication State Management:
 * - Uses existing authService for session management (sessionStorage)
 * - React hooks (useState, useEffect) manage local component state
 * - Storage event listener syncs auth state across tabs/components
 * - No new dependencies: reuses DummyLoginWithProfile modal and authService
 * 
 * Button Positioning Logic:
 * - Login button: Rendered before ColorModeToggle when NOT authenticated
 * - Logout button: Rendered before ColorModeToggle when authenticated
 * - Positioning is declarative (conditional rendering) rather than array manipulation
 */
import React, {type ReactNode, useState, useEffect} from 'react';
import clsx from 'clsx';
import {
  useThemeConfig,
  ErrorCauseBoundary,
  ThemeClassNames,
} from '@docusaurus/theme-common';
import {
  splitNavbarItems,
  useNavbarMobileSidebar,
} from '@docusaurus/theme-common/internal';
import NavbarItem, {type Props as NavbarItemConfig} from '@theme/NavbarItem';
import NavbarColorModeToggle from '@theme/Navbar/ColorModeToggle';
import SearchBar from '@theme/SearchBar';
import NavbarMobileSidebarToggle from '@theme/Navbar/MobileSidebar/Toggle';
import NavbarLogo from '@theme/Navbar/Logo';
import NavbarSearch from '@theme/Navbar/Search';
import {useLocation} from '@docusaurus/router';
// T004: Import authService and types
import * as authService from '../../../services/authService';
import {UserProfile} from '../../../types/contentTabs';

import styles from './styles.module.css';

function useNavbarItems() {
  // TODO temporary casting until ThemeConfig type is improved
  return useThemeConfig().navbar.items as NavbarItemConfig[];
}

function NavbarItems({items}: {items: NavbarItemConfig[]}): ReactNode {
  return (
    <>
      {items.map((item, i) => (
        <ErrorCauseBoundary
          key={i}
          onError={(error) =>
            new Error(
              `A theme navbar item failed to render.
Please double-check the following navbar item (themeConfig.navbar.items) of your Docusaurus config:
${JSON.stringify(item, null, 2)}`,
              {cause: error},
            )
          }>
          <NavbarItem {...item} />
        </ErrorCauseBoundary>
      ))}
    </>
  );
}

function NavbarContentLayout({
  left,
  right,
}: {
  left: ReactNode;
  right: ReactNode;
}) {
  return (
    <div className="navbar__inner">
      <div
        className={clsx(
          ThemeClassNames.layout.navbar.containerLeft,
          'navbar__items',
        )}>
        {left}
      </div>
      <div
        className={clsx(
          ThemeClassNames.layout.navbar.containerRight,
          'navbar__items navbar__items--right',
        )}>
        {right}
      </div>
    </div>
  );
}

export default function NavbarContent(): ReactNode {
  const mobileSidebar = useNavbarMobileSidebar();
  const location = useLocation();

  // T005: Add React state hooks for authentication state
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userProfile, setUserProfile] = useState<UserProfile | null>(null);

  // T006: Implement useEffect hook to check initial auth state on component mount
  // T007: Add storage event listener to sync auth state changes
  useEffect(() => {
    // Check initial auth state
    const checkAuthState = () => {
      const authenticated = authService.isAuthenticated();
      console.log('🔐 Navbar auth check:', authenticated);
      setIsAuthenticated(authenticated);
      if (authenticated) {
        const session = authService.getSession();
        setUserProfile(session?.profile || null);
      } else {
        setUserProfile(null);
      }
    };

    // Initial check
    checkAuthState();

    // Listen for storage events (auth state changes in other components/tabs)
    const handleStorageChange = (e: StorageEvent) => {
      // Only respond to auth-related changes in sessionStorage
      if (e.key === 'authToken' || e.key === 'userProfile' || e.key === null) {
        console.log('🔐 Storage event detected, re-checking auth');
        checkAuthState();
      }
    };

    // Custom event for same-tab logout (storage events don't fire in same tab)
    const handleAuthChange = () => {
      console.log('🔐 Auth state changed event, re-checking auth');
      checkAuthState();
    };

    window.addEventListener('storage', handleStorageChange);
    window.addEventListener('authStateChanged', handleAuthChange);
    
    return () => {
      window.removeEventListener('storage', handleStorageChange);
      window.removeEventListener('authStateChanged', handleAuthChange);
    };
  }, [location.pathname]); // Re-check on navigation

  // Handle logout: clear auth state and dispatch event
  const handleLogout = () => {
    authService.clearToken();
    setIsAuthenticated(false);
    setUserProfile(null);
    
    // Dispatch custom event to notify other components in same tab
    window.dispatchEvent(new Event('authStateChanged'));
  };

  // Build login URL with return path
  const loginUrl = `/login?returnTo=${encodeURIComponent(location.pathname + location.search + location.hash)}`;

  const items = useNavbarItems();
  const [leftItems, rightItems] = splitNavbarItems(items);

  const searchBarItem = items.find((item) => item.type === 'search');

  // Debug: Log render state
  console.log('🔍 Navbar render - isAuthenticated:', isAuthenticated, 'userProfile:', userProfile);

  return (
    <>
      <NavbarContentLayout
        left={
          // TODO stop hardcoding items?
          <>
            {!mobileSidebar.disabled && <NavbarMobileSidebarToggle />}
            <NavbarLogo />
            <NavbarItems items={leftItems} />
          </>
        }
        right={
          // TODO stop hardcoding items?
          // Ask the user to add the respective navbar items => more flexible
          <>
            <NavbarItems items={rightItems} />
            {/* Login button: redirects to /login page with return URL */}
            {!isAuthenticated ? (
              <a
                href={loginUrl}
                className={styles.navbarAuthButton}
                aria-label="Login to access personalized content"
              >
                Login
              </a>
            ) : (
              /* Logout button: logs user out directly from navbar */
              <button
                className={styles.navbarAuthButton}
                onClick={handleLogout}
                aria-label="Logout"
                type="button"
              >
                <i className="fa-solid fa-user-circle" aria-hidden="true" style={{marginRight: '0.5rem'}}></i>
                Logout
              </button>
            )}
            <NavbarColorModeToggle className={styles.colorModeToggle} />
            {!searchBarItem && (
              <NavbarSearch>
                <SearchBar />
              </NavbarSearch>
            )}
          </>
        }
      />
    </>
  );
}
