import React from 'react';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import PrivateRoute from './utils/PrivateRoute/PrivateRoute';
import SignUp from './pages/SignUp/SignUp';
import SignIn from './pages/SignIn/SignIn';
import NotesPage from './pages/NotesPage/NotesPage';
import AuthProvider from './providers/AuthProvider';

function App() {
  return (
    <Router>
      <AuthProvider>
        <Switch>
          <PrivateRoute exact path='/' component={NotesPage} />
          <Route exact path='/sign-up' component={SignUp} />
          <Route exact path='/sign-in' component={SignIn} />
        </Switch>
      </AuthProvider>
    </Router>
  );
}

export default App;
