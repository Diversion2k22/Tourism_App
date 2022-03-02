import { Router } from 'express';
import * as userController from '@/controller/user';
import * as homeController from '@/controller/home';

const router = Router();

router.get('/', homeController.getAppInfo);
router.post('/create-user', userController.createUser);

export default router;
