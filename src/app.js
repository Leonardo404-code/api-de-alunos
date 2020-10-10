import dotenv from 'dotenv';
import { resolve } from 'path';

dotenv.config(); // configurando o dotenv baseando no ".env" criado na raiz do projeto

import './database';

import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
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
// criando tudo que vai rodar no app
class App {
  constructor() {
    this.app = express(); // todo o express será rodado dentro da constante app
    this.middlewares();
    this.routes();
  }

  // configurando os middlewares para funcioarem corretamente
  middlewares() {
    this.app.use(cors(corsOptions));
    this.app.use(helmet());
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(express.json());
    this.app.use('/images/', express.static(resolve(__dirname, '..', 'uploads', 'images')));
  }

  // as rotas da api
  routes() {
    this.app.use('/', homeRoute);
    this.app.use('/users/', userRoutes);
    this.app.use('/tokens/', tokenRoutes);
    this.app.use('/alunos/', alunoRoutes);
    this.app.use('/fotos/', fotoRoutes);
  }
}

export default new App().app;
