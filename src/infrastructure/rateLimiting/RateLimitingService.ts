import rateLimit from 'express-rate-limit';

export class RateLimitingService {
  constructor() {
    // Implementación del servicio de limitación de tasas
  }

  getLimiter() {
    return rateLimit({
      windowMs: 15 * 60 * 1000, // 15 minutes
      max: 100 // limit each IP to 100 requests per windowMs
    });
  }
}