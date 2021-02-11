import React, { useEffect, useState } from 'react';

import { auth } from '../../firebase/firebaseConfig';

const NotesPage = () => {
  const [username, setUsername] = useState('');
  useEffect(() => {
    console.log(auth.currentUser);
  }, []);
  return (
    <div>
      <h1>Notes Page</h1>
      {}
    </div>
  );
};

export default NotesPage;
