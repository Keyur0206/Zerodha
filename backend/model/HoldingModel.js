import { model } from "mongoose";
import { HoldingSchema } from "../schemas/HoldingSchemas";

const HoldingModal= new model("holding",HoldingSchema)

export {HoldingModal}