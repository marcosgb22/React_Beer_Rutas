import React, { Component } from 'react';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  componentDidCatch(error, info) {
    this.setState({ hasError: true });
    // Puedes registrar el error o realizar otras acciones aquí si es necesario.
  }

  render() {
    if (this.state.hasError) {
      // Puedes personalizar el mensaje de error que se mostrará al usuario.
      return <div>Error inesperado. Por favor, recargue la página.</div>;
    }
    return this.props.children;
  }
}

export default ErrorBoundary;