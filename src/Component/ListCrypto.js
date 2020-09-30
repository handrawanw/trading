import React from "react";

import {SocketIO} from "../Fungsi/soket";

import {useHistory} from "react-router-dom";

export default function ListCrypto(){

    let history=useHistory();

    const [List,setList]=React.useState([]);

    React.useEffect(()=>{
        SocketIO.on("listCrypto",(data)=>{
            let {ListCrypto}=JSON.parse(data);
            setList(ListCrypto);
        });
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
               {List?List.length<=0?(
                    <tr>
                        <td style={{fontSize:"smaller",wordBreak:"break-word"}}>-</td>
                        <td style={{fontSize:"smaller",wordBreak:"break-word"}}>-</td>
                        <td style={{fontSize:"smaller",wordBreak:"break-word"}}>-</td>
                    </tr>
                   ):List.map((item)=>{
                   return (
                    <tr style={{cursor:"pointer"}} onClick={()=>history.push(item.simbol.toString().toUpperCase().replace(/\//g,"_"))}>
                        <td><div className="d-block text-justify" style={{fontSize:"smaller",wordBreak:"break-word"}}>{item.simbol}</div></td>
                        <td><div className="d-block text-justify" style={{fontSize:"smaller",wordBreak:"break-word"}}>{item.hargaTerakhir}</div></td>
                        <td><div className="d-block text-justify" style={{fontSize:"smaller",wordBreak:"break-word"}}>{item.volume}</div></td>
                    </tr>
                   );
               }):(
                <tr>
                    <td style={{fontSize:"smaller",wordBreak:"break-word"}}>-</td>
                    <td style={{fontSize:"smaller",wordBreak:"break-word"}}>-</td>
                    <td style={{fontSize:"smaller",wordBreak:"break-word"}}>-</td>
                </tr>
               )}
            </tbody>
        </table>
    );
}