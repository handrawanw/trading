import React from 'react';

import Dashboard from "./Pages/Dashboard";
import Login from './Pages/Login';
import Daftar from './Pages/Daftar';

import ProteksiRoute from "./ProteksiRoute";
import Auth from "./Auth";
import { Route, Switch, useHistory, withRouter } from "react-router-dom";

function App() {
  
  let history = useHistory();

  React.useEffect(() => {
    if (localStorage.getItem("token")) {
      Auth.onLogin(() => {
          history.push("/trading/dashboard");
      });
    } else {
      Auth.onLogout(() => {
        history.push("/trading");
      });
    }
  }, [history]);

  return (
      <Switch>
        <Route exact path={`/trading`}>
          <Login />
        </Route>
        <Route path={`/trading/daftar`}>
          <Daftar />
        </Route>
        <ProteksiRoute path={`/trading/dashboard`} component={Dashboard} />
        <Route path="*">
          <h1>404 Not Found</h1>
        </Route>
      </Switch>
  );
}

export default withRouter(App);
