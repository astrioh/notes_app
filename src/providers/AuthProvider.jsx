import React, { useState } from 'react';
import { authMethods } from '../firebase/authMethods';
import { auth } from '../firebase/firebaseConfig';

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
    authMethods.signout();
  };

  /* auth.onAuthStateChanged((authUser) => {
    authUser ? setAuthUser(authUser) : setAuthUser(null);
    console.log(authUser);
  }); */

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
