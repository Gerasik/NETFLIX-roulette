/* eslint-disable no-console */
import React, { ErrorInfo } from 'react';
import { ErrorBoundaryProps, ErrorBoundaryState } from 'models';

export default class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(): ErrorBoundaryState {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
    console.log('---log error---');
    console.log(error, errorInfo);
    console.log('---log error---');
  }

  render() {
    const { children } = this.props;
    const { hasError } = this.state;
    if (hasError) {
      return <h1>Something went wrong.</h1>;
    }

    return children;
  }
}
