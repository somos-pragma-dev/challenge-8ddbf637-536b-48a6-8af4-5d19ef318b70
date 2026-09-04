import "reflect-metadata";
import express from 'express';
import { AuthController } from '../application/auth/AuthController';
import { WorkflowController } from '../application/workflow/WorkflowController';
import { ReportController } from '../application/reports/ReportController';
import { CacheService } from '../infrastructure/cache/CacheService';
import { SearchService } from '../infrastructure/search/SearchService';
import { RateLimitingService } from '../infrastructure/rateLimiting/RateLimitingService';
import { SecurityConfig } from '../config/security.config';

const app = express();
app.use(express.json());

// Middleware de seguridad
app.use(SecurityConfig.middleware);

// Rutas
app.use('/auth', AuthController);
app.use('/workflow', WorkflowController);
app.use('/reports', ReportController);

// Servicios
new CacheService();
new SearchService();
new RateLimitingService();

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});