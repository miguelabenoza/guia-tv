import mongoose from "mongoose";

const UltimoPartidoSchema = new mongoose.Schema({
  get: String,
  parameters: Object,
  errors: Array,
  results: Number,
  paging: Object,
  response: Array
}, { collection: "ultimoPartido" });

const UltimoPartido = mongoose.model("UltimoPartido", UltimoPartidoSchema);

export {UltimoPartido};