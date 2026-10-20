import express, { type Request, type Response, type NextFunction } from 'express';
import usersMiddleware from "../middlewares/users-middleware.ts"
import { User } from '../models/User.ts';

const router = express.Router();

router.use(usersMiddleware)
router.use(express.urlencoded())

router.get('/', async (req: Request, res: Response) => {

  try {
    const users = await User.find()
    console.log(users)
    res.status(200)
    res.send(users)
  } catch {

  }

});

router.post('/', async (req: Request, res: Response) => {

  try {
    console.log(req)
    const user = await User.create(req.body)
    console.log(user)
    res.status(200)
    res.send(user)
  } catch {

  }

});

router.get('/:id', (req: Request, res: Response) => {
  res.send('It`s single user page');
});

export default router;