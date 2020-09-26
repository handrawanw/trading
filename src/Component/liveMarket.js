import React from "react";

import {useSelector} from "react-redux";


export default function LiveMarket(){
    
    
    let {Grafik}=useSelector((state)=>state.storeHistory);

    return (
        <table className="table table-borderless">
            <thead className="text-white">
                <tr>
                    <td colSpan="3" align="center" style={{backgroundColor:"#2d2c31",fontSize:"smaller",wordBreak:"break-word"}}>PERDAGANGAN TERKINI</td>
                </tr>
                <tr style={{fontSize:"smaller",wordBreak:"break-word"}}>
                    <td>HARGA</td>
                    <td>JUMLAH</td>
                    <td>WAKTU</td>
                </tr>
            </thead>
            <tbody className="text-white">
                {
                    Grafik?Grafik.length<=0?(
                        <tr>
                            <td style={{fontSize:"smaller",wordBreak:"break-word"}}>-</td>
                            <td style={{fontSize:"smaller",wordBreak:"break-word"}}>-</td>
                            <td style={{fontSize:"smaller",wordBreak:"break-word"}}>-</td>
                        </tr>
                    ):Grafik.reverse().flatMap((item)=>{

                        if(item.tipeHistori.toUpperCase()==="JUAL"){

                            return (
                                <tr>
                                    <td className="text-danger" style={{fontSize:"smaller",wordBreak:"break-word"}}>{item.latestHarga}</td>
                                    <td className="text-white" style={{fontSize:"smaller",wordBreak:"break-word"}}>{item.jumlahDeal?item.jumlahDeal:0}</td>
                                    <td className="text-white" style={{fontSize:"smaller",wordBreak:"break-word"}}>{new Date(item.createdAt).toLocaleTimeString()+" "+new Date(item.createdAt).toLocaleDateString()}</td>
                                </tr>
                            );

                        }else if(item.tipeHistori.toUpperCase()==="BELI"){

                            return (
                                <tr>
                                    <td className="text-success" style={{fontSize:"smaller",wordBreak:"break-word"}}>{item.latestHarga}</td>
                                    <td className="text-white" style={{fontSize:"smaller",wordBreak:"break-word"}}>{item.jumlahDeal?item.jumlahDeal:0}</td>
                                    <td className="text-white" style={{fontSize:"smaller",wordBreak:"break-word"}}>{new Date(item.createdAt).toLocaleTimeString()+" "+new Date(item.createdAt).toLocaleDateString()}</td>
                                </tr>
                            );

                        }else{

                            return (
                                <tr>
                                    <td style={{fontSize:"smaller",wordBreak:"break-word"}}>-</td>
                                    <td style={{fontSize:"smaller",wordBreak:"break-word"}}>-</td>
                                    <td style={{fontSize:"smaller",wordBreak:"break-word"}}>-</td>
                                </tr>
                            );
                        }
                    }):(
                        <tr>
                            <td style={{fontSize:"smaller",wordBreak:"break-word"}}>-</td>
                            <td style={{fontSize:"smaller",wordBreak:"break-word"}}>-</td>
                            <td style={{fontSize:"smaller",wordBreak:"break-word"}}>-</td>
                        </tr>
                    )
                }
            </tbody>
        </table>
    );
}