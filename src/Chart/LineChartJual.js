import React from "react";
import {Line} from 'react-chartjs-2';

import {useSelector} from "react-redux";

export default function Charts(){
  
  let {LabelNew,DataBeli,DataJual}=useSelector((state)=>state.storeHistory);
  
  

  const data = {
    labels:LabelNew,
    datasets: [{
        type: 'line',
        label: 'Harga Beli',
        data:DataBeli,
        fill: false,
        backgroundColor: 'green',
        borderColor: 'green',
        hoverBackgroundColor: 'green',
        hoverBorderColor: 'green',
      },
      {
        type: 'line',
        label: 'Harga Jual',
        data:DataJual,
        fill: false,
        backgroundColor: 'red',
        borderColor: 'red',
        hoverBackgroundColor: 'red',
        hoverBorderColor: 'red',
      }
    ]
  };
  
    return (
        <Line
          data={data}
          />
    );
}