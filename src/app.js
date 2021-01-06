import dotenv from 'dotenv';

import { resolve } from 'path';

dotenv.config();

import './database';

import express from 'express';

import cors from 'cors';

import helmet from 'helmet';

import delay from 'express-delay';

// importação das rotas

import homeRoute from './routes/homeRoute';

import userRoutes from './routes/userRoute';

import tokenRoutes from './routes/tokenRoute';

import alunoRoutes from './routes/alunoRoute';

import fotoRoutes from './routes/fotoRoute';

const whiteList = [
  'http://localhost:3000',
];

const corsOptions = {
  origin(origin, callback) {
    if (whiteList.indexOf(origin) !== -1 || !origin) {
      callback(null, true);
    } else {
      callback(new Error('Not allowrd by CORS'));
    }
  },
};

class App {
  constructor() {
    this.app = express();
    this.middlewares(); 
    this.routes();
  }

  middlewares() {
    this.app.use(cors(corsOptions));
    this.app.use(helmet());
    this.app.use(delay(2000)); // Delay proposital de resposta da api
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(express.json()); // Definindo que a API vai apresentar informações em arquivo JSON
    this.app.use('/images/', express.static(resolve(__dirname, '..', 'uploads', 'images'))); // Rota das imagens
  }

  routes() {
    this.app.use('/', homeRoute);
    this.app.use('/users/', userRoutes);
    this.app.use('/tokens/', tokenRoutes);
    this.app.use('/alunos/', alunoRoutes);
    this.app.use('/fotos/', fotoRoutes);
  }
}

export default new App().app;
