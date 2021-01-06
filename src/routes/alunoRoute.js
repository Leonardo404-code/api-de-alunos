import { Router } from 'express';
import alunoControler from '../controllers/AlunoController';
import loginRequired from '../middlewares/loginRequired';

const router = new Router();

router.get('/', alunoControler.index);
router.post('/', loginRequired, alunoControler.store);
router.put('/:id', loginRequired, alunoControler.update);
router.get('/:id', alunoControler.show);
router.delete('/:id', loginRequired, alunoControler.delete);

export default router;
