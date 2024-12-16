import { Router } from 'express';
import { geminiRouter } from './Gemini.js';
import { rawgRouter } from './RAWG.js';

const router = Router();

router.use('/Gemini', geminiRouter);
router.use('/RAWG', rawgRouter);

export default router;