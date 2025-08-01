import dotenv from 'dotenv';
dotenv.config({ quiet: true });
import  bodyParser  from 'body-parser'
import  cors  from "cors";

import express from "express";
import mongoose from "mongoose";
import {HoldingModel} from './model/HoldingModel.js';
import { PositionModel } from './model/PositionModel.js';
import { OrdersModel } from './model/OrdersModel.js';

const app = express();
const port = process.env.PORT || 3000;
const uri = process.env.MONGO_URL;

app.use(cors())
app.use(bodyParser.json())

// Connect to MongoDB
mongoose.connect(uri).then(() => {
  console.log("✅ DB Connected Successfully");
}).catch((err) => {
  console.error("❌ DB Connection Failed:", err);
});

app.listen(port, () => {
  console.log(`🚀 Server is running on port ${port}`);
});

app.get('/allholdings', async (req, res) => {
  try {
    const data = await HoldingModel.find({});
    res.json(data)
  } catch (err) {
    res.send(err);
    
  }
});

app.get('/allposition',async(req,res)=>{
  try{
    const data=await PositionModel.find({})
    res.json(data)
  }catch(err){
    res.send(err)
  }
})

app.post('/neworder',async(req,res)=>{
  let newOrder= new OrdersModel({
    name: req.body.name,
    price: req.body.price,
    qty: req.body.qty,
    mode:req.body.mode,
  })

  newOrder.save()
  
})