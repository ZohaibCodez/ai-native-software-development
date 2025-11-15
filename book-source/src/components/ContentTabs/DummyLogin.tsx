/**
 * DummyLogin Component - temporary authentication UI
 */
import React from 'react';
import * as authService from '../../services/authService';
import styles from './styles.module.css';

interface DummyLoginProps {
  onLogin: () => void;
}

export default function DummyLogin({ onLogin }: DummyLoginProps): React.ReactElement {
  const handleLogin = async () => {
    try {
      // Call dummy login endpoint
      const response = await fetch('/api/v1/auth/dummy-login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error('Login failed');
      }

      const data = await response.json();

      // Store token
      authService.setToken(data.token);

      // Notify parent component
      onLogin();
    } catch (error) {
      console.error('Login error:', error);
      // For demo purposes, still allow login with dummy token
      authService.setToken('dummy_token_12345');
      onLogin();
    }
  };

  return (
    <div className={styles.placeholder} role="alert">
      <h3>Authentication Required</h3>
      <p>You need to be authenticated to view AI-generated summaries.</p>
      <button
        onClick={handleLogin}
        className={styles.retryButton}
        style={{ marginTop: '1rem' }}
        type="button"
      >
        Login (Demo)
      </button>
      <p style={{ fontSize: '0.85em', color: 'var(--ifm-color-emphasis-600)', marginTop: '1rem' }}>
        Note: This is a temporary dummy authentication for demonstration purposes.
        <br />
        SSO integration will be implemented in a future update.
      </p>
    </div>
  );
}
