// import { holdings } from "./data/data";
import { useState,useEffect } from "react";
import { default as axios } from 'axios';

import { VerticalChart } from "./verticalChart";


const Holdings = () => {

  const[allHolding,setAllHolding]=useState([])

  useEffect(()=>{
    axios.get('http://localhost:3000/allholdings').then((res)=>{
      // console.log(res.data);
      setAllHolding(res.data)
      
    }).catch((err)=>{
      console.log(err);
      
    })
  },[])

  const labels=allHolding.map((subArr)=>{
     return subArr["name"]
    
  })

  
  

  const data={
    labels,
    datasets: [
    {
      label: 'Stock Price',
      data: allHolding.map((stock) => stock.price),
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    }
  ],
  }


//    const data = {
//   labels,
  // datasets: [
  //   {
  //     label: 'Dataset 1',
  //     data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
  //     backgroundColor: 'rgba(255, 99, 132, 0.5)',
  //   },
  //   {
  //     label: 'Dataset 2',
  //     data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
  //     backgroundColor: 'rgba(53, 162, 235, 0.5)',
  //   },
  // ],
// };


  return (
    <>
      <h3 className="title">Holdings ({allHolding.length})</h3>

      <div className="order-table">
        <table>
          <thead>
          <tr>
            <th>Instrument</th>
            <th>Qty.</th>
            <th>Avg. cost</th>
            <th>LTP</th>
            <th>Cur. val</th>
            <th>P&L</th>
            <th>Net chg.</th>
            <th>Day chg.</th>
          </tr>
          </thead>

          {Array.isArray(allHolding) && allHolding.map((stock, index) => {
            const curValue = stock.price * stock.qty;
            const isProfit = curValue - stock.avg * stock.qty >= 0.0;
            const profClass = isProfit ? "profit" : "loss";
            const dayClass = stock.isLoss ? "loss" : "profit";

            return (
              <tbody key={index}>
              <tr >
                <td>{stock.name}</td>
                <td>{stock.qty}</td>
                <td>{stock.avg.toFixed(2)}</td>
                <td>{stock.price.toFixed(2)}</td>
                <td>{curValue.toFixed(2)}</td>
                <td className={profClass}>
                  {(curValue - stock.avg * stock.qty).toFixed(2)}
                </td>
                <td className={profClass}>{stock.net}</td>
                <td className={dayClass}>{stock.day}</td>
              </tr>
              </tbody>
            );
          })}
        </table>
      </div>

      <div className="row">
        <div className="col">
          <h5>
            29,875.<span>55</span>{" "}
          </h5>
          <p>Total investment</p>
        </div>
        <div className="col">
          <h5>
            31,428.<span>95</span>{" "}
          </h5>
          <p>Current value</p>
        </div>
        <div className="col">
          <h5>1,553.40 (+5.20%)</h5>
          <p>P&L</p>
        </div>
      </div>
      <VerticalChart data={data}/>
    </>
  );
};

export { Holdings };
