import React from "react";
import {Line} from 'react-chartjs-2';

import {useSelector,useDispatch} from "react-redux";

import {setDataBeli,setDataJual} from "../Store/actionRedux/historyTrade";

export default function Charts(){

  let dispatch=useDispatch();

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

  React.useEffect(()=>{
    dispatch([setDataBeli({Data:dataBeli,last:dataBeli[dataBeli.length-1]}),setDataJual({Data:dataJUal,last:dataJUal[dataJUal.length-1]})])
  },[dispatch,dataBeli,dataJUal]);

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