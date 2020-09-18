import React from 'react';

import { Container } from "reactstrap";

import { SocketIO } from "../Fungsi/soket";

import { useSelector,useDispatch } from "react-redux";

import {SetTradeAll} from "../Store/actionRedux/TabelMarketAction";

import "./Components.css";

function ComponentBeli({ Judul }) {

  let dispatch=useDispatch();
  let { market } = useSelector((state) => state.TradeState.TradeMe);

  React.useEffect(() => {
    SocketIO.on("tradeMe", (data) => {
        let tradeMe=JSON.parse(data).tradeMe;
        let filterSort=tradeMe.sort((a,b)=>b.harga-a.harga);
        dispatch(SetTradeAll({market:filterSort}));
    });
  }, [Judul,dispatch]);

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
                <h6>Jumlah</h6>
              </div>
              <div className="d-block">
                  {
                    market?market.length>0?market.map((item) => {
                      return (
                        <div>{item.tipe}</div>
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
                      <div>{item.harga}</div>
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
                        <div>{item.total}</div>
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
                      <div>PENDING</div>
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
                <div className="d-block">
                  <button className="btn btn-danger">
                    &times;
                  </button>
                </div>
                <div className="d-block">
                  <button className="btn btn-danger">
                    &times;
                  </button>
                </div>
              </div>
            </div>

          </div>
        </aside>
      </div>
    </Container>
  );
}

export default ComponentBeli;

