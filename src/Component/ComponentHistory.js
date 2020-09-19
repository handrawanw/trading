import React from 'react';

import { Container } from "reactstrap";


import { useSelector } from "react-redux";

import {RefundSend} from "../Fungsi/refund";

import "./Components.css";

function ComponentBeli({ Judul }) {

  let { market } = useSelector((state) => state.TradeState.TradeMe);


  return (
    <Container fluid>
      <div className="d-block" align="center">
        <section>
          <h3>{Judul}</h3>
        </section>
        <aside>
          <div className="componentBeli overScrollBeli">

            <div>
              <div className="d-block m-2 scrolStatic">
                <h6>NO</h6>
              </div>
              <div className="d-block">
                  {
                    market?market.length>0?market.map((item,index) => {
                      return (
                      <div className="m-3 fontS">{index+1}</div>
                      )
                    }):"-":"-"
                  }
              </div>
              
            </div>

            <div>
              <div className="d-block m-2 scrolStatic">
                <h6>JUMLAH</h6>
              </div>
              <div className="d-block">
                {
                  market?market.length>0?market.map((item) => {
                    return (
                    <div className="m-3 fontS ">{item.jumlah}</div>
                    )
                  }):"-":"-"
                }
              </div>
            </div>

            <div>
              <div className="d-block m-2 scrolStatic">
                <h6>HARGA</h6>
              </div>
              <div className="d-block">
                {
                  market?market.length>0?market.map((item) => {
                    return (
                      <div className="m-3 fontS ">{item.harga}</div>
                    )
                  }):"-":"-"
                }
              </div>
              
            </div>

            <div>
              <div className="d-block m-2 scrolStatic">
                <h6>TOTAL</h6>
              </div>
              <div className="d-block">
                  {
                    market?market.length>0?market.map((item) => {
                      return (
                        <div className="m-3 fontS">{item.total}</div>
                      )
                    }):"-":"-"
                  }
              </div>
            </div>

            <div>
              <div className="d-block m-2 scrolStatic">
                <h6>TIPE</h6>
              </div>
              <div className="d-block">
                  {
                    market?market.length>0?market.map((item) => {
                      return (
                      <div className="m-3 fontS">{item.tipe}</div>
                      )
                    }):"-":"-"
                  }
              </div>
              
            </div>

            <div>
              <div className="d-block m-2 scrolStatic">
                <h6>STATUS</h6>
              </div>
              <div className="d-block">
                {
                  market?market.length>0?market.map(() => {
                    return (
                      <div className="m-3 fontS ">PENDING</div>
                    )
                  }):"-":"-"
                }
              </div>
            </div>
            

            <div>
              <div className="d-block m-2 scrolStatic">
                <h6>ACTION</h6>
              </div>
              <div className="d-block">

                {
                  market?market.length>0?market.map((item,index) => {
                    return (
                      <div key={index+1} className="d-block">
                      <button className="btn btn-success p-1 m-1" onClick={()=>RefundSend({DataRefund:item._id})}>
                         {index+1} <i className="fa fa-money" />
                      </button>
                      </div>
                    );
                  }):"-":"-"
                }

              </div>
            </div>

          </div>
        </aside>
      </div>
    </Container>
  );
}

export default ComponentBeli;

