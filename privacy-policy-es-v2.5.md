[English](privacy-policy-en-v2.5.md) | [日本語](privacy-policy-ja-v2.5.md) | [Français](privacy-policy-fr-v2.5.md) | [한국어](privacy-policy-ko-v2.5.md) | [中文](privacy-policy-zh-v2.5.md) | [Deutsch](privacy-policy-de-v2.5.md) | [Português](privacy-policy-pt-v2.5.md) | [Italiano](privacy-policy-it-v2.5.md)

# POLÍTICA DE PRIVACIDAD

> **Nota:** La presente Política de Privacidad está redactada en inglés. Las traducciones a otros idiomas se proporcionan únicamente con fines informativos. En caso de cualquier discrepancia entre la versión en inglés y la versión en español, la versión en inglés prevalecerá y será la única versión con validez legal.

**NuModeX Ext Maker - Un producto de SoraVantia GK**
Fecha de entrada en vigor: 23 de marzo de 2026
Versión: 2.5

## AVISO IMPORTANTE

La presente Política de Privacidad explica cómo NuModeX Ext Maker, desarrollado por SoraVantia GK, gestiona su información. En resumen: NuModeX Ext Maker no recopila, almacena ni transmite ningún dato personal a SoraVantia GK. La extensión no tiene servidor backend, ni analíticas, ni telemetría, ni código de seguimiento. Todo permanece en su navegador.

La presente Política de Privacidad está redactada en inglés. Las traducciones a otros idiomas se proporcionan únicamente con fines informativos. En caso de cualquier discrepancia entre la versión en inglés y cualquier versión traducida, la versión en inglés prevalecerá y será la única versión con validez legal.

---

## 1. QUIÉNES SOMOS

SoraVantia GK es una sociedad japonesa y la desarrolladora de NuModeX Ext Maker. Estamos sujetos a la Ley de Protección de Información Personal (APPI) de Japón.

**Contacto:**
SoraVantia GK
Correo electrónico: numodex@soravantia.com

---

## 2. QUÉ ES NUMODEX EXT MAKER

NuModeX Ext Maker es una extensión de navegador Manifest V3 que utiliza IA para ayudar a los usuarios a crear extensiones de navegador y sitios web estáticos. La extensión opera completamente dentro de su navegador. No hay servidor backend, ni cuentas de usuario, ni inicio de sesión, ni suscripción, ni registro. Los usuarios proporcionan sus propias claves API para servicios de IA.

---

## 3. DATOS QUE NO RECOPILAMOS

SoraVantia GK no recopila, recibe, almacena, procesa ni transmite ningún dato personal a través de NuModeX Ext Maker. Específicamente, SoraVantia GK no recopila:

- Su nombre, dirección de correo electrónico ni ninguna información de contacto
- Su dirección IP ni identificadores de dispositivo
- Su historial de navegación ni actividad de navegación
- Sus datos de ubicación
- Sus claves API ni ninguna credencial
- Sus prompts, historial de conversación ni ningún contenido que cree
- Ningún dato de uso, dato de comportamiento ni dato de interacción
- Ninguna cookie, huella digital ni identificador de seguimiento

SoraVantia GK no dispone de servidores, bases de datos, plataformas de análisis ni infraestructura de seguimiento para NuModeX Ext Maker. La extensión no contiene código de análisis, código de telemetría ni código de seguimiento de ningún tipo.

---

## 4. DATOS ALMACENADOS LOCALMENTE EN SU NAVEGADOR

NuModeX Ext Maker almacena los siguientes datos localmente en su navegador. Estos datos nunca salen de su dispositivo y nunca se envían a SoraVantia GK:

- **Clave API:** La clave API de su proveedor de servicios de IA se almacena en el almacenamiento local de extensiones del navegador. Se utiliza únicamente para autenticar solicitudes al proveedor de IA que haya seleccionado. SoraVantia GK no puede acceder, ver ni recuperar su clave API.

- **Estado de aceptación del EULA:** Un registro de si ha aceptado el Acuerdo de Licencia de Usuario Final, almacenado en el almacenamiento local de extensiones del navegador.

- **Preferencias de interfaz:** Sus preferencias de interfaz como el idioma seleccionado y la configuración del modo oscuro, almacenadas en el almacenamiento local de extensiones del navegador.

