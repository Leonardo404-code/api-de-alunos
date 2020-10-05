import multer from 'multer';
import { extname, resolve } from 'path';

const aleatorio = () => Math.floor(Math.random() * 10000 + 10000);

export default {
  fileFilter: (req, file, cb) => {
    // Tratando o tipo de arquivo enviado
    // atravez do file.mimetype que verifica o tipo de arquivo, se for diferente de PNG e de JPEG
    if (file.mimetype !== 'image/png' && file.mimetype !== 'image/jpeg') {
      return cb(new multer.MulterError('Arquivo precisa ser PNJ ou JPG'));
    }
    return cb(null, true);
  },
  // se passar de tudo...
  storage: multer.diskStorage({
    // destination -> configura o destino dos arquivos
    destination: (req, file, cb) => {
      cb(null, resolve(__dirname, '..', '..', 'uploads', 'images')); // utilizando o path para os caminhos
    },
    // Filename -> consegue tratar o arquivo enviado, mudando o nome dele
    filename: (req, file, cb) => {
      cb(null, `${Date.now()}_${aleatorio()}${extname(file.originalname)}`);
    },
  }),
};
