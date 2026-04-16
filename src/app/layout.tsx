import type { Metadata } from 'next'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: {
    template: '%s | TikTok Shop Academia',
    default: 'TikTok Shop Academia — Aprende a Vender en TikTok Shop',
  },
  description:
    'El blog #1 en español sobre TikTok Shop. Aprende a crear tu tienda, ganar dinero como afiliado y dominar las ventas en TikTok Shop.',
  keywords: [
    'tiktok shop',
    'tiktok shop españa',
    'como vender en tiktok shop',
    'tiktok shop afiliado',
    'ganar dinero tiktok shop',
    'tiktok shop hispano',
  ],
  authors: [{ name: 'TikTok Shop Academia' }],
  creator: 'TikTok Shop Academia',
  openGraph: {
    type: 'website',
    locale: 'es_ES',
    siteName: 'TikTok Shop Academia',
  },
  twitter: {
    card: 'summary_large_image',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
