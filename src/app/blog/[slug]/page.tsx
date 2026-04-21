import Link from 'next/link'
import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import { postsAfiliados } from '../data/posts-afiliados'
import { postsAfiliados2 } from '../data/posts-afiliados2'
import { postsAfiliados3 } from '../data/posts-afiliados3'
import { postsCatAfiliados } from '../data/posts-cat-afiliados'
import { postsVendedores } from '../data/posts-vendedores'
import { postsCatVendedores } from '../data/posts-cat-vendedores'
import { postsCatLive } from '../data/posts-cat-live'
import { postsCatHerramientas } from '../data/posts-cat-herramientas'
import { postsCatPaises } from '../data/posts-cat-paises'
import { postsCatPaises2 } from '../data/posts-cat-paises2'
import { postsCatEstrategia2 } from '../data/posts-cat-estrategia2'

const WHATSAPP_LINK = 'https://semanal.tiktokshopacademy.es/registro?utm_source=blog'

const posts: Record<string, {
  title: string
  description: string
  category: string
  coverImage?: string
  coverAlt?: string
  readTime: string
  emoji: string
  date: string
  content: string
  keywords: string[]
}> = {

  'que-es-tiktok-shop': {
    title: '¿Qué es TikTok Shop? Guía Completa 2026: Compradores, Vendedores y Afiliados',
    description: 'Todo sobre TikTok Shop en 2026: qué es, cómo funciona para compradores, vendedores y afiliados, disponibilidad en España y LatAm, y por qué el modelo de afiliado es la mayor oportunidad de negocio online del momento.',
    category: 'Guía básica',
    readTime: '14 min',
    emoji: '🎯',
    date: '2026-01-10',
    keywords: ['que es tiktok shop', 'tiktok shop como funciona', 'tiktok shop españa 2026', 'tiktok shop afiliado que es', 'tiktok shop comprar', 'tiktok shop vender', 'tiktok shop oportunidad negocio'],
    coverImage: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=1200&q=80',
    coverAlt: 'Qué es TikTok Shop y cómo funciona en 2026',
    content: `
TikTok tiene más de 1.500 millones de usuarios activos en todo el mundo. En 2026, una parte enorme de esa audiencia ya no solo consume contenido: **compra dentro de la misma aplicación**. Eso es TikTok Shop, y está cambiando el comercio electrónico tal como lo conocíamos.

En esta guía te explico qué es exactamente, cómo funciona para cada tipo de usuario, y por qué el **modelo de afiliado** representa una oportunidad de negocio que no existía hace dos años.

## ¿Qué es TikTok Shop?

TikTok Shop es la plataforma de comercio electrónico integrada dentro de TikTok. Permite a vendedores, marcas y creadores de contenido **vender productos directamente desde la app**, sin que el comprador tenga que salir en ningún momento.

No es una redirección a Amazon ni a ninguna web externa. Es un ecosistema completo de compra-venta dentro de TikTok: catálogo, carrito, pago y logística, todo desde la misma pantalla donde ves los videos.

![TikTok Shop en acción — comercio integrado en la app](https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&q=80)

### ¿Cuándo llegó TikTok Shop a España y LatAm?

- **España**: Lanzamiento oficial el **9 de diciembre de 2024**
- **México**: Lanzamiento oficial el **6 de febrero de 2025**, primer país de LatAm en tenerlo
- **Brasil**: Lanzado en mayo de 2025, crecimiento de 1M$ a 46M$ de GMV mensual en solo 3 meses
- **Colombia y Chile**: En expansión durante 2026

El mercado hispano está en una fase muy temprana comparado con Asia, donde TikTok Shop lleva años funcionando. Eso, como verás, es una ventaja enorme para quien entra ahora.

## Cómo funciona TikTok Shop: los 3 canales de venta

TikTok Shop opera a través de tres formatos principales:

### 1. Videos con productos etiquetados
Cualquier video del feed puede tener productos enlazados. El espectador ve un icono de carrito, hace clic y compra sin salir de TikTok. El algoritmo de TikTok **favorece activamente este tipo de contenido**, dándole más alcance que los videos sin productos.

### 2. TikTok Live Shopping
El formato estrella y el que más vende. Durante un directo, el vendedor o afiliado muestra productos en tiempo real, responde preguntas y ofrece descuentos exclusivos. Los datos son contundentes: **el Live Shopping convierte hasta 10 veces más** que una tienda online tradicional. La urgencia del directo y la posibilidad de ver el producto en uso dispara las compras impulsivas.

### 3. Pestaña de tienda
Cada vendedor tiene una tienda propia dentro de TikTok donde cualquier usuario puede entrar, navegar por el catálogo y comprar. Desde 2026, el proceso de pago es 100% nativo en la app, con métodos de pago locales en cada país.

---

## TikTok Shop para compradores: ¿cómo es la experiencia?

Si eres usuario de TikTok y nunca has comprado en TikTok Shop, así funciona:

1. **Ves un video** con un producto que te interesa
2. **Tocas el icono del carrito** que aparece superpuesto en el video
3. **Ves la ficha del producto** con precio, valoraciones y stock disponible
4. **Compras en 3 toques** usando tu método de pago guardado
5. **Recibes el pedido en tu domicilio** con seguimiento integrado en la app

TikTok Shop incluye sistema de valoraciones, política de devoluciones, y protección al comprador gestionada directamente por TikTok. No es diferente en seguridad a comprar en Amazon o Zalando.

Los tiempos de entrega en España oscilan entre 3 y 7 días laborables, con opciones de envío express en productos de vendedores nacionales.

![Experiencia de compra en TikTok Shop desde el móvil](https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=800&q=80)

---

## TikTok Shop para vendedores: vende tus propios productos

Si tienes productos propios (fabricados, importados o de marca blanca), TikTok Shop es un canal de venta con un diferencial enorme respecto a Amazon o tu propia web: el **tráfico orgánico**.

En Amazon, si no inviertes en publicidad, nadie te ve. En TikTok Shop, un solo video viral puede generar cientos de ventas sin gastar un euro en anuncios.

### ¿Qué necesitas para vender en TikTok Shop?

**En España:**
- Cuenta de TikTok con al menos 30 días de antigüedad
- DNI o NIE válido (para personas físicas) o CIF (para empresas)
- Cuenta bancaria española
- Productos que cumplan con la normativa europea

**Costes para vendedores en España 2026:**
| Concepto | Importe |
|----------|---------|
| Comisión de plataforma | 9% del precio de venta |
| Nuevos vendedores (primeros 90 días) | Solo 4% |
| Publicidad | Opcional |
| Alta de tienda | Gratis |

El gran atractivo para vendedores es que TikTok Shop gestiona los pagos, la logística (si usas su fulfillment) y tiene acceso directo a millones de usuarios activos sin coste de adquisición.

---

## TikTok Shop para afiliados: el modelo de negocio que está cambiando todo

Aquí está la parte que más me interesa explicarte, porque es la más desconocida y probablemente **la mayor oportunidad de negocio online que existe en 2026** para una persona sin productos propios, sin inversión inicial y sin experiencia previa en comercio electrónico.

### ¿Qué es un afiliado de TikTok Shop?

Un afiliado de TikTok Shop es una persona que **promociona productos de otros vendedores** a través de sus videos o directos de TikTok, y recibe una **comisión por cada venta** que genera.

No necesitas tener productos. No necesitas invertir dinero. No necesitas gestionar envíos ni atención al cliente. Solo necesitas crear contenido mostrando el producto y, si alguien compra a través de tu enlace, TikTok te paga automáticamente.

![Afiliado de TikTok Shop creando contenido para ganar comisiones](https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=800&q=80)

### ¿Por qué es una oportunidad única en 2026?

Tres razones concretas:

**1. El mercado hispano acaba de empezar**
TikTok Shop lleva en España desde diciembre de 2024. En Asia llevan años y la competencia es brutal. En español, el contenido de afiliados está en pañales. Los que entren ahora tienen una ventaja competitiva que desaparecerá en 12-18 meses.

**2. Las comisiones son extraordinariamente altas**
Mientras Amazon Afiliados paga entre el 1% y el 10%, TikTok Shop paga entre el **5% y el 80%** de comisión según el producto y el vendedor. En categorías como belleza, salud o suplementos, comisiones del 20-30% son habituales.

**3. El tráfico orgánico de TikTok es gratuito**
No necesitas pagar publicidad. El algoritmo de TikTok distribuye el contenido basándose en el engagement, no en la cantidad de seguidores. Una persona con 2.000 seguidores puede tener un video con 100.000 visualizaciones si el contenido es bueno.

### ¿Cuánto se puede ganar como afiliado?

Los rangos reales en el mercado hispano en 2026:

| Nivel | Ventas mensuales | Ingresos estimados |
|-------|-----------------|-------------------|
| Principiante (0-3 meses) | 5-30 ventas | 50€ – 300€/mes |
| Intermedio (3-12 meses) | 50-200 ventas | 500€ – 2.000€/mes |
| Avanzado (+1 año) | 200-1.000+ ventas | 2.000€ – 10.000€+/mes |

Estos son rangos conservadores. Existen casos documentados de afiliados hispanohablantes que superan los 15.000€ mensuales, aunque requieren dedicación y estrategia.

### ¿Qué necesitas para ser afiliado de TikTok Shop?

Los requisitos son deliberadamente bajos para que cualquier persona pueda empezar:

- Cuenta de TikTok con **mínimo 1.500 seguidores**
- Cuenta con al menos **30 días de antigüedad**
- Ser **mayor de 18 años**
- Residir en un país donde TikTok Shop esté disponible

Sin inversión. Sin productos. Sin experiencia previa requerida.

---

## Por qué el modelo de afiliado es diferente a todo lo anterior

Antes de TikTok Shop, si querías ganar dinero online sin productos propios, tenías pocas opciones:

- **Dropshipping**: Requiere inversión, gestión de proveedores, atención al cliente y márgenes ajustados
- **Amazon Afiliados**: Necesitas una web con tráfico SEO consolidado, que tarda años en construirse
- **Infoproductos**: Necesitas audiencia y conocimientos muy específicos para crear cursos o ebooks
- **Publicidad en redes**: Los CPM han caído y los requisitos de monetización son altos

TikTok Shop afiliados elimina todas esas barreras. **El tráfico ya está en TikTok**. Los productos ya los tienen los vendedores. Tú solo necesitas conectar a los dos.

Es un modelo que no existía hace tres años en el mercado hispano. Y la ventana de oportunidad es ahora.

---

## TikTok Shop en cifras: por qué esto no es una tendencia pasajera

- **1.500 millones** de usuarios activos en TikTok
- **64.300 millones de dólares** de GMV global de TikTok Shop en 2025 (+94% vs 2024)
- **58%** de los usuarios de TikTok ya ha comprado en la app
- **10x** más conversión con Live Shopping vs e-commerce tradicional
- **Primer país de LatAm** en lanzar TikTok Shop (febrero 2025)

Estos números no son de una startup. Son de una plataforma respaldada por ByteDance, con más de 250.000 millones de dólares de valoración, que ha decidido convertir TikTok en el mayor marketplace de comercio social del mundo.

![Cifras de crecimiento de TikTok Shop a nivel global](https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80)

---

## Preguntas frecuentes sobre TikTok Shop

**¿TikTok Shop es seguro para comprar?**
Sí. TikTok gestiona los pagos, tiene política de devoluciones y protección al comprador similar a la de Amazon o Zalando. En Europa, opera bajo la normativa de consumidores de la UE.

**¿Necesito muchos seguidores para ser afiliado?**
No. El requisito mínimo es 1.500 seguidores, que es alcanzable en pocas semanas con la estrategia adecuada. Además, en TikTok el alcance no depende solo de los seguidores: un buen video puede llegar a miles de personas aunque tu cuenta sea pequeña.

**¿Puedo ser afiliado y vendedor al mismo tiempo?**
Sí, son modelos completamente compatibles. Muchos usuarios empiezan como afiliados y, una vez conocen el mercado, abren su propia tienda.

**¿Cuánto tiempo tarda en llegar el dinero?**
Las comisiones se liberan automáticamente 15-30 días después de que se confirma la entrega del pedido. No necesitas solicitar el pago: TikTok lo transfiere solo a tu cuenta bancaria.

**¿Es TikTok Shop lo mismo en todos los países?**
Las funciones son similares pero hay diferencias en comisiones, métodos de pago y logística según el país. España y México tienen las implementaciones más completas en el mercado hispano.

**¿Se puede vivir de TikTok Shop afiliados?**
Sí, hay personas que lo hacen. Requiere tiempo, consistencia y estrategia. No es un esquema de enriquecimiento rápido, pero sí un modelo de negocio real con potencial de ingresos significativos a medio plazo.
    `,
  },

  'como-crear-tienda-tiktok-shop': {
    title: 'Cómo crear tu tienda en TikTok Shop paso a paso en 2026',
    description: 'Tutorial completo y actualizado para abrir tu cuenta de vendedor en TikTok Shop. Requisitos reales, documentos necesarios y configuración paso a paso para España y LatAm.',
    category: 'Tutorial',
    readTime: '13 min',
    emoji: '🏪',
    date: '2026-01-15',
    keywords: ['como crear tienda tiktok shop', 'abrir cuenta vendedor tiktok shop', 'tiktok shop vendedor españa'],
    content: `
## Requisitos para crear una tienda en TikTok Shop en 2026

Antes de empezar, verifica que cumples estos requisitos básicos:

- Tener al menos **18 años**
- Cuenta de TikTok con al menos **30 días de antigüedad**
- Documento de identidad válido (DNI, NIE o pasaporte)
- Número de teléfono verificado
- Dirección de correo electrónico activa
- Cuenta bancaria o método de pago compatible

Para vendedores en **España**, además necesitarás:
- NIF o CIF (para empresas)
- Alta en Hacienda como autónomo o empresa (si vas a facturar)
- IBAN bancario español o europeo

## Paso 1: Accede al Seller Center de TikTok Shop

TikTok Shop tiene portales separados por país. Desde España accede a través de seller.tiktok.com. Desde México, el proceso es similar pero desde el portal regional.

Haz clic en "Registrarse como vendedor" y selecciona tu país.

## Paso 2: Elige tu tipo de cuenta

TikTok Shop ofrece dos tipos de cuenta de vendedor:

**Vendedor individual**: Para personas físicas o autónomos. Proceso de verificación más rápido.

**Vendedor empresa**: Para sociedades y empresas. Requiere documentación adicional pero tiene mayores límites de venta.

## Paso 3: Verifica tu identidad

Sube los documentos solicitados. El proceso de verificación tarda entre **1 y 3 días laborables** en España. En México el tiempo puede ser similar.

## Paso 4: Configura tu tienda

Una vez aprobado, configura:

- **Nombre de la tienda**: Elige uno que sea memorable y relacionado con tu nicho
- **Logo y banner**: Imágenes de alta calidad (logo mínimo 200x200px)
- **Descripción**: Incluye palabras clave de tu nicho para posicionamiento interno
- **Políticas de envío y devolución**: Obligatorio completar antes de publicar productos

## Paso 5: Sube tus primeros productos

Con la nueva función **"List with AI"** de 2026, TikTok Shop puede generar automáticamente títulos, descripciones y etiquetas optimizados a partir de fotos del producto.

Cada producto debe tener:
- Mínimo 3 fotos de calidad
- Título con palabras clave (máximo 255 caracteres)
- Descripción detallada
- Categoría correcta
- Precio competitivo

## Paso 6: Activa el programa de afiliados

Una vez tu tienda está activa, activa el programa de afiliados para que creadores de contenido puedan promocionar tus productos a cambio de comisión. Esto multiplica tu alcance sin coste publicitario adicional.

## Las comisiones en España en 2026

Desde enero de 2026, TikTok cobra a los vendedores una comisión del **9% sobre cada venta** en España (antes era 5%). Sin embargo, los **nuevos vendedores tienen una tarifa reducida del 4% durante los primeros 60 días**.

En México la comisión se mantiene en el **6%**.

## Errores frecuentes al crear la tienda

❌ Subir fotos de baja calidad o con marcas de agua
❌ Usar un nombre de tienda genérico sin diferenciación
❌ No completar las políticas de devolución (puede resultar en suspensión)
❌ No activar el programa de afiliados desde el principio

## Conclusión

Crear una tienda en TikTok Shop en 2026 es un proceso que puede completarse en un día si tienes la documentación lista. La clave está en la configuración inicial: una tienda bien optimizada desde el principio tiene una ventaja competitiva enorme.

Si tienes dudas sobre algún paso, en nuestras clases gratuitas de los miércoles lo resolvemos en directo.
    `,
  },

  'tiktok-shop-afiliado-guia-completa': {
    title: 'Programa de Afiliados de TikTok Shop 2026: Guía Completa',
    description: 'Todo sobre el programa de afiliados de TikTok Shop en 2026. Requisitos reales, comisiones de hasta el 80%, cómo encontrar productos ganadores y cuánto se gana de verdad.',
    category: 'Afiliados',
    readTime: '11 min',
    emoji: '💰',
    date: '2026-01-20',
    keywords: ['tiktok shop afiliados', 'tiktok shop afiliado', 'programa afiliados tiktok', 'programa afiliados tiktok shop 2026', 'ganar dinero tiktok shop afiliado', 'comisiones tiktok shop afiliado', 'como vender como afiliado en tiktok shop'],
    content: `
## ¿Qué es el programa de afiliados de TikTok Shop?

El programa de afiliados de TikTok Shop permite a creadores de contenido ganar comisiones por cada venta que generen, **sin necesidad de tener productos propios**, sin gestionar envíos y sin atención al cliente.

El proceso es simple: encuentras un producto, lo incluyes en tus videos o directos, alguien compra a través de tu enlace y tú cobras una comisión. TikTok gestiona todo lo demás.

## Requisitos para ser afiliado en 2026

Los requisitos mínimos son:
- **Mínimo 1.500 seguidores** en TikTok
- Cuenta con al menos **30 días de antigüedad**
- Ser **mayor de 18 años**
- Tener el perfil completo y en buen estado

Si todavía no tienes 1.500 seguidores, el blog tiene una guía específica sobre cómo crecer en TikTok desde cero.

## ¿Cuánto se gana como afiliado de TikTok Shop?

Las comisiones en TikTok Shop las fija cada vendedor, y pueden ir del **1% al 80%** del precio del producto.

En la práctica, los rangos habituales son:

| Categoría | Comisión típica |
|-----------|-----------------|
| Belleza y cosmética | 15–30% |
| Moda y ropa | 10–20% |
| Salud y suplementos | 20–40% |
| Electrónica y gadgets | 5–12% |
| Hogar y lifestyle | 10–25% |

Los afiliados que aplican las estrategias correctas con entre 5.000 y 20.000 seguidores pueden generar entre **500€ y 3.000€ mensuales** de forma consistente.

## Cómo activar el programa de afiliados

1. Abre TikTok y ve a tu perfil
2. Toca "Herramientas del creador" o "TikTok Studio"
3. Busca "Afiliado de TikTok Shop" o "TikTok Shop"
4. Acepta los términos del programa

## Cómo encontrar los mejores productos en 2026

La estrategia más efectiva es buscar productos que:

✅ Tengan comisión superior al 15%
✅ Sean visualmente atractivos para mostrar en video
✅ Tengan valoraciones de 4+ estrellas con muchas reseñas
✅ Estén en el rango de precio entre 10€ y 30€ (el punto dulce de compra impulsiva)
✅ Sean tendencia en la categoría de belleza, salud o lifestyle

Las **categorías más rentables en 2026** son:
- Belleza y cuidado personal (22.5% del GMV total de TikTok Shop)
- Suplementos y bienestar cognitivo
- Gadgets de hogar inteligente
- Accesorios de moda a precios asequibles

## Estrategias de contenido que funcionan en 2026

### El video de demostración real
El **81% de los usuarios de TikTok** prefiere ver el producto usado en situaciones reales antes de comprar. Los unboxings y tutoriales de uso convierten mejor que cualquier otro formato.

### Los directos de Live Shopping
Los directos generan **10 veces más conversión** que los videos estáticos. Con solo 1-2 horas de directo a la semana, muchos afiliados duplican sus ingresos.

### La estrategia de los 3 ángulos
Crea 3 videos distintos del mismo producto con ángulos diferentes: demostración, antes/después, y comparativa. El que funcione mejor, crea variaciones.

## El sistema de "Dual Commission" de 2026

Una novedad importante de 2026 es el **sistema de Dual Commission**: los vendedores pueden establecer dos tarifas de comisión, una para días normales y otra más alta para períodos promocionales. Como afiliado, esto significa que puedes cobrar comisiones mayores durante eventos como el Black Friday o campañas especiales.

## Errores que debes evitar

❌ Promocionar productos sin haberlos probado (daña tu credibilidad)
❌ No revelar que es contenido de afiliado (obligatorio legalmente)
❌ Enfocarte solo en comisión alta sin valorar la calidad del producto
❌ Abandonar tras los primeros videos sin resultados

## Conclusión

El programa de afiliados de TikTok Shop es, en este momento, **una de las formas más accesibles de generar ingresos online** en el mercado hispano. Con 1.500 seguidores ya puedes empezar. Con las estrategias correctas, los resultados pueden llegar en las primeras semanas.

Si quieres aprender a aplicarlo en directo, únete a nuestras clases gratuitas de los miércoles.
    `,
  },

  'comisiones-tiktok-shop-2026': {
    title: 'Comisiones TikTok Shop 2026: Todo lo que Cambió en España y LatAm',
    description: 'En enero 2026 TikTok Shop subió sus comisiones del 5% al 9% en España. Analizamos qué significa para vendedores y afiliados, y cómo aprovechar el período de incentivos para nuevos vendedores.',
    category: 'Novedades',
    readTime: '7 min',
    emoji: '📊',
    date: '2026-02-01',
    keywords: ['comisiones tiktok shop 2026', 'tiktok shop españa comision', 'tiktok shop fees 2026', 'cambios tiktok shop enero 2026'],
    content: `
## El gran cambio de enero 2026: comisiones del 9% en España

El 8 de enero de 2026, TikTok Shop anunció una subida significativa en sus comisiones para los mercados europeos. España pasó de pagar un **5% al 9%** por cada venta realizada en la plataforma.

Este cambio afecta a España, Francia, Alemania, Italia e Irlanda simultáneamente, siguiendo el modelo que ya existe en el mercado del Reino Unido desde septiembre de 2024.

## ¿Qué significa para los vendedores?

Si tienes una tienda en TikTok Shop España, el impacto real depende de tu margen de beneficio. Para la mayoría de categorías, el 9% sigue siendo competitivo comparado con Amazon (8–15%) o Etsy (6.5% + tarifas).

**Ejemplo práctico:**
- Producto con precio de venta: 25€
- Comisión anterior (5%): 1,25€ por venta
- Comisión nueva (9%): 2,25€ por venta
- Diferencia: 1€ más por cada venta

Para un vendedor que vende 200 unidades al mes, esto representa 200€ adicionales de coste mensual.

## El incentivo para nuevos vendedores: 4% durante 60 días

La buena noticia es que TikTok Shop lanzó simultáneamente un **período de gracia para nuevos vendedores**:

- Los vendedores que abran su primera tienda en los mercados EU5 (España incluida) durante el primer trimestre de 2026 pagan solo el **4% de comisión durante sus primeros 60 días**
- Esto aplica a cuentas sin actividad previa en TikTok Shop

Esto significa que si estás pensando en abrir tu tienda, **hacerlo ahora tiene una ventaja económica directa**.

## Comisiones por país en 2026

| País | Comisión | Estado |
|------|----------|--------|
| España | 9% (4% nuevos) | ✅ Activo |
| México | 6% | ✅ Activo |
| Reino Unido | 9% | ✅ Activo |
| Francia | 9% (4% nuevos) | ✅ Activo |
| Brasil | Variable | ✅ En expansión |
| Colombia | En desarrollo | 🔄 Beta |

## ¿Cómo afecta a los afiliados?

Para los afiliados, el cambio en las comisiones de plataforma no afecta directamente a sus ingresos. Las comisiones de afiliado las fijan los vendedores de forma independiente, y siguen en el rango del **5% al 80%** según el producto y la categoría.

De hecho, algunos vendedores están aumentando las comisiones de afiliado para compensar el menor margen y mantener el volumen de ventas a través de creadores.

## El contexto: ¿por qué sube TikTok las comisiones?

El modelo de negocio de TikTok Shop está madurando. Durante 2023-2024, las bajas comisiones eran un incentivo para atraer vendedores. En 2026, con la plataforma bien establecida, TikTok empieza a monetizar el ecosistema más agresivamente.

Esto es exactamente lo que hizo Amazon en su momento: comisiones bajas al principio, subidas paulatinas una vez que los vendedores dependen de la plataforma.

## Conclusión

El aumento de comisiones no es una mala noticia si lo contextualizas bien. El 9% sigue siendo competitivo y la ventana de 60 días al 4% para nuevos vendedores es una oportunidad real. Si estás considerando abrir una tienda en TikTok Shop España, el momento óptimo es ahora.

¿Tienes dudas sobre cómo adaptar tu estrategia de precios a las nuevas comisiones? En las clases del miércoles lo analizamos con casos reales.
    `,
  },

  'live-shopping-tiktok-guia-completa': {
    title: 'Live Shopping en TikTok Shop 2026: La Guía Definitiva',
    description: 'El Live Shopping convierte 10 veces más que una tienda online normal. Aprende a hacer directos que venden en TikTok Shop desde cero: setup, estructura, estrategias y cifras reales.',
    category: 'Estrategia',
    readTime: '12 min',
    emoji: '🔴',
    date: '2026-01-25',
    keywords: ['live shopping tiktok', 'tiktok live shopping como hacer', 'live tiktok shop ganar dinero', 'tiktok shop directo ventas'],
    content: `
## Por qué el Live Shopping domina TikTok Shop en 2026

Los números no mienten. Según datos de TikTok de principios de 2026:

- El Live Shopping genera **10 veces más conversión** que una tienda online convencional
- Los directos de TikTok Shop tienen **10-15 veces más engagement** que los posts de producto estáticos
- Los eventos de Live Shopping **se duplicaron** durante el Black Friday 2025
- El GMV global de TikTok Shop en 2025 fue de **64.300 millones de dólares** (+94% vs 2024), y el Live Shopping es el principal motor de crecimiento

El directo no es solo una característica más. En TikTok Shop, es **el canal de ventas más potente disponible para cualquier vendedor o afiliado**, independientemente de su tamaño.

## Qué necesitas para hacer tu primer directo

### Setup técnico mínimo viable:
- **Teléfono con buena cámara** (iPhone o Android de gama media-alta)
- **Iluminación**: Un aro de luz básico (15-30€) hace una diferencia enorme
- **Estabilizador o trípode** para que la imagen no tiemble
- **Conexión WiFi estable** (mínimo 10 Mbps de subida)
- **Micrófono externo** si grabas en entornos ruidosos (opcional pero recomendado)

No necesitas un estudio profesional. Los directos que más venden en el mercado hispano son los más auténticos y cercanos.

## Estructura de un directo que vende

Un Live Shopping efectivo sigue esta estructura:

**0-5 minutos: Hook inicial**
Empieza mostrando el producto estrella inmediatamente. No pierdas tiempo con introducciones largas. Algo como: *"Hoy tenemos esto y ya se han vendido 50 unidades en la última hora"* activa la urgencia desde el primer segundo.

**5-40 minutos: Demostración y valor**
- Muestra el producto desde todos los ángulos
- Demuestra cómo se usa en situaciones reales
- Responde las preguntas del chat en tiempo real
- Alterna entre el producto principal y otros productos del catálogo

**40-50 minutos: Cierre con urgencia**
- Anuncia que el stock es limitado o que la oferta termina pronto
- Agradece a los espectadores nombrarlos directamente
- Anuncia el próximo directo para crear hábito

## Estrategias avanzadas de Live Shopping en 2026

### La técnica del "producto gancho"
Anuncia en el directo un producto con descuento muy agresivo (casi sin margen) para atraer espectadores. Una vez dentro del directo, estos compradores potenciales descubren el resto de tu catálogo con márgenes normales.

### Los "momentos de escasez"
Frases como *"Solo quedan 3 unidades a este precio"* o *"Esta oferta dura hasta que acabe el directo"* activan el miedo a perderse algo (FOMO) y disparan las conversiones.

### El chat como motor de ventas
Interactuar con el nombre de los espectadores del chat crea una conexión personal que no existe en el e-commerce tradicional. Leer y responder preguntas en vivo convierte espectadores pasivos en compradores activos.

## LIVE Auto-Post: la novedad de 2026

Una de las nuevas funciones lanzadas en 2026 es el **LIVE Auto-Post**, que permite programar y automatizar la publicación de tus directos como videos cortos después de que terminen. Esto multiplica el alcance de cada directo sin trabajo adicional.

## Cuánto se puede ganar con Live Shopping

Los rangos son amplios dependiendo del nivel y la audiencia:

- **Principiante (0-5K seguidores)**: 50–200€ por directo
- **Nivel medio (5K-50K seguidores)**: 200–1.000€ por directo
- **Creadores establecidos (+50K)**: 1.000–5.000€ por directo
- **Top creators**: Cifras que superan los 10.000€ por sesión

Lo importante: **no necesitas muchos seguidores** para que el directo funcione. El algoritmo de TikTok puede mostrar tu directo a personas que no te siguen si el contenido engancha.

## Errores más comunes en los primeros directos

❌ Empezar el directo sin nadie conectado y esperar sin hacer nada
❌ Hablar solo del producto sin conectar con la audiencia
❌ No tener preparado el catálogo de productos antes de empezar
❌ Directos demasiado cortos (menos de 30 minutos no dan tiempo al algoritmo a distribuirlo)
❌ No anunciar el directo con anticipación en stories o videos

## Conclusión

El Live Shopping en TikTok Shop es accesible para cualquier persona con un smartphone y algo que vender o promocionar. Las herramientas, los formatos y la audiencia ya existen. Lo que hace falta es dar el primer paso.

Si quieres practicar y ver cómo lo hacemos nosotros, ven a las clases gratuitas de los miércoles.
    `,
  },

  'productos-mas-vendidos-tiktok-shop-2026': {
    title: 'Los Productos Más Vendidos en TikTok Shop en 2026',
    description: 'Análisis actualizado de las categorías y productos con mayor GMV en TikTok Shop en 2026. Belleza, salud, moda y tecnología: datos reales para elegir qué vender o promocionar.',
    category: 'Productos',
    readTime: '11 min',
    emoji: '🛍️',
    date: '2026-02-10',
    keywords: ['productos mas vendidos tiktok shop', 'que vender en tiktok shop 2026', 'productos virales tiktok shop', 'mejores productos tiktok shop afiliado'],
    content: `
## Las categorías que dominan TikTok Shop en 2026

Según los datos globales de TikTok Shop de principios de 2026, **la belleza y el cuidado personal representa el 22,5% de todo el GMV** de la plataforma, consolidándose como la categoría reina.

Esto no es casualidad: TikTok es una plataforma visual donde las transformaciones, los resultados antes/después y las demostraciones de producto funcionan de forma natural.

## #1 Belleza y Cuidado Personal

**El sector más rentable de TikTok Shop sin discusión.**

Los productos que arrasan en 2026:

- **Serums capilares y tratamientos de cabello**: Contenido de transformación capilar con millones de reproducciones
- **Mascarillas LED faciales**: Crecimiento del 536% en ventas en el mercado europeo
- **Labiales de larga duración y tinturas de labios**: En el mercado UK, una unidad de Wonderskin se vende cada 5 segundos
- **Productos de microbioma (cuidado de la piel)**: La tendencia "biome skincare" está explotando
- **Kits de maquillaje completos** en el rango de 15–30€

**Punto de precio ganador**: 15€–30€. En este rango, la decisión de compra es casi impulsiva.

## #2 Salud y Bienestar

La categoría que más crece en 2026, impulsada por el contenido "science-adjacent" (contenido con apariencia científica que conecta con el espectador).

Productos en tendencia:
- **Suplementos cognitivos** (para concentración, memoria, rendimiento mental)
- **Colágeno y proteínas en formatos creativos** (barras, bebidas, gummies)
- **Productos para dormir mejor** (melatonina, suplementos de magnesio)
- **Aparatos de bienestar personal** (masajeadores, dispositivos de recuperación)

El contenido educativo funciona muy bien aquí: videos que explican el "por qué" de un suplemento antes de venderlo generan más confianza y más ventas.

## #3 Moda y Accesorios

La moda en TikTok Shop se diferencia del e-commerce tradicional: **la velocidad de tendencia es brutal**.

Lo que funciona en 2026:
- Piezas de "micro-tendencia" a precios asequibles (menos de 25€)
- Joyería personalizable
- Accesorios de temporada que coinciden con momentos virales
- Ropa que se puede mostrar con un "outfit check" (prueba de outfit)

**Clave**: En moda, el video tiene que mostrar la prenda puesta y en movimiento. Las fotos de producto estáticas no venden en TikTok.

## #4 Hogar y Lifestyle

La categoría de "hogar inteligente" está creciendo fuerte en el mercado hispano en 2026.

Productos ganadores:
- **Gadgets de cocina inteligentes** (precisión en la cocción, fermentación, café)
- **Organizadores y soluciones de almacenamiento** (el contenido de "satisfying organization" tiene millones de vistas)
- **Productos de limpieza con resultados visibles** (muy virales en formato antes/después)
- **Pequeños electrodomésticos compactos**

## #5 Tecnología y Accesorios

Los gadgets de tecnología a menos de 30€ son perfectos para TikTok Shop:

- Accesorios de móvil creativos
- Gadgets de productividad
- Dispositivos de audio compactos
- Accesorios para creadores de contenido

## Cómo elegir el producto correcto como afiliado

Si eres afiliado, el análisis de producto debe incluir:

1. **Comisión**: Mínimo 15% para que tenga sentido con bajo volumen de tráfico
2. **Precio**: El rango 10€–30€ convierte mejor por el factor impulsivo
3. **Valoraciones**: Mínimo 4 estrellas con reseñas reales y fotos
4. **Viralidad potencial**: ¿Se puede mostrar un resultado visible en 30–60 segundos?
5. **Stock disponible**: Nada peor que hacer un video viral y que el producto se agote

## La herramienta de tendencias de TikTok Shop

En 2026, TikTok Shop tiene un panel de "Creator Search Insights" dentro de la app donde puedes ver las palabras clave más buscadas en cada categoría. Es, básicamente, **el Google Trends de TikTok Shop** y es gratuito para todos los creadores.

## Conclusión

El 80% del éxito en TikTok Shop como afiliado o vendedor viene de elegir bien el producto. Belleza, salud y lifestyle en el rango de 15–30€ es donde está la mayor concentración de oportunidades en 2026 para el mercado hispano.

¿Quieres que analicemos productos específicos juntos? En las clases del miércoles dedicamos tiempo a esto cada semana.
    `,
  },

  'tiktok-shop-espana-guia-completa-2026': {
    title: 'TikTok Shop en España 2026: Guía Completa para Empezar',
    description: 'TikTok Shop llegó a España en octubre de 2025. En 2026 ya es una realidad. Todo lo que necesitas saber: registro, comisiones, requisitos fiscales y estrategias para el mercado español.',
    category: 'Por países',
    readTime: '10 min',
    emoji: '🇪🇸',
    date: '2026-02-15',
    keywords: ['tiktok shop españa 2026', 'tiktok shop afiliados españa', 'como vender tiktok shop españa', 'tiktok shop españa requisitos', 'abrir tienda tiktok shop españa', 'tiktok shop desde españa'],
    content: `
## TikTok Shop en España: la situación en 2026

TikTok Shop llegó oficialmente a España en **octubre de 2025**, convirtiéndose en uno de los últimos grandes mercados europeos en incorporarse a la plataforma (Reino Unido fue primero en 2021, seguido por Alemania, Francia e Italia en 2023-2024).

En 2026, España está viviendo la fase de adopción temprana que el mercado del Reino Unido experimentó en 2022-2023: **mucha oportunidad, poca competencia, algoritmo favorable** para los que entran ahora.

## ¿Qué necesitas para vender en TikTok Shop España?

### Documentación básica:
- DNI, NIE o pasaporte válido
- NIF español (o NIE con actividad económica)
- Número de teléfono español verificado
- IBAN de cuenta bancaria española o europea

### Para vendedores autónomos:
- Alta en el RETA (Régimen Especial de Trabajadores Autónomos) si superas el umbral de facturación
- Alta en el censo de Hacienda como actividad económica
- Conocimiento básico de la declaración trimestral de IVA

### Para empresas:
- CIF de la sociedad
- Representante legal verificado
- Documentación societaria (escritura de constitución)

## Las comisiones en España en 2026

| Concepto | Porcentaje |
|----------|-----------|
| Comisión estándar TikTok Shop | 9% |
| Comisión para nuevos vendedores (60 días) | 4% |
| Comisión de afiliado (la fija el vendedor) | 5–80% |

La subida al 9% en enero 2026 puede parecer un impedimento, pero en contexto con otras plataformas, sigue siendo competitivo. Amazon cobra entre 8% y 15% según categoría.

## El aspecto fiscal: IVA, IRPF y VeriFactu en 2026

Este es el punto que más confunde a los nuevos vendedores españoles.

**IVA**: Las ventas en TikTok Shop a consumidores finales en España tributan al tipo general del **21% de IVA**. TikTok Shop puede actuar como "marketplace facilitator", lo que significa que en algunos casos gestiona la declaración del IVA automáticamente.

**IRPF**: Los ingresos de tu tienda o programa de afiliados se declaran como rendimientos de actividades económicas en tu IRPF anual.

**VeriFactu**: Desde 2026, España aplica de forma más estricta la Ley Antifraude que afecta a la facturación electrónica. Para vendedores con actividad regular, se recomienda usar un software de facturación compatible.

*Nota: Consulta siempre con un gestor o asesor fiscal para tu caso específico.*

## La formación gratuita disponible para vendedores españoles

TikTok Shop, en colaboración con la Cámara de España, ofrece un programa de formación gratuito de **35,5 horas** para vendedores que quieran entrar en la plataforma. Esto es parte del incentivo de TikTok para acelerar la adopción en el mercado español.

## Estrategias específicas para el mercado español en 2026

### El horario ideal para directos en España
Los horarios con mayor audiencia activa en TikTok España son:
- **Martes-jueves**: 20h–22h
- **Viernes**: 20h–23h
- **Sábado**: 12h–14h y 20h–22h

### Contenido que funciona en el mercado español
- Contenido de "relatable" (situaciones cotidianas donde aparece el producto)
- Humor costumbrista español
- Reviews honestas (los españoles son especialmente escépticos con el marketing agresivo)
- Contenido en castellano neutro que también funcione para LatAm (doble audiencia)

### El nicho de los productos ibéricos
Un ángulo prácticamente inexplorado en TikTok Shop España: **productos únicos del mercado español** que no están disponibles fácilmente en otros mercados. Gastronomía, artesanía, cosmética con ingredientes mediterráneos, etc.

## Comparativa con Amazon España

| Factor | TikTok Shop España | Amazon España |
|--------|-------------------|---------------|
| Comisión plataforma | 9% (4% inicial) | 8–15% |
| Coste de publicidad | Bajo (orgánico funciona) | Necesario para crecer |
| Velocidad de viral | Alta (algoritmo TikTok) | Baja |
| Confianza del comprador | Media (en construcción) | Muy alta |
| Barrera de entrada | Baja | Media |

## Conclusión

España en 2026 es el momento exacto para entrar en TikTok Shop. La plataforma está establecida, pero la competencia hispanohablante todavía es baja. El incentivo del 4% para nuevos vendedores hace que el timing sea perfecto.

En nuestras clases gratuitas de los miércoles tratamos específicamente los casos del mercado español.
    `,
  },

  'tiktok-shop-mexico-guia-2026': {
    title: 'TikTok Shop en México 2026: Guía Completa para Vendedores y Afiliados',
    description: 'México fue el primer país de LatAm en tener TikTok Shop (febrero 2025). Guía actualizada con requisitos, comisiones, estrategias y cómo aprovechar el boom del comercio social en México.',
    category: 'Por países',
    readTime: '9 min',
    emoji: '🇲🇽',
    date: '2026-02-20',
    keywords: ['tiktok shop mexico 2026', 'como vender tiktok shop mexico', 'tiktok shop afiliado mexico', 'tiktok shop mexico requisitos'],
    content: `
## TikTok Shop en México: el primer mercado de LatAm

México fue el **primer país de América Latina en tener TikTok Shop**, con lanzamiento oficial el 6 de febrero de 2025. En menos de dos años ya es el mercado hispanohablante con más vendedores activos, más afiliados y más casos de éxito documentados.

El crecimiento ha sido extraordinario: desde el lanzamiento en febrero de 2025 hasta finales de año, el número de vendedores activos creció de forma exponencial, convirtiendo a México en el referente del modelo para el resto de LatAm.

## Datos clave de TikTok Shop México en 2026

- **Comisión de plataforma**: 6% (una de las más bajas del ecosistema global)
- **Usuarios activos de TikTok en México**: +60 millones
- **Categorías más vendidas**: Belleza, moda, productos de limpieza del hogar
- **Horario de mayor actividad**: 20h–23h hora del centro de México
- **Formato más efectivo**: Live Shopping y videos de demostración

## Requisitos para vender en TikTok Shop México

### Para vendedores individuales:
- RFC (Registro Federal de Contribuyentes) válido
- Identificación oficial (INE, pasaporte)
- Cuenta bancaria o CLABE interbancaria
- Número de teléfono mexicano verificado

### Para empresas:
- Acta constitutiva y RFC de la persona moral
- Representante legal con poderes notariados
- Comprobante de domicilio fiscal

## El programa de afiliados en México

México tiene el programa de afiliados más desarrollado de toda la región hispanohablante. Las particularidades:

- Comisiones de afiliado van del 5% al 80% según el vendedor
- No hay restricción mínima de seguidores en algunos casos especiales
- Los creadores mexicanos tienen acceso a un mayor catálogo de productos que otros países de LatAm
- El Live Shopping está completamente habilitado

## Estrategias específicas para el mercado mexicano

### El lenguaje importa
El mercado mexicano responde mejor al contenido con modismos locales y referencias culturales propias. Un video en "español neutro" convierte menos que uno con un tono genuinamente mexicano.

### Los horarios ganadores
- **Lunes-viernes**: 20h–22h (tiempo libre post-trabajo)
- **Sábados**: 12h–15h (compras de fin de semana)
- **Domingos**: 18h–21h

### Categorías con mayor potencial en México en 2026

1. **Belleza accesible**: Marcas internacionales o productos equivalentes a menor precio
2. **Cocina y hogar**: El contenido de "tips del hogar" es enormemente popular
3. **Moda urbana**: Streetwear y prendas con identidad cultural
4. **Salud y naturismo**: Suplementos y productos de bienestar con base herbal

## Fiscalidad para vendedores mexicanos

Los ingresos de TikTok Shop en México tributan como actividad empresarial:
- **ISR (Impuesto sobre la Renta)**: Aplica según tu régimen fiscal
- **IVA**: 16% en México, aunque hay productos exentos
- **RESICO**: Muchos vendedores pequeños se benefician del Régimen Simplificado de Confianza

*Consulta a un contador mexicano para tu situación específica.*

## Casos de éxito en México

El mercado mexicano ha generado algunos de los casos de éxito más documentados del programa de afiliados en español:

- Creadores con 5.000–20.000 seguidores generando 10.000–50.000 pesos mensuales como afiliados
- Vendedores de productos de belleza que pasaron de 0 a 6 cifras en ventas mensuales en menos de 6 meses
- Lives de shopping que en un solo directo han superado las 500 ventas

## Comparativa con Mercado Libre

| Factor | TikTok Shop México | Mercado Libre México |
|--------|-------------------|---------------------|
| Comisión | 6% | 10–25% según categoría |
| Descubrimiento | Viral orgánico | Búsqueda pagada |
| Confianza del comprador | Media-alta | Muy alta |
| Potencial de viralización | Muy alto | Bajo |
| Barrera de entrada | Baja | Media |

## Conclusión

México en 2026 es el mercado de referencia para entender cómo puede evolucionar TikTok Shop en el resto de LatAm. Si quieres validar una estrategia para Colombia, Argentina o Chile antes de que llegue TikTok Shop oficialmente, México es el banco de pruebas perfecto.

Las clases gratuitas de los miércoles tienen siempre participantes de México con casos y preguntas específicas del mercado local.
    `,
  },

  'ganar-dinero-tiktok-shop-sin-seguidores': {
    title: 'Cómo Ganar Dinero en TikTok Shop sin Tener Seguidores en 2026',
    description: 'Estrategias reales para generar ingresos en TikTok Shop partiendo de cero seguidores. Métodos probados que funcionan en el mercado hispano en 2026.',
    category: 'Estrategia',
    readTime: '10 min',
    emoji: '🚀',
    date: '2026-03-01',
    keywords: ['ganar dinero tiktok shop sin seguidores', 'tiktok shop desde cero', 'tiktok shop sin audiencia', 'empezar tiktok shop 0 seguidores'],
    content: `
## ¿Es posible ganar dinero en TikTok Shop sin seguidores?

La respuesta corta es **sí**, pero con matices importantes dependiendo del método que elijas.

TikTok tiene una ventaja única sobre otras plataformas: su algoritmo puede mostrar tu contenido a millones de personas aunque tengas 0 seguidores. Esto es lo que hace que TikTok Shop sea especialmente accesible para quienes empiezan desde cero.

## Método 1: Live Shopping desde 0 seguidores (la vía más rápida)

Aunque el programa de afiliados requiere 1.500 seguidores, **no existe un mínimo de seguidores para hacer directos** como vendedor con tienda propia.

Lo que muchos no saben: TikTok puede distribuir tu directo a usuarios que no te siguen si detecta que el contenido es de calidad y la gente interactúa. Esto significa que con 0 seguidores, un directo bien ejecutado puede tener 50–200 espectadores en la primera hora.

**Estrategia para el primer directo sin audiencia:**
1. Anuncia el directo 24h antes en un video (aunque tengas pocos seguidores, ese video puede hacerse viral)
2. Comienza el directo a las 20h de martes a jueves
3. Mantén el directo mínimo 60 minutos para que el algoritmo lo distribuya
4. Habla continuamente aunque no haya nadie: el algoritmo penaliza los silencios

## Método 2: Crear contenido viral de producto

El algoritmo de TikTok no discrimina por número de seguidores. Un video de alguien con 50 seguidores puede hacerse completamente viral si el contenido es bueno.

Los formatos que tienen más posibilidades de viralizarse con pocas visualizaciones iniciales:

- **"Encontré esto en TikTok Shop y..."**: Abre con curiosidad
- **Antes/después de producto**: Visual e impactante en los primeros 2 segundos
- **"Nadie te habla de esto en TikTok Shop"**: Genera curiosidad
- **Reacción genuina al recibir un producto**: La autenticidad funciona

**Clave del hook**: Los primeros 2–3 segundos determinan si alguien se queda o hace scroll. El gancho tiene que estar en el primer frame.

## Método 3: Dropshipping con tienda TikTok Shop

Con una tienda TikTok Shop puedes vender productos de proveedores sin tener stock físico. El cliente compra, el proveedor envía, tú te quedas el margen.

En 2026, el dropshipping a través de TikTok Shop funciona mejor cuando:
- El producto es visualmente atractivo y demostrable en video
- El precio de venta está en el rango 15–40€
- El tiempo de entrega es menor de 7 días (el cliente de TikTok no espera como en AliExpress)
- Tienes contenido propio que demuestra el producto

## Método 4: Llegar a los 1.500 seguidores rápido para activar afiliados

Si quieres acceder al programa de afiliados (el método de más bajo riesgo), el objetivo es llegar a 1.500 seguidores lo antes posible.

**Estrategia acelerada para los primeros 1.500 seguidores:**

1. Publica 2–3 videos diarios durante las primeras 2 semanas
2. Usa el **Creator Search Insights** de TikTok para encontrar las palabras clave más buscadas en tu nicho
3. El primer video que supere 10.000 vistas te dará un salto de seguidores importante
4. Responde a TODOS los comentarios durante las primeras horas (el algoritmo lo premia)
5. Haz un directo de al menos 30 minutos aunque sea para hablar de tu nicho sin vender

Muchos creadores pasan de 0 a 1.500 seguidores en **2–4 semanas** aplicando esta estrategia consistentemente.

## Método 5: Colaboración con otros creadores

Si tienes una tienda pero no audiencia, puedes usar el programa de afiliados de TikTok Shop **al revés**: en lugar de tú promocionar productos de otros, consigues que otros creadores promocionen los tuyos.

Contacta a microinfluencers (1.000–10.000 seguidores) de tu nicho y ofréceles comisiones competitivas. Muchos están empezando y aceptarán colaborar si el producto es bueno y la comisión es justa.

## Cuánto tiempo se tarda en ver resultados reales

Con dedicación diaria (1–2 horas de trabajo en contenido), los plazos realistas son:

| Objetivo | Plazo realista |
|----------|----------------|
| Primeros 100 seguidores | 1–2 semanas |
| Llegar a 1.500 seguidores | 3–6 semanas |
| Primeras ventas de afiliado | 4–8 semanas |
| 500€/mes consistentes | 3–6 meses |

## Conclusión

Empezar desde cero en TikTok Shop en 2026 es completamente viable. El algoritmo de TikTok es genuinamente meritocrático: el contenido bueno llega a gente aunque no tengas seguidores.

La clave no es tener una audiencia grande. La clave es consistencia en los primeros meses.

¿Quieres arrancar con nuestra ayuda? Ven a la clase gratuita del miércoles y cuéntanos desde dónde partes.
    `,
  },

  'tiktok-shop-vs-amazon-2026': {
    title: 'TikTok Shop vs Amazon en 2026: ¿Dónde Vender?',
    description: 'Comparativa completa y actualizada entre TikTok Shop y Amazon en 2026. Comisiones, audiencia, facilidad de entrada y potencial real de ingresos para el mercado hispano.',
    category: 'Comparativa',
    readTime: '10 min',
    emoji: '⚖️',
    date: '2026-03-05',
    keywords: ['tiktok shop vs amazon', 'donde vender online 2026', 'tiktok shop o amazon cual mejor', 'comparativa plataformas venta 2026'],
    content: `
## La pregunta del millón en 2026: ¿TikTok Shop o Amazon?

En 2026, esta comparativa ya no es teórica. Tenemos datos reales de vendedores que han probado ambas plataformas en el mercado hispano. El resultado no es tan obvio como parece.

## Comparativa general

| Factor | TikTok Shop | Amazon |
|--------|-------------|--------|
| Comisión plataforma (España) | 9% (4% nuevos) | 8–15% según categoría |
| Coste de publicidad para crecer | Bajo (orgánico viable) | Alto (necesario para visibilidad) |
| Barrera de entrada | Baja | Media-alta |
| Confianza del comprador | Media (creciendo) | Muy alta |
| Velocidad de viral | Muy alta | Nula |
| Logística propia | No (debes gestionar) | Sí (FBA disponible) |
| Programa de afiliados | Sí, integrado | Sí, pero separado |
| Potencial de crecimiento 2026 | Muy alto | Estable-alto |

## Comisiones: la comparativa real

**Amazon España en 2026:**
- Electrónica: 8%
- Moda: 10–15%
- Belleza: 8%
- Hogar: 10–12%
- Además: tarifa de referencia + costes de FBA si usas su logística

**TikTok Shop España en 2026:**
- Comisión estándar: 9%
- Nuevos vendedores: 4% durante 60 días
- Sin tarifas de listado
- Sin coste de almacén si gestionas tú el envío

**Veredicto comisiones**: En términos puros de comisión, son comparables. La diferencia real está en los costes de marketing para conseguir visibilidad.

## El factor diferencial: el tráfico orgánico

**Esta es la ventaja más grande de TikTok Shop sobre Amazon en 2026.**

En Amazon, si no pagas publicidad (Amazon PPC), tu producto es invisible. Para productos nuevos, los presupuestos de publicidad necesarios para ser competitivos van de 500€ a varios miles de euros mensuales.

En TikTok Shop, un video bien ejecutado puede generar 50.000 visualizaciones orgánicas y 100+ ventas en 48 horas **sin gastar un euro en publicidad**.

## ¿Cuándo Amazon gana a TikTok Shop?

Amazon sigue siendo la mejor opción cuando:

1. **Vendes productos técnicos o de alta implicación**: Los compradores de ordenadores, herramientas profesionales o electrodomésticos investigan y comparan. Amazon está diseñado para ese proceso.

2. **Tu producto no es demostrable en video**: Si el valor del producto es difícil de comunicar visualmente en 30-60 segundos, TikTok no es tu mejor canal.

3. **Necesitas la logística FBA**: El fulfillment de Amazon es extraordinario. Si no quieres gestionar envíos, paquetería ni devoluciones, FBA es difícil de igualar.

4. **Tu cliente objetivo tiene +40 años**: TikTok en España tiene su audiencia principal entre 18-35 años. Si tu cliente es mayor, Amazon llega mejor.

## ¿Cuándo TikTok Shop gana a Amazon?

TikTok Shop es la mejor opción cuando:

1. **Tu producto es visual y demostrable**: Belleza, moda, hogar, gadgets, fitness.

2. **Empiezas con presupuesto limitado**: Con 0€ de publicidad, TikTok puede darte ventas. Amazon no.

3. **El precio de tu producto está entre 10€ y 50€**: El rango de compra impulsiva, donde TikTok es imbatible.

4. **Quieres construir una marca con identidad**: TikTok te permite crear conexión emocional con tu audiencia de una forma que Amazon no permite.

5. **Eres creador de contenido**: Si ya tienes presencia en redes, integrar TikTok Shop a tu contenido es mucho más natural que montar una estrategia de Amazon desde cero.

## La estrategia del vendedor inteligente en 2026: ambas

Los vendedores más avanzados del mercado hispano en 2026 no eligen entre TikTok Shop y Amazon: **usan TikTok Shop para crear demanda y Amazon para capturarla**.

El flujo es: video viral en TikTok → el espectador busca el producto en Amazon → compra en Amazon (donde confía más).

Alternativamente: TikTok Shop para el impulso y para construir reseñas → Amazon para la escala a largo plazo.

## Conclusión

En 2026, TikTok Shop tiene una ventaja de momentum que Amazon no puede replicar fácilmente: el contenido orgánico viral. Para un vendedor que empieza con recursos limitados, TikTok Shop tiene una curva de entrada mucho más accesible.

Si ya tienes Amazon funcionando, añade TikTok Shop. Si empiezas de cero, empieza por TikTok Shop.

¿Tienes dudas sobre qué plataforma se adapta mejor a tu producto? En las clases del miércoles lo analizamos con casos reales.
    `,
  },

  'ia-tiktok-shop-2026': {
    title: 'IA en TikTok Shop 2026: AI Dubbing, List with AI y Agentic Commerce',
    description: 'TikTok Shop lanzó en 2026 un conjunto de herramientas de inteligencia artificial que cambian completamente cómo se crea y optimiza contenido de venta. Todo lo que necesitas saber.',
    category: 'Herramientas IA',
    readTime: '8 min',
    emoji: '🤖',
    date: '2026-03-10',
    keywords: ['ia tiktok shop 2026', 'tiktok shop inteligencia artificial', 'ai dubbing tiktok shop', 'tiktok shop herramientas ia'],
    content: `
## La inteligencia artificial llega a TikTok Shop en 2026

2026 es el año en que la inteligencia artificial se integra de forma nativa en el flujo de trabajo de los vendedores y creadores de TikTok Shop. Las nuevas herramientas de IA no son extras opcionales: están cambiando fundamentalmente cómo se crea contenido, cómo se listan productos y cómo se vende en la plataforma.

## AI Dubbing: vende a toda LatAm con un solo video

**¿Qué es?** AI Dubbing es la función que permite duplicar automáticamente el audio de tu video en otro idioma o acento, manteniendo tu voz original y sincronizando los labios con el nuevo audio.

**¿Por qué importa para el mercado hispano?**

Si creas contenido en español de España, el AI Dubbing puede generar automáticamente una versión con acento neutro latinoamericano (o específico de México, Colombia, etc.) sin que tengas que grabar de nuevo.

Esto elimina una de las mayores barreras para los creadores: **alcanzar a toda la audiencia hispanohablante con un único video**.

**Cómo activarlo:**
Disponible en el apartado de edición de video de TikTok Creator Studio. Por el momento en fase de despliegue progresivo en el mercado hispano.

## List with AI: crea listings de producto en segundos

**¿Qué es?** Una función que analiza las fotos de tu producto y genera automáticamente:
- Título optimizado para búsquedas dentro de TikTok Shop
- Descripción completa del producto
- Etiquetas y categorías sugeridas
- Atributos del producto rellenados automáticamente

**El impacto real:**
Lo que antes tardaba 20–30 minutos de trabajo de copywriting por producto, ahora se hace en menos de 60 segundos. Para vendedores con catálogos grandes, esto es transformador.

**Cómo usarlo:**
Dentro del Seller Center → Añadir producto → "List with AI". Sube las fotos y el sistema genera el borrador completo.

## AI Fashion Video Maker: videos de producto sin grabar

Para la categoría de moda, TikTok Shop lanzó en 2026 el **AI Fashion Video Maker**: una herramienta que crea videos de producto a partir de fotos estáticas, con animaciones realistas que simulan cómo se mueve la prenda.

Esto significa que puedes tener videos de producto para toda tu colección sin necesitar modelos, estudio fotográfico ni equipo de producción.

## LIVE Auto-Post: multiplica el alcance de tus directos

**¿Qué es?** Una función que, al terminar tu directo de Live Shopping, extrae automáticamente los mejores momentos y los publica como videos cortos en tu perfil.

**Por qué es importante:**
Un directo tiene un alcance limitado a las personas que lo ven en tiempo real. Con LIVE Auto-Post, cada directo genera 3–5 clips cortos que el algoritmo puede distribuir a nuevas audiencias durante los días siguientes.

## Agentic Commerce: el futuro que ya está aquí

El concepto más avanzado de 2026 es el **Agentic Commerce** (A-Commerce): el uso de "agentes" de IA que actúan de forma semi-autónoma para optimizar la experiencia de compra.

En la práctica para los vendedores de TikTok Shop, esto se traduce en:
- Recomendaciones de productos personalizadas en tiempo real para cada espectador del directo
- Ajustes automáticos de precio durante campañas según la demanda
- Respuestas automáticas a preguntas frecuentes en el chat del directo

## La paradoja de la IA en TikTok Shop 2026

Con todos estos avances tecnológicos, la tendencia de consumo en 2026 va en la dirección contraria: los compradores quieren **más humanidad, no menos**.

El 81% de los usuarios de TikTok prefiere ver productos usados por personas reales frente a presentaciones generadas por IA. Las marcas que están ganando en 2026 son las que usan la IA para las tareas operativas (crear listings, doblar idiomas, recortar clips) pero mantienen la cara humana en el contenido de ventas.

La IA debe ser tu **asistente de producción**, no tu cara pública.

## Conclusión

Las herramientas de IA de TikTok Shop en 2026 están democratizando la producción de contenido y la gestión de tiendas. Lo que antes requería un equipo o grandes recursos ahora está al alcance de cualquier vendedor individual.

Aprovéchalas para los procesos operativos, pero nunca pierdas la autenticidad que hace que TikTok funcione.

¿Quieres ver estas herramientas en acción? Las mostramos en directo en las clases gratuitas del miércoles.
    `,
  },

  'errores-tiktok-shop-principiantes-2026': {
    title: 'Los 10 Errores más Comunes en TikTok Shop en 2026 (y cómo evitarlos)',
    description: 'Aprende de los errores que cometen la mayoría de principiantes en TikTok Shop. Errores reales que cuestan dinero y tiempo, con soluciones prácticas para cada uno.',
    category: 'Estrategia',
    readTime: '9 min',
    emoji: '⚠️',
    date: '2026-03-15',
    keywords: ['errores tiktok shop principiantes', 'errores comunes tiktok shop', 'como evitar errores tiktok shop', 'tiktok shop fallos tipicos'],
    content: `
## Por qué hablar de errores antes que de estrategias

La mayoría de tutoriales te dicen qué hacer. Pero en TikTok Shop, los errores que se cometen al principio son los que más tiempo y dinero cuestan. Conocerlos de antemano es una ventaja enorme.

Estos son los 10 errores más frecuentes que vemos en nuestra comunidad de más de 500 personas que trabajan con TikTok Shop en el mercado hispano.

## Error #1: Elegir el producto equivocado

**El error:** Muchos principiantes eligen el producto que más les gusta o el que creen que "debería vender", sin validar si realmente funciona en TikTok Shop.

**La solución:** Antes de elegir un producto, analiza si puedes demostrar su valor en 30–60 segundos de video. Si no hay una transformación visible, un antes/después o un momento "wow", el producto no es adecuado para TikTok.

Usa el Creator Search Insights de TikTok para ver si hay búsquedas relacionadas con ese producto.

## Error #2: Esperar resultados en la primera semana

**El error:** Publicar 3-4 videos, no ver ventas, y abandonar.

**La solución:** El algoritmo de TikTok necesita tiempo para entender a tu audiencia y distribuir tu contenido correctamente. Los primeros 30 días son de aprendizaje, no de resultados.

La regla realista: mínimo **8 semanas de consistencia** antes de evaluar si una estrategia funciona.

## Error #3: Ignorar los primeros 3 segundos del video

**El error:** Empezar el video con introducciones largas, logotipos animados o saludos del tipo "¡Hola chicos, hoy les traigo..."

**La solución:** Los primeros 2–3 segundos determinan si el espectador se queda o hace scroll. El hook tiene que estar en el primer frame. Empieza con la acción, el resultado o la pregunta que genera curiosidad.

## Error #4: No activar el programa de afiliados en la tienda

**El error:** Los vendedores con tienda propia olvidan activar el programa de afiliados, perdiendo la posibilidad de que creadores promocionen sus productos gratuitamente.

**La solución:** Desde el Seller Center, activa el programa de afiliados y establece comisiones atractivas (+15% para crear incentivo real). Cada creador que promociona tu producto es publicidad sin coste inicial.

## Error #5: Hacer directos demasiado cortos

**El error:** Directos de 10–15 minutos que no dan tiempo al algoritmo de distribuir el contenido.

**La solución:** Los directos deben durar **mínimo 30–45 minutos**. El algoritmo de TikTok empieza a distribuir el directo de forma más agresiva a partir de los 20–30 minutos de duración. Los directos de 1–2 horas son los que mejores resultados dan consistentemente.

## Error #6: No interactuar con el chat durante el directo

**El error:** Ignorar los comentarios y preguntas del chat para centrarse en el discurso de ventas.

**La solución:** El chat es tu mayor aliado en un directo. Leer nombres, responder preguntas y agradecer compras en tiempo real crea una conexión emocional que los videos pregrabados nunca pueden lograr. La interacción también es una señal positiva para el algoritmo.

## Error #7: Ignorar el aspecto fiscal

**El error:** Empezar a generar ingresos sin regularizar la situación fiscal, especialmente en España.

**La solución:** Si generas ingresos regulares en TikTok Shop en España, necesitas estar dado de alta como autónomo o tener tu actividad regularizada. Con la entrada en vigor de VeriFactu y el cruce de datos de Hacienda, este no es un riesgo que valga la pena correr.

Consulta con un gestor antes de superar los primeros 1.000€ de ingresos.

## Error #8: Copiar el contenido de otros creadores

**El error:** Imitar exactamente el formato, el estilo y el guión de creadores exitosos.

**La solución:** Inspírate en los formatos que funcionan, pero la autenticidad es lo que realmente convierte en TikTok. El 81% de los compradores prefiere ver a una persona real usando el producto. Tu historia, tu personalidad y tus imperfecciones son una ventaja, no un defecto.

## Error #9: No publicar en el horario correcto

**El error:** Publicar videos a las 11h de la mañana cuando la audiencia está trabajando.

**La solución para el mercado hispano:**
- España: 20h–22h entre semana, 12h–14h los fines de semana
- México: 20h–23h entre semana
- LatAm general: 19h–22h en el horario local de cada país

## Error #10: Rendirse antes de tiempo

**El error:** Compararse con creadores que llevan 1–2 años en la plataforma y sentir que "nunca llegarás".

**La solución:** Cada creador con 50.000 seguidores tuvo una vez 50. El crecimiento en TikTok no es lineal: puede haber semanas sin nada y luego un video que lo cambia todo en 48 horas.

La consistencia beats el talento a largo plazo.

## Conclusión

Conocer estos errores de antemano te da una ventaja real sobre el 80% de personas que entran en TikTok Shop y cometen exactamente estos fallos.

Si quieres evitarlos en tiempo real y con apoyo, ven a las clases gratuitas de los miércoles. Resolvemos dudas y analizamos casos concretos cada semana.
    `,
  },

  'como-ganar-dinero-tiktok-shop-todas-las-formas': {
    title: 'Todas las Formas de Ganar Dinero con TikTok Shop en 2026',
    description: 'Guía completa de todos los métodos para monetizar con TikTok Shop: afiliados, tienda propia, Live Shopping, dropshipping y más. Con cifras reales del mercado hispano en 2026.',
    category: 'Ingresos',
    readTime: '12 min',
    emoji: '💸',
    date: '2026-03-20',
    keywords: ['como ganar dinero tiktok shop', 'monetizar tiktok shop 2026', 'formas ganar dinero tiktok shop', 'ingresos tiktok shop'],
    content: `
## Las 5 formas principales de ganar dinero con TikTok Shop en 2026

TikTok Shop no es solo "vender productos". En 2026 hay múltiples modelos de negocio dentro del ecosistema, cada uno con sus propias ventajas, requisitos y potencial de ingresos.

## Forma #1: Programa de Afiliados

**Qué es:** Ganas comisiones promocionando productos de otros vendedores.

**Requisitos:** 1.500 seguidores, 30 días de cuenta, 18+ años.

**Comisiones:** Entre el 5% y el 80% según el vendedor y la categoría. Promedio típico: 10–20%.

**Ingresos reales en el mercado hispano (2026):**
- Principiante (1K–5K seguidores): 50–300€/mes
- Nivel medio (5K–20K): 300–1.500€/mes
- Creador establecido (+50K): 1.500–10.000€/mes

**Ventaja:** No necesitas inversión ni inventario. El riesgo es cero.
**Desventaja:** Necesitas mínimo 1.500 seguidores para empezar.

## Forma #2: Tienda Propia + Contenido de Producto

**Qué es:** Creas una tienda en TikTok Shop y generas contenido para vender tus propios productos.

**Requisitos:** Documentación de identidad, cuenta bancaria, productos para vender.

**Comisión de plataforma:** 9% en España (4% los primeros 60 días para nuevos), 6% en México.

**Ingresos reales:**
- Tienda nueva (0–3 meses): Variable, objetivo de 500–2.000€/mes de GMV
- Tienda establecida (6–12 meses): 5.000–50.000€/mes de GMV posible

**Ventaja:** Control total sobre el margen, la marca y la relación con el cliente.
**Desventaja:** Necesitas gestionar inventario, envíos y atención al cliente.

## Forma #3: Live Shopping

**Qué es:** Vendes en tiempo real a través de directos en TikTok, ya sea como afiliado o vendedor.

**Requisitos:** Ninguno para directos básicos. Para monetización directa como vendedor, tienda activa.

**Ingresos por directo (datos reales de 2026):**
- Principiante: 50–200€ por directo de 1–2 horas
- Nivel medio: 200–1.000€ por directo
- Creador con audiencia: 1.000–5.000€ por directo

**El dato clave:** Los directos de TikTok Shop convierten **10 veces más** que una tienda online convencional.

**Ventaja:** Conversiones muy altas, feedback inmediato, genera urgencia de compra.
**Desventaja:** Requiere presencia en tiempo real, no es pasivo.

## Forma #4: Dropshipping en TikTok Shop

**Qué es:** Vendes productos sin tener stock. El pedido va al proveedor que envía directamente al cliente.

**Requisitos:** Tienda en TikTok Shop activa, proveedores fiables.

**Márgenes típicos:** 20–50% sobre el precio de coste, dependiendo del proveedor.

**La diferencia con el dropshipping tradicional:**
El dropshipping en TikTok Shop tiene una ventaja crucial: el contenido orgánico puede generar ventas sin publicidad pagada, algo imposible en tiendas Shopify/WooCommerce convencionales.

**Ventaja:** Sin inversión en inventario, escalable.
**Desventaja:** Dependes del proveedor para la calidad y los tiempos de entrega. Un proveedor malo arruina tu reputación.

## Forma #5: Crear y Vender Formación sobre TikTok Shop

**Qué es:** Una vez que tienes experiencia y resultados, puedes monetizar tu conocimiento creando cursos, consultorías o mentoría.

**Requisitos:** Resultados propios documentados, audiencia mínima en TikTok.

**Modelo de negocio:**
- Clases gratuitas semanales para construir confianza y audiencia
- Curso de pago con acceso profundo
- Consultoría 1:1 para casos avanzados

**Ingresos:** Variable. Desde 1.000€ mensuales para creadores pequeños hasta 20.000€+ para expertos con comunidad consolidada.

## ¿Qué modelo elegir si empiezas en 2026?

**Si tienes 0 seguidores y 0 inversión:**
Empieza con contenido de producto para crecer a 1.500 seguidores → activa afiliados → añade Live Shopping cuando tengas soltura.

**Si tienes un producto o negocio propio:**
Abre tienda + activa afiliados desde el día 1 para que otros creadores también vendan por ti.

**Si ya tienes audiencia en TikTok:**
Activa afiliados inmediatamente. Con 1.000+ seguidores y contenido regular, puedes generar ingresos en días.

## La realidad de los ingresos pasivos en TikTok Shop

Una pregunta frecuente: ¿es posible generar ingresos pasivos con TikTok Shop?

La respuesta honesta: **semi-pasivos sí, 100% pasivos no**.

Los videos de afiliado que publicas hoy pueden generar ventas durante semanas o meses. Un video viral puede generarte comisiones pasivas durante mucho tiempo. Pero el ecosistema requiere actividad regular para mantener el alcance del algoritmo.

## Conclusión

En 2026, TikTok Shop ofrece más formas de monetización que nunca en el mercado hispano. La clave es elegir el modelo que se adapta a tu situación actual y escalar desde ahí.

Si quieres que te ayudemos a decidir qué modelo es el mejor para ti, ven a la clase del miércoles y lo analizamos en directo.
    `,
  },
}

