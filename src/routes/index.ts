import { Router } from 'express';

import * as homeController from '@/controller/home';

const router = Router();

router.get('/', homeController.getAppInfo);

export default router;
