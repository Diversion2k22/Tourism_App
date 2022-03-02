import { Router } from 'express';
import { getUserInfo } from '@/controller/user';
import { getCity } from '@/controller/city';

const router = Router();

router.get('/user', getUserInfo);
router.get('/city', getCity);

export default router;
