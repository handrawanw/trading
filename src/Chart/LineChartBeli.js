import React from "react";
import {Line} from 'react-chartjs-2';

const data = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [{
      type: 'line',
      label: 'Harga Beli',
      data: [200, 185, 590, 621, 250, 400, 95],
      fill: false,
      backgroundColor: 'green',
      borderColor: 'green',
      hoverBackgroundColor: 'green',
      hoverBorderColor: 'green',
    }]
};

export default function Charts(){

    return (
        <Line
          data={data}
        />
    );
}