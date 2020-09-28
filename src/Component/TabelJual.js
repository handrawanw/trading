import React from "react";

import { useDispatch,useSelector } from "react-redux";

import { SetTradeJualAll,LiveMarketRedux } from "../Store/actionRedux/TabelMarketAction";

import {setForm} from "../Store/actionRedux/infoUserRedux";

import { SocketIO } from "../Fungsi/soket";
import {OrderCount} from "../Fungsi/hitungOrder";

import jwt from "jwt-decode";

export default function TabelJual({Judul}){

    let dispatch = useDispatch();
    let { market } = useSelector((state) => state.TradeState["TradeJual"]);
    let {id}=localStorage.getItem("token")?jwt(localStorage.getItem("token")):{};

    React.useEffect(() => {
        SocketIO.on("tradeAll", (data) => {
            let marketDataJual = JSON.parse(data).tradeAll||[];
            let marketArray=marketDataJual?marketDataJual.filter((item) => item.tipe.toUpperCase() === "JUAL").sort((a, b) => b.harga - a.harga).filter((item)=>item.jumlah>0).sort((a, b) => b.harga - a.harga).sort((a, b) => b.jumlah - a.jumlah):[];
            let finalCount=OrderCount({marketData:marketArray});
            dispatch(SetTradeJualAll({ market:finalCount}),LiveMarketRedux({market:marketDataJual}));
        });
      }, [Judul,dispatch,id]);
    
    return (
            <div className="overScroll">
                <table className="table table-borderless">
                  <tbody align="left">
                    {
                        !market?null:market.length<=0?<div>No data</div>:market.flatMap((item)=>{
                            return (
                                <tr style={{cursor:"pointer"}} onClick={()=>dispatch(setForm({
                                    tipe:"JUAL",
                                    jumlah:item.key.jumlah.toString(),
                                    harga:item.key.harga.toString()
                                  }))}>
                                    <td className="text-danger">{item.key.harga}</td>
                                    <td className="text-danger">{item.key.jumlah}</td>
                                    <td className="text-danger">{item.key.total}</td>
                                </tr>
                            );
                        })
                    }
                  </tbody>
                </table>
            </div>
    );
}