import dotenv from 'dotenv';
dotenv.config();

import express from "express";
import mongoose from "mongoose";

const app=express()

const port=process.env.PORT ||3000
const uri=process.env.MONGO_URL

app.listen(3000,()=>{
    console.log(`app is listing on port 3000`);
    mongoose.connect(uri).then(()=>{
        console.log("Success : DB Connected" );
        
    }).catch((err)=>{
        console.log("Fail :",err);
        
    })
    
})