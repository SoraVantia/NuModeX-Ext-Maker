# Política de Privacidad

[English](PRIVACY-POLICY.md) | [日本語](PRIVACY-POLICY.ja.md) | [Español](PRIVACY-POLICY.es.md) | [Français](PRIVACY-POLICY.fr.md) | [한국어](PRIVACY-POLICY.ko.md) | [中文](PRIVACY-POLICY.zh.md) | [Deutsch](PRIVACY-POLICY.de.md) | [Português](PRIVACY-POLICY.pt.md) | [Italiano](PRIVACY-POLICY.it.md)

> **Nota:** Esta traducción es solo para fines informativos. En caso de cualquier discrepancia entre esta traducción y la versión en inglés, la versión en inglés prevalecerá y será legalmente vinculante.

**NuModeX Ext Maker — Un producto de SoraVantia GK**

Fecha de vigencia: 15 de marzo de 2026
Última actualización: 15 de marzo de 2026

Sitio web: https://numodex.com/numodexextmaker
URL de la Política de Privacidad: https://numodex.com/numodexextmaker/privacy

## 1. Introducción

Esta Política de Privacidad describe cómo NuModeX Ext Maker ("Servicio", "Extensión" o "Software"), desarrollado por SoraVantia GK ("SoraVantia GK", "nosotros" o "nuestro"), maneja su información. Estamos comprometidos con la protección de su privacidad.

NuModeX Ext Maker es una extensión de navegador que funciona completamente en su navegador. No operamos servidores, bases de datos ni infraestructura en la nube para este producto. No recopilamos, recibimos, almacenamos ni tenemos acceso a ninguno de sus datos.

## 2. Información que recopilamos

**No recopilamos ningún dato.** SoraVantia GK no recopila, recibe, almacena ni procesa ninguna información personal ni datos de uso de los usuarios de NuModeX Ext Maker. No tenemos servidores backend, análisis, telemetría ni seguimiento de ningún tipo.

## 3. Información almacenada localmente en su dispositivo

NuModeX Ext Maker almacena datos localmente en su navegador utilizando APIs de almacenamiento estándar del navegador. Estos datos nunca salen de su dispositivo y nunca se transmiten a SoraVantia GK ni a ningún tercero bajo nuestro control.

### 3.1 Chrome Storage API (chrome.storage.local)

Los siguientes datos se almacenan utilizando la API de almacenamiento integrada de Chrome:

- **Clave de API** — Su clave de API del proveedor de IA, ingresada por usted. Se almacena localmente y solo se usa para autenticar solicitudes al proveedor de IA que seleccionó.
- **Estado de aceptación del EULA** — Si ha aceptado los Términos de Servicio y qué versión.
- **Preferencias de interfaz** — Su idioma seleccionado y configuración de modo oscuro.
- **Modelo de IA seleccionado** — El último modelo de IA que seleccionó del menú desplegable.
- **Configuración del modelo personalizado** — La URL del endpoint del servidor de IA personalizado, el nombre del modelo y la clave de API opcional, si está configurado.

### 3.2 IndexedDB (a través de Dexie.js)

Los siguientes datos se almacenan utilizando IndexedDB, una base de datos local del navegador:

- **Proyectos** — Sus proyectos guardados, incluyendo nombres de proyectos, archivos de extensión generados (código fuente), historial de conversación con la IA y marcas de tiempo.
- **Historial de deshacer** — Estados anteriores de archivos para la función deshacer, almacenados por proyecto.

### 3.3 Cómo eliminar los datos almacenados localmente

Puede eliminar todos los datos almacenados localmente en cualquier momento mediante:

- Desinstalar la extensión (elimina todos los datos automáticamente)
- Limpiar los datos de extensión de su navegador a través de la configuración del navegador
- Usar el botón "Eliminar clave" en la extensión para eliminar su clave de API almacenada
- Usar el botón "Eliminar" en el selector de proyectos para eliminar proyectos individuales
- Usar el botón "Comenzar de nuevo" para limpiar el contenido del proyecto actual

