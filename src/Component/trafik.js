import React from "react";

import {SocketIO} from "../Fungsi/soket";

export default function Trafik(){

    const [Data,setData]=React.useState(undefined);
    
    React.useEffect(()=>{
        SocketIO.on("trafikHariIni", (data) => {
            let {hargaTerakhir,hargaTertinggi,hargaTerendah,volume}=JSON.parse(data);
            setData({
                hargaTerakhir:hargaTerakhir.hargaDeal,
                hargaTertinggi:hargaTertinggi.hargaDeal,
                hargaTerendah:hargaTerendah.hargaDeal,
                volume:volume
            });
        });
    },[setData]);

    return (
            <div className="row" style={{backgroundColor:"#252525"}}>

              <div className="col-xs-12 col-sm-6 col-md-6 col-md-6 col-lg-6 col-xl-6">
                <div className="d-block mt-2">
                    <div className="d-block">
                      <div>Harga Terakhir</div>
                    </div>
                    <div className="d-block">
                      <div>{Data?Data.hargaTerakhir:0}</div>
                    </div>
                </div>
              </div>
              

              <div className="col-xs-12 col-sm-6 col-md-6 col-md-6 col-lg-6 col-xl-6">
                <div className="d-block mt-2">
                    <div className="d-block">
                      <div>Tertinggi</div>
                    </div>
                    <div className="d-block">
                      <div>{Data?Data.hargaTertinggi:0}</div>
                    </div>
                </div>
              </div>

              <div className="col-xs-12 col-sm-6 col-md-6 col-md-6 col-lg-6 col-xl-6">
                <div className="d-block mt-2">
                    <div className="d-block">
                      <div>Volume</div>
                    </div>
                    <div className="d-block">
                      <div>{Data?Data.volume:0}</div>
                    </div>
                </div>
              </div>

              <div className="col-xs-12 col-sm-6 col-md-6 col-md-6 col-lg-6 col-xl-6">
                <div className="d-block mt-1">
                    <div className="d-block">
                      <div>Terendah</div>
                    </div>
                    <div className="d-block">
                      <div>{Data?Data.hargaTerendah:0}</div>
                    </div>
                </div>
              </div>

            </div>
    );
}