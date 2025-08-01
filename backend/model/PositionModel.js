import { model } from "mongoose";
import { PositionSchema } from "../schemas/PositionsSchemas.js";

const PositionModel=new model("Position",PositionSchema)

export {PositionModel}