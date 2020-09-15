import React from "react";


import LoginSend from "../Fungsi/Login";

import { useHistory,Link } from "react-router-dom";

import "./LoginForm.css";

export default function Login() {

  let history = useHistory();

  const [DataLogin, setDataLogin] = React.useState({
    email:"",
    password:""
  });

  const handleInput = (e) => {
      setDataLogin({ ...DataLogin, [e.target.name]: e.target.value });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    LoginSend({DataLogin,history})
  }
  
  return (
    <form className="posisiForm" onSubmit={handleSubmit}>
    <h5 align="center">Login Trade</h5>
        <div className="form-group row">
          <div className="col-12 mt-2">
            <label for="email">
              <small>Email</small>
            </label>
            <input type="text" className="form-control" name={Object.keys(DataLogin)[0]} value={Object.values(DataLogin)[0]} onChange={handleInput} />
            <label for="password">
              <small>Password</small>
            </label>
            <input type="text"
              className="form-control" name={Object.keys(DataLogin)[1]} value={Object.values(DataLogin)[1]} onChange={handleInput}
          />
            <div className="d-block mt-2" align="right">
            <Link to="/daftar" className="m-2">
              Daftar
            </Link>  
            <button className="btn btn-outline-success">
                <small>Login</small>
              </button>
            </div>
          </div>
      </div>
    </form>
  );
}