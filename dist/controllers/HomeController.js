"use strict";Object.defineProperty(exports, "__esModule", {value: true});// configurando a Home
// criando a classe que irá controlar esta rota
class HomeController {
  async index(req, res) { // nome do método exigindo a requisição e a resposta
    res.json('index'); // resposta em JSON ao enviar os dados
  }
}

exports. default = new HomeController(); // exportando por padrão
