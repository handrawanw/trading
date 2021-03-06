import React from "react";

import { useDispatch,useSelector } from "react-redux";

import { SetTradeBeliAll,LiveMarketRedux } from "../Store/actionRedux/TabelMarketAction";

import {setForm} from "../Store/actionRedux/infoUserRedux";

import { SocketIO } from "../Fungsi/soket";
import {OrderCount} from "../Fungsi/hitungOrder";


import jwt from "jwt-decode";

export default function TabelBeli({Judul}){

    let dispatch = useDispatch();
    let { market } = useSelector((state) => state.TradeState["TradeBeli"]);
    let {id}=localStorage.getItem("token")?jwt(localStorage.getItem("token")):{};

    React.useEffect(() => {
        SocketIO.on("tradeAll", (data) => {
            let marketDataJual = JSON.parse(data).tradeAll||[];
            let marketArray=marketDataJual?marketDataJual.filter((item) => item.tipe.toUpperCase() === "BELI").sort((a, b) => a.harga - b.harga).filter((item)=>item.jumlah>0).sort((a, b) => a.harga - b.harga).sort((a, b) => a.jumlah - b.jumlah):[];
            let finalCount=OrderCount({marketData:marketArray});
            dispatch([SetTradeBeliAll({ market:finalCount}),LiveMarketRedux({market:marketDataJual})]);
        });
    }, [Judul,dispatch,id]);
    
    return (
        <div className="overScroll">
            <table className="table table-borderless">
            <tbody align="left">
                {
                    !market?null:market.length<=0?<div>No data</div>:market.map((item)=>{
                        return (
                            <tr style={{cursor:"pointer"}} onClick={()=>dispatch(setForm({
                                tipe:"BELI",
                                jumlah:item.key.jumlah,
                                harga:item.key.harga
                            }))}>
                                <td className="text-success">{item.key.harga}</td>
                                <td className="text-success">{item.key.jumlah}</td>
                                <td className="text-success">{item.key.total}</td>
                            </tr>
                        );
                    })
                }
            </tbody>
            </table>
        </div>
    );
}