"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _dotenv = require('dotenv'); var _dotenv2 = _interopRequireDefault(_dotenv);

var _path = require('path');

_dotenv2.default.config(); // configurando o dotenv baseando no ".env" criado na raiz do projeto

require('./database');

var _express = require('express'); var _express2 = _interopRequireDefault(_express);

var _cors = require('cors'); var _cors2 = _interopRequireDefault(_cors);

var _helmet = require('helmet'); var _helmet2 = _interopRequireDefault(_helmet);

var _expressdelay = require('express-delay'); var _expressdelay2 = _interopRequireDefault(_expressdelay);

// importação das rotas

var _homeRoute = require('./routes/homeRoute'); var _homeRoute2 = _interopRequireDefault(_homeRoute);

var _userRoute = require('./routes/userRoute'); var _userRoute2 = _interopRequireDefault(_userRoute);

var _tokenRoute = require('./routes/tokenRoute'); var _tokenRoute2 = _interopRequireDefault(_tokenRoute);

var _alunoRoute = require('./routes/alunoRoute'); var _alunoRoute2 = _interopRequireDefault(_alunoRoute);

var _fotoRoute = require('./routes/fotoRoute'); var _fotoRoute2 = _interopRequireDefault(_fotoRoute);

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
    this.app = _express2.default.call(void 0, ); // todo o express será rodado dentro da constante app
    this.middlewares(); // objeto middlewares
    this.routes(); // objeto de rotas
  }

  // configurando os middlewares para funcioarem corretamente
  middlewares() {
    this.app.use(_cors2.default.call(void 0, corsOptions));
    this.app.use(_helmet2.default.call(void 0, ));
    this.app.use(_expressdelay2.default.call(void 0, 2000)); // Delay proposital de resposta da api
    this.app.use(_express2.default.urlencoded({ extended: true }));
    this.app.use(_express2.default.json()); // Definindo que a API vai apresentar informações em arquivo JSON
    this.app.use('/images/', _express2.default.static(_path.resolve.call(void 0, __dirname, '..', 'uploads', 'images'))); // Rota das imagens
  }

  // as rotas da api
  routes() {
    this.app.use('/', _homeRoute2.default);
    this.app.use('/users/', _userRoute2.default);
    this.app.use('/tokens/', _tokenRoute2.default);
    this.app.use('/alunos/', _alunoRoute2.default);
    this.app.use('/fotos/', _fotoRoute2.default);
  }
}

exports. default = new App().app;
