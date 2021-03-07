import React, { useState } from 'react';
import { authMethods } from '../firebase/authMethods';

export const firebaseAuth = React.createContext();

const AuthProvider = (props) => {
  const [authUser, setAuthUser] = useState(null);

  const handleSignup = (login, password, displayName) => {
    const loginEmail = login + '@abc.com';
    return authMethods.signup(loginEmail, password, displayName);
  };

  const handleSignin = (login, password) => {
    const loginEmail = login + '@abc.com';
    return authMethods.signin(loginEmail, password);
  };

  const handleSignout = () => {
    return authMethods.signout();
  };

  return (
    <firebaseAuth.Provider
      value={{
        handleSignup,
        handleSignin,
        handleSignout,
        authUser,
        setAuthUser,
      }}
    >
      {props.children}
    </firebaseAuth.Provider>
  );
};

export default AuthProvider;
