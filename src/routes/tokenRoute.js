import { Router } from 'express';
import tokenControler from '../controllers/TokenController';

const router = new Router();

router.post('/', tokenControler.store);

export default router;
