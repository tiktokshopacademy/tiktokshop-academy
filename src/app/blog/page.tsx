import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Blog TikTok Shop en Español 2026 — Guías, Tutoriales y Estrategias',
  description:
    'Artículos actualizados sobre TikTok Shop en 2026: cómo vender, programa de afiliados, Live Shopping, estrategias por país y todo lo que necesitas para ganar dinero en TikTok Shop.',
}

const WHATSAPP_LINK = 'https://semanal.tiktokshopacademy.es/registro?utm_source=blog'

const allPosts = [
  // --- EMPEZAR DESDE CERO: AFILIADOS ---
  {
    slug: 'como-empezar-tiktok-shop-afiliado-sin-dinero',
    title: 'Cómo Empezar en TikTok Shop como Afiliado sin Dinero en 2026',
    description: 'Guía completa para empezar en el programa de afiliados de TikTok Shop desde cero, sin inversión. Requisitos reales y primeros pasos.',
    category: 'Empezar desde cero',
    readTime: '10 min',
    emoji: '🚀',
    date: '2026-04-01',
  },
  {
    slug: 'como-llegar-1500-seguidores-tiktok-shop',
    title: 'Cómo Llegar a 1.500 Seguidores en TikTok para Activar TikTok Shop Afiliados',
    description: 'Estrategias probadas para conseguir los 1.500 seguidores necesarios para el programa de afiliados de TikTok Shop.',
    category: 'Empezar desde cero',
    readTime: '9 min',
    emoji: '📈',
    date: '2026-04-02',
  },
  {
    slug: 'cuanto-se-gana-afiliado-tiktok-shop',
    title: 'Cuánto se Gana como Afiliado de TikTok Shop en 2026: Cifras Reales',
    description: 'Datos reales sobre las ganancias del programa de afiliados de TikTok Shop en España y LatAm.',
    category: 'Empezar desde cero',
    readTime: '10 min',
    emoji: '💸',
    date: '2026-04-03',
  },
  {
    slug: 'como-elegir-productos-afiliado-tiktok-shop',
    title: 'Cómo Elegir los Mejores Productos para Promocionar como Afiliado de TikTok Shop',
    description: 'Sistema paso a paso para encontrar productos rentables como afiliado. Criterios de selección y categorías con mayor potencial en 2026.',
    category: 'Empezar desde cero',
    readTime: '11 min',
    emoji: '🔍',
    date: '2026-04-05',
  },
  {
    slug: 'plan-30-dias-primer-ingreso-afiliado-tiktok-shop',
    title: 'Plan de 30 Días para tu Primer Ingreso como Afiliado de TikTok Shop',
    description: 'Plan de acción día a día para generar tus primeros ingresos como afiliado de TikTok Shop en 30 días.',
    category: 'Empezar desde cero',
    readTime: '12 min',
    emoji: '📅',
    date: '2026-04-07',
  },
  {
    slug: 'tiktok-shop-es-gratis-costes-reales',
    title: '¿TikTok Shop es Gratis? Costes Reales para Afiliados y Vendedores 2026',
    description: 'Para afiliados: completamente gratis. Para vendedores: 9% de comisión sobre ventas. Desglose completo de todos los costes reales en España y comparativa con Amazon.',
    category: 'Empezar desde cero',
    readTime: '8 min',
    emoji: '💡',
    date: '2026-04-17',
  },
  {
    slug: 'como-activar-tiktok-shop-afiliados',
    title: 'Cómo Activar TikTok Shop Afiliados: Guía Paso a Paso 2026',
    description: 'Guía completa para activar el programa de afiliados de TikTok Shop en España. Requisitos, dónde se activa en la app, qué pasa si te rechazan y cómo empezar desde el primer día.',
    category: 'Empezar desde cero',
    readTime: '10 min',
    emoji: '✅',
    date: '2026-04-15',
  },
  {
    slug: 'como-retirar-dinero-tiktok-shop-afiliados',
    title: 'Cómo Retirar Dinero de TikTok Shop: Cobros y Pagos para Afiliados 2026',
    description: 'Cuándo paga TikTok Shop, métodos de cobro en España (SEPA, Wise, Payoneer), mínimo de retiro, plazos reales e impuestos.',
    category: 'Empezar desde cero',
    readTime: '9 min',
    emoji: '💳',
    date: '2026-04-16',
  },
  {
    slug: 'es-seguro-programa-afiliados-tiktok-shop',
    title: '¿Es Seguro el Programa de Afiliados de TikTok Shop? La Verdad en 2026',
    description: 'Análisis honesto sobre la seguridad y legitimidad del programa de afiliados de TikTok Shop.',
    category: 'Empezar desde cero',
    readTime: '8 min',
    emoji: '🔒',
    date: '2026-04-08',
  },
  {
    slug: 'afiliados-tiktok-shop-vs-otras-plataformas',
    title: 'Afiliados TikTok Shop vs Amazon vs Otras Plataformas: ¿Cuál Paga Más en 2026?',
    description: 'Comparativa completa de los programas de afiliados más importantes. Comisiones reales y cuál elegir según tu situación.',
    category: 'Empezar desde cero',
    readTime: '10 min',
    emoji: '⚖️',
    date: '2026-04-09',
  },
  // --- AFILIADOS ---
  {
    slug: 'mejores-categorias-productos-afiliado-tiktok-shop',
    title: 'Las Mejores Categorías de Productos para Afiliados de TikTok Shop en España 2026',
    description: 'Belleza lidera con el 40% de ventas, alimentación con el 26%. Datos reales para elegir tu nicho como afiliado de TikTok Shop en España.',
    category: 'Afiliados',
    readTime: '10 min',
    emoji: '🛍️',
    date: '2026-04-18',
  },
  {
    slug: 'como-crear-videos-que-venden-tiktok-shop-afiliado',
    title: 'Cómo Crear Videos que Venden en TikTok Shop: Guía para Afiliados 2026',
    description: 'Estructura probada para vídeos de TikTok Shop que convierten. Los primeros 3 segundos, el gancho, la demostración, el CTA y los errores que destruyen la conversión.',
    category: 'Afiliados',
    readTime: '12 min',
    emoji: '🎬',
    date: '2026-04-19',
  },
  {
    slug: 'vitrina-productos-tiktok-shop-afiliado',
    title: 'La Vitrina de Productos TikTok Shop: Qué es y Cómo Optimizarla como Afiliado',
    description: 'Cómo configurar y optimizar tu vitrina de afiliado en TikTok Shop para convertir visitas de perfil en ventas.',
    category: 'Afiliados',
    readTime: '8 min',
    emoji: '🪟',
    date: '2026-04-20',
  },
  {
    slug: 'como-escalar-ingresos-afiliado-tiktok-shop',
    title: 'Cómo Escalar tus Ingresos como Afiliado de TikTok Shop: de 0 a 1.000€/mes',
    description: 'El camino real por fases para pasar de cero a 1.000€ mensuales como afiliado. Métricas clave, errores que frenan el crecimiento y estrategias por etapa.',
    category: 'Afiliados',
    readTime: '13 min',
    emoji: '📈',
    date: '2026-04-21',
  },
  {
    slug: 'negociar-comisiones-tiktok-shop-afiliado',
    title: 'Cómo Negociar Comisiones más Altas con Vendedores de TikTok Shop',
    description: 'Las comisiones son negociables. Cómo identificar qué vendedores contactar, qué decirles y cómo conseguir hasta el doble de comisión estándar.',
    category: 'Afiliados',
    readTime: '9 min',
    emoji: '🤝',
    date: '2026-04-22',
  },
  // --- EMPEZAR DESDE CERO: VENDEDORES ---
  {
    slug: 'requisitos-tiktok-shop-espana-2026',
    title: 'Requisitos para Vender y ser Afiliado en TikTok Shop España 2026',
    description: 'Todos los requisitos actualizados para vender en TikTok Shop o activar el programa de afiliados en España.',
    category: 'Empezar desde cero',
    readTime: '8 min',
    emoji: '📋',
    date: '2026-04-10',
  },
  {
    slug: 'cuanto-cuesta-vender-tiktok-shop-comisiones',
    title: 'Cuánto Cobra TikTok Shop a los Vendedores: Comisiones y Costes Reales 2026',
    description: 'Desglose completo de todos los costes de vender en TikTok Shop en 2026. Comisiones por país y margen real.',
    category: 'Empezar desde cero',
    readTime: '9 min',
    emoji: '💰',
    date: '2026-04-11',
  },
  {
    slug: 'crear-tienda-tiktok-shop-tutorial-2026',
    title: 'Cómo Crear una Tienda en TikTok Shop: Tutorial Completo Paso a Paso 2026',
    description: 'Guía definitiva para abrir tu tienda en TikTok Shop desde el registro hasta publicar tu primer producto.',
    category: 'Empezar desde cero',
    readTime: '14 min',
    emoji: '🏪',
    date: '2026-04-12',
  },
  {
    slug: 'que-es-tiktok-shop',
    title: '¿Qué es TikTok Shop? Guía Completa 2026: Compradores, Vendedores y Afiliados',
    description: 'Todo sobre TikTok Shop en 2026: qué es, cómo funciona para compradores, vendedores y afiliados, y por qué el modelo de afiliado es la mayor oportunidad de negocio online del momento.',
    category: 'Guía básica',
    readTime: '14 min',
    emoji: '🎯',
    date: '2026-01-10',
  },
  {
    slug: 'como-crear-tienda-tiktok-shop',
    title: 'Cómo crear tu tienda en TikTok Shop paso a paso en 2026',
    description: 'Tutorial completo para abrir cuenta de vendedor. Requisitos actualizados, documentos y configuración para España y LatAm.',
    category: 'Tutorial',
    readTime: '13 min',
    emoji: '🏪',
    date: '2026-01-15',
  },
  {
    slug: 'tiktok-shop-afiliado-guia-completa',
    title: 'Programa de Afiliados de TikTok Shop 2026: Guía Completa',
    description: 'Requisitos reales, comisiones de hasta el 80%, cómo encontrar productos ganadores y cuánto se gana de verdad como afiliado.',
    category: 'Afiliados',
    readTime: '11 min',
    emoji: '💰',
    date: '2026-01-20',
  },
  {
    slug: 'comisiones-tiktok-shop-2026',
    title: 'Comisiones TikTok Shop 2026: Todo lo que Cambió en España y LatAm',
    description: 'TikTok subió sus comisiones al 9% en España en enero 2026. Qué significa y cómo aprovechar el período de incentivos para nuevos vendedores.',
    category: 'Novedades',
    readTime: '7 min',
    emoji: '📊',
    date: '2026-02-01',
  },
  {
    slug: 'live-shopping-tiktok-guia-completa',
    title: 'Live Shopping en TikTok Shop 2026: La Guía Definitiva',
    description: 'El formato que convierte 10 veces más. Setup, estructura, estrategias y cifras reales para hacer directos que venden.',
    category: 'Estrategia',
    readTime: '12 min',
    emoji: '🔴',
    date: '2026-01-25',
  },
  {
    slug: 'productos-mas-vendidos-tiktok-shop-2026',
    title: 'Los Productos Más Vendidos en TikTok Shop en 2026',
    description: 'Belleza, salud, moda y tecnología: análisis de las categorías con mayor GMV y qué vender o promocionar en 2026.',
    category: 'Productos',
    readTime: '11 min',
    emoji: '🛍️',
    date: '2026-02-10',
  },
  {
    slug: 'tiktok-shop-espana-guia-completa-2026',
    title: 'TikTok Shop en España 2026: Guía Completa para Empezar',
    description: 'Todo sobre TikTok Shop en España: registro, comisiones, fiscalidad (IVA, IRPF, VeriFactu) y estrategias específicas para el mercado español.',
    category: 'Por países',
    readTime: '10 min',
    emoji: '🇪🇸',
    date: '2026-02-15',
  },
  {
    slug: 'tiktok-shop-mexico-guia-2026',
    title: 'TikTok Shop en México 2026: Guía Completa',
    description: 'México fue el primer país de LatAm en lanzar TikTok Shop (febrero 2025). Requisitos, comisiones, estrategias locales y casos de éxito reales.',
    category: 'Por países',
    readTime: '9 min',
    emoji: '🇲🇽',
    date: '2026-02-20',
  },
  {
    slug: 'ganar-dinero-tiktok-shop-sin-seguidores',
    title: 'Cómo Ganar Dinero en TikTok Shop sin Tener Seguidores en 2026',
    description: 'Estrategias reales para empezar desde cero: Live Shopping, contenido viral, dropshipping y cómo llegar a los 1.000 seguidores rápido.',
    category: 'Estrategia',
    readTime: '10 min',
    emoji: '🚀',
    date: '2026-03-01',
  },
  {
    slug: 'tiktok-shop-vs-amazon-2026',
    title: 'TikTok Shop vs Amazon en 2026: ¿Dónde Vender?',
    description: 'Comparativa completa y actualizada. Comisiones, tráfico orgánico, barreras de entrada y cuándo elegir cada plataforma.',
    category: 'Comparativa',
    readTime: '10 min',
    emoji: '⚖️',
    date: '2026-03-05',
  },
  {
    slug: 'ia-tiktok-shop-2026',
    title: 'IA en TikTok Shop 2026: AI Dubbing, List with AI y Agentic Commerce',
    description: 'Las nuevas herramientas de inteligencia artificial de TikTok Shop que cambian cómo se crea contenido y se gestionan tiendas.',
    category: 'Herramientas IA',
    readTime: '8 min',
    emoji: '🤖',
    date: '2026-03-10',
  },
  {
    slug: 'errores-tiktok-shop-principiantes-2026',
    title: 'Los 10 Errores más Comunes en TikTok Shop en 2026',
    description: 'Los fallos que más cuestan tiempo y dinero a los principiantes, con soluciones prácticas para cada uno.',
    category: 'Estrategia',
    readTime: '9 min',
    emoji: '⚠️',
    date: '2026-03-15',
  },
  {
    slug: 'como-ganar-dinero-tiktok-shop-todas-las-formas',
    title: 'Todas las Formas de Ganar Dinero con TikTok Shop en 2026',
    description: 'Afiliados, tienda propia, Live Shopping, dropshipping y formación: guía completa de todos los modelos de monetización con cifras reales.',
    category: 'Ingresos',
    readTime: '12 min',
    emoji: '💸',
    date: '2026-03-20',
  },
  // --- VENDEDORES ---
  {
    slug: 'como-optimizar-tienda-tiktok-shop-vender-mas',
    title: 'Cómo Optimizar tu Tienda de TikTok Shop para Vender Más en 2026',
    description: 'Las optimizaciones que más impacto tienen en las ventas de una tienda TikTok Shop: fichas de producto, SEO interno, programa de afiliados y estrategia de precios.',
    category: 'Vendedores',
    readTime: '11 min',
    emoji: '📊',
    date: '2026-04-23',
  },
  {
    slug: 'primeras-ventas-tiktok-shop-nuevo-vendedor',
    title: 'Cómo Conseguir tus Primeras Ventas en TikTok Shop como Vendedor Nuevo',
    description: 'El plan de acción para los primeros 30 días como vendedor en TikTok Shop. Qué hacer exactamente para conseguir las primeras ventas sin experiencia previa.',
    category: 'Vendedores',
    readTime: '10 min',
    emoji: '🏁',
    date: '2026-04-24',
  },
  {
    slug: 'tiktok-shop-vendedor-usar-afiliados-para-vender',
    title: 'Cómo Usar Afiliados para Vender Más en TikTok Shop: Guía para Vendedores',
    description: 'El programa de afiliados de TikTok Shop es tu red de ventas gratuita. Cómo activarlo, qué comisiones ofrecer y cómo atraer a los mejores creadores para que vendan tus productos.',
    category: 'Vendedores',
    readTime: '9 min',
    emoji: '🤝',
    date: '2026-04-25',
  },
  // --- LIVE SHOPPING ---
  {
    slug: 'como-hacer-primer-live-shopping-tiktok-shop',
    title: 'Cómo Hacer tu Primer Live Shopping en TikTok Shop: Guía Completa 2026',
    description: 'Todo lo que necesitas para hacer tu primer directo de ventas en TikTok Shop: preparación, setup técnico, qué decir y cómo conseguir ventas desde el primer live.',
    category: 'Live Shopping',
    readTime: '12 min',
    emoji: '🔴',
    date: '2026-04-23',
  },
  {
    slug: 'estructura-live-shopping-tiktok-shop-vende',
    title: 'La Estructura de un Live Shopping que Vende: Guión y Fases para TikTok Shop',
    description: 'El guión probado para estructurar un directo de TikTok Shop que maximiza ventas. Las 6 fases del live, cómo gestionar objeciones en directo y los errores que arruinan la conversión.',
    category: 'Live Shopping',
    readTime: '11 min',
    emoji: '📋',
    date: '2026-04-24',
  },
  {
    slug: 'setup-tecnico-live-shopping-tiktok-shop',
    title: 'Setup Técnico para Live Shopping en TikTok Shop: Equipo y Configuración 2026',
    description: 'Qué equipo necesitas realmente para hacer directos que venden en TikTok Shop. Tres niveles de setup (básico, intermedio, profesional) con presupuesto real y qué marca la diferencia.',
    category: 'Live Shopping',
    readTime: '10 min',
    emoji: '🎥',
    date: '2026-04-25',
  },
  // --- HERRAMIENTAS IA ---
  {
    slug: 'tiktok-symphony-ia-crear-contenido-tiktok-shop',
    title: 'TikTok Symphony: La Suite de IA para Crear Contenido de TikTok Shop más Rápido',
    description: 'TikTok Symphony es la suite de inteligencia artificial de TikTok para creadores y vendedores. Qué herramientas incluye, cómo usarlas para TikTok Shop y qué hace realmente cada una.',
    category: 'Herramientas IA',
    readTime: '9 min',
    emoji: '🎵',
    date: '2026-04-23',
  },
  {
    slug: 'herramientas-ia-afiliados-tiktok-shop-2026',
    title: 'Las Mejores Herramientas de IA para Afiliados de TikTok Shop en 2026',
    description: 'Las herramientas de inteligencia artificial que usan los afiliados más productivos de TikTok Shop: para crear contenido, editar vídeos, encontrar tendencias y escalar sin trabajar el doble.',
    category: 'Herramientas IA',
    readTime: '10 min',
    emoji: '🤖',
    date: '2026-04-24',
  },
  // --- VENDEDORES / ESTRATEGIA ---
  {
    slug: 'tiktok-shop-dropshipping-guia-2026',
    title: 'TikTok Shop Dropshipping en España 2026: Guía Completa para Empezar',
    description: 'Cómo hacer dropshipping en TikTok Shop en España: proveedores con almacén en Europa, tiempos de envío obligatorios, margen real y comparativa con el modelo de afiliados.',
    category: 'Vendedores',
    readTime: '11 min',
    emoji: '📦',
    date: '2026-04-26',
  },
  // --- EMPEZAR DESDE CERO ---
  {
    slug: 'como-crecer-en-tiktok-para-tiktok-shop',
    title: 'Cómo Crecer en TikTok Rápido en 2026: Estrategia para Llegar a 1.500 Seguidores',
    description: 'La guía práctica para crecer en TikTok desde cero y llegar a los 1.500 seguidores necesarios para activar TikTok Shop afiliados. Algoritmo, formatos, horarios y errores frecuentes.',
    category: 'Empezar desde cero',
    readTime: '12 min',
    emoji: '📈',
    date: '2026-04-26',
  },
  // --- POR PAÍSES ---
  {
    slug: 'tiktok-shop-chile-guia-2026',
    title: 'TikTok Shop en Chile 2026: Estado Actual, Qué Puedes Hacer y Cómo Prepararte',
    description: 'TikTok Shop no está disponible aún en Chile. Qué sabemos de la expansión, qué puedes hacer hoy como creador o vendedor chileno y cómo prepararte para cuando llegue.',
    category: 'Por países',
    readTime: '8 min',
    emoji: '🇨🇱',
    date: '2026-04-25',
  },
  {
    slug: 'tiktok-shop-argentina-guia-2026',
    title: 'TikTok Shop en Argentina 2026: Estado Actual, Alternativas y Cómo Prepararse',
    description: 'TikTok Shop no está disponible en Argentina en 2026. Qué sabemos, por qué Argentina tiene un desafío particular, qué alternativas tienes hoy y cómo prepararte.',
    category: 'Por países',
    readTime: '8 min',
    emoji: '🇦🇷',
    date: '2026-04-25',
  },
  {
    slug: 'tiktok-shop-peru-guia-2026',
    title: 'TikTok Shop en Perú 2026: Estado Real, Qué Funciona Hoy y Cómo Prepararse',
    description: 'TikTok Shop no está disponible oficialmente en Perú. Estado real de la expansión, alternativas para creadores peruanos hoy y cómo prepararse para el lanzamiento.',
    category: 'Por países',
    readTime: '8 min',
    emoji: '🇵🇪',
    date: '2026-04-25',
  },
  // --- GUÍA BÁSICA ---
  {
    slug: 'tiktok-shop-devoluciones-reembolsos-guia',
    title: 'Devoluciones y Reembolsos en TikTok Shop: Guía Completa 2026',
    description: 'Cómo funcionan las devoluciones en TikTok Shop en España. Plazos, proceso paso a paso, quién paga el envío y qué hacer si hay disputa.',
    category: 'Guía básica',
    readTime: '9 min',
    emoji: '↩️',
    date: '2026-04-27',
  },
  // --- AFILIADOS ---
  {
    slug: 'como-encontrar-productos-virales-tiktok-shop',
    title: 'Cómo Encontrar Productos Virales en TikTok Shop: Método Paso a Paso 2026',
    description: 'El sistema que usan los mejores afiliados para encontrar productos ganadores antes que la competencia. Herramientas gratuitas, señales de viral y criterios de selección.',
    category: 'Afiliados',
    readTime: '11 min',
    emoji: '🔍',
    date: '2026-04-27',
  },
  {
    slug: 'tiktok-shop-brasil-guia-2026',
    title: 'TikTok Shop en Brasil 2026: El Mercado que Creció 26 Veces en 5 Meses',
    description: 'TikTok Shop llegó a Brasil en mayo de 2025 y multiplicó su GMV ×26 en 5 meses. Datos reales, cómo funciona y qué significa para el resto de LatAm.',
    category: 'Por países',
    readTime: '9 min',
    emoji: '🇧🇷',
    date: '2026-04-27',
  },
  // --- POR PAÍSES (anteriores) ---
  {
    slug: 'tiktok-shop-latam-paises-disponibles-2026',
    title: 'TikTok Shop en LatAm 2026: Qué Países lo Tienen y Cuándo Llega al Tuyo',
    description: 'Estado actualizado de TikTok Shop en cada país de América Latina en 2026. España y México ya activos, Colombia en expansión, Chile en beta, y qué países están en lista de espera.',
    category: 'Por países',
    readTime: '9 min',
    emoji: '🌎',
    date: '2026-04-23',
  },
  {
    slug: 'tiktok-shop-colombia-guia-2026',
    title: 'TikTok Shop en Colombia 2026: Estado Actual, Cómo Acceder y Prepararse',
    description: 'Estado actual de TikTok Shop en Colombia, cómo acceder si ya está disponible en tu zona, requisitos y cómo prepararte para el lanzamiento completo si aún no ha llegado a ti.',
    category: 'Por países',
    readTime: '8 min',
    emoji: '🇨🇴',
    date: '2026-04-24',
  },
]

