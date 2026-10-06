import express, { type Request, type Response, type NextFunction } from 'express';
import usersMiddleware from "../middlewares/users-middleware.ts"

const router = express.Router();

router.use(usersMiddleware)

router.get('/', (req: Request, res: Response) => {
  res.send('It`s users page');
});

router.get('/:id', (req: Request, res: Response) => {
  res.send('It`s single user page');
});

export default router;