## 4. Información transmitida a terceros

### 4.1 Proveedores de API de IA

Cuando utiliza NuModeX Ext Maker para generar, editar o chatear sobre extensiones de navegador, el texto de sus indicaciones y el historial de conversación se transmiten directamente desde su navegador al proveedor de IA que seleccionó. Esta transmisión se realiza a través de la API del proveedor de IA utilizando su propia clave de API.

Los proveedores de IA que pueden recibir los datos de sus indicaciones incluyen:

- **Google** (Gemini API) — Sujeto a los Términos de Servicio de la API de Google y su Política de Privacidad
- **OpenAI** (modelos GPT) — Sujeto a los Términos de Uso de la API de OpenAI y su Política de Privacidad
- **Anthropic** (modelos Claude) — Sujeto a los Términos de Servicio de la API de Anthropic y su Política de Privacidad

**Importante:**

- SoraVantia GK no actúa como intermediario en estas transmisiones. Su navegador se comunica directamente con los servidores del proveedor de IA.
- SoraVantia GK no tiene acceso, no registra ni monitorea ningún dato que envíe a los proveedores de IA.
- Su clave de API se envía directamente al proveedor de IA para autenticación. SoraVantia GK nunca recibe ni ve su clave de API.
- Los datos enviados a los proveedores de IA incluyen sus indicaciones de texto, historial de conversación y cualquier imagen que adjunte. No incluyen su almacenamiento de clave de API, preferencias de interfaz ni otras configuraciones locales.
- Su uso de servicios de IA de terceros se rige por sus respectivas políticas de privacidad y términos de servicio. Le recomendamos revisar esas políticas.

### 4.2 Modelos de IA en el dispositivo

Si utiliza modelos de IA en el dispositivo (como Gemini Nano en Chrome o Phi-4 Mini en Edge), sus indicaciones se procesan completamente en su dispositivo. No se transmiten datos a ningún servidor externo para el uso de modelos en el dispositivo.

### 4.3 Servidores de IA personalizados / locales

Puede configurar un endpoint de servidor de IA personalizado (como un servidor alojado localmente en su máquina o red local). Al usar un endpoint personalizado:

- Sus indicaciones y el historial de conversación se envían directamente a la dirección del servidor que configuró.
- SoraVantia GK no tiene conocimiento, control ni responsabilidad sobre los endpoints personalizados.
- Si configura un servidor local (por ejemplo, ejecutándose en localhost), sus datos permanecen completamente en su máquina.
- Si configura un servidor remoto, sus datos se envían a ese servidor. Usted es responsable de comprender las prácticas de privacidad de cualquier servidor personalizado al que se conecte.
- La URL del endpoint personalizado, el nombre del modelo y la clave de API opcional se almacenan localmente en su navegador usando chrome.storage.local.

### 4.4 Sin otras transmisiones a terceros

NuModeX Ext Maker no transmite datos a:

- Servidores de SoraVantia GK (no tenemos ninguno para este producto)
- Servicios de análisis (no se utiliza ninguno)
- Redes publicitarias (no se utiliza ninguna)
- Plataformas de redes sociales
- Cualquier otro tercero no listado en las Secciones 4.1 y 4.3

## 5. Cookies y seguimiento

NuModeX Ext Maker no utiliza cookies, web beacons, píxeles ni ninguna otra tecnología de seguimiento. No rastreamos su actividad de navegación, patrones de uso ni comportamiento.

## 6. Privacidad de los niños

NuModeX Ext Maker no está dirigido a niños menores de 16 años. No recopilamos información de niños a sabiendas. Como se indica en nuestros Términos de Servicio, los usuarios deben tener al menos 16 años para usar el Software. Dado que no recopilamos ningún dato, no existe riesgo de recopilar inadvertidamente datos de niños.

## 7. Seguridad de los datos

Dado que todos los datos se almacenan localmente en su navegador y no recibimos ni almacenamos ningún dato de usuario, la seguridad de sus datos depende de:

