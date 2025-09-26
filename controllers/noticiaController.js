import { Noticia } from "../models/Noticia.js";

export async function noticia(req,res,next) {
    const id = req.params.id;

    // Diccionario de logos
    const logos = {
    "Marca": "/logos/marca.png",
    "Sport": "/logos/sport.png",
    "AS": "/logos/as.png",
    "Mundo Deportivo": "/logos/md.png",
    "Madrid-Barcelona": "/logos/madrid_barcelona.png",
    "ESPN":"/logos/ESPN.png",
    "Dosis Futbolera":"/logos/dosis_futbolera.png",
    "FCBN":"/logos/FCBN.png",
    "Grada3":"/logos/grada3.png"
    };

    
    const noticia = await Noticia.findById(id)

    // Añadimos el logo según el medio
    if (noticia) {
        noticia.logo = logos[noticia.medio];
    }
    res.render("noticia", {noticia} );
};