import { MetadataRoute } from 'next'

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://tiktokshopacademy.com'

const blogSlugs = [
  'que-es-tiktok-shop',
  'como-crear-tienda-tiktok-shop',
  'tiktok-shop-afiliado-guia-completa',
  'comisiones-tiktok-shop-2026',
  'live-shopping-tiktok-guia-completa',
  'productos-mas-vendidos-tiktok-shop-2026',
  'tiktok-shop-espana-guia-completa-2026',
  'tiktok-shop-mexico-guia-2026',
  'ganar-dinero-tiktok-shop-sin-seguidores',
  'tiktok-shop-vs-amazon-2026',
  'ia-tiktok-shop-2026',
  'errores-tiktok-shop-principiantes-2026',
  'como-ganar-dinero-tiktok-shop-todas-las-formas',
]

export default function sitemap(): MetadataRoute.Sitemap {
  const blogPages = blogSlugs.map((slug) => ({
    url: `${SITE_URL}/blog/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }))

  return [
    { url: SITE_URL, lastModified: new Date(), changeFrequency: 'daily', priority: 1 },
    { url: `${SITE_URL}/blog`, lastModified: new Date(), changeFrequency: 'daily', priority: 0.9 },
    ...blogPages,
  ]
}
