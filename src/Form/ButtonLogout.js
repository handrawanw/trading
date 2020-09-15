import React from "react";

import { LogoutSend } from "../Fungsi/Login";

import { useHistory } from "react-router-dom";

export default function BTNLogout() {

  let history = useHistory();

  return (
    <button className="btn btn-success" onClick={()=>LogoutSend({history})}>Logout</button>
  )
}