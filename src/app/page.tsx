import Link from 'next/link'
import type { Metadata } from 'next'
import { postsAfiliados } from './blog/data/posts-afiliados'
import { postsAfiliados2 } from './blog/data/posts-afiliados2'
import { postsAfiliados3 } from './blog/data/posts-afiliados3'
import { postsVendedores } from './blog/data/posts-vendedores'

export const metadata: Metadata = {
  title: 'TikTok Shop Academy — Aprende a Vender en TikTok Shop en Español',
  description:
    'Aprende a vender en TikTok Shop desde cero. Guías actualizadas 2026, estrategias probadas y clases gratuitas cada miércoles para el mercado hispano.',
}

const featuredPosts = [
  {
    slug: 'que-es-tiktok-shop',
    title: '¿Qué es TikTok Shop? Guía Completa 2026: Compradores, Vendedores y Afiliados',
    description: 'Qué es TikTok Shop, cómo funciona para cada perfil y por qué el modelo de afiliado es la mayor oportunidad de negocio online en 2026.',
    category: 'Guía básica',
    readTime: '14 min',
    emoji: '🎯',
  },
  {
    slug: 'como-crear-tienda-tiktok-shop',
    title: 'Cómo crear tu tienda en TikTok Shop paso a paso',
    description: 'Tutorial completo para abrir tu cuenta de vendedor. Requisitos actualizados, documentos y configuración inicial para España y LatAm.',
    category: 'Tutorial',
    readTime: '12 min',
    emoji: '🏪',
  },
  {
    slug: 'tiktok-shop-afiliado-guia-completa',
    title: 'Programa de Afiliados de TikTok Shop 2026: Gana sin tener productos',
    description: 'Cómo ganar comisiones de entre 5% y 80% promocionando productos. Requisitos reales, estrategias y cuánto se gana de verdad.',
    category: 'Afiliados',
    readTime: '10 min',
    emoji: '💰',
  },
  {
    slug: 'comisiones-tiktok-shop-2026',
    title: 'Comisiones TikTok Shop 2026: Cambios en España y LatAm',
    description: 'En enero 2026 TikTok subió sus comisiones del 5% al 9% en España. Te explicamos qué cambia y cómo aprovecharlo.',
    category: 'Novedades',
    readTime: '7 min',
    emoji: '📊',
  },
  {
    slug: 'live-shopping-tiktok-guia-completa',
    title: 'Live Shopping en TikTok: Convierte 10 veces más que una tienda normal',
    description: 'El Live Shopping es el formato que más vende en TikTok Shop. Aprende cómo hacerlo bien desde cero sin experiencia previa.',
    category: 'Estrategia',
    readTime: '9 min',
    emoji: '🔴',
  },
  {
    slug: 'productos-mas-vendidos-tiktok-shop-2026',
    title: 'Los productos más vendidos en TikTok Shop en 2026',
    description: 'Análisis de las categorías con mayor GMV: belleza, salud, moda y electrónica. Qué vender y por qué estos productos arrasan.',
    category: 'Productos',
    readTime: '11 min',
    emoji: '🛍️',
  },
]

const stats = [
  { value: '1.500M+', label: 'Usuarios activos en TikTok' },
  { value: '64.300M$', label: 'GMV global TikTok Shop en 2025' },
  { value: '10x', label: 'Más conversión con Live Shopping' },
  { value: '#1', label: 'Blog TikTok Shop en español' },
]

const staticPostCategories = [
  'Guía básica', 'Tutorial', 'Afiliados', 'Novedades', 'Estrategia',
  'Productos', 'Por países', 'Por países', 'Estrategia', 'Comparativa', 'Herramientas IA', 'Estrategia', 'Ingresos',
]

function countByCategory(categoryName: string): number {
  const fromData = [
    ...Object.values(postsAfiliados),
    ...Object.values(postsAfiliados2),
    ...Object.values(postsAfiliados3),
    ...Object.values(postsVendedores),
  ]
  const fromDataCount = fromData.filter((p) => p.category === categoryName).length
  const staticCount = staticPostCategories.filter((c) => c === categoryName).length
  return fromDataCount + staticCount
}

const categories = [
  { name: 'Empezar desde cero', emoji: '🚀', href: '/blog/categoria/empezar' },
  { name: 'Afiliados', emoji: '🤝', href: '/blog/categoria/afiliados' },
  { name: 'Vendedores', emoji: '🏪', href: '/blog/categoria/vendedores' },
  { name: 'Live Shopping', emoji: '🔴', href: '/blog/categoria/live-shopping' },
  { name: 'Herramientas IA', emoji: '🤖', href: '/blog/categoria/herramientas' },
  { name: 'Por países', emoji: '🌍', href: '/blog/categoria/paises' },
].map((cat) => ({ ...cat, count: countByCategory(cat.name) }))