- **Modelo de IA seleccionado:** El modelo de IA que ha elegido para la generación, almacenado en el almacenamiento local de extensiones del navegador.

- **Proyectos:** Sus archivos generados, historial de conversación e historial de deshacer se almacenan en IndexedDB dentro de su navegador. Estos son sus productos de trabajo y permanecen completamente bajo su control.

- **Configuración de modelo personalizado:** Si configura un endpoint de servidor de IA personalizado, la URL del endpoint, el nombre del modelo y la clave API opcional se almacenan en el almacenamiento local de extensiones del navegador.

**Cómo eliminar sus datos almacenados localmente:**

- Desinstale la extensión NuModeX Ext Maker de su navegador. Esto elimina todos los datos almacenados localmente.
- Utilice las opciones de eliminación dentro de la aplicación para eliminar selectivamente claves API y proyectos individuales sin desinstalar.

---

## 5. DATOS ENVIADOS A PROVEEDORES DE IA DE TERCEROS

Cuando utiliza NuModeX Ext Maker para crear, editar, mejorar o conversar sobre extensiones y sitios web, la extensión envía solicitudes directamente desde su navegador al proveedor de IA que haya seleccionado. SoraVantia GK no actúa como intermediario y no tiene acceso a ningún dato transmitido entre su navegador y el proveedor de IA.

### 5.1 Qué se envía al proveedor de IA

Cada solicitud al proveedor de IA incluye:

- Su texto de prompt (las instrucciones que escribe)
- El historial de conversación de la sesión actual
- Las imágenes que adjunte a su prompt
- El system prompt interno del Software (instrucciones propietarias que guían el comportamiento y formato de salida del modelo de IA - no son visibles para usted pero se incluyen en cada solicitud)

### 5.2 Cómo se transmiten estos datos

Sus datos se transmiten directamente desde su navegador a los servidores del proveedor de IA utilizando su propia clave API. La transmisión utiliza el endpoint estándar de la API del proveedor de IA y está cifrada mediante HTTPS. Los servidores de SoraVantia GK no participan en esta transmisión en ningún momento.

### 5.3 Proveedores de IA soportados

NuModeX Ext Maker soporta la integración con varios proveedores de IA, incluyendo, entre otros:

- Google (Gemini)
- OpenAI (GPT)
- Anthropic (Claude)
- Endpoints de servidor de IA personalizados configurados por el usuario
- Modelos de IA en dispositivo proporcionados por el navegador

### 5.4 Políticas de privacidad de los proveedores de IA

Cada proveedor de IA tiene su propia política de privacidad que rige cómo gestiona los datos recibidos a través de solicitudes de API. SoraVantia GK no tiene control sobre cómo los proveedores de IA procesan, almacenan o utilizan los datos que usted les envía. Usted es responsable de revisar y comprender las políticas de privacidad de los proveedores de IA que elija utilizar.

### 5.5 Modelos de IA en dispositivo

Si utiliza modelos de IA en dispositivo proporcionados por su navegador, NuModeX Ext Maker no transmite sus prompts a ningún servidor externo. Sin embargo, SoraVantia GK no controla la implementación de los modelos de IA en dispositivo por parte del proveedor del navegador. El proveedor del navegador puede recopilar telemetría, datos de uso u otra información relacionada con el uso de modelos en dispositivo bajo sus propias prácticas de datos. SoraVantia GK no tiene conocimiento, control ni responsabilidad sobre ninguna recopilación de datos realizada por el proveedor del navegador en relación con los modelos de IA en dispositivo. Debe consultar la política de privacidad del proveedor de su navegador para obtener detalles sobre cómo las funciones de IA en dispositivo gestionan sus datos.

### 5.6 Endpoints de servidor de IA personalizados

Si configura un endpoint de servidor de IA personalizado, sus prompts se envían directamente a la dirección del servidor que haya configurado. SoraVantia GK no tiene conocimiento, control ni responsabilidad sobre los endpoints personalizados. Usted es el único responsable de comprender las prácticas de datos, la seguridad y las políticas de privacidad de cualquier servidor personalizado que configure.

---

## 6. SYSTEM PROMPTS Y USO DE TOKENS