export default function BlogPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Header */}
      <div className="mb-10 text-center">
        <h1 className="text-4xl font-black text-gray-900 mb-3">Blog TikTok Shop</h1>
        <p className="text-lg text-gray-500 max-w-2xl mx-auto">
          Guías completas y actualizadas para dominar TikTok Shop en el mercado hispano.
          Todo el contenido está basado en datos reales de 2026.
        </p>
      </div>

      {/* Clase gratuita banner */}
      <div className="mb-10 bg-green-50 border border-green-200 rounded-2xl p-6 flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left">
        <div className="text-4xl flex-shrink-0">📅</div>
        <div className="flex-1">
          <div className="font-black text-gray-900">Clase gratuita cada miércoles a las 19h (Madrid)</div>
          <div className="text-gray-600 text-sm">Únete al grupo de WhatsApp para recibir el enlace semanal.</div>
        </div>
        <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-5 rounded-xl transition-colors whitespace-nowrap flex-shrink-0 text-sm">
          💬 Unirme gratis
        </a>
      </div>

      {/* Post grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {allPosts.map((post) => (
          <Link key={post.slug} href={`/blog/${post.slug}`} className="card group p-6 flex flex-col gap-3">
            <div className="flex items-center justify-between">
              <span className="bg-brand-50 text-brand-600 text-xs font-bold px-3 py-1 rounded-full">{post.category}</span>
              <span className="text-gray-400 text-xs">{post.readTime}</span>
            </div>
            <div className="text-4xl">{post.emoji}</div>
            <h2 className="font-bold text-gray-900 text-lg leading-tight group-hover:text-brand-500 transition-colors">{post.title}</h2>
            <p className="text-gray-500 text-sm flex-1">{post.description}</p>
            <div className="flex items-center justify-between">
              <span className="text-gray-400 text-xs">{new Date(post.date).toLocaleDateString('es-ES', { day: 'numeric', month: 'long', year: 'numeric' })}</span>
              <span className="text-brand-500 font-semibold text-sm group-hover:translate-x-1 transition-transform inline-block">Leer →</span>
            </div>
          </Link>
        ))}
      </div>

      {/* CTA clase */}
      <div className="mt-16 bg-gradient-to-r from-green-500 to-emerald-600 rounded-2xl p-8 text-center text-white">
        <h2 className="text-2xl font-black mb-3">¿Quieres aprender en directo?</h2>
        <p className="text-green-100 mb-6">Clases gratuitas todos los miércoles a las 19h (Madrid). Casos reales, preguntas en vivo y estrategias actualizadas.</p>
        <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="bg-white text-green-600 font-bold py-3 px-8 rounded-xl hover:bg-green-50 transition-colors inline-block">
          💬 Unirme al grupo de WhatsApp
        </a>
      </div>
    </div>
  )
}
