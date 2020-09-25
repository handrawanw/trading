import React from "react";

import {useDispatch} from "react-redux";

export default function LiveMarket(){

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
                <tr>
                    <td style={{fontSize:"smaller",wordBreak:"break-word"}}>0</td>
                    <td style={{fontSize:"smaller",wordBreak:"break-word"}}>0</td>
                    <td style={{fontSize:"smaller",wordBreak:"break-word"}}>{new Date().toLocaleTimeString()}</td>
                </tr>
            </tbody>
        </table>
    );
}