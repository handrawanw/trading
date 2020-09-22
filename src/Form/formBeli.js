import React from "react";

import { useSelector,useDispatch } from "react-redux";
import {setFormBeli} from "../Store/actionRedux/infoUserRedux";

import { BeliSend } from "../Fungsi/beli";

export default function FormBeli() {
  
  let dispatch=useDispatch();
  let {lastJual,highPrice,lowPrice}=useSelector((state)=>state.storeHistory?state.storeHistory:{});
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

            <button className="btn btn-success form-control mt-2">
              BELI
            </button>
          </div>
          <div className="col-8">
            <div className="d-block">
              <div className="d-flex justify-content-around m-1">
                <div>
                  <i className="fa fa-arrow-up" /> {highPrice}
                </div>
                <div>
                  <i className="fa fa-arrow-down" /> {lowPrice}
                </div>
                <div>
                  <i className="fa fa-eject" /> {lastJual}
                </div>
              </div>
            </div>

            <div className="d-block">
                <div className="mt-2" align="right">
                  <label for="jumlah" align="right">
                    Jumlah
                  </label>
                </div>
                <input type="text" name={Object.keys(DataBeli)[0]} value={jumlah} pattern="\d*" onInput={handleInput} className="form-control" />
            </div>

            <div className="d-block">
              <div className="input-group">
                  <div className="input-group-prepend">
                    <label for="harga">
                      Jumlah
                    </label>
                  </div>
              </div>
              <input type="text" name={Object.keys(DataBeli)[1]} value={harga} pattern="(\d|\.)*" onInput={handleInput} className="form-control" />
            </div>

            <div className="d-block" align="center">
              <button type="button" className="btn btn-outline-success p-1 m-2">25%</button>
              <button type="button" className="btn btn-outline-success p-1 m-2">50%</button>
              <button type="button" className="btn btn-outline-success p-1 m-2">75%</button>
              <button type="button" className="btn btn-outline-success p-1 m-2">100%</button>
            </div>
 
          </div>
          
      </div>
    </form>
    </div>
  );
}