import { Request, Response, NextFunction } from 'express';

export class SecurityConfig {
  static middleware(req: Request, res: Response, next: NextFunction) {
    // Implementación del middleware de seguridad
    next();
  }
}