import React from "react";

import { useSelector } from "react-redux";
import {RefundSend} from "../Fungsi/refund";

export default function TabelHistory(){
    let { market } = useSelector((state) => state.TradeState.TradeMe);
    
    return (
        <div className="overScroll" style={{backgroundColor:"#252525"}}>
            <table className="table table-borderless">
                <thead>
                    <tr className="text-white">
                        <td>HARGA</td>
                        <td>JUMLAH</td>
                        <td>TOTAL</td>
                        <td>Aksi</td>
                    </tr>
                </thead>
                <tbody>
                    {
                        market?market.length>0?market.map((item) => {
                        return (
                            <tr>
                                <td className="text-white"><b>{item.harga}</b></td>
                                <td className="text-white"><b>{item.jumlah}</b></td>
                                <td className="text-white"><b>{item.total}</b></td>
                                <td className="text-white">
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
