import { Router } from 'express';
import { geminiRouter } from './Gemini.js';
import { rawgRouter } from './RAWG.js';
import { gameRouter } from './games-routes.js';

const router = Router();

router.use('/Gemini', geminiRouter);
router.use('/RAWG', rawgRouter);
router.use('/games', gameRouter);

export default router;
