import React, { Component } from 'react';
import 'chart.js/auto';
import { Line } from 'react-chartjs-2'

class PriceInformation extends Component {
  constructor(props) {
    super(props)
    this.state = {
      TurnoverRatedatas: this.props.ChartData,
      price:[234,345,564,234,456,234,456,345,232,789,435,934],
      month:[1,2,3,4,5,6,7,8,9,10,11,12]
    }
  }


  render() {
    // console.log(this.props.ChartData)
   
    const data = {
      labels: this.state.month,
      datasets: [
        {
          label: '價格',
          data: this.state.price,
          fill: false,
          borderColor: 'rgb(54, 162, 235)',
          tension: 0.1,
        }
      ],
    }
    const options = {
      scales: {
        y: {
          beginAtZero: true
        }
      },
      plugins: {
        title: {
          display: true,
          text: '價格漲跌趨勢',
          font: {
            size: 18
          }
        }
      }
    }
    return (
      <div className='chartbackground' style={{width:'75%'}} >
        <Line data={data} options={options}/>
      </div>
    )
  }


}
export default PriceInformation;