"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _multer = require('multer'); var _multer2 = _interopRequireDefault(_multer);
var _path = require('path');

const aleatorio = () => Math.floor(Math.random() * 10000 + 10000);

exports. default = {
  fileFilter: (req, file, cb) => {
    // Tratando o tipo de arquivo enviado
    // atravez do file.mimetype que verifica o tipo de arquivo, se for diferente de PNG e de JPEG
    if (file.mimetype !== 'image/png' && file.mimetype !== 'image/jpeg') {
      return cb(new _multer2.default.MulterError('Arquivo precisa ser PNJ ou JPG'));
    }
    return cb(null, true);
  },
  // se passar de tudo...
  storage: _multer2.default.diskStorage({
    // destination -> configura o destino dos arquivos
    destination: (req, file, cb) => {
      cb(null, _path.resolve.call(void 0, __dirname, '..', '..', 'uploads', 'images')); // utilizando o path para os caminhos
    },
    // Filename -> consegue tratar o arquivo enviado, mudando o nome dele
    filename: (req, file, cb) => {
      cb(null, `${Date.now()}_${aleatorio()}${_path.extname.call(void 0, file.originalname)}`);
    },
  }),
};
