import { Router } from 'express';

import userRoutes from './user.routes';

const router = Router();

router.use(userRoutes.path, userRoutes.router);

export default router;
