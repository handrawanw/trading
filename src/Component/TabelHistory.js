import React from "react";

import { useSelector,useDispatch } from "react-redux";
import {RefundSend} from "../Fungsi/refund";

import jwt from "jwt-decode";

import {SocketIO} from "../Fungsi/soket";
import {orderHistory} from "../Store/actionRedux/infoUserRedux";

export default function TabelHistory(){
    
    let {id}=localStorage.getItem("token")?jwt(localStorage.getItem("token")):{};

    let dispatch=useDispatch();
    let { market } = useSelector((state) => state.UserState.myOrderTrade);
    
    React.useEffect(()=>{
        SocketIO.on(`tradeMe${id}`,(data)=>{
            let {tradeMe}=JSON.parse(data);
            dispatch(orderHistory({market:tradeMe}));
        });
    },[dispatch,id]);

    return (
        <div className="overScroll">
            <table className="table table-borderless">
                <thead>
                    <tr>
                        <td colSpan="4" className="text-white" style={{position:"-webkit-sticky",margin:0,backgroundColor:"#2d2c31",fontSize:"smaller",wordBreak:"break-word"}}>
                            <i className="fa fa-history" /> ORDER HISTORY
                        </td>
                    </tr>
                    <tr className="text-white" style={{position:"-webkit-sticky",margin:0,backgroundColor:"#2d2c31",fontSize:"smaller",wordBreak:"break-word"}}>
                        <td>HARGA (IDR)</td>
                        <td>JUMLAH (CODEO)</td>
                        <td>TOTAL (CODEO)</td>
                        <td>Refunds</td>
                    </tr>
                </thead>
                
                <tbody style={{backgroundColor:"#252525"}}>
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
                                                <i className="fa fa-money" /> {item._id}
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
