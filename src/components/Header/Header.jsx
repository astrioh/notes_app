import React, { useContext, useEffect, useState } from 'react';

import { firestore } from '../../firebase/firebaseConfig';
import { firebaseAuth } from '../../providers/AuthProvider';
import Container from '../Container/Container';

import './Header.scss';
import logoutIcon from '../../assets/icons/logout.svg';
import { Redirect } from 'react-router-dom';

const Header = () => {
  const { authUser, handleSignout } = useContext(firebaseAuth);

  const [username, setUsername] = useState('');
  const [signout, setSignout] = useState(false);

  useEffect(() => {
    firestore
      .doc(`users/${authUser.uid}`)
      .get()
      .then((user) => setUsername(user.data().displayName));
  }, [authUser]);

  const signOutClickHandler = () => {
    handleSignout();
    setSignout(true);
  };

  if (signout) {
    return <Redirect to='/sign-in' />;
  }

  return (
    <header className='header'>
      <Container>
        <div className='header__content'>
          <div
            onClick={signOutClickHandler}
            className='signout header__signout'
          >
            {username}
            <img src={logoutIcon} className='signout__icon' alt='Logout' />
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;
