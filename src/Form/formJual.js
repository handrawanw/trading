import React from "react";

import { useSelector,useDispatch } from "react-redux";
import {setFormJual} from "../Store/actionRedux/infoUserRedux";

import {SaldoPercent} from "../Fungsi/saldoPercent";

import { JualSend } from "../Fungsi/Jual";

export default function FormJual() {

  let dispatch=useDispatch();
  let {lastBeli,lastJual}=useSelector((state)=>state.storeHistory);
  let {harga,jumlah}=useSelector((state)=>state.UserState.setForm.jual?state.UserState.setForm.jual:{});

  const {codeo} = useSelector(state => state.UserState.User?state.UserState.User.infoUser?state.UserState.User.infoUser:{}:{});
  
  const [DataJual, setDataJual] = React.useState({
    jumlah:"",
    harga:"",
  });

  const handleInput = (e) => {
    if (e.target.validity.valid) {
      setDataJual({ ...DataJual, [e.target.name]: e.target.value });
    };
  }

  const handleSubmitJual = (e) => {
    e.preventDefault();
    JualSend({DataJual:{
      jumlah,
      harga
    }});
  }

  React.useEffect(()=>{
    dispatch(setFormJual({
      tipe:"JUAL",
      jumlah:DataJual.jumlah,
      harga:DataJual.harga
    }));
  },[DataJual,dispatch]);

  return (
    <div className="d-block">
      <form onSubmit={handleSubmitJual}>
        <div className="form-group row">
            <div className="col-4 d-block">
              <div className="d-block mb-3">
                <div className="d-block" style={{fontSize:"smaller",wordBreak:"break-word"}}>
                  Last Price Jual
                </div>
                <div className="d-block" style={{fontSize:"smaller",wordBreak:"break-word"}}>
                    {lastJual}
                </div>
              </div>
              <div className="d-block">
                <div className="d-block" style={{fontSize:"smaller",wordBreak:"break-word"}}>
                  Last Price Beli
                </div>
                <div className="d-block">
                  <small>
                    {lastBeli?lastBeli:0}
                  </small>
                </div>
              </div>
              <button className="btn btn-outline-danger form-control mt-3 p-1">
                JUAL 
              </button>
            </div>

            <div className="col-8">
              
                <div className="row">
                  <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
                    <div align="right" style={{fontSize:"smaller",wordBreak:"break-word"}}>
                      {codeo?codeo:0} CODEO
                    </div>
                  </div>
                  <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
                    <label for="jumlah" style={{fontSize:"smaller",wordBreak:"break-word"}}>
                      Jumlah
                    </label>
                  </div>
                </div>

              <input type="text" name={Object.keys(DataJual)[0]} value={jumlah} pattern="\d*\.?\d*" onInput={handleInput} className="form-control" />
              <label for="jumlah" style={{fontSize:"smaller",wordBreak:"break-word"}}>
                Harga
              </label>
              <input type="text" name={Object.keys(DataJual)[1]} value={harga} pattern="\d*" onInput={handleInput} className="form-control" />
              
              <div className="d-block mt-1" style={{fontSize:"smaller",wordBreak:"break-word"}}>
                Total Bayar : {Number(jumlah)*Number(harga)}
              </div>
            </div>
        </div>

        <div className="d-flex justify-content-around">
          <button type="button" className="btn btn-outline-danger m-1 p-1" onClick={()=>dispatch(setFormJual({
            tipe:"JUAL",
            jumlah:Number(SaldoPercent({saldo:codeo,pilih:0}).kurang)/Number(harga?harga===""?"1":harga:"1"),
            harga:harga,
            }))}>25%</button>
          <button type="button" className="btn btn-outline-danger m-1 p-1" onClick={()=>dispatch(setFormJual({
            tipe:"JUAL",
            jumlah:Number(SaldoPercent({saldo:codeo,pilih:1}).kurang)/Number(harga?harga===""?"1":harga:"1"),
            harga:harga,
            }))}>50%</button>
          <button type="button" className="btn btn-outline-danger m-1 p-1" onClick={()=>dispatch(setFormJual({
            tipe:"JUAL",
            jumlah:Number(SaldoPercent({saldo:codeo,pilih:2}).kurang)/Number(harga?harga===""?"1":harga:"1"),
            harga:harga,
            }))}>75%</button>
          <button type="button" className="btn btn-outline-danger m-1 p-1" onClick={()=>dispatch(setFormJual({
            tipe:"JUAL",
            jumlah:Number(SaldoPercent({saldo:codeo,pilih:3}).kurang)/Number(harga?harga===""?"1":harga:"1"),
            harga:harga,
            }))}>100%</button>
        </div>

      </form>
    </div>
  );
}