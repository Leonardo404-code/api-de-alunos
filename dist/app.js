Object.defineProperty(exports, '__esModule', { value: true }); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; } const _dotenv = require('dotenv');

const _dotenv2 = _interopRequireDefault(_dotenv);
const _path = require('path');

_dotenv2.default.config(); // configurando o dotenv baseando no ".env" criado na raiz do projeto

require('./database');

const _express = require('express');

const _express2 = _interopRequireDefault(_express);
// importação das rotas
const _homeRoute = require('./routes/homeRoute');

const _homeRoute2 = _interopRequireDefault(_homeRoute);
const _userRoute = require('./routes/userRoute');

const _userRoute2 = _interopRequireDefault(_userRoute);
const _tokenRoute = require('./routes/tokenRoute');

const _tokenRoute2 = _interopRequireDefault(_tokenRoute);
const _alunoRoute = require('./routes/alunoRoute');

const _alunoRoute2 = _interopRequireDefault(_alunoRoute);
const _fotoRoute = require('./routes/fotoRoute');

const _fotoRoute2 = _interopRequireDefault(_fotoRoute);
// criando tudo que vai rodar no app
class App {
  constructor() {
    this.app = _express2.default.call(void 0); // todo o express será rodado dentro da constante app
    this.middlewares();
    this.routes();
  }

  // configurando os middlewares para funcioarem corretamente
  middlewares() {
    this.app.use(_express2.default.urlencoded({ extended: true }));
    this.app.use(_express2.default.json());
    this.app.use(_express2.default.static(_path.resolve.call(void 0, __dirname, 'uploads')));
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

exports.default = new App().app;
