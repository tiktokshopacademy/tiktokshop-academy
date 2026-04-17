import Link from 'next/link'
import type { Metadata } from 'next'
import { postsAfiliados } from '../../data/posts-afiliados'
import { postsAfiliados2 } from '../../data/posts-afiliados2'
import { postsVendedores } from '../../data/posts-vendedores'

const categoryMap: Record<string, { name: string; emoji: string; description: string }> = {
  empezar: {
    name: 'Empezar desde cero',
    emoji: '🚀',
    description: 'Guías para quienes empiezan en TikTok Shop sin experiencia previa. Requisitos, primeros pasos y cómo conseguir tus primeros ingresos.',
  },
  afiliados: {
    name: 'Afiliados',
    emoji: '🤝',
    description: 'Todo sobre el programa de afiliados de TikTok Shop: comisiones, estrategias, productos ganadores y cómo escalar tus ingresos.',
  },
  vendedores: {
    name: 'Vendedores',
    emoji: '🏪',
    description: 'Guías completas para vender en TikTok Shop: crear tienda, gestionar productos, logística y estrategias para aumentar ventas.',
  },
  'live-shopping': {
    name: 'Live Shopping',
    emoji: '🔴',
    description: 'Aprende a hacer directos que venden. Setup técnico, estructura de live, cómo presentar productos y cifras reales de conversión.',
  },
  herramientas: {
    name: 'Herramientas IA',
    emoji: '🤖',
    description: 'Las mejores herramientas de inteligencia artificial para TikTok Shop: creación de contenido, análisis de tendencias y automatización.',
  },
  paises: {
    name: 'Por países',
    emoji: '🌍',
    description: 'Guías específicas por país: España, México, Colombia, Argentina y más. Requisitos locales, comisiones y estrategias para cada mercado.',
  },
}

const staticPosts = [
  { slug: 'que-es-tiktok-shop', title: '¿Qué es TikTok Shop y cómo funciona en 2026?', description: 'Guía completa actualizada sobre TikTok Shop en España y LatAm.', category: 'Guía básica', readTime: '9 min', emoji: '🎯', date: '2026-01-10' },
  { slug: 'como-crear-tienda-tiktok-shop', title: 'Cómo crear tu tienda en TikTok Shop paso a paso en 2026', description: 'Tutorial completo para abrir cuenta de vendedor.', category: 'Tutorial', readTime: '13 min', emoji: '🏪', date: '2026-01-15' },
  { slug: 'tiktok-shop-afiliado-guia-completa', title: 'Programa de Afiliados de TikTok Shop 2026: Guía Completa', description: 'Requisitos reales, comisiones de hasta el 80% y cómo encontrar productos ganadores.', category: 'Afiliados', readTime: '11 min', emoji: '💰', date: '2026-01-20' },
  { slug: 'comisiones-tiktok-shop-2026', title: 'Comisiones TikTok Shop 2026: Todo lo que Cambió', description: 'TikTok subió sus comisiones al 9% en España en enero 2026.', category: 'Novedades', readTime: '7 min', emoji: '📊', date: '2026-02-01' },
  { slug: 'live-shopping-tiktok-guia-completa', title: 'Live Shopping en TikTok Shop 2026: La Guía Definitiva', description: 'El formato que convierte 10 veces más.', category: 'Estrategia', readTime: '12 min', emoji: '🔴', date: '2026-01-25' },
  { slug: 'productos-mas-vendidos-tiktok-shop-2026', title: 'Los Productos Más Vendidos en TikTok Shop en 2026', description: 'Belleza, salud, moda y tecnología: análisis de las categorías con mayor GMV.', category: 'Productos', readTime: '11 min', emoji: '🛍️', date: '2026-02-10' },
  { slug: 'tiktok-shop-espana-guia-completa-2026', title: 'TikTok Shop en España 2026: Guía Completa para Empezar', description: 'Todo sobre TikTok Shop en España: registro, comisiones, fiscalidad y estrategias.', category: 'Por países', readTime: '10 min', emoji: '🇪🇸', date: '2026-02-15' },
  { slug: 'tiktok-shop-mexico-guia-2026', title: 'TikTok Shop en México 2026: Guía Completa', description: 'México fue el primer país de LatAm en lanzar TikTok Shop (febrero 2025).', category: 'Por países', readTime: '9 min', emoji: '🇲🇽', date: '2026-02-20' },
  { slug: 'ganar-dinero-tiktok-shop-sin-seguidores', title: 'Cómo Ganar Dinero en TikTok Shop sin Tener Seguidores en 2026', description: 'Estrategias reales para empezar desde cero.', category: 'Estrategia', readTime: '10 min', emoji: '🚀', date: '2026-03-01' },
  { slug: 'tiktok-shop-vs-amazon-2026', title: 'TikTok Shop vs Amazon en 2026: ¿Dónde Vender?', description: 'Comparativa completa y actualizada.', category: 'Comparativa', readTime: '10 min', emoji: '⚖️', date: '2026-03-05' },
  { slug: 'ia-tiktok-shop-2026', title: 'IA en TikTok Shop 2026: AI Dubbing, List with AI y Agentic Commerce', description: 'Las nuevas herramientas de inteligencia artificial de TikTok Shop.', category: 'Herramientas IA', readTime: '8 min', emoji: '🤖', date: '2026-03-10' },
  { slug: 'errores-tiktok-shop-principiantes-2026', title: 'Los 10 Errores más Comunes en TikTok Shop en 2026', description: 'Los fallos que más cuestan tiempo y dinero a los principiantes.', category: 'Estrategia', readTime: '9 min', emoji: '⚠️', date: '2026-03-15' },
  { slug: 'como-ganar-dinero-tiktok-shop-todas-las-formas', title: 'Todas las Formas de Ganar Dinero con TikTok Shop en 2026', description: 'Afiliados, tienda propia, Live Shopping, dropshipping y formación.', category: 'Ingresos', readTime: '12 min', emoji: '💸', date: '2026-03-20' },
]

