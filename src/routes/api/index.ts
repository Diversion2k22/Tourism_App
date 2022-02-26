import { Router } from 'express';
import { getUserInfo } from '@/controller/user';

const router = Router();

router.get('/user', getUserInfo);

export default router;
