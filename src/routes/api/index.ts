import { Router } from 'express';
import { getUserInfo } from '@/controller/user';
import { getCity } from '@/controller/city';
import { getSpot } from '@/controller/spot';
import { getEvent } from '@/controller/event';

const router = Router();

router.get('/user', getUserInfo);
router.get('/city', getCity);
router.get('/spot', getSpot);
router.get('/event', getSpot);

export default router;
