import React, { useState } from 'react';
import Button from '../../UI/Button/Button';
import FormInput from '../../UI/FormInput/FormInput';

const SignInForm = ({ className }) => {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  return (
    <form className={'form ' + className}>
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
      <Button submit className='form__button'>
        Sign In
      </Button>
    </form>
  );
};

export default SignInForm;
