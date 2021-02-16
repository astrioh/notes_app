import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';

import { firebaseAuth } from '../../providers/AuthProvider';
import Button from '../UI/Button/Button';
import Form from '../Form/Form';
import FormInput from '../Form/FormInput/FormInput';
import Error from '../Error/Error';

const SignInForm = ({ history, className }) => {
  const { handleSignup } = useContext(firebaseAuth);

  const [inputs, setInputs] = useState({
    login: '',
    password: '',
    displayName: '',
  });
  const [error, setError] = useState();
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputs((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    handleSignup(inputs.login, inputs.password, inputs.displayName).then(
      () => history.push('/'),
      (err) => {
        setError(err.message);
        setLoading(false);
      }
    );
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
      <Button submit className='form__button' disabled={loading}>
        {loading ? 'Loading...' : 'Sign Up'}
      </Button>
    </Form>
  );
};

export default SignInForm;
