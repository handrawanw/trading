import React from "react";

import { useSelector } from "react-redux";
import {RefundSend} from "../Fungsi/refund";

export default function TabelHistory(){
    
    let { market } = useSelector((state) => state.TradeState.TradeMe);
    
    return (
        <div style={{backgroundColor:"#252525",height:"100%"}}>

            <table className="table table-borderless">
                <thead>
                    <tr className="text-white" style={{fontSize:"smaller",wordBreak:"break-word"}}>
                        <td>HARGA (IDR)</td>
                        <td>JUMLAH (CODEO)</td>
                        <td>TOTAL (CODEO)</td>
                        <td>Refunds</td>
                    </tr>
                </thead>
                
                <tbody className="overScroll">
                    {
                        market?market.length>0?market.map((item) => {
                            return (
                                <tr style={{fontSize:"smaller",wordBreak:"break-word"}}>
                                    {
                                        item.tipe==="JUAL"?
                                                <td className="text-danger"><b>{item.harga}</b></td>
                                            :(
                                                <td className="text-success"><b>{item.harga}</b></td>
                                        )
                                    }
                                <td className="text-white" align="right"><b>{item.jumlah}</b></td>
                                <td className="text-white" align="right"><b>{item.total}</b></td>
                                <td className="text-white" align="right">
                                    {
                                        item.tipe==="JUAL"?
                                        <button className="btn btn-outline-danger p-1" onClick={()=>RefundSend({DataRefund:item._id})}>
                                                <i className="fa fa-money" />
                                            </button>:(
                                                <button className="btn btn-outline-success p-1" onClick={()=>RefundSend({DataRefund:item._id})}>
                                                <i className="fa fa-money" />
                                            </button>
                                        )
                                    }
                                </td>
                            </tr>
                        )
                    }):(
                        <tr>
                                <td className="text-white">-</td>
                                <td className="text-white">-</td>
                                <td className="text-white">-</td>
                                <td className="text-white">
                                -
                                </td>
                            </tr>
                        ):(<tr>
                            <td className="text-white">-</td>
                            <td className="text-white">-</td>
                            <td className="text-white">-</td>
                            <td className="text-white">
                            -
                            </td>
                        </tr>)
                    }
                </tbody>
            </table>
        </div>
    );
}
