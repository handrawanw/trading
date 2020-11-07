import React from "react";
import { Container,Row,Col } from "reactstrap";
import Toast from "cogo-toast";

import TabelJualBeli from "../Component/ComponentTabel";

import FormBeli from "../Form/formBeli";
import FormJual from "../Form/formJual";

import ButtonLogout from "../Form/ButtonLogout";

import History from "../Component/ComponentHistory";

import ChartJual from "../Chart/LineChartJual";

import { SocketIO, uuid } from "../Fungsi/soket";

import { useDispatch,useSelector } from "react-redux";
import { setInfoUser } from "../Store/actionRedux/infoUserRedux";
import {setChart} from "../Store/actionRedux/historyTrade";


export default function Dashboard() {
  
  let dispatch = useDispatch();
  const {username} = useSelector(state => state.UserState.User?state.UserState.User.infoUser?state.UserState.User.infoUser:{}:{});
  
  React.useEffect(() => {
    SocketIO.emit("soketAuth", JSON.stringify({ token: localStorage.getItem("token") }));
    let {id}=uuid||{};
    SocketIO.on(`infoUser${id}`, (data) => {
      let user = JSON.parse(data);
      dispatch(setInfoUser({ User: user }));
          if(user.message){
            Toast.success(user.message);
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
  }, [dispatch]);
  
  return ( 
    <Container fluid>

      <Row>
        <Col xs="12" sm="12" md="12" lg="12" xl="12">
          <div className="d-inline-block">
            <div>wawan</div>
          </div>
        </Col>
      </Row>

      <Row>
        <Col xs="12" sm="12" md="12" lg="12" xl="12">
          <div className="mt-1"></div>
          <div align="center">
            <h2>MARKET</h2>
          </div>
        </Col>
      </Row>

      <Row>
        <Col xs="12" sm="12" md="12" lg="12" xl="12">
          <div className="mt-1"></div>
          <div align="center">
            <h2>{username?`Hello, ${username}`:"-"}</h2>
            <ButtonLogout />
          </div>
        </Col>
      </Row>

      <Row>
        <Col xs="12" sm="12" md="12" lg="12" xl="12">
            <ChartJual />
        </Col>
      </Row>

      <Row>
        <Col xs="12" sm="12" md="6" lg="6" xl="6">
            <TabelJualBeli Judul="JUAL" TabelTipe="TradeJual" /> 
        </Col>
        <Col xs="12" sm="12" md="6" lg="6" xl="6">
            <TabelJualBeli Judul="BELI" TabelTipe="TradeBeli" /> 
        </Col>
      </Row>
      <Row>
        <Col xs="12" sm="12" md="6" lg="6" xl="6">
          <FormBeli />
        </Col> 
        <Col xs="12" sm="12" md="6" lg="6" xl="6">
          <FormJual />
        </Col>
      </Row>
      <Row>
        <Col xs="12" sm="12" md="12" lg="12" xl="12">
          <History />
        </Col>
      </Row>
    </Container>
  );
}