function getAllPosts() {
  const fromData = [
    ...Object.entries(postsAfiliados).map(([slug, p]) => ({ slug, title: p.title, description: p.description, category: p.category, readTime: p.readTime, emoji: p.emoji, date: p.date })),
    ...Object.entries(postsAfiliados2).map(([slug, p]) => ({ slug, title: p.title, description: p.description, category: p.category, readTime: p.readTime, emoji: p.emoji, date: p.date })),
    ...Object.entries(postsVendedores).map(([slug, p]) => ({ slug, title: p.title, description: p.description, category: p.category, readTime: p.readTime, emoji: p.emoji, date: p.date })),
  ]
  return [...staticPosts, ...fromData]
}

export async function generateMetadata({ params }: { params: { categoria: string } }): Promise<Metadata> {
  const cat = categoryMap[params.categoria]
  if (!cat) return { title: 'Categoría no encontrada' }
  return {
    title: `${cat.name} — TikTok Shop Academy`,
    description: cat.description,
  }
}

export function generateStaticParams() {
  return Object.keys(categoryMap).map((categoria) => ({ categoria }))
}

export default function CategoriaPage({ params }: { params: { categoria: string } }) {
  const cat = categoryMap[params.categoria]

  if (!cat) {
    return (
      <div className="max-w-6xl mx-auto px-4 py-24 text-center">
        <h1 className="text-3xl font-black text-gray-900 mb-4">Categoría no encontrada</h1>
        <Link href="/blog" className="text-brand-500 font-semibold hover:underline">← Volver al blog</Link>
      </div>
    )
  }

  const allPosts = getAllPosts()
  const posts = allPosts.filter((p) => p.category === cat.name).sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Header */}
      <div className="mb-10">
        <Link href="/blog" className="text-gray-400 hover:text-brand-500 text-sm font-medium transition-colors">
          ← Todos los artículos
        </Link>
        <div className="mt-4 flex items-center gap-3">
          <span className="text-5xl">{cat.emoji}</span>
          <div>
            <h1 className="text-4xl font-black text-gray-900">{cat.name}</h1>
            <p className="text-gray-500 mt-1 max-w-2xl">{cat.description}</p>
          </div>
        </div>
        <div className="mt-4 text-sm text-gray-400">{posts.length} artículo{posts.length !== 1 ? 's' : ''}</div>
      </div>

      {posts.length === 0 ? (
        <div className="text-center py-16 bg-gray-50 rounded-2xl">
          <div className="text-5xl mb-4">✍️</div>
          <h2 className="text-xl font-bold text-gray-700 mb-2">Artículos en preparación</h2>
          <p className="text-gray-500 mb-6">Estamos creando contenido para esta categoría. Vuelve pronto.</p>
          <Link href="/blog" className="text-brand-500 font-semibold hover:underline">Ver todos los artículos →</Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post) => (
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
      )}
    </div>
  )
}
