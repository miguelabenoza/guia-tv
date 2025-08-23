import mongoose, { Schema } from 'mongoose';

const guiaTvSchema = Schema({
  fecha: String,
  hora: String,
  nombre_deporte: String,
  nombre_competicion: String,
  nombre_evento: String,
  nombre_tv: String,
  equipo_local: String,
  equipo_visitante: String,
  escudo_local: String,
  escudo_visitante: String
});

const guiaTv = mongoose.model('guiaTv', guiaTvSchema);

export default guiaTv;