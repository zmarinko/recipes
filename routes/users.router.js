import { Router } from 'express';
import { UsersController } from '../controllers/users.controller.js';

const route = '/api/users';

const router = Router();
router.post(route + '/register', UsersController.register);
router.post(route + '/login', UsersController.login);

export default router;
