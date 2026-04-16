import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Curso de TikTok Shop — De 0 a Ingresos Reales en Semanas',
  description:
    'El curso más completo de TikTok Shop en español. Aprende a vender, usar el programa de afiliados y escalar tus ingresos con TikTok Shop desde cero.',
}

const modules = [
  {
    number: '01',
    title: 'Fundamentos de TikTok Shop',
    lessons: ['Qué es TikTok Shop y por qué ahora', 'Cómo funciona el algoritmo', 'Crear y optimizar tu cuenta', 'Tipos de cuenta: vendedor vs afiliado'],
  },
  {
    number: '02',
    title: 'El Programa de Afiliados',
    lessons: ['Cómo registrarte como afiliado', 'Encontrar productos ganadores', 'Analizar comisiones y conversiones', 'Solicitar muestras gratuitas'],
  },
  {
    number: '03',
    title: 'Crear Contenido que Vende',
    lessons: ['Estructura de videos que convierten', 'Hooks que detienen el scroll', 'Edición rápida y efectiva', 'La estrategia del video en 3 actos'],
  },
  {
    number: '04',
    title: 'TikTok LIVE Shopping',
    lessons: ['Setup técnico para directos', 'Cómo presentar productos en vivo', 'Tácticas de urgencia y escasez', 'Monetizar sin seguidores'],
  },
  {
    number: '05',
    title: 'Escalar a Vendedor',
    lessons: ['Abrir tu tienda en TikTok Shop', 'Proveedores y dropshipping', 'Gestión de pedidos y devoluciones', 'Publicidad en TikTok Ads'],
  },
  {
    number: '06',
    title: 'Automatización y Escala',
    lessons: ['Herramientas de automatización', 'Delegar y externalizar tareas', 'Construir un equipo', 'De side hustle a negocio real'],
  },
]

const testimonials = [
  {
    name: 'Carlos M.',
    location: 'Madrid, España',
    text: 'En mi primer mes como afiliado generé 847€. Antes del curso no sabía ni qué era TikTok Shop.',
    result: '847€ en el primer mes',
    emoji: '🇪🇸',
  },
  {
    name: 'Ana R.',
    location: 'México DF',
    text: 'El módulo de LIVE Shopping cambió todo. Ahora hago 2-3 directos por semana y cada uno genera entre 200 y 500 dólares.',
    result: '500$/directo en promedio',
    emoji: '🇲🇽',
  },
  {
    name: 'Diego F.',
    location: 'Buenos Aires, Argentina',
    text: 'Empecé sin seguidores. Con las estrategias del curso llegué a 10.000 seguidores en 45 días y el programa de afiliados ya me paga más que mi trabajo.',
    result: '0 → 10K seguidores en 45 días',
    emoji: '🇦🇷',
  },
  {
    name: 'Sofía L.',
    location: 'Colombia',
    text: 'La parte de encontrar productos ganadores es oro puro. El método que enseñan no lo encontrarás en ningún otro sitio.',
    result: '3 productos virales en 2 meses',
    emoji: '🇨🇴',
  },
]

const faqs = [
  {
    q: '¿Necesito tener seguidores para empezar?',
    a: 'No. En el curso aprenderás estrategias específicas para generar ventas sin audiencia previa. De hecho, muchos de nuestros mejores alumnos empezaron desde cero.',
  },
  {
    q: '¿Es necesario tener productos propios?',
    a: 'No. El programa de afiliados de TikTok Shop te permite ganar comisiones promocionando productos de otros vendedores. Es el camino que recomendamos para empezar.',
  },
  {
    q: '¿Funciona en todos los países de habla hispana?',
    a: 'TikTok Shop está disponible en España y en la mayoría de países de Latinoamérica. En el curso cubrimos las particularidades de cada mercado.',
  },
  {
    q: '¿Cuánto tiempo necesito dedicarle?',
    a: 'Con 1-2 horas diarias es suficiente para empezar a ver resultados. El curso está diseñado para personas con empleos o negocios que quieren un ingreso extra.',
  },
  {
    q: '¿Hay soporte después de comprar?',
    a: 'Sí. Tendrás acceso a nuestra comunidad privada donde puedes hacer preguntas y hay sesiones de preguntas en vivo cada dos semanas.',
  },
]

