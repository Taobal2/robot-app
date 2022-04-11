import React, { Component } from "react";

class ErrorBoundry extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
    };
  }

  componentDidCatch(error, info) {
    this.setState({ hasError: true });
  }

  render() {
    if (this.state.hasError) {
      return <h1>Thats not good</h1>;
    }
    return this.props.children;

    return (
      <div>
        <div>dcjschsh</div>
      </div>
    );
  }
}

export default ErrorBoundry;
