import React, { useState } from 'react';
import { authMethods } from '../firebase/authMethods';

export const firebaseAuth = React.createContext();

const AuthProvider = (props) => {
  const [inputs, setInputs] = useState({
    login: '',
    password: '',
    displayName: '',
  });
  const [error, setError] = useState();
  const [token, setToken] = useState(localStorage.getItem('token'));

  const handleSignup = () => {
    const loginEmail = inputs.login + '@abc.com';
    return authMethods.signup(
      loginEmail,
      inputs.password,
      inputs.displayName,
      setError,
      setToken
    );
  };

  const handleSignin = () => {
    const loginEmail = inputs.login + '@abc.com';
    return authMethods.signin(loginEmail, inputs.password, setError, setToken);
  };

  const handleSignout = () => {
    authMethods.signout(setError, setToken);
  };

  return (
    <firebaseAuth.Provider
      value={{
        handleSignup,
        handleSignin,
        handleSignout,
        setInputs,
        token,
        inputs,
        error,
      }}
    >
      {props.children}
    </firebaseAuth.Provider>
  );
};

export default AuthProvider;
