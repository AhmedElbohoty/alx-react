import React, { useEffect } from 'react';

function WithLogging(WrappedComponent) {
  const compName =
    WrappedComponent?.displayName || WrappedComponent?.name || 'Component';

  WithLogging.displayName = `WithLogging(${compName})`;

  return (props) => {
    useEffect(() => {
      console.log(`Component ${compName} is mounted`);

      return () => console.log(`Component ${compName} is going to unmount`);
    }, []);

    return <WrappedComponent {...props} />;
  };
}

export default WithLogging;
