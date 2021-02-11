import React, { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';

import { firebaseAuth } from '../../providers/AuthProvider';

const PrivateRoute = ({ component: Component, ...rest }) => {
  const { token } = useContext(firebaseAuth);

  return (
    <Route
      {...rest}
      render={(props) => {
        return token ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: '/sign-in',
              state: { from: props.location },
            }}
          />
        );
      }}
    />
  );
};

export default PrivateRoute;
