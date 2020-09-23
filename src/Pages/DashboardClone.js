import React from "react";
import { Container,Row,Col } from "reactstrap";

import { SocketIO, uuid } from "../Fungsi/soket";

import { useDispatch,useSelector } from "react-redux";
import TabelJual from "../Component/TabelJual";
import FormBeli from "../Form/formBeli";
import FormJual from "../Form/formJual";

import TradingViewWidget,{ Themes } from 'react-tradingview-widget';

import TabelBeli from "../Component/TabelBeli";
import { setInfoUser } from "../Store/actionRedux/infoUserRedux";
import Toast from "cogo-toast";

import "./dclone.css";

export default function Dashboard() {

  let dispatch = useDispatch();
  const {username} = useSelector(state => state.UserState.User?state.UserState.User.infoUser?state.UserState.User.infoUser:{}:{});
 
  React.useEffect(()=>{
    let {id}=uuid||{};
    SocketIO.emit("soketAuth", JSON.stringify({ token: localStorage.getItem("token") }));
    SocketIO.on(`infoUser${id}`, (data) => {
      let user = JSON.parse(data);
      dispatch(setInfoUser({ User: user }));
      if(user.message){
            Toast.success(user.message);
          }
        });
  },[dispatch]);
        
        const App = () => (
          <TradingViewWidget 
            symbol="IDX:PGAS"
            theme={Themes.DARK}
            locale="id"
            autosize 
          />
        );


  return ( 
    <Container fluid>
      <Row>
        <div className="col-4">
            <div className="d-block m-3">
                ARCHIDAX
            </div>
        </div>
        <div className="col-8">
          <header>
              <div className="d-flex justify-content-end">
                  <div className="d-block m-3">
                      <button className="btn btn-outline-success">Masuk</button>
                  </div>
                  <div className="d-block m-3">
                      <button className="btn btn-outline-success">Daftar</button>
                  </div>
              </div>
          </header>
        </div>
      </Row>
      <Row>
        <div className="col-6">
          1
        </div>
        <div className="col-6" style={{backgroundColor:"#252525"}}>
          <section>
            <div className="d-flex justify-content-between mt-3">
              <div className="d-block">
                  <div className="d-block">
                    <div>Harga Terakhir</div>
                  </div>
                  <div className="d-block">
                    <div>1122</div>
                  </div>
              </div>
              <div className="d-block">
                  <div className="d-block">
                    <div>Tertinggi</div>
                  </div>
                  <div className="d-block">
                    <div>790</div>
                  </div>
              </div>
              <div className="d-block">
                  <div className="d-block">
                    <div>Terendah</div>
                  </div>
                  <div className="d-block">
                    <div>91</div>
                  </div>
              </div>
              <div className="d-block">
                  <div className="d-block">
                    <div>Volume</div>
                  </div>
                  <div className="d-block">
                    <div>72,392,239</div>
                  </div>
              </div>
            </div>
          </section>

          <section>
            <div className="row d-flex justify-content-between mt-1">
              <div className="col-6 col-sm-12 col-xs-12 col-md-6">
                <table className="table table-borderless" style={{margin:0}}>
                    <tr className="text-white">
                      <td>HARGA</td>
                      <td>JUMLAH</td>
                      <td>TOTAL</td>
                    </tr>
                </table>
                <TabelBeli Judul="BELI" />
              </div>

              <div className="col-6 col-sm-12 col-xs-12 col-md-6">
                <table className="table table-borderless" style={{margin:0}}>
                    <tr className="text-white">
                      <td>HARGA</td>
                      <td>JUMLAH</td>
                      <td>TOTAL</td>
                    </tr>
                </table>
                <TabelJual Judul="JUAL" />
               </div>

            
            </div>
          </section>


          <section>
            <div className="mt-3">
              <div className="row">
                <div className="col-6">
                  <FormJual />
                </div>
                <div className="col-6">
                  <FormBeli />
                </div>
              </div>
            </div>
          </section>

        </div>
      </Row>

    </Container>
  );
}