import React, { useState } from 'react';
import { auth } from '../../firebaseConfig';
import { Link } from 'react-router-dom';

import Button from '../UI/Button/Button';
import Form from '../Form/Form';
import FormInput from '../Form/FormInput/FormInput';
import Error from '../Error/Error';

const SignInForm = ({ className }) => {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const signInHandler = (event, login, password) => {
    event.preventDefault();

    const emailLogin = login + '@example.com';

    auth.signInWithEmailAndPassword(emailLogin, password).catch((error) => {
      setError(error.message);
      console.error('Error signing in', error);
    });
  };

  return (
    <Form
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
      <Link to='/sign-up' className='form__link'>
        Don't have an account? Sign up.
      </Link>
      <Button submit className='form__button'>
        Sign In
      </Button>
    </Form>
  );
};

export default SignInForm;
