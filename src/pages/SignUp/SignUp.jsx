import React from 'react';

import SignUpForm from '../../components/Forms/SignUpForm';
import CenterCard from '../../components/UI/CenterCard/CenterCard';

import './SignUp.scss';

const SignUp = (props) => {
  return (
    <CenterCard className='sign-up'>
      <h1 className='sign-up__title title title_center'>Sign in</h1>
      <SignUpForm history={props.history} className='sign-up__form' />
    </CenterCard>
  );
};

export default SignUp;
