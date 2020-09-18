import React from "react";
import {Line} from 'react-chartjs-2';

import {useSelector} from "react-redux";

export default function Charts(){

  let {Grafik}=useSelector((state)=>state.storeHistory);

  let labelOld=Grafik?Grafik.filter((item)=>item.tipeHistori?item:null):[]
  let labelnew=[],dataBeli=[],dataJUal=[];

  labelOld.forEach((item)=> {
    labelnew.push(new Date(item.createdAt).toLocaleDateString()+" "+new Date(item.createdAt).toLocaleTimeString())
    if(item.tipeHistori.toUpperCase()==="BELI"){
      dataBeli.push(item.latestHarga);
    }else{
      dataJUal.push(item.latestHarga);
    }
  });

  const data = {
    labels: labelnew,
    datasets: [{
        type: 'line',
        label: 'Harga Beli',
        data:dataBeli,
        fill: false,
        backgroundColor: 'red',
        borderColor: 'red',
        hoverBackgroundColor: 'red',
        hoverBorderColor: 'red',
      },
      {
        type: 'line',
        label: 'Harga Jual',
        data:dataJUal,
        fill: false,
        backgroundColor: 'green',
        borderColor: 'green',
        hoverBackgroundColor: 'green',
        hoverBorderColor: 'green',
      }
    ]
  };
  
    return (
        <Line
          data={data}
          />
    );
}