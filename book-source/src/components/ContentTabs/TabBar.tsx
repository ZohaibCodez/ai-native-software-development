/**
 * TabBar Component - displays three tabs with active state
 */
import React from 'react';
import { TabType } from '../../types/contentTabs';
import styles from './styles.module.css';

interface TabBarProps {
  activeTab: TabType;
  onTabClick: (tab: TabType) => void;
}

export default function TabBar({ activeTab, onTabClick }: TabBarProps): React.ReactElement {
  const tabs: Array<{ id: TabType; label: string }> = [
    { id: 'original', label: 'Original' },
    { id: 'summary', label: 'Summary' },
    { id: 'personalized', label: 'Personalized' },
  ];

  const handleTabClick = (tabId: TabType) => {
    // Idempotent: ignore clicks on already-active tab
    if (tabId === activeTab) {
      return;
    }
    onTabClick(tabId);
  };

  return (
    <div className={styles.tabBar} role="tablist">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          className={`${styles.tabButton} ${activeTab === tab.id ? styles.active : ''}`}
          onClick={() => handleTabClick(tab.id)}
          role="tab"
          aria-selected={activeTab === tab.id}
          aria-controls={`${tab.id}-panel`}
          type="button"
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
}
