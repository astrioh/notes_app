import React from 'react';

import SignInForm from '../../components/Forms/SignInForm';
import CenterCard from '../../components/UI/CenterCard/CenterCard';
import './SignIn.scss';

const SignIn = (props) => {
  return (
    <CenterCard className='sign-in'>
      <h1 className='sign-in__title title title_center'>Sign in</h1>
      <SignInForm history={props.history} className='sign-in__form' />
    </CenterCard>
  );
};

export default SignIn;
