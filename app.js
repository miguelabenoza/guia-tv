import express from 'express';
import path from "path";
import connectMongoose from './lib/connectMongoose.js';

import * as homeController from './controllers/homeController.js';
import * as tvController from './controllers/tvController.js';
import * as noticiasController from './controllers/noticiasController.js';
import * as noticiaController from './controllers/noticiaController.js';

await connectMongoose();
console.log('Conectado a MongoDB.');

const app = express();

app.locals.appName = 'Guia TV';

app.set('views', 'views');
app.set('view engine', 'ejs');

// Servir carpeta "public" como estática
app.use(express.static(path.join(process.cwd(), "public")));

// Rutas
app.get('/', homeController.mostrarProximosPartidos);
app.get('/tv', tvController.index);
app.get ('/ultimas-noticias', noticiasController.getAllLastsNews);
app.get ('/noticia/:id', noticiaController.noticia);





export default app