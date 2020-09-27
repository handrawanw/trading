import React from "react";
import Chart from 'kaktana-react-lightweight-charts';

import {useDispatch, useSelector} from "react-redux";
import {setChartTradingLightweight} from "../Store/actionRedux/historyTrade";
import {SocketIO} from "../Fungsi/soket";

let data=[

    { time: '2018-10-19', open: 180.34, high: 180.99, low: 170.57, close: 172.85 },
    { time: '2018-10-22', open: 180.82, high: 181.40, low: 177.56, close: 178.75 },
    { time: '2018-10-23', open: 180.34, high: 182.19, low: 170.57, close: 179.85 },
    { time: '2018-10-24', open: 180.82, high: 181.40, low: 177.56, close: 180.75 },
    
  ];

export default function App(){

  let dispatch=useDispatch();
  let {chart}=useSelector((state)=>state.storeHistory);

  let settings = {
    options: {
      alignLabels: true,
      timeScale: {
        rightOffset: 15,
        barSpacing: 10,
        fixLeftEdge: true,
        lockVisibleTimeRangeOnResize: true,
        rightBarStaysOnScroll: true,
        borderVisible: false,
        borderColor: "#fff000",
        visible: true,
        timeVisible: true,
        secondsVisible: false,
      },
      position: 'right',
      mode: 2,
      autoScale: false,
      invertScale: true,
      borderVisible: false,
      borderColor: '#555ffd',
      scaleMargins: {
          top: 0.30,
          bottom: 0.25,
      },
    },
    candlestickSeries: [{
      data:[],
    }]
  }

  chart.forEach((item)=>{
    settings.candlestickSeries[0].data.push({
      time:new Date(item.createdAt).toLocaleDateString()+" "+new Date(item.createdAt).toLocaleTimeString(),
      last:item.last,
      open:item.low,
      high:item.high,
      low:item.low,
      close:item.last,
    });
  });

  React.useEffect(()=>{

    SocketIO.on("chartTerkini",(data)=>{
      let {chart}=JSON.parse(data);
      dispatch(setChartTradingLightweight({market:!chart||chart.length<=0?[]:chart}));
    });
  },[dispatch,settings]);
    
      return (
        <Chart options={settings.options} darkTheme autoWidth autoHeight candlestickSeries={settings.candlestickSeries} />
      );
}