NuModeX Ext Maker incluye system prompts internos que se envían con cada solicitud de API para guiar el comportamiento y formato de salida del modelo de IA. Estos system prompts son propiedad exclusiva de SoraVantia GK y no son visibles para el usuario. No contienen ningún dato personal sobre usted.

Los system prompts, junto con su entrada y el historial de conversación, contribuyen al recuento total de tokens de cada solicitud de API. Esto afecta sus costos de API, que son facturados directamente por el proveedor de IA. Para obtener detalles completos sobre el uso de tokens y los costos, consulte la Sección 3.4 del Acuerdo de Licencia de Usuario Final.

---

## 7. DATOS ANALÍTICOS DEL MARKETPLACE

Si NuModeX Ext Maker se distribuye a través de uno o más marketplaces de extensiones de navegador (como Chrome Web Store, Edge Add-ons, Firefox Add-ons, Safari Extensions a través del App Store o Naver Whale Store), el operador del marketplace puede recopilar datos de uso de los usuarios y proporcionar a SoraVantia GK analíticas agregadas y no identificables personalmente a través del panel de control del desarrollador del marketplace.

### 7.1 Qué pueden proporcionar los operadores de marketplace a SoraVantia GK

Los tipos de datos agregados que los operadores de marketplace pueden proporcionar incluyen, entre otros:

- Recuentos de instalaciones y desinstalaciones
- Impresiones y visitas de la página de la tienda
- Recuentos de usuarios activos semanales o diarios
- Distribución geográfica de usuarios (a nivel de país o región)
- Distribución de sistema operativo e idioma
- Tasas de adopción de versiones de la extensión
- Métricas de retención de usuarios
- Atribución de campañas y fuentes de referencia (si se utilizan parámetros UTM)

### 7.2 Naturaleza de los datos analíticos del marketplace

Estos datos son de naturaleza agregada y estadística. No contienen información de identificación personal como nombres, direcciones de correo electrónico, direcciones IP ni actividad de navegación individual. SoraVantia GK no puede identificar usuarios individuales a partir de estos datos.

### 7.3 Cómo utiliza SoraVantia GK los datos analíticos del marketplace

SoraVantia GK utiliza los datos analíticos del marketplace únicamente para:

- Comprender las tendencias de adopción y el crecimiento de usuarios
- Mejorar el Software basándose en la adopción de versiones y los patrones de retención
- Evaluar la eficacia de los canales de distribución

### 7.4 Fuente de los datos analíticos del marketplace

Estos datos son recopilados y procesados completamente por el operador del marketplace bajo su propia política de privacidad y términos de servicio. NuModeX Ext Maker no contiene código que recopile o transmita datos de analítica, telemetría o seguimiento. La extensión en sí no desempeña ningún papel en la recopilación de datos analíticos del marketplace.

### 7.5 Políticas de privacidad de los marketplaces

Su uso de un marketplace de extensiones de navegador se rige por la política de privacidad del operador de dicho marketplace. SoraVantia GK no es responsable de las prácticas de recopilación de datos de los operadores de marketplace. Para obtener información sobre cómo cada marketplace gestiona sus datos, consulte:

- Google Chrome Web Store: https://policies.google.com/privacy
- Microsoft Edge Add-ons: https://privacy.microsoft.com/privacystatement
- Mozilla Firefox Add-ons: https://www.mozilla.org/privacy/
- Apple App Store: https://www.apple.com/privacy/
- Naver Whale Store: https://whale.naver.com/legal/privacy/

---

## 8. DATOS QUE NO COMPARTIMOS

Dado que SoraVantia GK no recopila ningún dato personal a través de NuModeX Ext Maker, no hay datos personales que compartir. SoraVantia GK no:

- Vende datos personales a terceros
- Comparte datos personales con anunciantes
- Comparte datos personales con intermediarios de datos
- Proporciona datos personales a ningún gobierno ni agencia de aplicación de la ley
- Utiliza datos personales para elaboración de perfiles, publicidad dirigida ni toma de decisiones automatizada

---

## 9. PRIVACIDAD DE LOS MENORES

NuModeX Ext Maker no está dirigido a menores. Como se indica en el Acuerdo de Licencia de Usuario Final, los usuarios deben tener al menos 16 años de edad o la edad mínima requerida para celebrar un acuerdo vinculante según las leyes de su jurisdicción, lo que sea mayor.

