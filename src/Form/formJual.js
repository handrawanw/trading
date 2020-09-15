import React from "react";

export default function FormJUAL(){
  
  return (
    <div className="d-block ml-3 mt-3">
    <form>
      <div className="form-group row">
          <div className="col-4 d-block">
            <div className="d-block mb-3">
              <div className="d-block">
                SALDO
              </div>
              <div className="d-block">
                0
              </div>
            </div>
            <div className="d-block mb-1">
              <div className="d-block">
                LAST PRICE JUAL
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
            <input type="text" className="form-control" />
            <label for="jumlah">
              Harga
            </label>
            <input type="text" className="form-control" />
            
            <div className="d-block mt-1">
              Total 123
            </div>
          </div>
      </div>
    </form>
    </div>
  );
}