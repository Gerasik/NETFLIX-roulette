import React, { FunctionComponentElement, ErrorInfo } from 'react';

type ErrorBoundaryProps = {
  children: FunctionComponentElement<null>;
};

type ErrorBoundaryState = {
  hasError: boolean;
};

export default class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(): ErrorBoundaryState {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
    window.console.log('---log error---');
    window.console.log(error, errorInfo);
    window.console.log('---log error---');
  }

  render(): FunctionComponentElement<null> {
    const { children } = this.props;
    const { hasError } = this.state;
    if (hasError) {
      return <h1>Что-то пошло не так.</h1>;
    }

    return children;
  }
}