const allPosts = { ...posts, ...postsAfiliados, ...postsAfiliados2, ...postsAfiliados3, ...postsCatAfiliados, ...postsVendedores, ...postsCatVendedores, ...postsCatLive, ...postsCatHerramientas, ...postsCatPaises, ...postsCatPaises2, ...postsCatEstrategia2 } as Record<string, typeof posts[keyof typeof posts]>

type Props = { params: { slug: string } }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = allPosts[params.slug]
  if (!post) return { title: 'Artículo no encontrado' }
  return {
    title: post.title,
    description: post.description,
    keywords: post.keywords,
    openGraph: {
      title: post.title,
      description: post.description,
      type: 'article',
      publishedTime: post.date,
    },
  }
}

export function generateStaticParams() {
  return Object.keys(allPosts).map((slug) => ({ slug }))
}

function renderContent(content: string): string {
  return content
    .replace(/!\[(.*?)\]\((.*?)\)/g, '<img src="$2" alt="$1" class="w-full rounded-xl my-6 shadow-md" loading="lazy" />')
    .replace(/&/g, '&amp;')
    .replace(/## (.*)/g, '<h2 class="text-2xl font-black text-gray-900 mt-10 mb-4">$1</h2>')
    .replace(/### (.*)/g, '<h3 class="text-xl font-bold text-gray-900 mt-6 mb-3">$1</h3>')
    .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
    .replace(/\*(.*?)\*/g, '<em>$1</em>')
    .replace(/✅ (.*)/g, '<li class="flex gap-2 items-start mb-1"><span class="text-green-500 flex-shrink-0">✅</span><span>$1</span></li>')
    .replace(/❌ (.*)/g, '<li class="flex gap-2 items-start mb-1"><span class="text-red-500 flex-shrink-0">❌</span><span>$1</span></li>')
    .replace(/^- (.*)/gm, '<li class="text-gray-700 mb-1 ml-4 list-disc">$1</li>')
    .replace(/^\| (.*) \|$/gm, (match) => {
      const cells = match.split('|').filter(c => c.trim() !== '')
      if (cells[0]?.trim().startsWith('---')) return ''
      const tag = match.includes('**') ? 'th' : 'td'
      return `<tr>${cells.map(c => `<${tag} class="border border-gray-200 px-3 py-2 text-sm">${c.trim()}</${tag}>`).join('')}</tr>`
    })
    .replace(/(<tr>.*<\/tr>\n?)+/gs, (table) => `<div class="overflow-x-auto my-6"><table class="w-full border-collapse border border-gray-200 rounded-lg overflow-hidden">${table}</table></div>`)
    .replace(/\n\n/g, '</p><p class="text-gray-700 leading-relaxed mb-4">')
    .replace(/^(?!<)(.+)$/gm, '<p class="text-gray-700 leading-relaxed mb-4">$1</p>')
}

export default function BlogPost({ params }: Props) {
  const post = allPosts[params.slug]
  if (!post) notFound()

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    dateModified: post.date,
    author: { '@type': 'Organization', name: 'TikTok Shop Academy' },
    publisher: { '@type': 'Organization', name: 'TikTok Shop Academy' },
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-sm text-gray-400 mb-8">
          <Link href="/" className="hover:text-brand-500">Inicio</Link>
          <span>›</span>
          <Link href="/blog" className="hover:text-brand-500">Blog</Link>
          <span>›</span>
          <span className="text-gray-600">{post.category}</span>
        </nav>

        {/* Cover image */}
        {post.coverImage && (
          <div className="mb-8 rounded-2xl overflow-hidden">
            <img src={post.coverImage} alt={post.coverAlt || post.title} className="w-full h-64 md:h-80 object-cover" />
          </div>
        )}

        {/* Header */}
        <header className="mb-10">
          <div className="flex items-center gap-3 mb-4">
            <span className="bg-brand-50 text-brand-600 text-sm font-bold px-3 py-1 rounded-full">{post.category}</span>
            <span className="text-gray-400 text-sm">{post.readTime} de lectura</span>
          </div>
          <div className="text-6xl mb-4">{post.emoji}</div>
          <h1 className="text-3xl md:text-4xl font-black text-gray-900 leading-tight mb-4">{post.title}</h1>
          <p className="text-xl text-gray-500 leading-relaxed">{post.description}</p>
          <div className="text-gray-400 text-sm mt-4">
            Actualizado: {new Date(post.date).toLocaleDateString('es-ES', { day: 'numeric', month: 'long', year: 'numeric' })}
          </div>
        </header>

        {/* Content */}
        <div
          className="mt-6"
          dangerouslySetInnerHTML={{ __html: renderContent(post.content) }}
        />

        {/* CTA clase gratuita dentro del artículo */}
        <div className="mt-12 bg-gradient-to-r from-green-500 to-emerald-600 rounded-2xl p-8 text-center text-white">
          <div className="text-4xl mb-3">📅</div>
          <h3 className="text-2xl font-black mb-3">Clase gratuita este miércoles a las 19h</h3>
          <p className="text-green-100 mb-6">
            Cada miércoles a las 19h (horario Madrid) damos una clase en directo sobre TikTok Shop.
            Únete al grupo de WhatsApp para recibir el enlace.
          </p>
          <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="bg-white text-green-600 font-bold py-3 px-8 rounded-xl hover:bg-green-50 transition-colors inline-block">
            💬 Unirme al grupo de WhatsApp →
          </a>
        </div>

        {/* Artículos relacionados */}
        <div className="mt-12">
          <h2 className="text-xl font-black text-gray-900 mb-6">Sigue aprendiendo</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {Object.entries(allPosts)
              .filter(([slug]) => slug !== params.slug)
              .slice(0, 4)
              .map(([slug, p]) => (
                <Link key={slug} href={`/blog/${slug}`} className="card p-5 group">
                  <div className="text-3xl mb-2">{p.emoji}</div>
                  <h3 className="font-bold text-gray-900 group-hover:text-brand-500 transition-colors text-sm leading-tight">{p.title}</h3>
                  <span className="text-brand-500 text-xs font-semibold mt-2 inline-block">Leer →</span>
                </Link>
              ))}
          </div>
        </div>
      </article>
    </>
  )
}
