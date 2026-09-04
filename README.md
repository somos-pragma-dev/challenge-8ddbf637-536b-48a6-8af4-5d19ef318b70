# Desarrollo de una Plataforma de Gestión de Proyectos Ágiles

El equipo de desarrollo necesita fortalecer sus habilidades en la creación de una plataforma completa de gestión de proyectos ágiles utilizando Node.js y otras tecnologías. La plataforma debe manejar autenticación, roles, workflow de tareas, integración con servicios externos, reportes en tiempo real, persistencia de datos, caché, búsqueda, limitación de tasas, compresión de respuestas, configuración de CORS, health checks, logging, métricas de performance y tests de integración.

## Informacion General

| Campo | Valor |
|-------|-------|
| **Tema** | nodejs-enterprise-platform |
| **Nivel** | junior-l2 |
| **Tipo** | mixed |
| **Tiempo estimado** | 40 horas |

## Fases del Reto

### Fase 0: Configuración del Proyecto

**Objetivo:** Obtener el proyecto base funcional enviando el Código Base a un asistente de IA, que lo analizará, corregirá errores y generará un ZIP listo para usar.

**Tiempo estimado:** 15-30 minutos

**Instrucciones:**

- Asegúrate de tener instalado para ejecutar el proyecto: Node.js 18+, npm, VS Code o similar.
- Copia todo el contenido del campo **Código Base** de este reto — incluyendo el texto de instrucciones que aparece al inicio.
- Abre un asistente de IA (Claude en claude.ai, ChatGPT o Gemini — se recomienda Claude), pega el contenido copiado en el chat y envíalo.
- El asistente analizará los archivos, corregirá errores y generará un archivo ZIP descargable. Descárgalo y extráelo en la carpeta donde quieras trabajar.
- Ejecuta `npm install && npm run build` (o `npm start`). Si no hay errores, estás listo.

**Entregable:** El proyecto compila/arranca sin errores.

<details>
<summary>Pistas de conocimiento</summary>

- Copia el Código Base completo incluyendo el texto de instrucciones al inicio — esas instrucciones le indican al asistente exactamente qué hacer con los archivos.
- Si el asistente no genera el ZIP automáticamente al terminar el análisis, escríbele: "genera el ZIP ahora".
- Si el proyecto tiene errores al arrancar, comparte el mensaje de error con el mismo asistente para que lo corrija.

</details>

### Fase 1: Autenticación y Sistema de Roles

**Objetivo:** Implementar un backend en Node.js con autenticación OAuth2 y un sistema de roles basado en RBAC con permisos granulares.

**Tiempo estimado:** 10 horas

**Instrucciones:**

- Diseñar el flujo de autenticación utilizando OAuth2.
- Implementar un sistema de roles con permisos granulares para manejar diferentes niveles de acceso.

**Entregable:** Backend con autenticación OAuth2 y sistema de roles funcional.

<details>
<summary>Pistas de conocimiento</summary>

- Considera los diferentes tipos de tokens y su uso en la autenticación.
- Evalúa los pros y contras de diferentes estrategias de gestión de roles.

</details>

### Fase 2: Motor de Workflow y Integración con Servicios Externos

**Objetivo:** Implementar un motor de workflow para manejar transiciones de estado de las tareas y la integración con servicios externos via webhooks para notificaciones.

**Tiempo estimado:** 10 horas

**Instrucciones:**

- Diseñar y desarrollar un motor de workflow que maneje las transiciones de estado de las tareas.
- Integrar la plataforma con servicios externos como Slack y Microsoft Teams para enviar notificaciones.

**Entregable:** Motor de workflow funcional y notificaciones integradas con servicios externos.

<details>
<summary>Pistas de conocimiento</summary>

- Investiga diferentes patrones de diseño para implementar un motor de workflow.
- Considera los diferentes tipos de webhooks y su uso en la integración con servicios externos.

</details>

### Fase 3: Sistema de Reportes en Tiempo Real y Persistencia de Datos

**Objetivo:** Implementar un sistema de reportes en tiempo real usando WebSockets y persistencia en PostgreSQL con migraciones automatizadas.

**Tiempo estimado:** 10 horas

**Instrucciones:**

- Desarrollar un sistema de reportes en tiempo real que actualice los dashboards de progreso utilizando WebSockets.
- Implementar la persistencia de datos en PostgreSQL con migraciones automatizadas utilizando Knex.js.

**Entregable:** Sistema de reportes en tiempo real y base de datos PostgreSQL con migraciones automatizadas.

<details>
<summary>Pistas de conocimiento</summary>

- Investiga las mejores prácticas para implementar WebSockets en Node.js.
- Evalúa las diferentes estrategias para manejar migraciones de base de datos.

</details>

### Fase 4: Cache, Búsqueda Full-Text y Limitación de Tasas

**Objetivo:** Implementar caché con Redis, sistema de búsqueda full-text con ElasticSearch y limitación de tasas por usuario y por endpoint.

**Tiempo estimado:** 10 horas

**Instrucciones:**

- Implementar un sistema de caché con Redis para las consultas más frecuentes del dashboard.
- Desarrollar un sistema de búsqueda full-text sobre las tareas y comentarios utilizando ElasticSearch.
- Implementar la limitación de tasas por usuario y por endpoint.

**Entregable:** Sistema de caché, búsqueda full-text y limitación de tasas funcionales.

<details>
<summary>Pistas de conocimiento</summary>

- Investiga las mejores prácticas para implementar caché con Redis.
- Evalúa las diferentes estrategias para implementar búsqueda full-text con ElasticSearch.
- Considera los diferentes algoritmos para la limitación de tasas.

</details>

## Dimensiones Evaluadas

- **queEs**: ¿Qué es un motor de workflow y cómo se integra con un sistema de gestión de proyectos?
- **paraQueSirve**: ¿Para qué sirve la autenticación OAuth2 en una plataforma de gestión de proyectos?
- **comoSeUsa**: ¿Cómo se usa Redis para implementar un sistema de caché en una aplicación Node.js?
- **erroresComunes**: ¿Cuáles son los errores comunes al implementar un sistema de búsqueda full-text con ElasticSearch?
- **queDecisionesImplica**: ¿Qué decisiones implica la implementación de un sistema de limitación de tasas en una plataforma de gestión de proyectos?

## Criterios de Evaluacion

- Implementar un backend con autenticación OAuth2 y sistema de roles.
- Desarrollar un motor de workflow y integración con servicios externos.
- Crear un sistema de reportes en tiempo real y persistencia de datos.
- Implementar caché, búsqueda full-text y limitación de tasas.

---

*Reto generado automaticamente por Challenge Generator - Pragma*
