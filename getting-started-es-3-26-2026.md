[English](getting-started-en-3-26-2026.md) | [日本語](getting-started-ja-3-26-2026.md) | [Français](getting-started-fr-3-26-2026.md) | [한국어](getting-started-ko-3-26-2026.md) | [中文](getting-started-zh-3-26-2026.md) | [Deutsch](getting-started-de-3-26-2026.md) | [Português](getting-started-pt-3-26-2026.md) | [Italiano](getting-started-it-3-26-2026.md)

# Guia de Inicio de NuModeX Ext Maker

Esta guia te lleva paso a paso por la configuracion, la primera compilacion y los problemas comunes con mas detalle que el README.

## Requisitos previos

- Un navegador basado en Chromium (Chrome, Edge, Brave, Whale) o Firefox
- Una clave API de al menos un proveedor de IA en la nube - no es necesaria si usas modelos en el dispositivo
- Conocimiento basico de extensiones de navegador (util pero no obligatorio)

## Configuracion de Modelos en la Nube

### 1. Instalar la extension

**Desde tiendas de extensiones de navegador (proximamente):**
NuModeX Ext Maker aun no esta disponible en ninguna tienda de extensiones de navegador. La disponibilidad en tiendas se anunciara en [numodex.com/numodexextmaker](https://numodex.com/numodexextmaker) y a traves de GitHub Releases.

**Desde el codigo fuente (modo desarrollador):**
1. Clona o descarga el repositorio.
2. Abre `chrome://extensions` (o el equivalente en tu navegador).
3. Activa el modo desarrollador.
4. Haz clic en "Cargar descomprimida" y selecciona la carpeta del navegador correspondiente (`browsers/chrome`, `browsers/edge` o `browsers/firefox`).

### 2. Obtener tu clave API

Necesitas una clave API de al menos un proveedor de IA en la nube compatible. Visita la consola de desarrollador o plataforma API de tu proveedor para generar una clave. La clave de cada proveedor se guarda por separado en la extension - puedes cambiar entre proveedores libremente.

### 3. Configurar y construir

1. Acepta los Terminos de Servicio (aparece automaticamente en el primer inicio).
2. Haz clic en el icono de Configuracion en el popup de la extension.
3. Pega tu clave API y haz clic en "Guardar clave".
4. Selecciona un modelo de IA del menu desplegable.
5. Describe lo que quieres construir en el chat.
6. Haz clic en "Construir Extension" o "Construir Sitio Web" y espera la generacion.
7. Revisa y edita los archivos generados segun sea necesario usando las herramientas de edicion integradas.
8. Haz clic en "Descargar todo como ZIP".
9. Para extensiones: Extrae el ZIP, ve a `chrome://extensions`, activa el modo desarrollador y haz clic en "Cargar descomprimida". Para sitios web: Extrae y abre `index.html` en tu navegador.

> **Otros navegadores:** Las extensiones generadas son Manifest V3 y compatibles con Edge, Brave, Whale y otros navegadores basados en Chromium. Los pasos de carga lateral varian segun el navegador.

## Configuracion de Modelos en el Dispositivo

Los modelos en el dispositivo se ejecutan completamente en tu hardware sin necesidad de clave API ni conexion a la nube. **Estos modelos solo estan disponibles en navegadores especificos:** Gemini Nano en Google Chrome y Phi-4 Mini en Microsoft Edge. Otros navegadores basados en Chromium (Brave, Whale, etc.) y Firefox no soportan actualmente IA en el dispositivo a traves de APIs del navegador.

**Diferencias clave con los modelos en la nube:**
- Los modelos en el dispositivo solo pueden usarse para **chat y edicion de archivos**, no para compilaciones completas.
- El modelo debe descargarse en el primer uso (puede tardar varios minutos).
- Los requisitos de hardware son estrictos - verifica antes de intentar solucionar problemas.

### Chrome - Gemini Nano

1. Usa Chrome version 127 o superior (Dev o Canary recomendado para mejores resultados).
2. Ve a `chrome://flags/#optimization-guide-on-device-model` y configura como **Enabled BypassPerfRequirement**.
3. Ve a `chrome://flags/#prompt-api-for-gemini-nano` y configura como **Enabled**.
4. Reinicia Chrome.
5. Ve a `chrome://on-device-internals` y verifica el estado del modelo. Si el modelo no esta descargado, ve a `chrome://components/`, busca **Optimization Guide On Device Model** y haz clic en **Check for update**.
6. Espera a que el modelo se descargue. Puede tardar varios minutos. Manten Chrome abierto durante la descarga.

### Edge - Phi-4 Mini

1. Usa Edge Dev o Canary (version 138+). Edge 139+ incluye Phi-4 Mini por defecto.
2. Ve a `edge://flags/` y busca **Prompt API for Phi mini**, configura como **Enabled**.
3. Opcionalmente activa **Enable on device AI model debug logs** para solucion de problemas.
4. Reinicia Edge.
5. Ve a `edge://on-device-internals` y verifica que tu **Device performance class** sea **High** o superior.
6. El modelo se descarga automaticamente en el primer uso. Puede tardar varios minutos. Manten Edge abierto durante la descarga.

### Requisitos de hardware

**Edge:** Windows 10/11 o macOS 13.3+, al menos 20 GB de almacenamiento libre, 5.5 GB+ de VRAM y una conexion a internet sin limite de datos.

**Chrome:** 22 GB de almacenamiento libre, mas de 4 GB de VRAM (GPU) o 16 GB+ de RAM con 4+ nucleos de CPU (modo CPU) y una conexion sin limite de datos.

> **Nota:** Los modelos en el dispositivo solo pueden usarse para chat y edicion de archivos. Para construir extensiones o sitios web completos, selecciona un modelo en la nube.

## Modos de compilacion

NuModeX Ext Maker tiene dos modos de compilacion:

**Construir Extension** - Genera una extension de navegador Manifest V3 completa con manifest.json, archivos de popup, scripts de contenido y otros archivos necesarios.

**Construir Sitio Web** - Genera un sitio web estatico completo con archivos HTML, CSS y JavaScript.

Ambos modos usan la misma interfaz de chat. La IA lee todo tu historial de conversacion al generar, por lo que puedes refinar tus requisitos a traves de multiples mensajes antes de compilar.

## Revision de archivos generados

Despues de completar una compilacion, el panel derecho de la extension muestra tus archivos generados.

**Arbol de archivos** - Todos los archivos generados aparecen en una lista clicable en la parte superior del panel derecho. Haz clic en cualquier archivo para ver su contenido. Los archivos estan organizados por nombre, incluyendo rutas de subdirectorios (por ejemplo, `assets/style.css`).

**Visor de codigo** - Al seleccionar un archivo, su contenido aparece en el visor de codigo debajo del arbol de archivos con resaltado de sintaxis. El visor detecta automaticamente el tipo de archivo (JavaScript, JSON, HTML, CSS, Markdown) y aplica el resaltado apropiado. Puedes copiar el contenido de cualquier archivo al portapapeles usando el boton Copiar.

**Edicion manual** - Haz clic en el boton de edicion sobre el visor de codigo para cambiar al modo de edicion manual. El visor de codigo se convierte en un editor de texto donde puedes hacer cambios directamente a mano. Haz clic de nuevo en el boton para salir del modo de edicion manual.

**Vista previa en vivo** - Para ver una vista previa visual de tu extension o sitio web, haz clic en Mas (▾) > Vista previa. Se abre un modal con una vista previa en sandbox que renderiza tu popup.html (para extensiones) o index.html (para sitios web). La vista previa automaticamente integra tus archivos CSS y JavaScript para que se rendericen correctamente. Ten en cuenta que esta es una vista previa solo visual - las APIs de extensiones de navegador (como chrome.tabs, chrome.storage) y los recursos externos no funcionaran en la vista previa. Si tu proyecto no tiene popup.html ni index.html, la vista previa mostrara un mensaje informativo.

**Ver cambios** - Despues de una edicion con IA, haz clic en Ver cambios para ver una comparacion antes y despues de lo que fue modificado. Puedes alternar entre vista unificada y vista lado a lado. Si se cambiaron multiples archivos, las pestanas en la parte superior te permiten alternar entre ellos.

## Edicion despues de compilar

Despues de tu primera compilacion, tienes varias opciones de edicion:

**Editar Archivo** - Selecciona un solo archivo y describe los cambios. Ideal para correcciones especificas.

**Agregar Archivo** - Crea un nuevo archivo y describe lo que debe contener.

**Mejorar Extension** - Describe cambios en todo el proyecto. La IA puede modificar multiples archivos a la vez.

**Edicion Manual** - Haz clic directamente en el visor de codigo para editar codigo a mano.

**Deshacer** - Revierte la ultima edicion de IA. Solo un nivel de deshacer esta disponible.

## Elegir el modelo adecuado

En lugar de recomendar modelos especificos (que cambian con frecuencia), aqui te explicamos como elegir basandote en lo que importa:

**Tamano de ventana de contexto** - Determina cuanto historial de conversacion y codigo el modelo puede procesar a la vez. Para extensiones simples con pocos archivos, una ventana de contexto pequena es suficiente. Para proyectos complejos con multiples archivos, elige un modelo con una ventana de contexto mas grande para que pueda ver todos tus archivos y la conversacion de una vez.

**Limite de tokens de salida** - Determina cuanto codigo el modelo puede generar en una sola respuesta. Si ves errores de analisis JSON o salida truncada, cambia a un modelo con un limite de salida mayor. Los proyectos mas grandes necesitan modelos que puedan producir mas tokens.

**Capacidad de razonamiento** - Algunos modelos son mejores en logica compleja, instrucciones de multiples pasos y mantenimiento de consistencia entre archivos. Para extensiones simples de popup, la mayoria de los modelos funcionan bien. Para extensiones con scripts de contenido, workers en segundo plano e interacciones complejas, elige un modelo conocido por su fuerte razonamiento.

**Costo** - Los modelos mas grandes y capaces cuestan mas por llamada API. Comienza con un modelo mas pequeno para chat y ediciones simples, luego cambia a un modelo mas grande cuando necesites compilar o mejorar proyectos complejos. Los costos varian segun el modelo y el proveedor de IA que selecciones. SoraVantia GK no esta afiliada con ningun proveedor de IA y no controla ni recibe ninguna parte de las tarifas de API.

**Velocidad** - Los modelos mas pequenos responden mas rapido. Si estas iterando rapidamente en cambios pequenos, un modelo rapido ahorra tiempo. Para compilaciones completas donde la calidad importa mas que la velocidad, un modelo mas grande vale la pena esperar.

| Caso de uso | Que buscar |
|----------|-----------------|
| Extensiones simples (solo popup, scripts pequenos) | Cualquier modelo con contexto y limites de salida moderados |
| Extensiones complejas (scripts de contenido, workers en segundo plano, multiples archivos) | Ventana de contexto grande, alto limite de salida, razonamiento fuerte |
| Preguntas rapidas de chat y lluvia de ideas | Cualquier modelo - la velocidad importa mas que el tamano de salida |
| Ediciones de un solo archivo | Cualquier modelo, incluyendo en el dispositivo (gratis, sin clave API) |
| Desarrollo consciente del presupuesto | Modelos pequenos o medianos para chat, modelos grandes solo para compilaciones |

Consulta la documentacion de modelos de tu proveedor de IA para conocer los tamanos de ventana de contexto, limites de salida y precios actuales.

## Consejos para mejores resultados

- Comienza con una descripcion simple y ve construyendo. Describe primero la funcion principal, luego usa Editar y Mejorar para agregar mas funciones de forma incremental.
- Usa un modelo con una ventana de contexto mas grande para proyectos complejos. Los modelos mas grandes manejan mejor las salidas grandes que los mas pequenos.
- Si ves "No se pudieron extraer los archivos de la extension", el prompt era demasiado complejo para una generacion. Simplifica el prompt inicial y agrega funciones mediante edicion.
- Si ves un error de analisis JSON, la respuesta del modelo fue demasiado larga y se corto. Prueba un prompt mas simple o cambia a un modelo con un limite de salida mayor.
- Los modelos en la nube, personalizados y remotos pueden usarse para construir, editar y chatear. Elige el modelo que mejor se adapte a tus necesidades y presupuesto.
- Los modelos en el dispositivo funcionan para chat y edicion pero no pueden construir extensiones o sitios web completos. Usa un modelo en la nube o personalizado para construir.
- Enter para enviar un mensaje de chat. Shift+Enter para nueva linea. Ctrl/Cmd+Enter para construir una extension. Ctrl/Cmd+Shift+Enter para construir un sitio web.
- Despues de construir, usa Editar Archivo para cambios en un solo archivo y Mejorar Extension para cambios en multiples archivos.
- Importa archivos existentes via Mas (▾) > Importar Archivos para editarlos con IA.

## Solucion de problemas

**Antes de solucionar problemas, consulta los siguientes recursos:**
- La documentacion API de tu proveedor de IA en la nube para conocer los limites actuales del modelo, precios y estado.
- La documentacion de desarrollador de tu navegador para los requisitos mas recientes de IA en el dispositivo y problemas conocidos.
- La seccion [Configuracion de Modelos en el Dispositivo](#configuracion-de-modelos-en-el-dispositivo) anterior para requisitos de flags y hardware.

### "Clave API no configurada"
Abre Configuracion y pega tu clave API para el proveedor seleccionado. Cada proveedor tiene su propia clave - asegurate de haber guardado la clave del proveedor cuyo modelo seleccionaste.

### "No se pudieron extraer los archivos de la extension"
La respuesta de la IA fue demasiado compleja o tenia un formato incorrecto. Intenta:
- Simplificar tu prompt (describe menos funciones a la vez)
- Cambiar a un modelo con un limite de salida mayor
- Compilar primero una version basica, luego usar "Mejorar Extension" para agregar funciones

### "Error de analisis JSON"
La respuesta del modelo fue demasiado larga y se trunco antes de que el JSON pudiera completarse. Intenta:
- Un prompt mas simple
- Un modelo con un limite de tokens de salida mayor

### Modelo en el dispositivo atascado en "Descargando"
Este es un problema comun. Verifica:
1. **Se cumplen los requisitos de hardware?** Ve a `edge://on-device-internals` (Edge) o `chrome://on-device-internals` (Chrome) y verifica tu clase de dispositivo.
2. **Los flags estan activados?** Consulta la seccion [Configuracion de Modelos en el Dispositivo](#configuracion-de-modelos-en-el-dispositivo) anterior.
3. **Suficiente almacenamiento?** Edge necesita 20 GB libres, Chrome necesita 22 GB libres.
4. **Conexion con limite de datos?** El modelo no se descargara en una conexion con limite de datos.
5. **El navegador se mantuvo abierto?** La descarga se detiene si cierras el navegador.
6. **Intenta reiniciar el navegador** y esperar 5-10 minutos.

### La extension no funciona despues de cargarla
- Revisa la consola del navegador (`chrome://extensions` > haz clic en "Errores" en tu extension) para mensajes de error.
- Asegurate de haber cargado la carpeta correcta (la que contiene manifest.json).
- Intenta regenerar con un prompt mas detallado que especifique el comportamiento exacto.

### El modelo personalizado no responde
- Verifica que la URL del endpoint sea correcta y accesible.
- Confirma que el servidor soporta el formato de API `/v1/chat/completions`.
- Verifica si el servidor requiere una clave API y si la proporcionaste.
- Otorga el permiso de host de la extension cuando se solicite.

## Atajos de teclado

| Atajo | Accion |
|----------|--------|
| Enter | Enviar mensaje de chat |
| Shift+Enter | Nueva linea en el chat |
| Ctrl/Cmd+Enter | Construir Extension |
| Ctrl/Cmd+Shift+Enter | Construir Sitio Web |

## Proximos pasos

- Lee el [README](README.es.md) para la lista completa de funciones
- Consulta [THIRD-PARTY-LICENSES](THIRD-PARTY-LICENSES) para informacion de dependencias
- Reporta errores o solicita funciones a traves de GitHub Issues
- Visita [numodex.com/numodexextmaker](https://numodex.com/numodexextmaker) para actualizaciones
