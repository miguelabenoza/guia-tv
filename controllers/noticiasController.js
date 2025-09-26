import { Noticia } from "../models/Noticia.js";

const hoy = new Date();

const logos = {
  "Marca": "/logos/marca.png",
  "Sport": "/logos/sport.png",
  "AS": "/logos/as.png",
  "Mundo Deportivo": "/logos/md.png",
  "Madrid-Barcelona": "/logos/madrid_barcelona.png",
  "ESPN":"/logos/ESPN.png",
  "Dosis Futbolera":"/logos/dosis_futbolera.png",
  "FCBN":"/logos/FCBN.png",
  "Grada3":"/logos/Grada3.png"
};


export async function getAllLastsNews(req, res, next) {

  const noticiasHoy = await Noticia.find({
    $expr: {
      $and: [
        { $eq: [{ $dayOfMonth: "$fechaHora" }, hoy.getDate()] },
        { $eq: [{ $month: "$fechaHora" }, hoy.getMonth() + 1] }, // ¡Ojo! getMonth() empieza en 0
        { $eq: [{ $year: "$fechaHora" }, hoy.getFullYear()] }
      ]
    },
  }).sort({ fechaHora: -1 }).limit(100);


  const noticias = noticiasHoy.map(noticia => ({
    ...noticia.toObject(),
    logo: logos[noticia.medio]
  }));
  
  res.render("ultimas-noticias", {noticias} );
};