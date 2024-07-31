import React, { Component } from 'react';

function WithLogging({ WrappedComponent }) {
  const compName =
    WrappedComponent.displayName || WrappedComponent.name || 'Component';

  WithLogging.displayName = `WithLogging(${compName})`;

  return class extends Component {
    componentDidMount() {
      console.log(`Component ${compName} is mounted`);
    }

    componentWillUnmount() {
      console.log(`Component ${compName} is going to unmount`);
    }

    render() {
      return <WrappedComponent {...this.props} />;
    }
  };
}

export default WithLogging;
