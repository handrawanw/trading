import React from "react";

import { Route,Redirect } from "react-router-dom";

import Auth from "./Auth";

export default function ProteksiRoute({ component: Component,...rest }) {
  
  return (
    <Route {...rest} render={(props) => {
      if (Auth.isLogin) {
        return <Component {...rest} />
      } else {
        return <Redirect to={{
          pathname: "/", state: {
            from:props.location
          }
        }} />
      }
    }} />
  )
  
}