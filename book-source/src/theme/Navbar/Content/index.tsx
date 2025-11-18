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
// T004: Import authService and types
import * as authService from '../../../services/authService';
import {UserProfile} from '../../../types/contentTabs';
// T008: Import DummyLoginWithProfile component
import DummyLoginWithProfile from '../../../components/ContentTabs/DummyLoginWithProfile';

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

  // T005: Add React state hooks for authentication state
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userProfile, setUserProfile] = useState<UserProfile | null>(null);
  const [showLoginModal, setShowLoginModal] = useState(false);

  // T006: Implement useEffect hook to check initial auth state on component mount
  // T007: Add storage event listener to sync auth state changes
  useEffect(() => {
    // Check initial auth state
    const checkAuthState = () => {
      const authenticated = authService.isAuthenticated();
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

    // Listen for storage events (auth state changes in other components)
    const handleStorageChange = () => {
      checkAuthState();
    };

    window.addEventListener('storage', handleStorageChange);
    return () => window.removeEventListener('storage', handleStorageChange);
  }, []);

  // T014: Add onSuccess callback to update auth state and close modal
  // T015: Update auth state after successful login
  const handleLoginSuccess = () => {
    setShowLoginModal(false);
    setIsAuthenticated(true);
    const session = authService.getSession();
    setUserProfile(session?.profile || null);
  };

  const items = useNavbarItems();
  const [leftItems, rightItems] = splitNavbarItems(items);

  const searchBarItem = items.find((item) => item.type === 'search');

  return (
    <>
      {/* T012: Render DummyLoginWithProfile modal conditionally when showLoginModal is true */}
      {showLoginModal && (
        <DummyLoginWithProfile
          onClose={() => setShowLoginModal(false)} // T013: onClose callback
          onSuccess={handleLoginSuccess} // T014: onSuccess callback
        />
      )}
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
            {/* T009: Render conditional login button (when NOT authenticated) */}
            {/* T011: Position login button before ColorModeToggle */}
            {!isAuthenticated && (
              <button
                className={styles.navbarAuthButton}
                onClick={() => setShowLoginModal(true)} // T010: onClick handler
                aria-label="Login to access personalized content" // T016: ARIA label
                type="button"
              >
                Login
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
