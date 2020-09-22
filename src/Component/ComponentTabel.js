import React from 'react';

import { Container } from "reactstrap";

import { useDispatch,useSelector } from "react-redux";

import { SetTradeBeliAll, SetTradeJualAll,SetTradeAll } from "../Store/actionRedux/TabelMarketAction";
import {setForm} from "../Store/actionRedux/infoUserRedux";

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
      let myOrder=marketDataJual.filter((item)=>{
       return item.user?item.user.toString()===id.toString():null
      });
      if (Judul.toUpperCase() === "JUAL") {
        let marketArray=marketDataJual?marketDataJual.filter((item) => item.tipe.toUpperCase() === "JUAL").sort((a, b) => b.harga - a.harga).filter((item)=>item.jumlah>0).sort((a, b) => b.harga - a.harga).sort((a, b) => b.jumlah - a.jumlah):[];
        let finalCount=OrderCount({marketData:marketArray});
        dispatch(SetTradeJualAll({ market:finalCount}));
      } else if (Judul.toUpperCase() === "BELI") {
        let marketDataBeli = JSON.parse(data).tradeAll||[];
        let marketArray=marketDataBeli?marketDataBeli.filter((item)=>item.tipe.toUpperCase()==="BELI").filter((item)=>item.jumlah!==0).sort((a, b) => a.harga - b.harga).filter((item)=>item.jumlah>0).sort((a, b) => a.harga - b.harga).sort((a, b) => a.jumlah - b.jumlah):[];
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
          <div className="componentBeli overScrollBeli">
          <table className="table table-borderless">
            <thead className={Judul==="BELI"?"bg-success":"bg-danger"}>
            <tr>
              <td className="scrolStatic">JUMLAH</td>
              <td className="scrolStatic">HARGA</td>
              <td className="scrolStatic">TOTAL</td>
            </tr>
            </thead>
            <tbody>
                {
                  market?market.length>0?market.map((item) => {
                    if(item.key.tipe==="JUAL"){
                      return (
                          <tr className="mouseHover" onClick={()=>dispatch(setForm({tipe:item.key.tipe,jumlah:item.key.jumlah,harga:item.key.harga,status:"CLICK"}))}>
                              <td>{item.key.jumlah}</td>
                              <td className="text-danger">{item.key.harga}</td>
                              <td>{item.key.total}</td>
                            </tr>
                          );
                        }else if(item.key.tipe==="BELI"){
                          return (
                            <tr className="mouseHover" onClick={()=>dispatch(setForm({tipe:item.key.tipe,jumlah:item.key.jumlah,harga:item.key.harga,status:"CLICK"}))}>
                              <td>{item.key.jumlah}</td>
                              <td className="text-success">{item.key.harga}</td>
                              <td>{item.key.total}</td>
                            </tr>
                          );
                        }else{
                          return (
                            null
                            );
                          }
                        }):(
                        <tr>
                          <td>-</td>
                          <td>-</td>
                          <td>-</td>
                        </tr>
                        ):"-"
                      }
              </tbody>
          </table>
          </div>
      </div>
    </Container>
  );
}

export default ComponentBeli;
