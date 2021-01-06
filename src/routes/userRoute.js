import { Router } from 'express';
import userControler from '../controllers/UserController';
import loginRequired from '../middlewares/loginRequired';

const router = new Router();
// não deveria existir
// router.get('/', loginRequired, userControler.index); // lista usuários
// router.get('/:id', userControler.show); // lista usuário

router.post('/', userControler.store);
router.put('/', loginRequired, userControler.update);
router.delete('/', loginRequired, userControler.delete);

export default router;

/*
index -> lista todos os usuários -> GET
store/create -> cria um novo usuário -> POST
delete -> apaga um usuário -> GET
show -> mostra um usuário -> GET
update -> atualiza um usuário -> PATCH ou PUT
*/