const WHATSAPP_LINK = 'https://chat.whatsapp.com/ENLACE_AQUI'

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-20 md:py-28 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10"
          style={{ backgroundImage: 'radial-gradient(circle at 20% 50%, #f52d7c 0%, transparent 50%), radial-gradient(circle at 80% 50%, #00f2ea 0%, transparent 50%)' }}
        />
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative text-center">
          <div className="inline-flex items-center gap-2 bg-brand-500/20 border border-brand-500/30 rounded-full px-4 py-1.5 text-brand-300 text-sm font-medium mb-6">
            <span className="w-2 h-2 bg-brand-400 rounded-full animate-pulse"></span>
            El recurso #1 en español sobre TikTok Shop
          </div>
          <h1 className="text-4xl md:text-6xl font-black mb-6 leading-tight">
            Domina <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-400 to-pink-300">TikTok Shop</span><br />
            y empieza a ganar dinero
          </h1>
          <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed">
            Guías completas y actualizadas, estrategias probadas y
            <strong className="text-white"> clases gratuitas cada miércoles</strong> para
            triunfar en TikTok Shop en 2026.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/blog" className="btn-primary text-lg">
              📚 Leer el blog gratis
            </Link>
            <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="btn-secondary text-lg">
              📅 Clase gratis — Miércoles 19h
            </a>
          </div>
          <p className="text-gray-400 text-sm mt-4">Todos los miércoles a las 19h (horario Madrid) · Acceso por WhatsApp · Gratis</p>
        </div>
      </section>

      {/* STATS */}
      <section className="bg-brand-500 py-10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center text-white">
            {stats.map((stat) => (
              <div key={stat.value}>
                <div className="text-3xl md:text-4xl font-black mb-1">{stat.value}</div>
                <div className="text-brand-100 text-sm font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CLASE GRATUITA BANNER */}
      <section className="py-10 bg-green-50 border-y border-green-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center gap-6 text-center md:text-left">
          <div className="text-5xl flex-shrink-0">📅</div>
          <div className="flex-1">
            <h2 className="text-xl font-black text-gray-900 mb-1">Clase gratuita todos los miércoles a las 19h (Madrid)</h2>
            <p className="text-gray-600 text-sm">Únete a nuestro grupo de WhatsApp para recibir el enlace de cada clase. Analizamos casos reales, resolvemos dudas y compartimos estrategias actualizadas.</p>
          </div>
          <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-xl transition-colors whitespace-nowrap flex-shrink-0">
            💬 Unirme al grupo
          </a>
        </div>
      </section>

      {/* CATEGORIES */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-black text-gray-900 mb-2 text-center">Explora por categoría</h2>
          <p className="text-gray-500 text-center mb-8">Encuentra exactamente lo que necesitas</p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
            {categories.map((cat) => (
              <Link key={cat.name} href={cat.href} className="card p-4 text-center hover:scale-105 transition-transform">
                <div className="text-3xl mb-2">{cat.emoji}</div>
                <div className="font-semibold text-gray-800 text-sm leading-tight mb-1">{cat.name}</div>
                <div className="text-xs text-gray-400">{cat.count} artículos</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED POSTS */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-2xl md:text-3xl font-black text-gray-900">Artículos destacados</h2>
              <p className="text-gray-500 mt-1">Las guías más leídas por nuestra comunidad</p>
            </div>
            <Link href="/blog" className="text-brand-500 font-semibold hover:text-brand-600 hidden sm:block">Ver todos →</Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredPosts.map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`} className="card group p-6 flex flex-col gap-3">
                <div className="flex items-center justify-between">
                  <span className="bg-brand-50 text-brand-600 text-xs font-bold px-3 py-1 rounded-full">{post.category}</span>
                  <span className="text-gray-400 text-xs">{post.readTime} lectura</span>
                </div>
                <div className="text-4xl">{post.emoji}</div>
                <h3 className="font-bold text-gray-900 text-lg leading-tight group-hover:text-brand-500 transition-colors">{post.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed flex-1">{post.description}</p>
                <span className="text-brand-500 font-semibold text-sm group-hover:translate-x-1 transition-transform inline-block">Leer artículo →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CLASE CTA BANNER */}
      <section className="py-16 bg-gradient-to-r from-green-500 to-emerald-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <div className="text-5xl mb-4">📅</div>
          <h2 className="text-3xl md:text-4xl font-black mb-4">Clases gratuitas cada miércoles</h2>
          <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
            Todos los miércoles a las 19h (hora Madrid) damos una clase en directo sobre TikTok Shop.
            Gratis. Sin compromiso. Solo necesitas unirte al grupo de WhatsApp.
          </p>
          <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="bg-white text-green-600 font-bold py-4 px-8 rounded-xl hover:bg-green-50 transition-colors inline-block text-lg">
            💬 Quiero unirme al grupo de WhatsApp
          </a>
          <p className="text-green-200 text-sm mt-4">Más de 500 personas ya asisten a las clases</p>
        </div>
      </section>

      {/* EMAIL CAPTURE */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-black text-gray-900 mb-3">Recibe las mejores estrategias cada semana</h2>
          <p className="text-gray-500 mb-8">Únete a más de 3.000 personas que reciben nuestro newsletter con novedades y estrategias de TikTok Shop.</p>
          <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input type="email" placeholder="tu@email.com" className="flex-1 px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent" />
            <button type="submit" className="btn-primary whitespace-nowrap">Suscribirme gratis</button>
          </form>
          <p className="text-gray-400 text-xs mt-3">Sin spam. Cancela cuando quieras.</p>
        </div>
      </section>
    </>
  )
}
