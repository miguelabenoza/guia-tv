import mongoose from 'mongoose';
import { config } from "dotenv";

config();
const database = process.env.MONGODB_URI;

const uri = database;
const clientOptions = { serverApi: { version: '1', strict: true, deprecationErrors: true } };

mongoose.connection.on('error', err => {
  console.log('Error de conexión', err);
});

export default function connectMongoose() {
  return mongoose.connect(uri, clientOptions)
    .then(mongoose => mongoose.connection);
};