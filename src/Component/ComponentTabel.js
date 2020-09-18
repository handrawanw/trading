import React from 'react';

import { Container } from "reactstrap";

import { useDispatch,useSelector } from "react-redux";

import { SetTradeBeliAll, SetTradeJualAll,SetTradeAll } from "../Store/actionRedux/TabelMarketAction";

import { SocketIO } from "../Fungsi/soket";

import "./Components.css";

function ComponentBeli({ Data, Judul, TabelTipe }) {

  let dispatch = useDispatch();

  let { market } = useSelector((state) => state.TradeState[TabelTipe]);

  React.useEffect(() => {
    SocketIO.on("tradeAll", (data) => {
      if (Judul.toUpperCase() === "JUAL") {
        let marketDataJual = JSON.parse(data).tradeAll;
        let marketArray=marketDataJual?marketDataJual.filter((item) => item.tipe.toUpperCase() === "JUAL").sort((a, b) => b.harga - a.harga).filter((item)=>item.jumlah>0).sort((a, b) => b.jumlah - a.jumlah):[];
        dispatch(SetTradeJualAll({ market: marketArray }));
      } else if (Judul.toUpperCase() === "BELI") {
        let marketDataBeli = JSON.parse(data).tradeAll;
        let marketArray=marketDataBeli?marketDataBeli.filter((item)=>item.tipe.toUpperCase()==="BELI").filter((item)=>item.jumlah!==0).sort((a, b) => a.harga - b.harga).filter((item)=>item.jumlah>0).sort((a, b) => a.jumlah - b.jumlah):[];
        dispatch(SetTradeBeliAll({ market:marketArray }));
      } else {
        dispatch([SetTradeJualAll({ market: [] }),SetTradeBeliAll({ market: [] }),SetTradeAll({ market: [] })]);
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
                <h6>TIPE</h6>
              </div>
              <div className="d-block">
                {
                  market?market.length>0?market.map((item) => {
                    return (
                      <div>{item.tipe}</div>
                    )
                  }):"-":"-"
                }
              </div>
              
            </div>

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
