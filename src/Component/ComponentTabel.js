import React from 'react';

import { Container } from "reactstrap";

import { useDispatch,useSelector } from "react-redux";

import { SetTradeBeliAll, SetTradeJualAll } from "../Store/actionRedux/TabelMarketAction";

import { SocketIO } from "../Fungsi/soket";

import "./Components.css";

function ComponentBeli({ Data, Judul, Jumlah, Beli, Total }) {

  let dispatch = useDispatch();

  let redux = useSelector((state) => state);

  React.useEffect(() => {
    SocketIO.on("tradeAll", (data) => {
      if (Judul.toUpperCase() === "JUAL") {
        dispatch(SetTradeJualAll({ market: JSON.parse(data) }));
      } else if (Judul.toUpperCase() === "BELI") {
        dispatch(SetTradeBeliAll({ market: JSON.parse(data) }));
      } else {
        dispatch(SetTradeBeliAll({ market: [] }));
      }
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
                <h6>JUMLAH</h6>
              </div>
              <div className="d-block">
                <div>10</div>
                <div>12</div>
                <div>10</div>
                <div>12</div>
                <div>10</div>
                <div>12</div>
                <div>10</div>
                <div>12</div>
                <div>10</div>
                <div>12</div>
                <div>10</div>
                <div>12</div>
                <div>10</div>
                <div>12</div>
                <div>10</div>
                <div>12</div>
                <div>10</div>
                <div>12</div>
                <div>10</div>
                <div>12</div>
              </div>
              
            </div>

            <div>
              <div className="d-block m-2 scrolStatic">
                <h6>{Judul}</h6>
              </div>
              <div className="d-block">
                <div>10</div>
                <div>12</div>
                <div>10</div>
                <div>12</div>
                <div>10</div>
                <div>12</div>
                <div>10</div>
                <div>12</div>
                <div>10</div>
                <div>12</div>
                <div>10</div>
                <div>12</div>
                <div>10</div>
                <div>12</div>
                <div>10</div>
                <div>12</div>
                <div>10</div>
                <div>12</div>
                <div>10</div>
                <div>12</div>
              </div>
              
            </div>

            <div>
              <div className="d-block m-2 scrolStatic">
                <h6>TOTAL</h6>
              </div>
              <div className="d-block">
                <div>10</div>
                <div>12</div>
                <div>10</div>
                <div>12</div>
                <div>10</div>
                <div>12</div>
                <div>10</div>
                <div>12</div>
                <div>10</div>
                <div>12</div>
                <div>10</div>
                <div>12</div>
                <div>10</div>
                <div>12</div>
                <div>10</div>
                <div>12</div>
                <div>10</div>
                <div>12</div>
                <div>10</div>
                <div>12</div>
              </div>
            </div>

          </div>
        </aside>
      </div>
    </Container>
  );
}

export default ComponentBeli;

