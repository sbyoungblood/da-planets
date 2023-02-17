import { Schema } from "mongoose";



const ObjectId = Schema.Types.ObjectId
export const PlanetSchema = new Schema({
  name: {type: String, required: true},
  moons: {type: Number, required: true, default: 0},
  atmosphere: {type: Boolean, required: true, default: false},
  // relationships
  galaxyId: {type: ObjectId, ref: 'Galaxy', required: true}
},{
  timestamps: true, toJSON: {virtuals: true}
})