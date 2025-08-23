import express from 'express';
import connectMongoose from './lib/connectMongoose.js';

import * as homeController from './controllers/homeController.js';

await connectMongoose();
console.log('Conectado a MongoDB.');

const app = express();

app.locals.appName = 'Guia TV';

app.set('views', 'views');
app.set('view engine', 'ejs');
app.use(express.static('public'));

// Páginas publicas
app.get('/', homeController.index);








export default app