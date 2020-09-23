import React from "react";

import { useDispatch,useSelector } from "react-redux";

import { SetTradeBeliAll,SetTradeAll } from "../Store/actionRedux/TabelMarketAction";

import { SocketIO ,uuid} from "../Fungsi/soket";
import {OrderCount} from "../Fungsi/hitungOrder";

export default function TabelBeli({Judul}){

    let dispatch = useDispatch();
    let { market } = useSelector((state) => state.TradeState["TradeBeli"]);

    React.useEffect(() => {
        let {id}=uuid||"";
        SocketIO.on("tradeAll", (data) => {
            let marketDataJual = JSON.parse(data).tradeAll||[];
            let myOrder=marketDataJual.filter((item)=>{
                return item.user?item.user.toString()===id.toString():null
            });
            let marketArray=marketDataJual?marketDataJual.filter((item) => item.tipe.toUpperCase() === "BELI").sort((a, b) => b.harga - a.harga).filter((item)=>item.jumlah>0).sort((a, b) => b.harga - a.harga).sort((a, b) => b.jumlah - a.jumlah):[];
            let finalCount=OrderCount({marketData:marketArray});
            dispatch([SetTradeBeliAll({ market:finalCount}),SetTradeAll({market:myOrder})]);
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