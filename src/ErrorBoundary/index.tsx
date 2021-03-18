import React, { Component } from 'react';
// types and styles
import { ErrorBoundaryProps, ErrorBoundaryState } from './models';
// components
import ErrorIndicator from 'components/ErrorIndicator';

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props) {
    super(props);

    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(): void {
    this.setState({ hasError: true });
  }

  handleCloseError = (): void => {
    this.setState({ hasError: false });
  };

  render() {
    const { children } = this.props;
    const { hasError } = this.state;

    if (hasError) {
      return <ErrorIndicator handleCloseError={this.handleCloseError} />;
    }

    return children;
  }
}
export default ErrorBoundary;
