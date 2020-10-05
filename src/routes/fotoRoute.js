import { Router } from 'express';

import fotoControler from '../controllers/FotoController';

const router = new Router();

router.post('/', fotoControler.store);

export default router;
