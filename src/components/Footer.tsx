import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-2xl">🛒</span>
              <div>
                <span className="font-black text-white text-lg leading-none block">TikTok Shop Academy</span>
                <span className="text-brand-400 font-bold text-sm leading-none block">El blog #1 en español</span>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
              Todo lo que necesitas saber para triunfar en TikTok Shop: guías, tutoriales
              y clases gratuitas todos los miércoles a las 19h (Madrid).
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-white font-bold mb-4">Contenido</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/blog" className="hover:text-white transition-colors">Últimos artículos</Link></li>
              <li><Link href="/guias" className="hover:text-white transition-colors">Guías completas</Link></li>
              <li><Link href="/herramientas" className="hover:text-white transition-colors">Herramientas</Link></li>
              <li><Link href="/glosario" className="hover:text-white transition-colors">Glosario TikTok Shop</Link></li>
            </ul>
          </div>

          {/* Clases */}
          <div>
            <h3 className="text-white font-bold mb-4">Clases gratuitas</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="https://chat.whatsapp.com/ENLACE_AQUI" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                  📅 Miércoles 19h Madrid
                </a>
              </li>
              <li>
                <a href="https://chat.whatsapp.com/ENLACE_AQUI" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                  💬 Grupo de WhatsApp
                </a>
              </li>
              <li><Link href="/contacto" className="hover:text-white transition-colors">Contacto</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-10 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-gray-500">
          <p>© {new Date().getFullYear()} TikTok Shop Academy. Todos los derechos reservados.</p>
          <div className="flex gap-4">
            <Link href="/privacidad" className="hover:text-gray-300 transition-colors">Privacidad</Link>
            <Link href="/aviso-legal" className="hover:text-gray-300 transition-colors">Aviso Legal</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
