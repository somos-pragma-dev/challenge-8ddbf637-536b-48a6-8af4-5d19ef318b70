# Diseño y desarrollo de una plataforma de gestión de proyectos ágiles

Tu equipo en una fintech necesita desarrollar una plataforma completa de gestión de proyectos ágiles. La plataforma debe permitir la creación, asignación y seguimiento de tareas en diferentes estados (backlog, in progress, review, done, archived). Además, debe integrarse con servicios externos para notificaciones y reportes en tiempo real. El sistema debe ser robusto, escalable y seguro, con autenticación OAuth2 y un sistema de roles basado en RBAC. Deberás tomar decisiones de diseño para asegurar la consistencia, disponibilidad y rendimiento del sistema.

## Informacion General

| Campo | Valor |
|-------|-------|
| **Tema** | Plataforma de gestión de proyectos ágiles en Node.js |
| **Nivel** | junior-l2 |
| **Tipo** | mixed |
| **Tiempo estimado** | 40 horas |

## Fases del Reto

### Fase 0: Configuración del Proyecto

**Objetivo:** Obtener el proyecto base funcional enviando el Código Base a un asistente de IA, que lo analizará, corregirá errores y generará un ZIP listo para usar.

**Tiempo estimado:** 15-30 minutos

**Instrucciones:**

- Asegúrate de tener instalado para ejecutar el proyecto: Un IDE o editor de código.
- Copia todo el contenido del campo **Código Base** de este reto — incluyendo el texto de instrucciones que aparece al inicio.
- Abre un asistente de IA (Claude en claude.ai, ChatGPT o Gemini — se recomienda Claude), pega el contenido copiado en el chat y envíalo.
- El asistente analizará los archivos, corregirá errores y generará un archivo ZIP descargable. Descárgalo y extráelo en la carpeta donde quieras trabajar.
- Verifica que el proyecto arranca sin errores.

**Entregable:** El proyecto compila/arranca sin errores.

<details>
<summary>Pistas de conocimiento</summary>

- Copia el Código Base completo incluyendo el texto de instrucciones al inicio — esas instrucciones le indican al asistente exactamente qué hacer con los archivos.
- Si el asistente no genera el ZIP automáticamente al terminar el análisis, escríbele: "genera el ZIP ahora".
- Si el proyecto tiene errores al arrancar, comparte el mensaje de error con el mismo asistente para que lo corrija.

</details>

### Fase 1: Definición de requisitos y diseño inicial

**Objetivo:** Establecer los requisitos funcionales y no funcionales de la plataforma, y diseñar la arquitectura inicial.

**Tiempo estimado:** 8 horas

**Instrucciones:**

- Identifica los actores del dominio (originador de proyectos, equipo de desarrollo, stakeholders) y sus interacciones.
- Define las reglas de negocio para la transición de estados de las tareas.
- Establece los umbrales de rendimiento y escalabilidad requeridos (ej. 1 500 solicitudes/segundo en hora pico).
- Diseña la arquitectura del sistema, identificando los componentes clave y sus responsabilidades.

**Entregable:** Documento de diseño que describe los requisitos funcionales y no funcionales, y la arquitectura inicial del sistema.

<details>
<summary>Pistas de conocimiento</summary>

- Considera las mejores prácticas para el diseño de sistemas distribuidos y la gestión de estados.
- Piensa en cómo asegurar la consistencia y disponibilidad del sistema en presencia de fallos.

</details>

### Fase 2: Implementación del backend y autenticación

**Objetivo:** Implementar el backend de la plataforma con autenticación OAuth2 y un sistema de roles basado en RBAC.

**Tiempo estimado:** 12 horas

**Instrucciones:**

- Implementa el backend utilizando Node.js y Express, con TypeScript.
- Configura la autenticación OAuth2 y un sistema de roles basado en RBAC con permisos granulares.
- Asegura que el sistema maneje correctamente las transiciones de estado de las tareas.
- Implementa la persistencia en PostgreSQL con migraciones automatizadas usando Knex.js.

**Entregable:** Backend funcional con autenticación OAuth2 y sistema de roles basado en RBAC, y persistencia en PostgreSQL.

<details>
<summary>Pistas de conocimiento</summary>

- Considera cómo estructurar el código para facilitar la mantenibilidad y escalabilidad.
- Piensa en cómo manejar los errores de autenticación y autorización.

</details>

### Fase 3: Integración con servicios externos y notificaciones

**Objetivo:** Integrar la plataforma con servicios externos para notificaciones y reportes en tiempo real.

**Tiempo estimado:** 10 horas

**Instrucciones:**

- Integra la plataforma con servicios externos via webhooks para notificaciones en Slack y Microsoft Teams.
- Implementa un sistema de reportes en tiempo real usando WebSockets para actualizar dashboards de progreso.
- Asegura que el sistema maneje correctamente las integraciones y notificaciones.

**Entregable:** Plataforma integrada con servicios externos para notificaciones y reportes en tiempo real.

<details>
<summary>Pistas de conocimiento</summary>

- Considera cómo asegurar la fiabilidad y consistencia de las integraciones y notificaciones.
- Piensa en cómo manejar los errores de integración y notificación.

</details>

### Fase 4: Optimización y pruebas de integración

**Objetivo:** Optimizar el rendimiento y la escalabilidad del sistema, y realizar pruebas de integración end-to-end.

**Tiempo estimado:** 10 horas

**Instrucciones:**

- Implementa cache con Redis para las consultas más frecuentes del dashboard.
- Configura rate limiting por usuario y por endpoint.
- Aplica compresión gzip de respuestas.
- Configura CORS para múltiples orígenes.
- Implementa health checks para Kubernetes con readiness y liveness probes.
- Configura logging estructurado con Pino y métricas de performance con Prometheus.
- Realiza tests de integración que verifiquen los flujos principales end-to-end.

**Entregable:** Plataforma optimizada y con pruebas de integración end-to-end.

<details>
<summary>Pistas de conocimiento</summary>

- Considera cómo asegurar la consistencia y disponibilidad del sistema en presencia de alta carga.
- Piensa en cómo mejorar la experiencia del usuario a través de la optimización y el rendimiento.

</details>

## Dimensiones Evaluadas

- **queEs**: ¿Qué es una plataforma de gestión de proyectos ágiles y cuáles son sus componentes clave?
- **paraQueSirve**: ¿Para qué sirve la autenticación OAuth2 y el sistema de roles basado en RBAC en una plataforma de gestión de proyectos ágiles?
- **comoSeUsa**: ¿Cómo se usa un sistema de reportes en tiempo real con WebSockets para actualizar dashboards de progreso?
- **erroresComunes**: ¿Cuáles son los errores comunes al integrar una plataforma con servicios externos para notificaciones y reportes en tiempo real?
- **queDecisionesImplica**: ¿Qué decisiones implica el diseño de una plataforma de gestión de proyectos ágiles en términos de consistencia, disponibilidad y rendimiento?

## Criterios de Evaluacion

- Definición de requisitos y diseño inicial de la plataforma.
- Implementación del backend con autenticación OAuth2 y sistema de roles basado en RBAC.
- Integración con servicios externos para notificaciones y reportes en tiempo real.
- Optimización del rendimiento y la escalabilidad del sistema, y realización de pruebas de integración end-to-end.

---

*Reto generado automaticamente por Challenge Generator - Pragma*
