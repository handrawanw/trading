import React from 'react';

import Dashboard from "./Pages/Dashboard";
import Login from './Pages/Login';
import Daftar from './Pages/Daftar';

import ProteksiRoute from "./ProteksiRoute";
import Auth from "./Auth";
import { useHistory,withRouter,Route,Switch } from "react-router-dom";

function App() {
  
  let history = useHistory();

  React.useEffect(() => {
    if (localStorage.getItem("token")) {
      Auth.onLogin(() => {
        history.push("/dashboard");
      });
    } else {
      Auth.onLogout(() => {
        history.push("/");
      });
    }
  }, [history]);

  return (
      <Switch>
        <Route path="/" exact>
          <Login />
        </Route>
        <Route path="/daftar">
          <Daftar />
        </Route>
        <ProteksiRoute path="/dashboard" component={Dashboard} />
      </Switch>
  );
}

export default withRouter(App);
