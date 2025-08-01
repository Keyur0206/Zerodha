import { model } from "mongoose";
import { HoldingSchema } from "../schemas/HoldingSchemas.js";

const HoldingModel= new model("holding",HoldingSchema)

export {HoldingModel}