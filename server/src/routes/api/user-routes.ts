import { Router, Request, Response } from "express";
import { User, Game } from "../../models/index.js";

const router = Router();


router.get('/:id', async (req: Request, res: Response) => {
    try {
     // hoping this works, haven't had to use a join yet :O
      const userData = await User.findByPk(req.params.user_id, {
        include: [{ model: Game, as: 'favorited games' }],
      });
  
      if (!userData) {
        res.status(404).json({ message: 'No user found with that id!' });
        return;
      }
  
      res.status(200).json(userData);
    } catch (err) {
      res.status(500).json(err);
    }
  });


  router.post('/', async (req: Request, res: Response) => {
    try {
      const userData = await User.create(req.body);
      res.status(200).json(userData);
    } catch (err) {
      res.status(400).json(err);
    }
  });


  export { router as userRouter }