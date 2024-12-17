import { Router } from 'express';
import { gameRouter } from './games-routes.js';

const router = Router();

router.use('/games', gameRouter);

export default router;
