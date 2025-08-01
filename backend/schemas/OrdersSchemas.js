import { Schema } from "mongoose";

const OrderSchema=new Schema({
    name: String,
    price: Number,
    qty: Number,
    mode:String,
})

export {OrderSchema}