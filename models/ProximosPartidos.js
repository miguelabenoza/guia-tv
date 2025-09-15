import mongoose from "mongoose";

const ProximosPartidosSchema = new mongoose.Schema({
  get: String,
  parameters: Object,
  errors: Array,
  results: Number,
  paging: Object,
  response: Array
}, { collection: "proximosPartidos" });

const ProximosPartidos = mongoose.model("ProximosPartidos", ProximosPartidosSchema);

export {ProximosPartidos};