import React, { Component, ErrorInfo } from 'react';
import { captureException } from '@bugbybug/browser';
import { ErrorBoundaryProps, ErrorBoundaryState } from './types';

export class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = {
      hasError: false,
      error: null
    };
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    const { onError, beforeSend } = this.props;
    const componentStack = errorInfo.componentStack || '';

    if (onError) {
      onError(error, componentStack);
    }

    let errorToSend: Error | null = error;

    if (beforeSend) {
      errorToSend = beforeSend(error, componentStack);
    }

    if (errorToSend) {
      captureException(errorToSend, {
        componentStack,
        react: true,
        errorBoundary: true
      });
    }
  }

  resetErrorBoundary = () => {
    this.setState({ hasError: false, error: null });
  };

  render() {
    const { hasError, error } = this.state;
    const { fallback, children } = this.props;

    if (hasError) {
      if (typeof fallback === 'function') {
        return fallback(error || new Error('Unknown Error'), this.resetErrorBoundary);
      }
      return fallback || null;
    }

    return children;
  }
}