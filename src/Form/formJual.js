import React from "react";

import { useSelector } from "react-redux";

import { JualSend } from "../Fungsi/Jual";

export default function FormJual() {
  
  const {codeo} = useSelector(state => state.UserState.User?state.UserState.User.infoUser?state.UserState.User.infoUser:{}:{});
  
  const [DataJual, setDataJual] = React.useState({
    jumlah:"",
    harga:""
  });

  const handleInput = (e) => {
    if (e.target.validity.valid) {
      setDataJual({ ...DataJual, [e.target.name]: e.target.value });
    };
  }

  const handleSubmitJual = (e) => {
    e.preventDefault();
    JualSend({ DataJual });
  }

  return (
    <div className="d-block ml-3 mt-3">
    <form onSubmit={handleSubmitJual}>
      <div className="form-group row">
          <div className="col-4 d-block">
            <div className="d-block mb-3">
              <div className="d-block">
                CODEO
              </div>
              <div className="d-block">
                {codeo}
              </div>
            </div>
            <div className="d-block mb-1">
              <div className="d-block">
                LAST PRICE Jual
              </div>
              <div className="d-block">
                0
              </div>
            </div>
            <button className="btn btn-danger form-control">
              JUAL 
            </button>
          </div>
          <div className="col-8">
            <label for="jumlah">
              Jumlah
            </label>
            <input type="text" name={Object.keys(DataJual)[0]} value={Object.values(DataJual)[0]} pattern="\d*" onInput={handleInput} className="form-control" />
            <label for="jumlah">
              Harga
            </label>
            <input type="text" name={Object.keys(DataJual)[1]} value={Object.values(DataJual)[1]} pattern="\d*" onInput={handleInput} className="form-control" />
            
            <div className="d-block mt-1">
              Total 123
            </div>
          </div>
      </div>
    </form>
    </div>
  );
}