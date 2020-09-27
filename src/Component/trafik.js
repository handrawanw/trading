import React from "react";

import {SocketIO} from "../Fungsi/soket";

export default function Trafik(){

    const [Data,setData]=React.useState(undefined);
    
    React.useEffect(()=>{
        SocketIO.on("trafikHariIni", (data) => {
          let dataTrafik=JSON.parse(data);
          if(dataTrafik){
            let {lastPrice,highPrice,lowPrice,volume}=dataTrafik;
            setData({
              lastPrice:lastPrice,
              highPrice:highPrice,
              lowPrice:lowPrice,
              volume:volume
            });
          }
        });
    },[setData]);

    return (
            <div className="row p-1" style={{backgroundColor:"#252525"}}>

              <div className="col-xs-12 col-sm-12 col-md-6 col-lg-3 col-xl-3">
                <div className="d-block mt-2">
                    <div className="d-block">
                      <div>Harga Terakhir</div>
                    </div>
                    <div className="d-block">
                      <div>{Data?Data.lastPrice:0}</div>
                    </div>
                </div>
              </div>
              

              <div className="col-xs-12 col-sm-12 col-md-6 col-lg-3 col-xl-3">
                <div className="d-block mt-2">
                    <div className="d-block">
                      <div>Tertinggi</div>
                    </div>
                    <div className="d-block">
                      <div>{Data?Data.highPrice:0}</div>
                    </div>
                </div>
              </div>

              <div className="col-xs-12 col-sm-12 col-md-6 col-lg-3 col-xl-3">
                <div className="d-block mt-2">
                    <div className="d-block">
                      <div>Volume</div>
                    </div>
                    <div className="d-block">
                      <div>{Data?Data.volume:0}</div>
                    </div>
                </div>
              </div>

              <div className="col-xs-12 col-sm-12 col-md-6 col-lg-3 col-xl-3">
                <div className="d-block mt-1">
                    <div className="d-block">
                      <div>Terendah</div>
                    </div>
                    <div className="d-block">
                      <div>{Data?Data.lowPrice:0}</div>
                    </div>
                </div>
              </div>

            </div>
    );
}