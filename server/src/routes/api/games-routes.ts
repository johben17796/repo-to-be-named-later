import { Router, Request, Response } from "express";
import { Game } from "../../models/index.js";

export const getAllGames = async (_req: Request, res: Response) => {
    try {
      const games = await Game.findAll();
      res.json(games);
    } catch (error: any) {
      res.status(500).json({ message: error.message });
    }
  };
  
  const router = Router();
  router.get('/', getAllGames);
  
  export { router as gameRouter };
  