export default function CursoPage() {
  return (
    <>
      {/* HERO */}
      <section className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-20 md:py-28 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10"
          style={{ backgroundImage: 'radial-gradient(circle at 20% 50%, #f52d7c 0%, transparent 50%), radial-gradient(circle at 80% 50%, #00f2ea 0%, transparent 50%)' }}
        />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative text-center">
          <div className="inline-flex items-center gap-2 bg-yellow-500/20 border border-yellow-500/30 rounded-full px-4 py-1.5 text-yellow-300 text-sm font-medium mb-6">
            🔥 Más de 500 alumnos ya están generando ingresos
          </div>
          <h1 className="text-4xl md:text-6xl font-black mb-6 leading-tight">
            De 0 a Ingresos Reales<br />con <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-400 to-pink-300">TikTok Shop</span>
          </h1>
          <p className="text-xl text-gray-300 mb-4 max-w-2xl mx-auto">
            El curso más completo en español para dominar TikTok Shop como afiliado o vendedor.
            Sin experiencia previa. Sin inversión inicial. Sin excusas.
          </p>
          <p className="text-brand-300 font-bold mb-10">
            ✓ Acceso inmediato  ✓ Actualizaciones incluidas  ✓ Comunidad privada
          </p>
          <div className="bg-white/10 backdrop-blur rounded-2xl p-8 max-w-md mx-auto">
            <div className="text-gray-400 line-through text-lg mb-1">Precio normal: 297€</div>
            <div className="text-5xl font-black text-white mb-2">197€</div>
            <div className="text-brand-300 text-sm font-bold mb-6">Pago único • Acceso de por vida</div>
            <a href="#comprar" className="btn-primary w-full text-lg block">
              🚀 Quiero acceder ahora
            </a>
            <p className="text-gray-400 text-xs mt-3">Garantía de devolución de 30 días</p>
          </div>
        </div>
      </section>

      {/* PARA QUIÉN ES */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-black text-center text-gray-900 mb-10">Este curso es para ti si...</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              'Quieres generar ingresos extra sin dejar tu trabajo actual',
              'No tienes productos propios pero quieres vender online',
              'Ya intentaste con TikTok pero no sabes cómo monetizar',
              'Ves que otros ganan con TikTok Shop y no sabes por dónde empezar',
              'Tienes una tienda online y quieres abrir un canal de ventas nuevo',
              'Quieres construir un negocio digital que funcione a largo plazo',
            ].map((item) => (
              <div key={item} className="flex items-start gap-3 bg-white rounded-xl p-4 shadow-sm">
                <span className="text-green-500 text-xl flex-shrink-0">✅</span>
                <span className="text-gray-700 font-medium">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TEMARIO */}
      <section id="temario" className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-black text-center text-gray-900 mb-3">Temario completo</h2>
          <p className="text-center text-gray-500 mb-10">6 módulos con más de 40 lecciones en video</p>
          <div className="space-y-4">
            {modules.map((mod) => (
              <div key={mod.number} className="card p-6">
                <div className="flex items-start gap-4">
                  <div className="text-brand-500 font-black text-2xl w-10 flex-shrink-0">{mod.number}</div>
                  <div className="flex-1">
                    <h3 className="font-bold text-gray-900 text-lg mb-3">{mod.title}</h3>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
                      {mod.lessons.map((lesson) => (
                        <li key={lesson} className="flex items-center gap-2 text-sm text-gray-600">
                          <span className="text-brand-400">▶</span>
                          {lesson}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIOS */}
      <section id="testimonios" className="py-16 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-black text-center text-gray-900 mb-3">Lo que dicen nuestros alumnos</h2>
          <p className="text-center text-gray-500 mb-10">Resultados reales de personas reales</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {testimonials.map((t) => (
              <div key={t.name} className="card p-6">
                <div className="bg-green-50 text-green-700 font-bold text-sm px-3 py-1.5 rounded-lg inline-block mb-4">
                  🏆 {t.result}
                </div>
                <p className="text-gray-700 mb-4 italic">"{t.text}"</p>
                <div className="flex items-center gap-2">
                  <span className="text-2xl">{t.emoji}</span>
                  <div>
                    <div className="font-bold text-gray-900">{t.name}</div>
                    <div className="text-gray-400 text-sm">{t.location}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-black text-center text-gray-900 mb-10">Preguntas frecuentes</h2>
          <div className="space-y-4">
            {faqs.map((faq) => (
              <div key={faq.q} className="card p-6">
                <h3 className="font-bold text-gray-900 mb-2">{faq.q}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section id="comprar" className="py-20 bg-gradient-to-br from-gray-900 to-gray-800">
        <div className="max-w-2xl mx-auto px-4 text-center text-white">
          <div className="text-5xl mb-4">🎓</div>
          <h2 className="text-3xl md:text-4xl font-black mb-4">
            ¿Listo para empezar?
          </h2>
          <p className="text-gray-300 mb-8 text-lg">
            Únete a más de 500 personas que ya están generando ingresos con TikTok Shop.
          </p>
          <div className="bg-white/10 backdrop-blur rounded-2xl p-8">
            <div className="text-gray-400 line-through mb-1">297€</div>
            <div className="text-5xl font-black text-white mb-2">197€</div>
            <div className="text-brand-300 font-bold mb-6">Pago único • Acceso de por vida • Actualizaciones incluidas</div>
            <button className="btn-primary w-full text-xl py-5">
              🚀 Acceder al curso ahora
            </button>
            <div className="flex items-center justify-center gap-6 mt-6 text-gray-400 text-sm">
              <span>🔒 Pago seguro</span>
              <span>↩️ 30 días de garantía</span>
              <span>⚡ Acceso inmediato</span>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
