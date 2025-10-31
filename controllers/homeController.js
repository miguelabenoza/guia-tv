import { ProximosPartidos } from "../models/ProximosPartidos.js";
import { UltimoPartido } from "../models/UltimoPartido.js";
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
    "Grada3":"/logos/grada3.png",
    "FC Barcelona Oficial":"/logos/barcelona.png",
    "El Chiringuito":"/logos/elChiringuito.png"
};

export async function mostrarProximosPartidos(req, res, next) {
    
    const partidos = await ProximosPartidos.findOne().sort({ _id: -1 });
    const ultimoPartido = await UltimoPartido.findOne();

    const elChiringuito = await Noticia.find({
        categoria: "chiringuito",
    }).sort({ fechaHora: -1 }).limit(4);

    const noticiasChiringuito = elChiringuito.map(noticia => ({
        ...noticia.toObject(),
        logo: logos[noticia.medio]
    })); 


    const noticiasBarcelonaHoy = await Noticia.find({
        categoria: "Barcelona",
    }).sort({ fechaHora: -1 }).limit(11);


    const noticiasBarcelona = noticiasBarcelonaHoy.map(noticia => ({
        ...noticia.toObject(),
        logo: logos[noticia.medio]
    })); 

    const noticiasMadridHoy = await Noticia.find({
        categoria: "Madrid",
    }).sort({ fechaHora: -1 }).limit(11);


    const noticiasMadrid = noticiasMadridHoy.map(noticia => ({
        ...noticia.toObject(),
        logo: logos[noticia.medio]
    })); 

    const noticiasInternacionalHoy = await Noticia.find({
        categoria: "Internacional",
    }).sort({ fechaHora: -1 }).limit(11);


    const noticiasInternacional = noticiasInternacionalHoy.map(noticia => ({
        ...noticia.toObject(),
        logo: logos[noticia.medio]
    }));

    res.render("homeTailwind", { 
        fixtures: partidos.response,
        fixtures_last_match: ultimoPartido.response,
        noticiasChiringuito,
        noticiasBarcelona,
        noticiasMadrid,
        noticiasInternacional
    });
}