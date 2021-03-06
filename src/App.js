import React from 'react';
import { Route, useHistory, Switch, Redirect } from 'react-router-dom';
import Login from "./pages/login";
import Dashboard from "./pages/Dashboard";
import Auth from "./auth/Auth";

function App() {
  const history = useHistory();
  const auth = new Auth(history);

  return (
    <Switch>
      <Route
        exact
        path='/'
        render={(props) => <Login auth={auth} {...props} />}
      />
      <Route
        path='/dashboard'
        render={(props) => auth.isAuthenticated() ? <Dashboard {...props} auth={auth} /> : <Redirect to='/' />}
      />
    </Switch>
  )
}

export default App;

