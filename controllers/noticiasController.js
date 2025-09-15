import { Noticia } from "../models/Noticia.js";

const hoy = new Date();

const logos = {
  "Marca": "/logos/marca.png",
  "Sport": "/logos/sport.png",
  "AS": "/logos/as.png",
  "Mundo Deportivo": "/logos/md.png",
};


export async function getAllLastsNews(req, res, next) {

  const noticiasBarcelonaHoy = await Noticia.find({
  $expr: {
    $and: [
      { $eq: [{ $dayOfMonth: "$fechaHora" }, hoy.getDate()] },
      { $eq: [{ $month: "$fechaHora" }, hoy.getMonth() + 1] }, // ¡Ojo! getMonth() empieza en 0
      { $eq: [{ $year: "$fechaHora" }, hoy.getFullYear()] }
    ]
  },
  categoria: "Barcelona",
  medio: { $in: ["Marca", "Sport", "Mundo Deportivo", "Soc Blaugrana"] }
}).sort({ fechaHora: -1 });


  const noticias = noticiasBarcelonaHoy.map(noticia => ({
    ...noticia.toObject(),
    logo: logos[noticia.medio]
  }));
  
  res.render("ultimas-noticias", {noticias} );
};