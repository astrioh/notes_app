import React, { useState, useContext } from 'react';
import { Link, Redirect } from 'react-router-dom';

import { firebaseAuth } from '../../providers/AuthProvider';
import Button from '../UI/Button/Button';
import Form from '../Form/Form';
import FormInput from '../Form/FormInput/FormInput';
import Error from '../Error/Error';

const SignInForm = ({ history, className }) => {
  const { handleSignup, inputs, setInputs, error } = useContext(firebaseAuth);

  const handleSubmit = async (e) => {
    e.preventDefault();
    handleSignup().then(
      () => history.push('/'),
      (err) => console.error(err)
    );
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputs((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <Form className={'form ' + className} onSubmit={handleSubmit}>
      <FormInput
        className='form__input'
        type='text'
        label='Display Name'
        value={inputs.displayName}
        onChange={handleChange}
        name='displayName'
      />
      <FormInput
        className='form__input'
        type='text'
        label='Login'
        value={inputs.login}
        onChange={handleChange}
        name='login'
      />
      <FormInput
        className='form__input'
        type='password'
        label='Password'
        value={inputs.password}
        onChange={handleChange}
        name='password'
      />
      {error && <Error text={error} className='form__error' />}
      <Link to='/sign-in' className='form__link'>
        Already have an account? Sign in.
      </Link>
      <Button submit className='form__button'>
        Sign Up
      </Button>
    </Form>
  );
};

export default SignInForm;
