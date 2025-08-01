import { Schema } from "mongoose";

const HoldingSchema=new Schema({
    name:String,
    qty:Number,
    avg:Number,
    price:Number,
    net:Number,
    day:String

})

export {HoldingSchema}