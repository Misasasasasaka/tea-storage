import { Request, Response, NextFunction } from 'express';

export default function responseMiddleware(req: Request, res: Response, next: NextFunction) {
  res.success = (data: any) => {
    res.json({ code: 0, msg: 'ok', data });
  };
  next();
}

declare global {
  namespace Express {
    interface Response {
      success: (data: any) => void;
    }
  }
}
