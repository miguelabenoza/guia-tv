import mongoose, { Schema } from 'mongoose';

const noticiasSchema = Schema({
  titulo: String,
  subtitulo: String,
  img: String,
  video: String,
  redactor: String,
  fecha: Date,
  fechaHora: Date,
  medio: String,
  categoria: String,
  contenido_html: String
});

// Campo virtual "hace"
noticiasSchema.virtual("hace").get(function () {
  if (!this.fechaHora) return null;

  const ahora = new Date();
  const diffMs = ahora - this.fechaHora; // diferencia en milisegundos
  const diffMin = Math.floor(diffMs / 60000); // minutos
  const diffHoras = Math.floor(diffMs / (1000 * 60 * 60));
  const diffDias = Math.floor(diffMs / (1000 * 60 * 60 * 24));

  if (diffMin < 1) return "justo ahora";
  if (diffMin < 60) return `hace ${diffMin} minutos`;
  if (diffHoras < 24) return `hace ${diffHoras} horas`;
  return `hace ${diffDias} dias`;
});

// Incluir virtuales en JSON / objetos
noticiasSchema.set("toJSON", { virtuals: true });
noticiasSchema.set("toObject", { virtuals: true });

const Noticia = mongoose.model('Noticia', noticiasSchema);

export {Noticia};