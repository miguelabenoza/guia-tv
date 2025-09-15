import {guiaTv} from "../models/Guia.js";

const hoy = new Date();

const anio = hoy.getFullYear();
const mes = String(hoy.getMonth() + 1).padStart(2, '0'); // Mes con 2 dígitos
const dia = String(hoy.getDate()).padStart(2, '0');      // Día con 2 dígitos
const fechaFormateada = `${anio}-${mes}-${dia}`;


export async function index(req, res, next) {
  const fecha = fechaFormateada

  // Mongo Querys
  const eaSports = await guiaTv.find({
    fecha: fecha,
    medio:"besoccer",
    nombre_competicion: "Primera División"
  }).sort({ hora: 1 });

  const premier = await guiaTv.find({
    fecha: fecha,
    medio:"besoccer",
    nombre_competicion: "Premier League"
  }).sort({ hora: 1 });

  const previaChampions = await guiaTv.find({
    fecha: fecha,
    medio:"besoccer",
    nombre_competicion: "Fase Previa Champions League"
  }).sort({ hora: 1 });

  const championsLeague = await guiaTv.find({
    fecha: fecha,
    medio:"besoccer",
    nombre_competicion: "Champions League"
  }).sort({ hora: 1 });

  const europaLeague = await guiaTv.find({
    fecha: fecha,
    medio:"besoccer",
    nombre_competicion: "Europa League"
  }).sort({ hora: 1 });

  const supercopaEuropa = await guiaTv.find({
    fecha: fecha,
    medio:"besoccer",
    nombre_competicion: "Supercopa Europa"
  }).sort({ hora: 1 });

  const conferenceLeague = await guiaTv.find({
    fecha: fecha,
    medio:"besoccer",
    nombre_competicion: "Conference League"
  }).sort({ hora: 1 });

  const copaDelRey = await guiaTv.find({
    fecha: fecha,
    medio:"besoccer",
    nombre_competicion: "Copa del Rey"
  }).sort({ hora: 1 });

  const ligaF = await guiaTv.find({
    fecha: fecha,
    medio:"besoccer",
    nombre_competicion: "Primera División Femenina"
  }).sort({ hora: 1 });

  const eurocopaFemenina = await guiaTv.find({
    fecha: fecha,
    medio:"besoccer",
    nombre_competicion: "Eurocopa Femenina"
  }).sort({ hora: 1 });

  const mundialDeClubes = await guiaTv.find({
    fecha: fecha,
    medio:"besoccer",
    nombre_competicion: "Mundial de Clubes"
  }).sort({ hora: 1 });

  const clasiMundialEuropa = await guiaTv.find({
    fecha: fecha,
    medio:"besoccer",
    nombre_competicion: "Clasificación Mundial Selecciones"
  }).sort({ hora: 1 });

  const motocislismo = await guiaTv.find({
    fecha: fecha,
    nombre_deporte: "Motos"
  }).sort({ hora: 1 });

  const f1 = await guiaTv.find({
    fecha: fecha,
    nombre_deporte: "Fórmula 1"
  }).sort({ hora: 1 });

  const tenis = await guiaTv.find({
    fecha: fecha,
    nombre_deporte: "Tenis"
  }).sort({ hora: 1 });

  const ciclismo = await guiaTv.find({
    fecha: fecha,
    nombre_deporte: "Ciclismo"
  }).sort({ hora: 1 });


  // Competitions
  const futbol = [
    {
      nombre: "LaLiga EA Sports",
      logo: "/img/laliga.png",
      partidos: eaSports
    },
    {
      nombre: "Premier League",
      logo: "/img/premier.png",
      partidos: premier
    },
    {
      nombre: "UEFA Champions League",
      logo: "/img/champions.png",
      partidos: previaChampions
    },
    {
      nombre: "UEFA Champions League",
      logo: "/img/champions.png",
      partidos: championsLeague
    },
    {
      nombre: "UEFA Europa League",
      logo: "/img/europaLeague.png",
      partidos: europaLeague
    },
    {
      nombre: "UEFA Supercopa Europa",
      logo: "/img/supercopa-europa.png",
      partidos: supercopaEuropa
    },
    {
      nombre: "UEFA Conference League",
      logo: "/img/conference-league.png",
      partidos: conferenceLeague
    },
    {
      nombre: "Copa del Rey",
      logo: "/img/copa-del-rey.png",
      partidos: copaDelRey
    },
    {
      nombre: "Liga F",
      logo: "/img/liga_f.png",
      partidos: ligaF
    },
    {
      nombre: "Eurocopa Femenina",
      logo: "/img/eurocopa-femenina.png",
      partidos: eurocopaFemenina
    },
    {
      nombre: "FIFA Mundial de Clubes",
      logo: "/img/mundial-de-clubes.png",
      partidos: mundialDeClubes
    },
    {
      nombre: "FIFA Clasificación Mundial",
      logo: "/img/mundial-de-clubes.png",
      partidos: clasiMundialEuropa
    }
  ];

  const otros = [
    {
        nombre: "Motociclismo",
        logo: "/img/motogp.png",
        eventos: motocislismo
    },
    {
        nombre: "Fórmula 1",
        logo: "/img/f1.png",
        eventos: f1
    },
    {
        nombre: "Tenis",
        logo: "/img/atp.jpg",
        eventos: tenis
    },
    {
        nombre: "Ciclismo",
        logo: "/img/ciclismo.jpg",
        eventos: ciclismo
    }
  ]


  res.render("tv", { futbol, otros } );
}
