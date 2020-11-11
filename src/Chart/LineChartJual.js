import React from "react";
import Chart from "react-apexcharts";

import {useSelector} from "react-redux";

import {RandomTrade} from "./fungsi";

function AppChart(){

  const {chart}=useSelector((state)=>state.storeHistory);

  const settings={
    series: [{
      name: 'candle',
      data: RandomTrade(),
    }],

    options: {
      chart: {
        type: 'candlestick',
        height: '100%', 
      },
      title: {
        text: 'CandleStick Chart - Category X-axis',
        align: 'left',
      },
    
      annotations: {
        xaxis: [
          {
            // x: 'Oct 06 14:00',
            borderColor: '#00E396',
            label: {
              borderColor: '#00E396',
              style: {
                fontSize: '12px',
                color: '#fff',
                background: '#00E396'
              },
              orientation: 'horizontal',
              offsetY: 1,
              text: ''
            }
          }
        ]
      },
      tooltip: {
        enabled: true,
        x: {
          format: 'dd MMM yyyy'
        }
      },
      xaxis: {
        type: 'category',
        labels: {
          formatter: function (value, timestamp) {
            return new Date(value).toLocaleTimeString();
          },
        },
        tickPlacement: 'on'
      },
      yaxis: {
        tooltip: {
          enabled: false,
        },
        formatter: function (value) {
          return value + "$";
        }
      }
    },
    dataLabels: {
      enabled: true,
      offsetY: -25,
      style: {
        fontSize: "15px",
        colors: ["#304758"],
        fontSize: "14px",
        fontFamily: "Poppins, sans-serif",
      }
    },

    tooltip: {
      enabled: true,
      shared: true,
      followCursor: true,
      x: {
        show: false
      },
      style: {
        fontSize: "12px",
        fontFamily: "Poppins, sans-serif"
      }
    },
    
    grid:{
      position: 'front',
      xaxis: {
        lines: {
          show: false
        }
      },
      yaxis: {
        lines: {
          show: false
        }
      },
      row: {
        colors: [
          '#ffffff',
          '#eeeeee'
        ],
        opacity: 1,
      },
      borderColor: '#cccccc'
    },
  
  }
  
  return (
    <Chart style={{width:'100%',height:'100%'}} options={settings.options} style={{color:"black"}} series={settings.series} type="candlestick" width='100%' height='auto' />
  );
  
}

export default AppChart;