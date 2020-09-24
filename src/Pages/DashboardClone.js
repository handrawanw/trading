import React from "react";
import { Container,Row,Col } from "reactstrap";

import { SocketIO, uuid } from "../Fungsi/soket";

import { useDispatch,useSelector } from "react-redux";
import TabelJual from "../Component/TabelJual";
import FormBeli from "../Form/formBeli";
import FormJual from "../Form/formJual";

import Trafik from "../Component/trafik.js";

import TabelBeli from "../Component/TabelBeli";
import TabelHistory from "../Component/TabelHistory";

import Chart from "../Chart/LineChartJual";
import { setInfoUser } from "../Store/actionRedux/infoUserRedux";
import Toast from "cogo-toast";

import Logout from "../Form/ButtonLogout";
import {setChart} from "../Store/actionRedux/historyTrade";

import Auth from "../Auth";

import {useHistory} from "react-router-dom";

import jwt from "jwt-decode";

import TradingViewWidget, { Themes } from 'react-tradingview-widget';

import "./dclone.css";

export default function Dashboard() {

  let {id}=localStorage.getItem("token")?jwt(localStorage.getItem("token")):{};

  let history=useHistory();
  let dispatch = useDispatch();
  const {username} = useSelector(state => state.UserState.User?state.UserState.User.infoUser?state.UserState.User.infoUser:{}:{});
 
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
      <Row>
        <div className="col-4" style={{backgroundColor:"#2d2c31"}}>
            <div className="d-block m-3">
                Hello {username}
            </div>
        </div>
        <div className="col-8" style={{backgroundColor:"#2d2c31"}}>
          <header>
              <div className="d-flex justify-content-end">
                  <div className="d-block m-3">
                      <Logout />
                  </div>
                  <div className="d-block m-3">
                      <button className="btn btn-outline-success">Daftar</button>
                  </div>
              </div>
          </header>
        </div>
      </Row>

      <div className="row m-3">
        <div className="col-12">
          <Trafik />
        </div>
      </div>

      <Row className="m-3">
        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6 col-xl-6" >

          <App />
          
        </div>

        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6 col-xl-6" style={{backgroundColor:"#252525"}}>

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

      <div className="row m-3">
        <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
          <TabelHistory />
        </div>
        <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6" style={{backgroundColor:"#252525"}}>
          <div className="row">
            <div className="col-sm-6">
              <table className="table table-borderless">
                <thead className="text-white">
                  <tr>
                    <td>PAIR</td>
                    <td>HARGA</td>
                    <td>VOLUME</td>
                  </tr>
                </thead>
              </table>
              <table className="table table-borderless">
                <tbody className="text-white">
                  <tr>
                    <td>0</td>
                    <td>0</td>
                    <td>0</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="col-sm-6">
              <table className="table table-borderless">
                <thead className="text-white">
                  <tr>
                    <td>HARGA</td>
                    <td>JUMLAH</td>
                    <td>WAKTU</td>
                  </tr>
                </thead>
              </table>
              <table className="table table-borderless">
                <tbody className="text-white">
                  <tr>
                    <td>0</td>
                    <td>0</td>
                    <td>0</td>
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