import React from 'react';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import PrivateRoute from './utils/PrivateRoute/PrivateRoute';
import SignUp from './pages/SignUp/SignUp';
import SignIn from './pages/SignIn/SignIn';
import NotesPage from './pages/NotesPage/NotesPage';

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/sign-up' component={SignUp} />
        <Route path='/sign-in' component={SignIn} />
        <PrivateRoute path='/' component={NotesPage} />
      </Switch>
    </Router>
  );
}

export default App;
