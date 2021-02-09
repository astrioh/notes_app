import React, { useState } from 'react';
import { auth } from '../../../firebaseConfig';

import Button from '../../UI/Button/Button';
import FormInput from '../../UI/FormInput/FormInput';
import Error from '../../Error/Error';

const SignInForm = ({ className }) => {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const signInHandler = (event, login, password) => {
    event.preventDefault();

    const emailLogin = login + '@example.com';

    auth.signInWithEmailAndPassword(emailLogin, password).catch((error) => {
      setError('Error signing in!');
      console.error('Error signing in', error);
    });
  };

  return (
    <form
      className={'form ' + className}
      onSubmit={(e) => signInHandler(e, login, password)}
    >
      <FormInput
        className='form__input'
        type='text'
        label='Login'
        value={login}
        onChange={(e) => setLogin(e.target.value)}
        name='login'
      />
      <FormInput
        className='form__input'
        type='password'
        label='Password'
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        name='password'
      />
      {error && <Error text={error} className='form__error' />}
      <Button submit className='form__button'>
        Sign In
      </Button>
    </form>
  );
};

export default SignInForm;
