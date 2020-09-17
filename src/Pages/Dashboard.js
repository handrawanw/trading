import React from "react";
import { Container,Row,Col } from "reactstrap";

import TabelJualBeli from "../Component/ComponentTabel";

import FormBeli from "../Form/formBeli";
import FormJual from "../Form/formJual";

import ButtonLogout from "../Form/ButtonLogout";

import History from "../Component/ComponentHistory";

import { SocketIO } from "../Fungsi/soket";

import { useDispatch,useSelector } from "react-redux";
import { setInfoUser } from "../Store/actionRedux/infoUserRedux";

export default function Dashboard() {
  
  let dispatch = useDispatch();
  const {username} = useSelector(state => state.UserState.User?state.UserState.User.infoUser?state.UserState.User.infoUser:{}:{});

  React.useEffect(() => {
    SocketIO.emit("soketAuth", JSON.stringify({ token: localStorage.getItem("token") }));
    SocketIO.on("infoUser", (data) => {
      let user = JSON.parse(data);
      dispatch(setInfoUser({ User: user }));
    });
  }, [dispatch])
  
  return ( 
    <Container fluid>
       <Row>
        <Col xs="12" sm="12" md="12" lg="12" xl="12">
          <div className="mt-1"></div>
          <div align="center">
            <h2>{username}</h2>
            <ButtonLogout />
          </div>
        </Col>d
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