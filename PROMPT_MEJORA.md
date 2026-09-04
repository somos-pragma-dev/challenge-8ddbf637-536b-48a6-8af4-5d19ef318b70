# Prompt para Mejorar el Codigo Base

Copia y pega el siguiente contenido completo en un asistente de IA (Claude, ChatGPT, etc.)
para obtener un ZIP con el proyecto corregido y listo para compilar.

---

```
Eres un asistente experto en análisis, corrección y generación de archivos de cualquier tipo:
código fuente, documentación, hojas de cálculo, documentos Word, configuraciones, entre otros.
Voy a enviarte una cadena de texto que contiene uno o más archivos. Cada archivo está delimitado por un marcador con el siguiente formato:
// === ARCHIVO: ruta/del/archivo.extension ===
o también puede aparecer como:
## === ARCHIVO: ruta/del/archivo.extension ===
Lo que sigue al marcador puede ser:

El contenido real del archivo (código, texto, YAML, etc.)
Una descripción en lenguaje natural de lo que debe contener el archivo


TU TAREA
PASO 1 — Detección y extracción
Identifica todos los archivos presentes en la cadena. Para cada archivo extrae:

Su ruta completa (ej: src/main/java/com/pragma/Service.java)
Su contenido o descripción

PASO 2 — Clasificación por tipo
Clasifica cada archivo en una de estas categorías:
A) Código fuente (Java, Python, TypeScript, JavaScript, Kotlin, etc.)
B) Configuración / documentación (YAML, properties, Markdown, JSON, txt, etc.)
C) Excel (.xlsx, .xls, .csv)
D) Word (.docx, .doc)
E) Otro tipo de archivo binario o especial
PASO 3 — Clasificación de errores en código fuente

Objetivo prioritario: que el proyecto compile. No corrijas flujo de negocio ni lógica funcional.

Antes de modificar cualquier archivo de código fuente, clasifica cada problema encontrado en una de estas dos categorías:
🔴 ERROR DE COMPILACIÓN — corregir siempre
Son errores que impiden que el proyecto arranque, sin valor pedagógico:

Import faltante o incorrecto
Clase, método o variable referenciada que no existe en ningún archivo del proyecto
Error de sintaxis
Anotación con atributos inválidos
Dependencia ausente en pom.xml, package.json, etc.
Archivo referenciado que no existe y debe ser creado con implementación mínima

→ CORREGIR estos errores.
🟡 PROBLEMA FUNCIONAL O DE CALIDAD — preservar siempre
Son problemas que no impiden compilar. Pueden ser intencionales para el aprendizaje:

Clave secreta hardcodeada ("secret", "password123")
API deprecada que funciona pero tiene reemplazo moderno
Lógica de negocio incorrecta o incompleta
Código redundante o de baja legibilidad
Falta de validaciones en flujo de negocio
Patrones de diseño incorrectos pero funcionales
Concurrencia no segura
Configuración funcional pero no óptima

→ PRESERVAR tal cual. No corregir, no mejorar, no comentar.
PASO 4 — Procesamiento según tipo de archivo
Tipo A — Código fuente
Aplica únicamente las correcciones clasificadas como 🔴 ERROR DE COMPILACIÓN.
No alteres ningún elemento clasificado como 🟡 PROBLEMA FUNCIONAL O DE CALIDAD.
Si falta un archivo referenciado, créalo con la implementación mínima necesaria para compilar.
Tipo B — Configuración / documentación
Extrae el contenido tal cual, sin modificaciones salvo errores evidentes de sintaxis
(ej: YAML mal indentado).
Tipo C — Excel (.xlsx)
Si viene con contenido real, genera el archivo respetando ese contenido.
Si viene con descripción en lenguaje natural, genera un archivo Excel funcional con:

Fila de encabezados en negrita con color de fondo distintivo
Columnas con ancho ajustado al contenido
Tipos de dato correctos por columna
Validaciones si la descripción lo indica
Hojas nombradas descriptivamente si hay más de una
Filas de ejemplo si no hay datos reales

Tipo D — Word (.docx)
Si viene con contenido real, genera el archivo respetando ese contenido.
Si viene con descripción en lenguaje natural, genera un documento Word funcional con:

Estilos de título (Título 1, Título 2) para jerarquía de secciones
Fuente legible (Calibri o equivalente), tamaño 11-12pt para cuerpo
Márgenes estándar
Tabla de contenido si tiene múltiples secciones
Tablas con encabezados en negrita si aplica

Tipo E — Otro
Genera el archivo con el contenido o estructura más apropiada según la descripción.
PASO 5 — Exportación en ZIP
Empaqueta todos los archivos en un único archivo ZIP descargable respetando exactamente
la estructura de rutas indicada por los marcadores.
El ZIP debe incluir:

Archivos de código con únicamente los errores de compilación corregidos
Archivos de configuración y documentación sin cambios
Archivos nuevos creados para resolver dependencias de compilación faltantes
Archivos Excel y Word generados desde descripción

IMPORTANTE: El ZIP debe estar listo para descargar al finalizar. No preguntes si el usuario
quiere generarlo. Simplemente genera el archivo y proporciona el enlace de descarga; No debes desplegar en el chat el resumen de lo que arreglaste al Zip, solo entregalo.

REGLAS IMPORTANTES

No omitas ningún archivo aunque no tenga errores ni modificaciones
Respeta los nombres y rutas exactas indicadas por los marcadores
Si un archivo no tiene marcador claro, infiere el nombre desde su contenido
Si la cadena contiene solo documentación o descripciones sin código, genera los archivos
correspondientes sin aplicar análisis de compilación
No agregues texto después del enlace de descarga del ZIP
No preguntes si el usuario quiere el ZIP: simplemente generalo siempre
Si detectas que falta un archivo de configuración necesario para compilar
(pom.xml, package.json, requirements.txt, build.gradle, etc.), créalo e inclúyelo
inferiendo su contenido desde los imports y frameworks detectados en el código
Nunca corrijas problemas 🟡 aunque parezcan obvios o fáciles de mejorar.
El participante que recibirá este proyecto los debe encontrar y resolver él mismo.


INPUT
Aquí está la cadena con los archivos:
// === ARCHIVO: package.json ===
{
  "name": "agile-project-management-platform",
  "version": "1.0.0",
  "main": "src/main/index.ts",
  "scripts": {
    "start": "ts-node src/main/index.ts",
    "test": "jest"
  },
  "dependencies": {
    "express": "4.18.2",
    "knex": "2.6.1",
    "pg": "8.11.3",
    "redis": "4.2.3",
    "elasticsearch": "17.4.0",
    "pino": "8.8.0"
  },
  "devDependencies": {
    "typescript": "5.2.2",
    "jest": "29.7.0",
    "ts-node": "^10.9.1"
  }
}

// === ARCHIVO: tsconfig.json ===
{
  "compilerOptions": {
    "target": "ES2020",
    "module": "commonjs",
    "strict": true,
    "esModuleInterop": true,
    "skipLibCheck": true,
    "forceConsistentCasingInFileNames": true,
    "outDir": "dist",
    "rootDir": "src"
  }
}

// === ARCHIVO: src/main/index.ts ===
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

// === ARCHIVO: src/application/auth/AuthService.ts ===
import { Auth } from '../../domain/auth/Auth';
import { AuthRepository } from '../../infrastructure/auth/AuthRepository';

export class AuthService {
  private authRepository: AuthRepository;

  constructor(authRepository: AuthRepository) {
    this.authRepository = authRepository;
  }

  async authenticate(username: string, password: string): Promise<Auth> {
    // Implementación de la autenticación
    return new Auth();
  }
}

// === ARCHIVO: src/domain/auth/Auth.ts ===
export class Auth {
  constructor(
    public id: string,
    public username: string,
    public roles: string[]
  ) {}
}

// === ARCHIVO: src/infrastructure/auth/AuthRepository.ts ===
import { Auth } from '../domain/auth/Auth';

export class AuthRepository {
  async getAuth(username: string): Promise<Auth> {
    // Implementación del repositorio de autenticación
    return new Auth('', '', []);
  }
}

// === ARCHIVO: src/main/auth/AuthController.ts ===
import express from 'express';
import { AuthService } from '../application/auth/AuthService';

const router = express.Router();
const authService = new AuthService(new AuthRepository());

router.post('/login', async (req, res) => {
  const { username, password } = req.body;
  try {
    const auth = await authService.authenticate(username, password);
    res.status(200).json(auth);
  } catch (error) {
    res.status(401).json({ error: 'Invalid credentials' });
  }
});

export { router as AuthController };

// === ARCHIVO: src/application/workflow/WorkflowService.ts ===
import { Workflow } from '../../domain/workflow/Workflow';
import { WorkflowRepository } from '../../infrastructure/workflow/WorkflowRepository';

export class WorkflowService {
  private workflowRepository: WorkflowRepository;

  constructor(workflowRepository: WorkflowRepository) {
    this.workflowRepository = workflowRepository;
  }

  async getWorkflow(id: string): Promise<Workflow> {
    // Implementación del motor de workflow
    return new Workflow();
  }
}

// === ARCHIVO: src/domain/workflow/Workflow.ts ===
export class Workflow {
  constructor(
    public id: string,
    public name: string,
    public states: string[]
  ) {}
}

// === ARCHIVO: src/infrastructure/workflow/WorkflowRepository.ts ===
import { Workflow } from '../domain/workflow/Workflow';

export class WorkflowRepository {
  async getWorkflow(id: string): Promise<Workflow> {
    // Implementación del repositorio de workflow
    return new Workflow('', '', []);
  }
}

// === ARCHIVO: src/main/workflow/WorkflowController.ts ===
import express from 'express';
import { WorkflowService } from '../application/workflow/WorkflowService';

const router = express.Router();
const workflowService = new WorkflowService(new WorkflowRepository());

router.get('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const workflow = await workflowService.getWorkflow(id);
    res.status(200).json(workflow);
  } catch (error) {
    res.status(404).json({ error: 'Workflow not found' });
  }
});

export { router as WorkflowController };

// === ARCHIVO: src/application/reports/ReportService.ts ===
import { Report } from '../../domain/reports/Report';
import { ReportRepository } from '../../infrastructure/reports/ReportRepository';

export class ReportService {
  private reportRepository: ReportRepository;

  constructor(reportRepository: ReportRepository) {
    this.reportRepository = reportRepository;
  }

  async getReport(id: string): Promise<Report> {
    // Implementación del servicio de reportes
    return new Report();
  }
}

// === ARCHIVO: src/domain/reports/Report.ts ===
export class Report {
  constructor(
    public id: string,
    public title: string,
    public data: any
  ) {}
}

// === ARCHIVO: src/infrastructure/reports/ReportRepository.ts ===
import { Report } from '../domain/reports/Report';

export class ReportRepository {
  async getReport(id: string): Promise<Report> {
    // Implementación del repositorio de reportes
    return new Report('', '', {});
  }
}

// === ARCHIVO: src/main/reports/ReportController.ts ===
import express from 'express';
import { ReportService } from '../application/reports/ReportService';

const router = express.Router();
const reportService = new ReportService(new ReportRepository());

router.get('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const report = await reportService.getReport(id);
    res.status(200).json(report);
  } catch (error) {
    res.status(404).json({ error: 'Report not found' });
  }
});

export { router as ReportController };

// === ARCHIVO: src/infrastructure/cache/CacheService.ts ===
import redis from 'redis';

export class CacheService {
  private client: redis.RedisClient;

  constructor() {
    this.client = redis.createClient({
      host: 'localhost',
      port: 6379
    });
  }

  async set(key: string, value: any, ttl: number): Promise<void> {
    this.client.setex(key, ttl, JSON.stringify(value));
  }

  async get(key: string): Promise<any> {
    return new Promise((resolve, reject) => {
      this.client.get(key, (err, reply) => {
        if (err) reject(err);
        else resolve(JSON.parse(reply));
      });
    });
  }
}

// === ARCHIVO: src/infrastructure/search/SearchService.ts ===
import { Client } from 'elasticsearch';

export class SearchService {
  private client: Client;

  constructor() {
    this.client = new Client({ node: 'http://localhost:9200' });
  }

  async search(query: string): Promise<any> {
    return this.client.search({
      index: 'tasks',
      body: {
        query: {
          match: { message: query }
        }
      }
    });
  }
}

// === ARCHIVO: src/infrastructure/rateLimiting/RateLimitingService.ts ===
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

// === ARCHIVO: config/auth.config.ts ===
export const authConfig = {
  // Configuración de autenticación
};

// === ARCHIVO: config/workflow.config.ts ===
export const workflowConfig = {
  // Configuración de workflow
};

// === ARCHIVO: config/reports.config.ts ===
export const reportsConfig = {
  // Configuración de reportes
};

// === ARCHIVO: config/cache.config.ts ===
export const cacheConfig = {
  // Configuración de caché
};

// === ARCHIVO: config/search.config.ts ===
export const searchConfig = {
  // Configuración de búsqueda
};

// === ARCHIVO: config/rateLimiting.config.ts ===
export const rateLimitingConfig = {
  // Configuración de limitación de tasas
};

// === ARCHIVO: config/security.config.ts ===
import { Request, Response, NextFunction } from 'express';

export class SecurityConfig {
  static middleware(req: Request, res: Response, next: NextFunction) {
    // Implementación del middleware de seguridad
    next();
  }
}

// === ARCHIVO: migrations/initial.ts ===
import knex from 'knex';

const db = knex({
  client: 'pg',
  connection: {
    host : '127.0.0.1',
    user : 'your_database_user',
    password : 'your_database_password',
    database : 'your_database'
  }
});

export async function up() {
  // Implementación de la migración inicial
  await db.schema.createTable('tasks', (table) => {
    table.increments('id');
    table.string('title');
    table.text('description');
  });
}

export async function down() {
  // Implementación de la migración hacia abajo
  await db.schema.dropTable('tasks');
}

// === ARCHIVO: scripts/start.sh ===
#!/bin/bash
npm run start

// === ARCHIVO: tests/auth/AuthService.test.ts ===
import { AuthService } from '../../../src/application/auth/AuthService';
import { AuthRepository } from '../../../src/infrastructure/auth/AuthRepository';

describe('AuthService', () => {
  let authService: AuthService;
  let authRepository: AuthRepository;

  beforeEach(() => {
    authRepository = new AuthRepository();
    authService = new AuthService(authRepository);
  });

  it('should authenticate user', async () => {
    const auth = await authService.authenticate('test', 'test');
    expect(auth).toBeDefined();
  });

  it('should return error for invalid credentials', async () => {
    try {
      await authService.authenticate('invalid', 'invalid');
    } catch (error) {
      expect(error).toBeDefined();
    }
  });

  it('should return error for missing credentials', async () => {
    try {
      await authService.authenticate('', '');
    } catch (error) {
      expect(error).toBeDefined();
    }
  });
});

// === ARCHIVO: tests/workflow/WorkflowService.test.ts ===
import { WorkflowService } from '../../../src/application/workflow/WorkflowService';
import { WorkflowRepository } from '../../../src/infrastructure/workflow/WorkflowRepository';

describe('WorkflowService', () => {
  let workflowService: WorkflowService;
  let workflowRepository: WorkflowRepository;

  beforeEach(() => {
    workflowRepository = new WorkflowRepository();
    workflowService = new WorkflowService(workflowRepository);
  });

  it('should get workflow', async () => {
    const workflow = await workflowService.getWorkflow('1');
    expect(workflow).toBeDefined();
  });

  it('should return error for invalid workflow', async () => {
    try {
      await workflowService.getWorkflow('invalid');
    } catch (error) {
      expect(error).toBeDefined();
    }
  });

  it('should return error for missing workflow', async () => {
    try {
      await workflowService.getWorkflow('');
    } catch (error) {
      expect(error).toBeDefined();
    }
  });
});

// === ARCHIVO: tests/reports/ReportService.test.ts ===
import { ReportService } from '../../../src/application/reports/ReportService';
import { ReportRepository } from '../../../src/infrastructure/reports/ReportRepository';

describe('ReportService', () => {
  let reportService: ReportService;
  let reportRepository: ReportRepository;

  beforeEach(() => {
    reportRepository = new ReportRepository();
    reportService = new ReportService(reportRepository);
  });

  it('should get report', async () => {
    const report = await reportService.getReport('1');
    expect(report).toBeDefined();
  });

  it('should return error for invalid report', async () => {
    try {
      await reportService.getReport('invalid');
    } catch (error) {
      expect(error).toBeDefined();
    }
  });

  it('should return error for missing report', async () => {
    try {
      await reportService.getReport('');
    } catch (error) {
      expect(error).toBeDefined();
    }
  });
});

```
