import React from 'react';

import { Container } from "reactstrap";

import { useSelector } from "react-redux";

import "./Components.css";

function ComponentBeli({ Judul }) {

  const {username} = useSelector(state => state.UserState.User?state.UserState.User.infoUser:{});
  
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
                <div>10</div>
                <div>12</div>
                <div>10</div>
              </div>
              
            </div>

            <div>
              <div className="d-block m-2 scrolStatic">
                <h6>Beli</h6>
              </div>
              <div className="d-block">
                <div>10</div>
                <div>12</div>
                <div>10</div>
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
              </div>
            </div>

            <div>
              <div className="d-block m-2 scrolStatic">
                <h6>STATUS</h6>
              </div>
              <div className="d-block">
                <div>PENDING</div>
                <div>PENDING</div>
                <div>PENDING</div>
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

