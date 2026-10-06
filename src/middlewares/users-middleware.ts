import { type Request, type Response, type NextFunction } from 'express';

const logger = function (req: Request, res: Response, next: NextFunction) {
  console.log('USERS MIDDLEWARE 1341234123412431234', req.path);
  next();
};

export default logger;