import React from "react";
import { Container,Row } from "reactstrap";

import { SocketIO } from "../Fungsi/soket";

import { useDispatch,useSelector } from "react-redux";
import TabelJual from "../Component/TabelJual";
import FormBeli from "../Form/formBeli";
import FormJual from "../Form/formJual";

import TabelBeli from "../Component/TabelBeli";
import TabelHistory from "../Component/TabelHistory";

import { setInfoUser } from "../Store/actionRedux/infoUserRedux";
import Toast from "cogo-toast";

import {setChart} from "../Store/actionRedux/historyTrade";

import Auth from "../Auth";

import {useHistory,useParams} from "react-router-dom";

import jwt from "jwt-decode";

import Header from "../Component/Header";
import TrafikHarga from "../Component/TrafikHarga";

import LiveMarket from "../Component/liveMarket";

import ChartTrading from "../Chart/ApexChart";

import {setChartTradingLightweight} from "../Store/actionRedux/historyTrade";

import "./dclone.css";
import ListCrypto from "../Component/ListCrypto";

export default function Dashboard(){
  let {crypto}=useParams();

  let {id}=localStorage.getItem("token")?jwt(localStorage.getItem("token")):{};
  let history=useHistory();
  let dispatch = useDispatch();
  //let {chart}=useSelector((state)=>state.storeHistory);
  
  React.useEffect(()=>{
    SocketIO.emit("soketAuth", JSON.stringify({ token: localStorage.getItem("token"),typeChart:crypto }));
  },[crypto]);

  React.useLayoutEffect(()=>{
    if(id){
      SocketIO.on(`infoUser${id}`, (data) => {
        let user = JSON.parse(data);
        if(user.infoUser){
          dispatch(setInfoUser({ User: user }));
          if(user.infoUser._id===id){
            if(user.message){
              Toast.success(user.message);
            }
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
        let labelOld=History?History.filter((item)=>item.tipeHistori?item:null).sort((a,b)=>b.createdAt-a.createdAt):[];
        let labelnew=[],dataBeli=[],dataJUal=[];
        labelOld.forEach((item)=> {
          labelnew.push(new Date(item.createdAt).toLocaleTimeString()+" "+new Date(item.createdAt).toLocaleDateString())
          if(item.tipeHistori.toUpperCase()==="BELI"){
            dataBeli.push(item.latestHarga);
          }else{
            dataJUal.push(item.latestHarga);
          }
        });
        dispatch(setChart({LabelNew:labelnew,Data:History.reverse(),DataBeli:dataBeli,lastBeli:dataBeli[dataBeli.length-1],DataJual:dataJUal,lastJual:dataJUal[dataJUal.length-1]}));
      })
    }
  },[dispatch,id,history]);

  React.useLayoutEffect(()=>{
    SocketIO.on("chartTerkini",(data)=>{
      let {chart}=JSON.parse(data);
      let chartMap=chart.map((item)=>{
        return {
          time:new Date(item.createdAt).toUTCString(),
          open:item.high,
          high:item.high,
          low:item.low,
          close:item.last,
          value:item.last,
          volume:1233333,
        };
      });
      dispatch(setChartTradingLightweight({market:!chartMap||chartMap.length<=0?[]:chartMap}));
    });
  },[dispatch]);

  return ( 
    <Container style={{fontSize:"smaller",wordBreak:"break-word"}} fluid>

      <Header />

      <TrafikHarga />

      <Row className="p-1">
        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-6" style={{padding:0}}>

          <ChartTrading />

        </div>

        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-6" style={{backgroundColor:"#252525"}}>

            <div className="row d-flex justify-content-between">

               <div className="col-6 col-sm-12 col-xs-12 col-md-6 p-1">
                <table className="table table-borderless" style={{margin:0,backgroundColor:"#2d2c31",fontSize:"smaller",wordBreak:"break-word"}}>
                    <caption className="p-1">Daftar Beli</caption>
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

              <div className="col-6 col-sm-12 col-xs-12 col-md-6 p-1">
                <table className="table table-borderless" style={{margin:0,backgroundColor:"#2d2c31",fontSize:"smaller",wordBreak:"break-word"}}>
                    <caption className="p-1">Daftar Jual</caption>
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

      <div className="row" style={{height:"100%"}}>

        <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 p-1" style={{padding:0}}>
          <TabelHistory />
        </div>

        <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 p-1" style={{backgroundColor:"#252525",padding:0}}>
          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-6">
              <ListCrypto />
            </div>

            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-6">
              <LiveMarket />
            </div>
          </div>
        </div>
      </div>

    </Container>
  );
}