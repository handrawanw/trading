import React from "react";
import Chart from 'kaktana-react-lightweight-charts';

import {createChart} from "lightweight-charts";

let datax=[
    { time: '2018-10-19', open: 180.34, high: 180.99, low: 170.57, close: 172.85 },
    { time: '2018-10-22', open: 180.82, high: 181.40, low: 177.56, close: 178.75 },
    { time: '2018-10-23', open: 180.34, high: 182.19, low: 170.57, close: 179.85 },
    { time: '2018-10-24', open: 180.82, high: 181.40, low: 177.56, close: 180.75 },
    { time: '2018-10-25', open: 180.34, high: 183.99, low: 170.57, close: 181.85 },
    { time: '2018-10-26', open: 180.82, high: 184.40, low: 177.56, close: 182.75 },
    { time: '2018-10-27', open: 180.34, high: 185.19, low: 170.57, close: 183.85 },
    { time: '2018-10-28', open: 180.82, high: 186.40, low: 177.56, close: 184.75 },
    { time: '2018-10-29', open: 180.82, high: 186.40, low: 177.56, close: 184.75 },
    { time: '2018-10-30', open: 180.82, high: 186.40, low: 177.56, close: 184.75 },
  ];


export default function App(props){

  let {data,TOKEN}=props;

  let settings = {
    options: {

      position:"belowBar",

      alignLabels: true,
      localization: {
        dateFormat: 'yyyy-MM-dd',
        locale: 'id-ID',
      },
      
      layout: {
        backgroundColor: '#121115',
        // backgroundColor:'#ffffff',
        textColor: '#696969',
        fontSize: 14,
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
            width: 1,
            style: 1,
            visible: true,
            labelVisible: false,
        },
        horzLine: {
            color: '#606060',
            width: 1,
            style: 1,
            visible: true,
            labelVisible: true,
        },
        mode: 1,
      },

      priceScale: {
        position: 'left',
        mode: 1,
        autoScale: true,
        invertScale: false,
        alignLabels: true,
        borderVisible: true,
        borderColor: '#24273E',
        scaleMargins: {
            top: 0.30,
            bottom: 0.30,
        },
      },

      timeScale: {
        rightOffset: 12,
        barSpacing: 10,
        fixLeftEdge: true,
        lockVisibleTimeRangeOnResize: true,
        rightBarStaysOnScroll: true,
        borderVisible: false,
        borderColor: '#fff000',
        visible: true,
        timeVisible: true,
        secondsVisible: false,
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
          <Chart options={settings.options} from={0} to={10} darkTheme autoWidth autoHeight candlestickSeries={[{
            data:data,
          }]} />
      );
}
