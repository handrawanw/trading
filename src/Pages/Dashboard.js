import React from "react";
import { Container,Row,Col } from "reactstrap";

import TabelJualBeli from "../Component/ComponentTabel";

import FormBeli from "../Form/formBeli";
import FormJual from "../Form/formJual";

import History from "../Component/ComponentHistory";

import {SocketIO} from "../Fungsi/soket";

export default function Dashboard() {
  
  React.useEffect(() => {
    SocketIO.emit("sambungkan", JSON.stringify({ nama: "wawan" }))
  },[])
  
  return (
    <Container>
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
            <TabelJualBeli Judul="JUAL" /> 
        </Col>
        <Col xs="12" sm="12" md="6" lg="6" xl="6">
            <TabelJualBeli Judul="BELI" /> 
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