import React from 'react';

import { Container } from "reactstrap";

import { useDispatch,useSelector } from "react-redux";

import { SetTradeBeliAll, SetTradeJualAll } from "../Store/actionRedux/TabelMarketAction";

import { SocketIO } from "../Fungsi/soket";

import "./Components.css";

/*
  CODEO(pin):"CODEO"
  _id(pin):"5f6151b0615acb21d8ae90db"
  user(pin):"5f614a8af192ad2d609be452"
  jumlah(pin):1
  total(pin):123
  tipe(pin):"BELI"
  harga(pin):123
  createdAt(pin):"2020-09-15T23:43:44.091Z"
  updatedAt(pin):"2020-09-15T23:43:44.091Z"
__v(pin):0
*/

function ComponentBeli({ Data, Judul, TabelTipe }) {

  let dispatch = useDispatch();

  let { market } = useSelector((state) => state.TradeState[TabelTipe]);
  
  React.useEffect(() => {
    SocketIO.on("tradeAll", (data) => {
      if (Judul.toUpperCase() === "JUAL") {
        let marketDataJual = JSON.parse(data).tradeAll.filter((item) => item.tipe === "JUAL").sort((a, b) => b.harga - a.harga);
        dispatch(SetTradeJualAll({ market: marketDataJual }));
      } else if (Judul.toUpperCase() === "BELI") {
        let marketDataBeli = JSON.parse(data).tradeAll.filter((item)=>item.tipe==="BELI").sort((a, b) => a.harga - b.harga);
        dispatch(SetTradeBeliAll({ market:marketDataBeli }));
      } else {
        dispatch(SetTradeBeliAll({ market: [] }));
      }
    });
  }, [Judul,dispatch]);
  
  return (
    <Container fluid>
      <div className="d-block" align="center">
        <section>
          <h3>{Judul}</h3>
        </section>
        <aside>
          <div className="componentBeli overScrollBeli">
            <div>
              <div className="d-block m-2 scrolStatic">
                <h6>JUMLAH</h6>
              </div>
              <div className="d-block">
                {
                  market?market.length>0?market.map((item) => {
                    return (
                      <div>{item.jumlah}</div>
                    )
                  }):"-":"-"
                }
              </div>
              
            </div>

            <div>
              <div className="d-block m-2 scrolStatic">
                <h6>{Judul}</h6>
              </div>
              <div className="d-block">
                  {
                    market?market.length>0?market.map((item) => {
                      return (
                        <div>{item.harga}</div>
                      )
                    }):"-":"-"
                  }
              </div>
              
            </div>

            <div>
              <div className="d-block m-2 scrolStatic">
                <h6>TOTAL</h6>
              </div>
              <div className="d-block">
                {
                  market?market.length>0?market.map((item) => {
                    return (
                      <div>{item.total}</div>
                    )
                  }):"-":"-"
                }
              </div>
            </div>

          </div>
        </aside>
      </div>
    </Container>
  );
}

export default ComponentBeli;

