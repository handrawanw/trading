import React from "react";

import { useSelector,useDispatch } from "react-redux";
import {setFormBeli} from "../Store/actionRedux/infoUserRedux";

import { BeliSend } from "../Fungsi/beli";

export default function FormBeli() {
  
  let dispatch=useDispatch();
  let {lastJual}=useSelector((state)=>state.storeHistory?state.storeHistory:{});
  let {harga,jumlah}=useSelector((state)=>state.UserState.setForm.beli?state.UserState.setForm.beli:{});

  const {saldo} = useSelector(state => state.UserState.User?state.UserState.User.infoUser?state.UserState.User.infoUser:{}:{});
  
  const [DataBeli, setDataBeli] = React.useState({
    jumlah:"",
    harga:"",
  });

  const handleInput = (e) => {
    if (e.target.validity.valid) {
      setDataBeli({ ...DataBeli, [e.target.name]: e.target.value });
    };
  }

  const handleSubmitBeli = (e) => {
    e.preventDefault();
    BeliSend({ DataBeli:{
      jumlah,
      harga
    }});
  }

  React.useEffect(()=>{
    dispatch(setFormBeli({
      tipe:"BELI",
      jumlah:DataBeli.jumlah,
      harga:DataBeli.harga
    }));
  },[DataBeli,dispatch]);

  return (
    <div className="d-block ml-3 mt-3">
    <form onSubmit={handleSubmitBeli}>
      <div className="form-group row">
          <div className="col-4 d-block">
            <div className="d-block mb-3">
              <div className="d-block">
                SALDO 
              </div>
              <div className="d-block">
                {saldo?saldo:0}
              </div>
            </div>
            <div className="d-block mb-1">
              <div className="d-block">
                LAST PRICE BELI
              </div>
              <div className="d-block">
                {lastJual?lastJual:0}
              </div>
            </div>
            <button className="btn btn-success form-control">
              BELI
            </button>
          </div>
          <div className="col-8">
            <label for="jumlah">
              Jumlah
            </label>
            <input type="text" name={Object.keys(DataBeli)[0]} value={jumlah} pattern="\d*" onInput={handleInput} className="form-control" />
            <label for="jumlah">
              Harga
            </label>
            <input type="text" name={Object.keys(DataBeli)[1]} value={harga} pattern="(\d|\.)*" onInput={handleInput} className="form-control" />
            
            <div className="d-block mt-1">
              Total Bayar  : {Number(jumlah)*Number(harga)}
            </div>
          </div>
      </div>
    </form>
    </div>
  );
}