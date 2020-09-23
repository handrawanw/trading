import React from "react";
import { Container,Row,Col } from "reactstrap";
import Toast from "cogo-toast";

import TabelJualBeli from "../Component/ComponentTabel";

import FormBeli from "../Form/formBeli";
import FormJual from "../Form/formJual";

import "./dclone.css";

export default function Dashboard() {
  
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
                <div className="overScroll">
                <table className="table table-borderless">
                  <tbody align="left">
                    <tr>
                      <td className="text-success">189</td>
                      <td className="text-success">20</td>
                      <td className="text-success">30</td>
                    </tr>
                    <tr>
                      <td className="text-success">189</td>
                      <td className="text-success">20</td>
                      <td className="text-success">30</td>
                    </tr>
                    <tr>
                      <td className="text-success">189</td>
                      <td className="text-success">20</td>
                      <td className="text-success">30</td>
                    </tr>
                    <tr>
                      <td className="text-success">189</td>
                      <td className="text-success">20</td>
                      <td className="text-success">30</td>
                    </tr>
                    <tr>
                      <td className="text-success">189</td>
                      <td className="text-success">20</td>
                      <td className="text-success">30</td>
                    </tr>
                    <tr>
                      <td className="text-success">189</td>
                      <td className="text-success">20</td>
                      <td className="text-success">30</td>
                    </tr>
                    <tr>
                      <td className="text-success">189</td>
                      <td className="text-success">20</td>
                      <td className="text-success">30</td>
                    </tr>
                    <tr>
                      <td className="text-success">189</td>
                      <td className="text-success">20</td>
                      <td className="text-success">30</td>
                    </tr>
                    <tr>
                      <td className="text-success">189</td>
                      <td className="text-success">20</td>
                      <td className="text-success">30</td>
                    </tr>
                    <tr>
                      <td className="text-success">189</td>
                      <td className="text-success">20</td>
                      <td className="text-success">30</td>
                    </tr>
                    <tr>
                      <td className="text-success">189</td>
                      <td className="text-success">20</td>
                      <td className="text-success">30</td>
                    </tr>
                    <tr>
                      <td className="text-success">189</td>
                      <td className="text-success">20</td>
                      <td className="text-success">30</td>
                    </tr>
                    <tr>
                      <td className="text-success">189</td>
                      <td className="text-success">20</td>
                      <td className="text-success">30</td>
                    </tr>
                    <tr>
                      <td className="text-success">189</td>
                      <td className="text-success">20</td>
                      <td className="text-success">30</td>
                    </tr>
                  </tbody>
                </table>
                </div>
              </div>

              <div className="col-6 col-sm-12 col-xs-12 col-md-6">
                <table className="table table-borderless" style={{margin:0}}>
                    <tr className="text-white">
                      <td>HARGA</td>
                      <td>JUMLAH</td>
                      <td>TOTAL</td>
                    </tr>
                </table>
                <div className="overScroll">
                <table className="table table-borderless">
                  <tbody align="left">
                    <tr>
                      <td className="text-danger">189</td>
                      <td className="text-danger">20</td>
                      <td className="text-danger">30</td>
                    </tr>
                    <tr>
                      <td className="text-danger">189</td>
                      <td className="text-danger">20</td>
                      <td className="text-danger">30</td>
                    </tr>

                    <tr>
                      <td className="text-danger">189</td>
                      <td className="text-danger">20</td>
                      <td className="text-danger">30</td>
                    </tr>
                    <tr>
                      <td className="text-danger">189</td>
                      <td className="text-danger">20</td>
                      <td className="text-danger">30</td>
                    </tr>
                    <tr>
                      <td className="text-danger">189</td>
                      <td className="text-danger">20</td>
                      <td className="text-danger">30</td>
                    </tr>
                    <tr>
                      <td className="text-danger">189</td>
                      <td className="text-danger">20</td>
                      <td className="text-danger">30</td>
                    </tr>
                    <tr>
                      <td className="text-danger">189</td>
                      <td className="text-danger">20</td>
                      <td className="text-danger">30</td>
                    </tr>
                    <tr>
                      <td className="text-danger">189</td>
                      <td className="text-danger">20</td>
                      <td className="text-danger">30</td>
                    </tr>
                    <tr>
                      <td className="text-danger">189</td>
                      <td className="text-danger">20</td>
                      <td className="text-danger">30</td>
                    </tr>
                    <tr>
                      <td className="text-danger">189</td>
                      <td className="text-danger">20</td>
                      <td className="text-danger">30</td>
                    </tr>
                    <tr>
                      <td className="text-danger">189</td>
                      <td className="text-danger">20</td>
                      <td className="text-danger">30</td>
                    </tr>
                    <tr>
                      <td className="text-danger">189</td>
                      <td className="text-danger">20</td>
                      <td className="text-danger">30</td>
                    </tr>

                  </tbody>
                </table>
                </div>
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