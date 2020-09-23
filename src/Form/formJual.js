import React from "react";

import { useSelector,useDispatch } from "react-redux";
import {setFormJual} from "../Store/actionRedux/infoUserRedux";

import { JualSend } from "../Fungsi/Jual";

export default function FormJual() {

  let dispatch=useDispatch();
  let {lastBeli}=useSelector((state)=>state.storeHistory);
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
                <div className="d-block">
                  CODEO
                </div>
                <div className="d-block">
                  <small>
                    {codeo?codeo:0}
                  </small>
                </div>
              </div>
              <div className="d-block">
                <div className="d-block">
                  Last Price
                </div>
                <div className="d-block">
                  <small>
                    {lastBeli?lastBeli:0}
                  </small>
                </div>
              </div>
              <button className="btn btn-outline-danger form-control mt-2">
                JUAL 
              </button>
            </div>

            <div className="col-8">
              
              <label for="jumlah">
                Jumlah
              </label>
              <input type="text" name={Object.keys(DataJual)[0]} value={jumlah} pattern="\d*" onInput={handleInput} className="form-control" />
              <label for="jumlah">
                Harga
              </label>
              <input type="text" name={Object.keys(DataJual)[1]} value={harga} pattern="(\d|\.)*" onInput={handleInput} className="form-control" />
              
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
    </div>
  );
}