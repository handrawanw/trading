import React from "react";

import {SocketIO} from "../Fungsi/soket";


import {useHistory} from "react-router-dom";

export default function ListCrypto(){

    let history=useHistory();

    const [List,setList]=React.useState([]);

    React.useEffect(()=>{
        setList([
            {
                nama:"BTC/USD",
                harga:Math.ceil(Math.random()*1000000),
                volume:Math.ceil(Math.random()*100000000),
            },
            {
                nama:"LTC/USD",
                harga:Math.ceil(Math.random()*1000000),
                volume:Math.ceil(Math.random()*100000000),
            },
            {
                nama:"BNB/USD",
                harga:Math.ceil(Math.random()*1000000),
                volume:Math.ceil(Math.random()*100000000),
            },
            {
                nama:"ETH/USD",
                harga:Math.ceil(Math.random()*1000000),
                volume:Math.ceil(Math.random()*100000000),
            },
            {
                nama:"CODEO/USD",
                harga:Math.ceil(Math.random()*1000000),
                volume:Math.ceil(Math.random()*100000000),
            }
        ]);
    },[setList]);
    

    return (
        <table className="table table-borderless">
            <thead className="text-white">
                <tr>
                    <td colSpan="3" align="center" style={{backgroundColor:"#2d2c31",fontSize:"smaller",wordBreak:"break-word"}}>LIST CRYPTO</td>
                </tr>
                <tr style={{fontSize:"smaller",wordBreak:"break-word"}}>
                    <td>PAIR</td>
                    <td>HARGA</td>
                    <td>VOLUME</td>
                </tr>
            </thead>
            <tbody className="text-white">
               {List.map((item)=>{
                   return (
                    <tr style={{cursor:"pointer"}} onClick={()=>history.push(item.nama.toString().replace(/\//g,"_"))}>
                        <td><div className="d-block text-justify" style={{fontSize:"smaller",wordBreak:"break-word"}}>{item.nama}</div></td>
                        <td><div className="d-block text-justify" style={{fontSize:"smaller",wordBreak:"break-word"}}>{item.harga}</div></td>
                        <td><div className="d-block text-justify" style={{fontSize:"smaller",wordBreak:"break-word"}}>{item.volume}</div></td>
                    </tr>
                   );
               })}
            </tbody>
        </table>
    );
}