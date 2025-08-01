import { positions } from "./data/data";
import { useState,useEffect } from "react";
import { default as axios } from 'axios';


const Positions = () => {

   const [allPosition,setAllPositions]=useState([])

   useEffect(()=>{
    axios.get('http://localhost:3000/allposition').then((res)=>{
      // console.log(res.data);
      setAllPositions(res.data)
      
    }).catch((err)=>{
      console.log(err);
      
    })
  },[])

  return (
    <>
      <h3 className="title">Positions (2)</h3>

      <div className="order-table">
        <table>
          <thead>
          <tr>
            <th>Product</th>
            <th>Instrument</th>
            <th>Qty.</th>
            <th>Avg.</th>
            <th>LTP</th>
            <th>P&L</th>
            <th>Chg.</th>
          </tr>
          </thead>
           {allPosition.map((stock, index) => {
            const curValue = stock.price * stock.qty;
            const isProfit = curValue - stock.avg * stock.qty >= 0.0;
            const profClass = isProfit ? "profit" : "loss";
            const dayClass = stock.isLoss ? "loss" : "profit";

            return (
              <tbody key={index}>
              <tr >
                <td>{stock.product}</td>
                <td>{stock.name}</td>
                <td>{stock.qty}</td>
                <td>{stock.avg.toFixed(2)}</td>
                <td>{stock.price.toFixed(2)}</td>
                <td className={profClass}>
                  {(curValue - stock.avg * stock.qty).toFixed(2)}
                </td>
                <td className={dayClass}>{stock.day}</td>
              </tr>
              </tbody>
            );
          })}
        </table>
      </div>
    </>
  );
};



export {Positions};