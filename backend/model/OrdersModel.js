import { model } from "mongoose";
import { OrderSchema } from "../schemas/OrdersSchemas.js";

const OrdersModel=new model("Order",OrderSchema)

export {OrdersModel}