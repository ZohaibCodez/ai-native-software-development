/**
 * T094: Error Boundary Component
 * 
 * Catches React errors in PersonalizationTab and displays a fallback UI
 * instead of crashing the entire application.
 */
import React, { Component, ReactNode, ErrorInfo } from 'react';
import styles from './styles.module.css';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
  errorInfo: ErrorInfo | null;
}

class PersonalizationErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      hasError: false,
      error: null,
      errorInfo: null,
    };
  }

  static getDerivedStateFromError(error: Error): Partial<State> {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('PersonalizationTab error:', error, errorInfo);
    this.setState({ errorInfo });
  }

  handleReset = () => {
    this.setState({
      hasError: false,
      error: null,
      errorInfo: null,
    });
    // Clear cache and reload
    window.location.reload();
  };

  render() {
    if (this.state.hasError) {
      return (
        <div className={styles.tabContent}>
          <div className={styles.errorBoundary}>
            <h3>⚠️ Something went wrong</h3>
            <p>The personalization feature encountered an error.</p>
            {this.state.error && (
              <details className={styles.errorDetails}>
                <summary>Error details</summary>
                <pre>{this.state.error.toString()}</pre>
                {this.state.errorInfo && (
                  <pre>{this.state.errorInfo.componentStack}</pre>
                )}
              </details>
            )}
            <button
              className={styles.generateButton}
              onClick={this.handleReset}
              style={{ marginTop: '1rem' }}
            >
              🔄 Reload and Try Again
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default PersonalizationErrorBoundary;
