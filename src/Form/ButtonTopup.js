import React from "react";

import { TopUp } from "../Fungsi/Topup";

export default function BTNLogout() {

  return (
    <button className="btn btn-outline-success" onClick={()=>TopUp()}>TOPUP</button>
  );
}