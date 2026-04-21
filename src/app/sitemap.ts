import { MetadataRoute } from 'next'
import { postsAfiliados } from './blog/data/posts-afiliados'
import { postsAfiliados2 } from './blog/data/posts-afiliados2'
import { postsAfiliados3 } from './blog/data/posts-afiliados3'
import { postsCatAfiliados } from './blog/data/posts-cat-afiliados'
import { postsVendedores } from './blog/data/posts-vendedores'
import { postsCatVendedores } from './blog/data/posts-cat-vendedores'
import { postsCatLive } from './blog/data/posts-cat-live'
import { postsCatHerramientas } from './blog/data/posts-cat-herramientas'
import { postsCatPaises } from './blog/data/posts-cat-paises'
import { postsCatPaises2 } from './blog/data/posts-cat-paises2'
import { postsCatEstrategia2 } from './blog/data/posts-cat-estrategia2'

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://tiktokshopacademy.co'

const staticSlugs = [
  { slug: 'que-es-tiktok-shop', date: '2026-01-10' },
  { slug: 'como-crear-tienda-tiktok-shop', date: '2026-01-15' },
  { slug: 'tiktok-shop-afiliado-guia-completa', date: '2026-01-20' },
  { slug: 'comisiones-tiktok-shop-2026', date: '2026-02-01' },
  { slug: 'live-shopping-tiktok-guia-completa', date: '2026-01-25' },
  { slug: 'productos-mas-vendidos-tiktok-shop-2026', date: '2026-02-10' },
  { slug: 'tiktok-shop-espana-guia-completa-2026', date: '2026-02-15' },
  { slug: 'tiktok-shop-mexico-guia-2026', date: '2026-02-20' },
  { slug: 'ganar-dinero-tiktok-shop-sin-seguidores', date: '2026-03-01' },
  { slug: 'tiktok-shop-vs-amazon-2026', date: '2026-03-05' },
  { slug: 'ia-tiktok-shop-2026', date: '2026-03-10' },
  { slug: 'errores-tiktok-shop-principiantes-2026', date: '2026-03-15' },
  { slug: 'como-ganar-dinero-tiktok-shop-todas-las-formas', date: '2026-03-20' },
]

const categorySlugs = [
  'empezar',
  'afiliados',
  'vendedores',
  'live-shopping',
  'herramientas',
  'paises',
]

export default function sitemap(): MetadataRoute.Sitemap {
  const allDataPosts = {
    ...postsAfiliados,
    ...postsAfiliados2,
    ...postsAfiliados3,
    ...postsCatAfiliados,
    ...postsVendedores,
    ...postsCatVendedores,
    ...postsCatLive,
    ...postsCatHerramientas,
    ...postsCatPaises,
    ...postsCatPaises2,
    ...postsCatEstrategia2,
  }

  const dynamicPages = Object.entries(allDataPosts).map(([slug, post]) => ({
    url: `${SITE_URL}/blog/${slug}`,
    lastModified: new Date(post.date),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }))

  const staticPages = staticSlugs.map(({ slug, date }) => ({
    url: `${SITE_URL}/blog/${slug}`,
    lastModified: new Date(date),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }))

  const categoryPages = categorySlugs.map((cat) => ({
    url: `${SITE_URL}/blog/categoria/${cat}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.7,
  }))

  return [
    { url: SITE_URL, lastModified: new Date(), changeFrequency: 'daily', priority: 1 },
    { url: `${SITE_URL}/blog`, lastModified: new Date(), changeFrequency: 'daily', priority: 0.9 },
    ...categoryPages,
    ...staticPages,
    ...dynamicPages,
  ]
}