Dado que SoraVantia GK no recopila ningún dato personal, no se recopilan, almacenan ni procesan datos personales de menores. El Software no dispone de mecanismos de verificación de edad ya que no tiene cuentas de usuario ni sistema de registro.

---

## 10. CUMPLIMIENTO DE PROTECCIÓN DE DATOS

### 10.1 Ley de Protección de Información Personal (APPI) - Japón

SoraVantia GK es una sociedad japonesa sujeta a la APPI. Dado que SoraVantia GK no recopila, recibe, almacena ni procesa ningún dato personal a través de NuModeX Ext Maker, no surgen obligaciones de procesamiento de datos bajo la APPI con respecto a este producto.

### 10.2 Reglamento General de Protección de Datos (RGPD) - Unión Europea

Dado que SoraVantia GK no recopila ni procesa ningún dato personal de los usuarios de NuModeX Ext Maker, las obligaciones de procesamiento de datos del RGPD no se aplican a la operación de este producto por parte de SoraVantia GK. No existe un rol de responsable del tratamiento ni de encargado del tratamiento para SoraVantia GK en relación con este producto porque ningún dato personal fluye hacia SoraVantia GK.

Los usuarios de la UE deben ser conscientes de que cuando envían prompts a proveedores de IA de terceros, dichos proveedores pueden procesar sus datos bajo sus propios marcos de cumplimiento del RGPD. Los usuarios deben revisar las políticas de privacidad de los proveedores de IA que elijan.

### 10.3 Ley de Privacidad del Consumidor de California (CCPA/CPRA) - Estados Unidos

Dado que SoraVantia GK no recopila, vende ni comparte ninguna información personal de los usuarios de NuModeX Ext Maker, las obligaciones de la CCPA/CPRA relativas a los derechos del consumidor (acceso, eliminación, exclusión de venta) no se aplican a la operación de este producto por parte de SoraVantia GK.

### 10.4 Arquitectura local-first

La arquitectura local-first del Software está diseñada para satisfacer por defecto los requisitos aplicables de protección de datos. Todos los datos del usuario permanecen en el navegador del usuario. SoraVantia GK no tiene la capacidad técnica de acceder, recuperar ni ver ningún dato almacenado localmente por la extensión.

---

## 11. SEGURIDAD

### 11.1 Seguridad de los datos locales

Todos los datos almacenados por NuModeX Ext Maker se almacenan localmente en su navegador utilizando la API de almacenamiento de extensiones del navegador e IndexedDB. La seguridad de estos datos depende de la seguridad de su navegador y su dispositivo. SoraVantia GK no tiene acceso a sus datos almacenados localmente y no puede protegerlos de amenazas en su dispositivo.

### 11.2 Seguridad de la clave API

Su clave API se almacena localmente en el almacenamiento de extensiones del navegador y se utiliza únicamente para autenticar solicitudes a su proveedor de IA seleccionado. SoraVantia GK no tiene acceso a su clave API. Usted es responsable de mantener su clave API segura y no debe compartirla con otros.

### 11.3 Datos en tránsito

Cuando los prompts se envían a proveedores de IA de terceros, se transmiten mediante HTTPS directamente desde su navegador al proveedor de IA. La infraestructura de SoraVantia GK no participa en esta transmisión. La seguridad de los datos en tránsito hacia los proveedores de IA depende de las medidas de seguridad del proveedor de IA.

### 11.4 Seguridad del código generado

NuModeX Ext Maker genera código de extensiones de navegador y sitios web utilizando IA. SoraVantia GK no revisa, audita ni valida la seguridad del código generado. El código generado puede contener vulnerabilidades de seguridad. Usted es el único responsable de revisar la seguridad de cualquier código generado por el Software antes de la instalación, implementación o distribución.

---

## 12. SERVICIOS DE TERCEROS

NuModeX Ext Maker se integra con proveedores de IA de terceros, endpoints de servidor de IA personalizados configurados por el usuario y modelos de IA en dispositivo proporcionados por el navegador. Estos servicios son operados por terceros independientes y no están bajo el control de SoraVantia GK.

