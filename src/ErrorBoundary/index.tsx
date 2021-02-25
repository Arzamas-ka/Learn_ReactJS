import React, { Component, ReactNode } from 'react';

import ErrorIndicator from 'components/ErrorIndicator';

class ErrorBoundary extends Component {
  public state = {
    hasError: false,
  };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(): void {
    this.setState({ hasError: true });
  }

  handleCloseError = (): void => {
    this.setState({ hasError: false });
  };

  render(): ReactNode {
    const { children } = this.props;
    const { hasError } = this.state;

    if (hasError) {
      return <ErrorIndicator handleCloseError={this.handleCloseError} />;
    }

    return children;
  }
}

export default ErrorBoundary;
