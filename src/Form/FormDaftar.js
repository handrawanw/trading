import React from "react";


import DaftarSend from "../Fungsi/Daftar";

import { useHistory,Link } from "react-router-dom";

import "./LoginForm.css";

export default function Daftar() {

  let history = useHistory();

  const [DataDaftar, setDataDaftar] = React.useState({
    username:"",
    email:"",
    password: "",
  });

  const handleInput = (e) => {
      setDataDaftar({ ...DataDaftar, [e.target.name]: e.target.value });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    DaftarSend({DataDaftar,history})
  }
  
  return (
    <form className="posisiForm" onSubmit={handleSubmit}>
      <h5 align="center">Daftar Trade</h5>
        <div className="form-group row">
        <div className="col-12 mt-2">
            <label for="password">
              <small>Username</small>
            </label>
            <input type="text"
              className="form-control" name={Object.keys(DataDaftar)[0]} value={Object.values(DataDaftar)[0]} onChange={handleInput}
              />
            <label for="email">
              <small>Email</small>
            </label>
            <input type="text" className="form-control" name={Object.keys(DataDaftar)[1]} value={Object.values(DataDaftar)[1]} onChange={handleInput} />
            <label for="password">
              <small>Password</small>
            </label>
            <input type="text"
              className="form-control" name={Object.keys(DataDaftar)[2]} value={Object.values(DataDaftar)[2]} onChange={handleInput}
            />
            <div className="d-block mt-2" align="right">
              <Link to="/trading">LOGIN</Link>
              <button className="btn btn-outline-success">
                <small>DAFTAR</small>
              </button>
            </div>
          </div>
      </div>
    </form>
  );
}