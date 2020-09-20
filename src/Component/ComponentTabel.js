import React from 'react';

import { Container } from "reactstrap";

import { useDispatch,useSelector } from "react-redux";

import { SetTradeBeliAll, SetTradeJualAll,SetTradeAll } from "../Store/actionRedux/TabelMarketAction";
import {setFormBeli,setFormJual} from "../Store/actionRedux/infoUserRedux";

import { SocketIO ,uuid} from "../Fungsi/soket";

import {OrderCount} from "../Fungsi/hitungOrder";

import "./Components.css";

function ComponentBeli({  Judul, TabelTipe }) {

  let dispatch = useDispatch();

  let { market } = useSelector((state) => state.TradeState[TabelTipe]);

  React.useEffect(() => {
    let {id}=uuid||"";
    SocketIO.on("tradeAll", (data) => {
      let marketDataJual = JSON.parse(data).tradeAll||[];
      let myOrder=marketDataJual.filter((item)=>item.user.toString()===id.toString());
      if (Judul.toUpperCase() === "JUAL") {
        let marketArray=marketDataJual?marketDataJual.filter((item)=>item.user.toString()===id.toString()?null:item).filter((item) => item.tipe.toUpperCase() === "JUAL").sort((a, b) => b.harga - a.harga).filter((item)=>item.jumlah>0).sort((a, b) => b.harga - a.harga).sort((a, b) => b.jumlah - a.jumlah):[];
        let finalCount=OrderCount({marketData:marketArray});
        dispatch(SetTradeJualAll({ market:finalCount}));
      } else if (Judul.toUpperCase() === "BELI") {
        let marketDataBeli = JSON.parse(data).tradeAll||[];
        let marketArray=marketDataBeli?marketDataBeli.filter((item)=>item.user.toString()===id.toString()?null:item).filter((item)=>item.tipe.toUpperCase()==="BELI").filter((item)=>item.jumlah!==0).sort((a, b) => a.harga - b.harga).filter((item)=>item.jumlah>0).sort((a, b) => a.harga - b.harga).sort((a, b) => a.jumlah - b.jumlah):[];
        let finalCount=OrderCount({marketData:marketArray});
        dispatch(SetTradeBeliAll({ market:finalCount}));
      } else {
        dispatch([SetTradeJualAll({ market: [] }),SetTradeBeliAll({ market: [] }),SetTradeAll({ market: [] })]);
      }
      dispatch(SetTradeAll({market:myOrder}));
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
                      <div>{item.key.tipe}</div>
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
                      <div>{item.key.jumlah}</div>
                    )
                  }):"-":"-"
                }
              </div>
              
            </div>

            <div>
              <div className="d-block m-2 scrolStatic">
                <h6>HARGA</h6>
              </div>
              <div className="d-block">
                  {
                    market?market.length>0?market.map((item,index) => {
                      if(item.key.tipe==="JUAL"){
                        return (
                          <div><button className="badge badge-danger" onClick={()=>dispatch(setFormJual({tipe:item.key.tipe,jumlah:item.key.jumlah,harga:item.key.harga}))}>{item.key.harga}</button></div>
                        );
                      }else if(item.key.tipe==="BELI"){
                        return (
                          <div><button className="badge badge-success"  onClick={()=>dispatch(setFormBeli({tipe:item.key.tipe,jumlah:item.key.jumlah,harga:item.key.harga}))}>{item.key.harga}</button></div>
                        );
                      }else{
                        return (
                          null
                        );
                      }
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
                      <div>{item.key.total}</div>
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