- La seguridad de su dispositivo y navegador
- Su gestión de las claves de API de su proveedor de IA
- Los mecanismos de protección de datos integrados en su navegador

Recomendamos:

- Eliminar o desactivar su clave de API cuando no esté en uso
- No compartir su dispositivo o perfil de navegador con personas no confiables
- Mantener su navegador y sistema operativo actualizados

## 8. Sus derechos

### 8.1 Derechos generales

Dado que SoraVantia GK no recopila ni almacena ninguno de sus datos, los derechos tradicionales del titular de datos (acceso, corrección, eliminación, portabilidad) se ejercen directamente en su dispositivo:

- **Acceso** — Todos sus datos son visibles en la interfaz de la extensión (proyectos, archivos, historial de conversación).
- **Eliminación** — Elimine proyectos individuales, borre su clave de API o desinstale la extensión para eliminar todos los datos.
- **Portabilidad** — Sus archivos de extensión generados se pueden descargar como ZIP en cualquier momento.

### 8.2 Espacio Económico Europeo (RGPD)

Si se encuentra en el EEE, tiene derechos bajo el Reglamento General de Protección de Datos. Dado que no recopilamos ni procesamos sus datos personales, estos derechos se satisfacen inherentemente. No es necesario un acuerdo de procesamiento de datos con nosotros porque no se nos transmiten datos.

### 8.3 California (CCPA/CPRA)

Si es residente de California, tiene derechos bajo la Ley de Privacidad del Consumidor de California. No vendemos, compartimos ni divulgamos información personal porque no recopilamos ninguna. No hay información personal que podamos vender, compartir o divulgar.

### 8.4 Japón (APPI)

SoraVantia GK es una corporación japonesa sujeta a la Ley de Protección de Información Personal. Dado que no recopilamos, almacenamos ni procesamos datos personales a través de NuModeX Ext Maker, no surgen obligaciones APPI de su uso de este producto.

## 9. Cambios a esta Política de Privacidad

Podemos actualizar esta Política de Privacidad de vez en cuando. Si realizamos cambios materiales, actualizaremos la fecha de "Última actualización" en la parte superior de este documento. Le recomendamos revisar esta Política de Privacidad periódicamente.

Si un cambio altera materialmente cómo se manejan los datos (por ejemplo, si una versión futura introduce análisis o procesamiento del lado del servidor), notificaremos a los usuarios a través de la interfaz de la extensión antes de que el cambio entre en vigor.

## 10. Transparencia de código abierto

NuModeX Ext Maker tiene doble licencia bajo la Apache License 2.0 y la Marketplace Publication License. El código fuente está disponible públicamente, lo que permite a cualquier persona verificar nuestras prácticas de privacidad inspeccionando el código directamente.

## 11. Contáctenos

Si tiene alguna pregunta o inquietud sobre esta Política de Privacidad, por favor contáctenos:

**SoraVantia GK**
Correo electrónico: numodex@soravantia.com
Sitio web: https://numodex.com/numodexextmaker

## 12. Resumen

| Pregunta | Respuesta |
|----------|-----------|
| ¿Recopilan datos personales? | No |
| ¿Usan cookies o seguimiento? | No |
| ¿Tienen un servidor backend? | No |
| ¿Dónde se almacenan mis datos? | Solo localmente en su navegador |
| ¿Quién puede ver mis datos? | Solo usted, en su dispositivo |
| ¿Se envían datos a SoraVantia GK? | No, nunca |
| ¿Se envían datos a proveedores de IA? | Sí, sus indicaciones se envían directamente al proveedor de IA que seleccione, usando su propia clave de API |
| ¿Puedo eliminar mis datos? | Sí, desinstalando la extensión o usando las opciones de eliminación dentro de la aplicación |
| ¿Venden datos? | No |
| ¿El código fuente está disponible? | Sí, con doble licencia bajo Apache License 2.0 y Marketplace Publication License |

---

Copyright 2026 SoraVantia GK. All rights reserved.
