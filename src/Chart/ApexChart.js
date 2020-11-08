import React from "react";
import Chart from 'react-apexcharts';

import dayjs from "dayjs";
import Axios from "axios";
import {urlContext} from "../context";

function ChartInjectData(){
  const [chart,setChart]=React.useState([]);
  let baseUrl=React.useContext(urlContext);

  const getData=React.useCallback(async()=>{
    try {
      let {data}=await Axios({
        url:`${baseUrl}/lightweightChart`,
        method:"GET",
        headers:{
          jwttoken:localStorage.getItem("token"),
        }
      });
      setChart(data.chart);
    } catch (error) {
      setChart([]);
    }
  },[setChart,baseUrl]);

  React.useEffect(()=>{
    getData(); 
  },[getData]);
  return (
    <ChartTrading data={chart} />
  );
}

class ChartTrading extends React.Component {

    constructor(props) {
      super(props);
   
      this.state = {
        series: [{
            name: 'candle',
            data:!props.data?[]:props.data,
          }],

          options: {
            chart: {
              height: "100%",
              type: 'candlestick',
            },
            title: {
              text: 'Trading Chart',
              align: 'left'
            },
            annotations: {
              xaxis: [
                {
                  x: 'Oct 06 14:00',
                  borderColor: '#606060',
                  label: {
                    borderColor: '#606060',
                    style: {
                      fontSize: '12px',
                      color: 'white',
                      background: 'red'
                    },
                    orientation: 'horizontal',
                    offsetY: 7,
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
                  return dayjs(val).format('MMM DD HH:mm')
                }
              }
            },
            yaxis: {
              tooltip: {
                background:"black",
                color:"white",
                enabled: true,
              }
            }
          },
      }
    } 

    render() {
      return (
        <Chart options={this.state.options} style={{color:"black"}} series={this.state.series} type="candlestick" width={"100%"} height={"100%"} />
      )
    }
  }

  export default ChartInjectData;