SoraVantia GK no está afiliada, respaldada, patrocinada ni oficialmente conectada de ninguna manera con Google LLC, OpenAI Inc., Anthropic PBC, ni con ninguna de sus filiales o empresas asociadas. Todos los nombres de productos, marcas comerciales y marcas registradas (incluyendo, entre otros, Google, Gemini, OpenAI, GPT, Anthropic y Claude) son propiedad de sus respectivos titulares. Su mención en este Software y su documentación tiene fines de identificación únicamente y no implica ningún respaldo, asociación o afiliación. SoraVantia GK puede agregar, eliminar o cambiar el soporte para proveedores y modelos de IA en cualquier momento. La adición de soporte para cualquier proveedor de IA no implica ninguna afiliación con dicho proveedor ni respaldo por parte del mismo.

SoraVantia GK no es responsable de:

- Cualquier procesamiento, almacenamiento o gestión de datos realizado por proveedores de servicios de terceros
- Cualquier cambio en las API, precios, términos de servicio o políticas de privacidad de terceros
- Cualquier contenido generado, devuelto o procesado por servicios de terceros
- Cualquier dato transmitido, procesado o almacenado en endpoints de servidor de IA personalizados configurados por el usuario

Su uso de servicios de terceros se rige por los respectivos términos de servicio y políticas de privacidad de cada servicio.

---

## 13. CAMBIOS A ESTA POLÍTICA DE PRIVACIDAD

### 13.1 Derechos de modificación

SoraVantia GK se reserva el derecho de modificar esta Política de Privacidad en cualquier momento. Los cambios no materiales serán efectivos una vez publicados con un número de versión actualizado. Los cambios materiales entrarán en vigor no antes de treinta (30) días después de la notificación, salvo que la ley aplicable requiera un período más largo.

### 13.2 Notificación

Los cambios materiales a esta Política de Privacidad se comunicarán a través de uno o más de los siguientes canales:

- Mediante la inclusión de la Política de Privacidad actualizada en una nueva versión del Software distribuida a través de cualquier marketplace de extensiones de navegador donde el Software esté publicado (si corresponde)
- Mediante la visualización de un aviso de la Política de Privacidad actualizada a través de la interfaz del Software
- Mediante la publicación de la Política de Privacidad actualizada en el sitio web oficial del producto (actualmente https://numodex.com/numodexextmaker/privacy, que puede cambiar en caso de transferencia de propiedad o cambio de marca)
- Mediante la actualización de la Política de Privacidad en el repositorio de código fuente del proyecto (si está disponible públicamente)

En caso de una cesión o transferencia del Software según la Sección 20.6 del Acuerdo de Licencia de Usuario Final, la entidad sucesora podrá notificar a los usuarios a través de canales equivalentes bajo su control, siempre que al menos un método de notificación entregue la Política de Privacidad actualizada directamente a través del propio Software.

### 13.3 Aceptación

El uso continuado del Software después de la fecha de entrada en vigor de cualquier modificación constituye la aceptación de la Política de Privacidad modificada. Si no está de acuerdo con los términos modificados, debe dejar de usar el Software.

---

## 14. SUS DERECHOS

Dado que SoraVantia GK no recopila ningún dato personal a través de NuModeX Ext Maker, los derechos tradicionales del interesado (acceso, corrección, eliminación, portabilidad) no se aplican en el contexto de este producto porque SoraVantia GK no posee datos personales contra los cuales ejercer estos derechos.

Sin embargo, usted tiene control total sobre todos los datos almacenados localmente por la extensión:

- **Acceso:** Puede ver sus datos almacenados localmente en cualquier momento a través de la interfaz de la extensión.
- **Eliminación:** Puede eliminar sus claves API y proyectos a través de las opciones de eliminación dentro de la aplicación, o eliminar todos los datos almacenados localmente desinstalando la extensión.
- **Portabilidad:** Puede descargar y exportar sus extensiones y sitios web generados en cualquier momento a través de la funcionalidad de descarga de la extensión.

Si tiene preguntas o inquietudes sobre sus datos en relación con proveedores de IA de terceros, debe contactar directamente a esos proveedores.

---

## 15. INFORMACIÓN DE CONTACTO

Para preguntas o inquietudes sobre esta Política de Privacidad, contacte:

**SoraVantia GK**
Correo electrónico: numodex@soravantia.com

---

Copyright 2026 SoraVantia GK. Todos los derechos reservados.

Última actualización: 23 de marzo de 2026
Versión: 2.5
