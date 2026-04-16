'use client'
import Link from 'next/link'
import { useState } from 'react'

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-gray-100 shadow-sm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <span className="text-2xl">🛒</span>
            <div>
              <span className="font-black text-gray-900 text-lg leading-none block">TikTok Shop</span>
              <span className="text-brand-500 font-bold text-sm leading-none block">Academy</span>
            </div>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-6">
            <Link href="/blog" className="text-gray-600 hover:text-brand-500 font-medium transition-colors">
              Blog
            </Link>
            <a href="https://chat.whatsapp.com/ENLACE_AQUI" target="_blank" rel="noopener noreferrer" className="btn-primary py-2 px-5 text-sm">
              📅 Clase gratis — Miércoles 19h
            </a>
          </nav>

          {/* Mobile hamburger */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-gray-100"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menú"
          >
            <div className="w-5 h-0.5 bg-gray-700 mb-1"></div>
            <div className="w-5 h-0.5 bg-gray-700 mb-1"></div>
            <div className="w-5 h-0.5 bg-gray-700"></div>
          </button>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="md:hidden py-4 border-t border-gray-100 flex flex-col gap-3">
            <Link href="/blog" className="text-gray-600 font-medium px-2 py-1" onClick={() => setMenuOpen(false)}>Blog</Link>
            <a href="https://chat.whatsapp.com/ENLACE_AQUI" target="_blank" rel="noopener noreferrer" className="btn-primary text-center text-sm" onClick={() => setMenuOpen(false)}>📅 Clase gratis — Miércoles 19h</a>
          </div>
        )}
      </div>
    </header>
  )
}
