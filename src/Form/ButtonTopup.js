import React from "react";

import { TopUp } from "../Fungsi/Topup";

import {useParams} from "react-router-dom";

export default function BTNLogout() {

  const {crypto}=useParams();

  return (
    <button className="btn btn-outline-success" onClick={()=>TopUp({crypto})}>TOPUP</button>
  );
}