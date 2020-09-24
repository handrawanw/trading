import React from "react";
import { Container,Row } from "reactstrap";

import { SocketIO } from "../Fungsi/soket";

import { useDispatch } from "react-redux";
import TabelJual from "../Component/TabelJual";
import FormBeli from "../Form/formBeli";
import FormJual from "../Form/formJual";

import TabelBeli from "../Component/TabelBeli";
import TabelHistory from "../Component/TabelHistory";

import { setInfoUser } from "../Store/actionRedux/infoUserRedux";
import Toast from "cogo-toast";

import {setChart} from "../Store/actionRedux/historyTrade";

import Auth from "../Auth";

import {useHistory} from "react-router-dom";

import jwt from "jwt-decode";

import TradingViewWidget, { Themes } from 'react-tradingview-widget';

import Header from "../Component/Header";
import TrafikHarga from "../Component/TrafikHarga";


import "./dclone.css";

export default function Dashboard() {

  let {id}=localStorage.getItem("token")?jwt(localStorage.getItem("token")):{};

  let history=useHistory();
  let dispatch = useDispatch();
  
  React.useEffect(()=>{
    SocketIO.emit("soketAuth", JSON.stringify({ token: localStorage.getItem("token") }));
    if(id){
      SocketIO.on(`infoUser${id}`, (data) => {
        let user = JSON.parse(data);
        if(user.infoUser){
          dispatch(setInfoUser({ User: user }));
          if(user.message){
            Toast.success(user.message);
          }
        }else{
          Auth.onLogout(()=>{
            localStorage.clear();
            history.push("/trading");
          });
        }
      });
      
      SocketIO.on("latestTrade",(data)=>{
        let History=JSON.parse(data).latestTrade;
        let labelOld=History?History.filter((item)=>item.tipeHistori?item:null):[];
        let labelnew=[],dataBeli=[],dataJUal=[];
        labelOld.forEach((item)=> {
          labelnew.push(new Date(item.createdAt).toLocaleTimeString()+" "+new Date(item.createdAt).toLocaleDateString())
          if(item.tipeHistori.toUpperCase()==="BELI"){
            dataBeli.push(item.latestHarga);
          }else{
            dataJUal.push(item.latestHarga);
          }
        });
        dispatch(setChart({LabelNew:labelnew,Data:History,DataBeli:dataBeli,lastBeli:dataBeli[dataBeli.length-1],DataJual:dataJUal,lastJual:dataJUal[dataJUal.length-1]}));
      })
    }
  },[dispatch,id,history]);


  const App = () => (
    <TradingViewWidget
      symbol="BTC/USD"
      theme={Themes.DARK}
      locale="id"
      autosize
    />
  );
  
  return ( 
    <Container fluid>

      <Header />

      <TrafikHarga />

      <Row className="m-3">
        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-6" >

          <App />
          
        </div>

        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-6" style={{backgroundColor:"#252525"}}>

            <div className="row d-flex justify-content-between">

               <div className="col-6 col-sm-12 col-xs-12 col-md-6">
                <table className="table table-borderless" style={{margin:0}}>
                    <caption>Daftar Beli</caption>
                    <thead>
                      <tr className="text-white">
                        <td>HARGA</td>
                        <td>JUMLAH</td>
                        <td>TOTAL</td>
                      </tr>
                    </thead>
                </table>
                <TabelBeli Judul="BELI" />
              </div>

              <div className="col-6 col-sm-12 col-xs-12 col-md-6">
                <table className="table table-borderless" style={{margin:0}}>
                    <caption>Daftar Jual</caption>
                    <tr className="text-white">
                      <td>HARGA</td>
                      <td>JUMLAH</td>
                      <td>TOTAL</td>
                    </tr>
                </table>
                <TabelJual Judul="JUAL" />
              </div>
            </div>


          <div className="row m-1" style={{backgroundColor:"#252525"}}>
            <div className="col-6">
              <FormJual />
            </div>
            <div className="col-6">
              <FormBeli />
            </div>
          </div>

        </div>
      </Row>

      <div className="row m-3" style={{height:"100%"}}>

        <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
          <TabelHistory />
        </div>

        <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6" style={{backgroundColor:"#252525"}}>
          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-6">
              <table className="table table-borderless">
                <thead className="text-white">
                  <tr>
                    <td colSpan="3" align="center" style={{backgroundColor:"#2d2c31"}}>LIST CRYPTO</td>
                  </tr>
                  <tr>
                    <td>PAIR</td>
                    <td>HARGA</td>
                    <td>VOLUME</td>
                  </tr>
                </thead>
                <tbody className="text-white">
                  <tr>
                    <td><div className="d-block text-justify" style={{fontSize:"smaller",wordBreak:"break-word"}}>BTC/CODEO</div></td>
                    <td><div className="d-block text-justify" style={{fontSize:"smaller",wordBreak:"break-word"}}>12,123,101</div></td>
                    <td><div className="d-block text-justify" style={{fontSize:"smaller",wordBreak:"break-word"}}>123,123,456,789,101</div></td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-6">
              <table className="table table-borderless">
                <thead className="text-white">
                  <tr>
                    <td colSpan="3" align="center" style={{backgroundColor:"#2d2c31"}}>PERDAGANGAN TERKINI</td>
                  </tr>
                  <tr>
                    <td>HARGA</td>
                    <td>JUMLAH</td>
                    <td>WAKTU</td>
                  </tr>
                </thead>
                <tbody className="text-white">
                  <tr>
                    <td style={{fontSize:"smaller"}}>0</td>
                    <td style={{fontSize:"smaller"}}>0</td>
                    <td style={{fontSize:"smaller"}}>0</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

    </Container>
  );
}