import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';

import Button from '../UI/Button/Button';
import Form from '../Form/Form';
import FormInput from '../Form/FormInput/FormInput';
import Error from '../Error/Error';
import { firebaseAuth } from '../../providers/AuthProvider';

const SignInForm = ({ className, history }) => {
  const { handleSignin } = useContext(firebaseAuth);

  const [inputs, setInputs] = useState({
    login: '',
    password: '',
  });
  const [error, setError] = useState();
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputs((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    handleSignin(inputs.login, inputs.password).then(
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
      <Link to='/sign-up' className='form__link'>
        Don't have an account? Sign up.
      </Link>
      <Button submit className='form__button' disabled={loading}>
        {loading ? 'Loading...' : 'Sign Up'}
      </Button>
    </Form>
  );
};

export default SignInForm;
