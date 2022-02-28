import { Router } from 'express';
import { getUserInfo, createUser } from '@/controller/user';

const router = Router();

router.get('/user', getUserInfo);
router.post('/create-user', createUser);

export default router;
