import React from 'react';

import { Container } from "reactstrap";

import "./Components.css";

function ComponentBeli({ Judul, Jumlah, Beli, Total }) {
  
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

