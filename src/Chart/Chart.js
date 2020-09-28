import React from "react";
import Chart from 'kaktana-react-lightweight-charts';

let data=[
    { time: '2018-10-19', open: 180.34, high: 180.99, low: 170.57, close: 172.85 },
    { time: '2018-10-22', open: 180.82, high: 181.40, low: 177.56, close: 178.75 },
    { time: '2018-10-23', open: 180.34, high: 182.19, low: 170.57, close: 179.85 },
    { time: '2018-10-24', open: 180.82, high: 181.40, low: 177.56, close: 180.75 },
    { time: '2018-10-25', open: 180.34, high: 180.99, low: 170.57, close: 172.85 },
    { time: '2018-10-26', open: 180.82, high: 181.40, low: 177.56, close: 178.75 },
    { time: '2018-10-27', open: 180.34, high: 182.19, low: 170.57, close: 179.85 },
    { time: '2018-10-28', open: 180.82, high: 181.40, low: 177.56, close: 180.75 },
  ];


export default function App(props){

  let {data,TOKEN}=props;

  let settings = {
    options: {
      alignLabels: true,
      timeScale: {
        rightOffset: 10,
        barSpacing: 10,
        fixLeftEdge: true,
        lockVisibleTimeRangeOnResize: true,
        rightBarStaysOnScroll: true,
        borderVisible: false,
        borderColor: "#fff000",
        visible: true,
        timeVisible: false,
        secondsVisible: false,
      },
      position: 'right',
      mode: 6,
      autoScale: true,
      invertScale: true,
      borderVisible: false,
      borderColor: '#555ffd',
  
      layout: {
        backgroundColor: '#121115',
        textColor: '#696969',
        fontSize: 16,
        fontFamily: 'Calibri',
    },
  
    handleScroll: {
      mouseWheel: true,
      pressedMouseMove: true,
    },
    handleScale: {
        axisPressedMouseMove: true,
        mouseWheel: true,
        pinch: true,
    },
  
    crosshair: {
      vertLine: {
          color: '#606060',
          width: 0.5,
          style: 1,
          visible: true,
          labelVisible: false,
      },
      horzLine: {
          color: '#606060',
          width: 0.5,
          style: 0,
          visible: true,
          labelVisible: true,
      },
      mode: 1,
    },
  
      watermark: {
        color: 'rgba(112,112,112,121)',
        visible: true,
        padding:5,
        text: "   "+TOKEN+"   ",
        fontSize: 18,
        horzAlign: 'left',
        vertAlign: 'bottom',
      },
    },

    // candlestickSeries: [{
    //   data:[],
    // }]
  }


      return (
          <Chart options={settings.options} darkTheme autoWidth autoHeight candlestickSeries={[{
            data:data,
          }]} />
      );
}
