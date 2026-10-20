import type { ReactNode } from "react"
import { Link } from "react-router"
import { ChevronRight } from "lucide-react"
import BookCard from "@/components/BookCard"
import CardCarousel from "@/components/CardCarousel"
import CourseCard from "@/components/CourseCard"
import HeroCarousel from "@/components/HeroCarousel"
import Marquee from "@/components/Marquee"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import {
  DOCENTES_URL, books, bookHref, convenios, cursos, docenteUrl, docentes, pasantias, testimonioRows,
} from "@/data/site"
import { usePageTitle } from "@/lib/usePageTitle"

function Section({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <section className={`overflow-hidden ${className}`}>
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-8 md:py-16">{children}</div>
    </section>
  )
}

function Heading({ title, subtitle, href }: { title: string; subtitle?: string; href?: string }) {
  return (
    <div className="mx-auto mb-10 max-w-2xl text-center">
      <h2 className="text-3xl font-bold">
        {href ? <Link to={href} className="hover:text-brand-coral">{title}</Link> : title}
      </h2>
      {subtitle && <p className="mt-2 text-brand-slate">{subtitle}</p>}
    </div>
  )
}

export default function Home() {
  usePageTitle("Inicio | APECC - Asociación Peruana de Ciencias Jurídicas y Conciliación")
  const destacados = books.filter((b) => b.slug)

  return (
    <>
      <HeroCarousel />

      <Section>
        <Heading title="Nuestras pasantías" subtitle="Extiende tu carrera y sigue aprendiendo." href="/diplomados" />
        <CardCarousel>{pasantias.map((c) => <CourseCard key={c.title} course={c} />)}</CardCarousel>
      </Section>

      <Section>
        <Heading title="Cursos de actualización" subtitle="Desarrolla nuevas habilidades." href="/cursos-especializados" />
        <CardCarousel>{cursos.map((c) => <CourseCard key={c.title} course={c} />)}</CardCarousel>
      </Section>

      {/* Librería */}
      <section id="libreria" className="border-y bg-white">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-8 md:py-16">
          <div className="mx-auto mb-10 max-w-3xl text-center">
            <Badge variant="secondary" className="mb-3 rounded-full px-3 py-1">Editorial Jurídica APECC</Badge>
            <h2 className="text-3xl font-bold">Librería Jurídica Especializada</h2>
            <p className="mt-2 text-lg text-brand-slate">
              Obras doctrinarias, manuales prácticos y tratados de litigación oral del Dr. Oscar Peña Gonzáles y destacados juristas.
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {destacados.map((b) => <BookCard key={b.id} book={b} href={bookHref(b, "producto")} />)}
          </div>
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            <Button asChild size="lg" className="rounded-full px-8"><Link to="/libreria">Ver catálogo completo en la librería</Link></Button>
            <Button asChild size="lg" variant="outline" className="rounded-full px-8">
              <a href="https://apecc.com.pe/noticias/tienda/" target="_blank" rel="noreferrer">Tienda virtual oficial</a>
            </Button>
          </div>
        </div>
      </section>

      {/* Convenios */}
      <section id="convenios" className="bg-muted">
        <div className="mx-auto max-w-5xl px-4 py-10 sm:px-8">
          <h3 className="mb-4 text-center text-sm font-semibold">
            <Link to="/convenios" className="hover:text-brand-coral">Nuestros convenios</Link>
          </h3>
          <CardCarousel itemClassName="basis-2/3 sm:basis-1/3 lg:basis-1/4">
            {convenios.map((c) => (
              <Link key={c.name} to="/convenios" className="flex items-center justify-center py-3">
                <img src={c.src} alt={c.name} loading="lazy" className="h-28 w-full object-contain" />
              </Link>
            ))}
          </CardCarousel>
        </div>
      </section>

      {/* Equipo */}
      <Section>
        <div className="mx-auto mb-10 max-w-xl text-center">
          <span className="text-sm font-semibold text-brand-slate">Nuestro equipo</span>
          <h2 className="text-3xl font-bold">Confía en nuestros ponentes</h2>
        </div>
        <CardCarousel>
          {[
            ...docentes.map((d) => (
              <div key={d.slug} className="pt-2">
                <img src={d.image} alt={d.name} loading="lazy" className="h-80 w-full rounded-lg object-cover object-top" />
                <Card className="relative z-10 -mt-14 mx-3 gap-0 py-0 text-center shadow-sm">
                  <div className="p-4">
                    <h3 className="font-semibold">{d.name}</h3>
                    <p className="text-sm font-semibold text-brand-slate">{d.role}</p>
                  </div>
                  <div className="border-t p-4">
                    <p className="line-clamp-6 text-sm text-muted-foreground">{d.bio}</p>
                    <a href={docenteUrl(d.slug)} target="_blank" rel="noreferrer"
                       className="mt-2 inline-flex items-center text-sm font-semibold hover:text-brand-coral">
                      Ver perfil docente <ChevronRight className="size-4" />
                    </a>
                  </div>
                </Card>
              </div>
            )),
            <Card key="mas" className="h-full min-h-[480px] items-center justify-center bg-muted p-8 text-center">
              <h3 className="text-xl font-semibold">Plana docente APECC</h3>
              <p className="my-4 text-sm text-muted-foreground">
                Conoce a todos los juristas, jueces y fiscales que integran nuestra plana académica.
              </p>
              <Button asChild><a href={DOCENTES_URL} target="_blank" rel="noreferrer">Ver todos los ponentes <ChevronRight /></a></Button>
            </Card>,
          ]}
        </CardCarousel>
        <div className="mt-4 text-center">
          <Link to="/ponentes" className="inline-flex items-center text-sm font-semibold hover:text-brand-coral">
            Encuentra tu ponente favorito <ChevronRight className="size-4" />
          </Link>
        </div>
      </Section>

      {/* Testimonios */}
      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-8">
        <div className="mx-auto mb-8 max-w-2xl text-center">
          <Badge variant="secondary" className="mb-2 bg-brand-cream text-brand-navy">Comunidad APECC</Badge>
          <h2 className="text-3xl font-extrabold text-brand-navy">Testimonios de nuestros estudiantes</h2>
          <p className="mt-2 text-sm text-brand-slate">
            Experiencias reales de egresados de nuestros cursos especializados, diplomados y pasantías internacionales.
          </p>
        </div>
        <div className="flex flex-col gap-5 py-2">
          {testimonioRows.map((r, i) => <Marquee key={i} images={r.images} duration={r.duration} reverse={r.reverse} />)}
        </div>
      </section>

      {/* Features + CTA */}
      <section className="bg-muted">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 py-16 sm:px-8 lg:grid-cols-2">
          <div>
            <h2 className="mb-4 text-4xl font-bold">Donde quiera que estés, no pares de aprender</h2>
            <p className="mb-4 text-brand-slate">
              Capacítate con cursos especializados y diplomados diseñados para impulsar tu desarrollo profesional.
              Empieza ahora y adquiere las habilidades necesarias para acceder a mejores oportunidades laborales.
            </p>
            <p className="text-brand-slate">
              Disfruta una experiencia única con ponentes expertos que brindan educación de calidad, respaldada por una
              plataforma disponible las 24 horas del día, los 7 días de la semana.
            </p>
          </div>
          <div className="relative mx-auto h-[30rem] w-full max-w-md">
            <img src="/images/aprender1.webp" alt="" className="absolute right-6 top-0 size-40 rounded-full object-cover" />
            <img src="/images/aprender3.webp" alt="" className="absolute left-0 top-20 size-48 rounded-full object-cover" />
            <img src="/images/aprender2.webp" alt="" className="absolute bottom-0 right-0 size-64 rounded-full object-cover" />
            <span className="absolute left-4 top-0 size-24 rounded-full border-[20px] border-blue-500" />
            <span className="absolute right-52 top-44 size-6 rounded-full bg-teal-400" />
            <span className="absolute right-4 top-32 size-12 rounded-full bg-amber-400" />
          </div>
        </div>
        <div className="pb-16 text-center">
          <h2 className="text-3xl font-bold">Empieza a aprender sin límites</h2>
          <p className="mb-5 mt-2">Accede a todos nuestros cursos <strong className="text-brand-coral">gratis</strong> y no pares de aprender.</p>
          <Button asChild size="lg"><a href="#">Explorar todos los cursos</a></Button>
        </div>
      </section>
    </>
  )
}
