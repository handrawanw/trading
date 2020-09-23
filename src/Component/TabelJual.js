import React from "react";

import { useDispatch,useSelector } from "react-redux";

import { SetTradeJualAll,SetTradeAll } from "../Store/actionRedux/TabelMarketAction";

import { SocketIO ,uuid} from "../Fungsi/soket";
import {OrderCount} from "../Fungsi/hitungOrder";

export default function TabelJual({Judul}){

    let dispatch = useDispatch();
    let { market } = useSelector((state) => state.TradeState["TradeJual"]);

    React.useEffect(() => {
        let {id}=uuid||"";
        SocketIO.on("tradeAll", (data) => {
            let marketDataJual = JSON.parse(data).tradeAll||[];
            let myOrder=marketDataJual.filter((item)=>{
                if(typeof item.user==="undefined"){
                    return null;
                }else{
                    return item.user?item.user.toString()===id.toString():null
                }
            });
            let marketArray=marketDataJual?marketDataJual.filter((item) => item.tipe.toUpperCase() === "JUAL").sort((a, b) => b.harga - a.harga).filter((item)=>item.jumlah>0).sort((a, b) => b.harga - a.harga).sort((a, b) => b.jumlah - a.jumlah):[];
            let finalCount=OrderCount({marketData:marketArray});
            dispatch([SetTradeJualAll({ market:finalCount}),SetTradeAll({market:myOrder})]);
        });
      }, [Judul,dispatch]);
    
    return (
            <div className="overScroll">
                <table className="table table-borderless">
                  <tbody align="left">
                    {
                        !market?null:market.map((item)=>{
                            return (
                                <tr>
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