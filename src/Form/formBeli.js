import React from "react";

import { useSelector,useDispatch } from "react-redux";
import {setFormBeli} from "../Store/actionRedux/infoUserRedux";

import {SaldoPercent} from "../Fungsi/saldoPercent";

import { BeliSend } from "../Fungsi/beli";

import {useParams} from "react-router-dom";

export default function FormBeli() {

  const {crypto}=useParams();
  
  let dispatch=useDispatch();
  let {lastJual,lastBeli}=useSelector((state)=>state.storeHistory?state.storeHistory:{});
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
      harga,
      symbol:crypto
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
                  <div className="d-block" style={{fontSize:"smaller",wordBreak:"break-word"}}>
                    Last Price Beli
                  </div>
                  <div className="d-block" style={{fontSize:"smaller",wordBreak:"break-word"}}>
                    {lastBeli?lastBeli:0}
                  </div>
                </div>

                <div className="d-block">
                  <div className="d-block" style={{fontSize:"smaller",wordBreak:"break-word"}}>
                    Last Price Jual
                  </div>
                  <div className="d-block" style={{fontSize:"smaller",wordBreak:"break-word"}}>
                    {lastJual?lastJual:0}
                  </div>
                </div>

                <button className="btn btn-outline-success form-control mt-3 p-1">
                  BELI
                </button>
              </div>

              <div className="col-8">

                <div className="row">
                  <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
                    <div align="right" style={{fontSize:"smaller",wordBreak:"break-word"}}>
                      SALDO : {saldo?Number(saldo):0}
                    </div>
                  </div>
                  <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
                    <label for="jumlah" style={{fontSize:"smaller",wordBreak:"break-word"}}>
                      Jumlah
                    </label>
                  </div>
                </div>

                  <input type="text" name={Object.keys(DataBeli)[0]} value={jumlah} pattern="\d*\.?\d*" onInput={handleInput} className="form-control" />
                  <label for="jumlah" style={{fontSize:"smaller",wordBreak:"break-word"}}>
                    Harga
                  </label>
                  <input type="text" name={Object.keys(DataBeli)[1]} value={harga} pattern="\d*" onInput={handleInput} className="form-control" />
                
                  <div className="d-block mt-1" style={{fontSize:"smaller",wordBreak:"break-word"}}>
                    Total Bayar : {Number(jumlah)*Number(harga)}
                  </div>
                  
                </div>

          </div>

          <div className="d-flex justify-content-around" style={{fontSize:"smaller",wordBreak:"break-word"}}>
            <button type="button" className="btn btn-outline-success m-1 p-1" onClick={()=>dispatch(setFormBeli({
            tipe:"BELI",
            jumlah:Number(SaldoPercent({saldo:saldo,pilih:0}).kurang)/Number(harga?harga===""?"1":harga:"1"),
            harga:harga,
            }))}>25%</button>
            <button type="button" className="btn btn-outline-success m-1 p-1" onClick={()=>dispatch(setFormBeli({
            tipe:"BELI",
            jumlah:Number(SaldoPercent({saldo:saldo,pilih:1}).kurang)/Number(harga?harga===""?"1":harga:"1"),
            harga:harga,
            }))}>50%</button>
            <button type="button" className="btn btn-outline-success m-1 p-1" onClick={()=>dispatch(setFormBeli({
            tipe:"BELI",
            jumlah:Number(SaldoPercent({saldo:saldo,pilih:2}).kurang)/Number(harga?harga===""?"1":harga:"1"),
            harga:harga,
            }))}>75%</button>
            <button type="button" className="btn btn-outline-success m-1 p-1" onClick={()=>dispatch(setFormBeli({
            tipe:"BELI",
            jumlah:Number(SaldoPercent({saldo:saldo,pilih:3}).kurang)/Number(harga?harga===""?"1":harga:"1"),
            harga:harga,
            }))}>100%</button>
          </div>

        </form>
      <br />
    </div>
  );
}