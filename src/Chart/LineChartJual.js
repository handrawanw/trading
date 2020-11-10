import React from "react";
import Chart from "react-apexcharts";


import Data from "./chart.json";

function AppChart(){
  const settings={
    series: [{
      name: 'candle',
      data: Data.data,
    }],
    options: {
      chart: {
        height: "100%",
        type: 'candlestick',
      },
      title: {
        text: 'CandleStick Chart - Category X-axis',
        align: 'left'
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
              offsetY: 7,
              text: ''
            }
          }
        ]
      },
      tooltip: {
        enabled: true,
      },
      xaxis: {
        type: 'category',
        labels: {
          formatter: function(val) {
            return new Date(val).toLocaleString();
          }
        }
      },
      yaxis: {
        tooltip: {
          enabled: true
        }
      }
    },
  
  }

  
  return (
    <Chart options={settings.options} style={{color:"black"}} series={settings.series} type="candlestick" width={"100%"} height={"100%"} />
  );
}

export default AppChart;