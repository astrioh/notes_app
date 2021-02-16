import React, { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';

import { firebaseAuth } from '../../providers/AuthProvider';

const PrivateRoute = ({ component: Component, ...rest }) => {
  const { authUser } = useContext(firebaseAuth);

  return (
    <Route
      {...rest}
      render={(props) => {
        return authUser ? (
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
