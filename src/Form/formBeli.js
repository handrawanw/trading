import React from "react";

import { useSelector,useDispatch } from "react-redux";
import {setFormBeli} from "../Store/actionRedux/infoUserRedux";

import { BeliSend } from "../Fungsi/beli";

export default function FormBeli() {
  
  let dispatch=useDispatch();
  let {lastJual,highPrice,lowPrice,lastPriceAll}=useSelector((state)=>state.storeHistory?state.storeHistory:{});
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
    <div className="d-block"> 
        <form onSubmit={handleSubmitBeli}>
          <div className="form-group row">
              <div className="col-4 d-block">
                <div className="d-block mb-3">
                  <div className="d-block">
                    SALDO 
                  </div>
                  <div className="d-block">
                    {saldo?Number(saldo)-Number(jumlah)*Number(harga):0}
                  </div>
                </div>

                <div className="d-block">
                  <div className="d-block">
                    Total Bayar
                  </div>
                  <div className="d-block">
                    {Number(jumlah)*Number(harga)}
                  </div>
                </div>

                <button className="btn btn-outline-success form-control mt-2">
                  BELI
                </button>
              </div>

              <div className="col-8">
                  <div className="d-flex justify-content-between">
                    <label for="jumlah">
                      Jumlah
                    </label>
                    <div align="right">
                      0 IDR
                    </div>
                  </div>
                  <input type="text" name={Object.keys(DataBeli)[0]} value={jumlah} pattern="\d*" onInput={handleInput} className="form-control" />
                  <label for="jumlah">
                    Harga
                  </label>
                  <input type="text" name={Object.keys(DataBeli)[1]} value={harga} pattern="(\d|\.)*" onInput={handleInput} className="form-control" />
                
                  <div className="d-block mt-1">
                    Total Bayar : {Number(jumlah)*Number(harga)}
                  </div>
                  
                </div>

          </div>

          <div className="d-flex justify-content-around">
            <button type="button" className="btn btn-outline-success m-1">25%</button>
            <button type="button" className="btn btn-outline-success m-1">50%</button>
            <button type="button" className="btn btn-outline-success m-1">75%</button>
            <button type="button" className="btn btn-outline-success m-1">100%</button>
          </div>

        </form>
      <br />
    </div>
  );
}