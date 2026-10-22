import { useState } from "react"
import { Link, useParams, Navigate } from "react-router"
import {
  Award,
  BookOpen,
  ChevronRight,
  GraduationCap,
  Laptop,
  MessageCircle,
  ShieldCheck,
  ShoppingCart,
} from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  cursos,
  pasantias,
  waLink,
  WA_PASANTIAS,
  type Course,
} from "@/data/site"
import { cn } from "@/lib/utils"
import { usePageTitle } from "@/lib/usePageTitle"

/* ───────── Todos los programas ───────── */
const ALL_PROGRAMS = [...pasantias, ...cursos]

const getRelated = (course: Course) =>
  ALL_PROGRAMS.filter(
    (c) => c.id !== course.id && (c.category === course.category || c.badgeTone === course.badgeTone)
  ).slice(0, 4)

/* ───────── Badge tones ───────── */
const toneClass = {
  red: "bg-red-600",
  green: "bg-emerald-600",
  navy: "bg-brand-navy",
} as const

/* ───────── Accordion ───────── */
function Accordion({
  items,
  openFirst = false,
}: {
  items: { title: string; body: React.ReactNode }[]
  openFirst?: boolean
}) {
  const [open, setOpen] = useState(openFirst ? 0 : -1)
  return (
    <div className="divide-y divide-brand-navy/10 border-y border-brand-navy/10">
      {items.map((it, i) => {
        const isOpen = open === i
        return (
          <div key={it.title}>
            <button
              type="button"
              aria-expanded={isOpen}
              onClick={() => setOpen(isOpen ? -1 : i)}
              className="flex w-full items-center justify-between py-4 text-left font-medium text-brand-navy"
            >
              {it.title}
              <span className="text-brand-slate" aria-hidden>{isOpen ? "−" : "+"}</span>
            </button>
            {isOpen && <div className="pb-4 text-sm text-brand-slate">{it.body}</div>}
          </div>
        )
      })}
    </div>
  )
}

/* ───────── Gallery ───────── */
function Gallery({ course }: { course: Course }) {
  return (
    <div className="relative aspect-square w-full overflow-hidden rounded-xl bg-brand-cream">
      <img
        src={course.image}
        alt={course.title}
        className="absolute inset-0 size-full object-contain p-6"
      />
      <span
        className={cn(
          "absolute left-4 top-4 rounded-full px-3 py-1 text-xs font-medium text-white",
          toneClass[course.badgeTone]
        )}
      >
        {course.badge}
      </span>

      {/* Meta badges en la imagen */}
      <div className="absolute bottom-4 left-4 right-4 flex flex-wrap gap-2">
        {course.meta.map(({ icon: Icon, text }) => (
          <span
            key={text}
            className="inline-flex items-center gap-1.5 rounded-full bg-white/90 px-3 py-1.5 text-xs font-medium text-brand-navy shadow-sm backdrop-blur-sm"
          >
            <Icon className="size-3.5" /> {text}
          </span>
        ))}
      </div>
    </div>
  )
}

/* ───────── BuyBox ───────── */
function BuyBox({ course }: { course: Course }) {
  const isWhatsApp = !course.price
  const isPasantia = course.category === "Pasantía Internacional"

  const details = [
    {
      title: "Descripción del programa",
      body: <p>{course.description}</p>,
    },
    {
      title: "Metodología",
      body: (
        <div className="space-y-2">
          {isPasantia ? (
            <>
              <p>Programa presencial de inmersión con acompañamiento académico permanente.</p>
              <p>Incluye asistencia a audiencias reales, talleres de litigación oral, conferencias magistrales y visitas institucionales.</p>
              <p>Certificación internacional expedida por APECC y las instituciones asociadas del país anfitrión.</p>
            </>
          ) : (
            <>
              <p>Clases en vivo a través de la plataforma Zoom con interacción directa con los docentes.</p>
              <p>Material didáctico digital descargable desde el Aula Virtual.</p>
              <p>Grabaciones disponibles por 30 días para quienes no puedan asistir en directo.</p>
            </>
          )}
        </div>
      ),
    },
    {
      title: "Certificación",
      body: (
        <div className="space-y-2">
          <p>Diploma con código de verificación QR, válido para concursos públicos, ascensos y procesos de selección.</p>
          <p>Expedido por la Asociación Peruana de Ciencias Jurídicas y Conciliación (APECC).</p>
          {course.badge === "Oficial MINJUS" && (
            <p className="font-medium text-emerald-700">
              ✓ Autorizado por el Ministerio de Justicia y Derechos Humanos (R.M. 122-2000-JUS).
            </p>
          )}
        </div>
      ),
    },
    {
      title: "Requisitos de inscripción",
      body: (
        <div className="space-y-2">
          <p>Dirigido a abogados, bachilleres en Derecho, magistrados, fiscales y profesionales del sector jurídico.</p>
          {isPasantia ? (
            <p>Se requiere pasaporte vigente y disponibilidad para viaje internacional. Cupos limitados.</p>
          ) : (
            <p>No se requiere experiencia previa en el tema. Acceso con conexión a internet y dispositivo con cámara.</p>
          )}
        </div>
      ),
    },
  ]

  const perks = isPasantia
    ? ["Certificación internacional", "Audiencias reales", "Acompañamiento académico"]
    : ["Clases en vivo", "Material descargable", "Grabaciones por 30 días"]

  return (
    <div className="flex flex-col gap-6">
      {/* Categoría */}
      <Badge
        className={cn(
          "w-fit rounded-full px-3 py-1 text-white",
          toneClass[course.badgeTone]
        )}
      >
        {course.category}
      </Badge>

      {/* Título y descripción */}
      <div>
        <h1 className="text-3xl font-bold text-brand-navy md:text-4xl">{course.title}</h1>
        <p className="mt-3 text-brand-slate leading-relaxed">{course.description}</p>
      </div>

      {/* Precio */}
      <div className="flex items-center gap-4">
        {course.price ? (
          <span className="text-3xl font-bold text-brand-navy">{course.price}</span>
        ) : (
          <span className="text-xl font-bold text-emerald-700">Cupos limitados — Solicitar información</span>
        )}
      </div>

      {/* Meta info */}
      <div className="flex flex-wrap gap-3">
        {course.meta.map(({ icon: Icon, text }) => (
          <span
            key={text}
            className="inline-flex items-center gap-2 rounded-lg border border-brand-navy/10 bg-white px-4 py-2 text-sm text-brand-navy"
          >
            <Icon className="size-4 text-brand-coral" /> {text}
          </span>
        ))}
      </div>

      {/* Botón principal */}
      {isWhatsApp ? (
        <Button asChild size="lg" className="rounded-full bg-emerald-600 px-6 font-bold hover:bg-emerald-700">
          <a href={course.href} target="_blank" rel="noreferrer">
            <MessageCircle className="size-4 mr-2" />
            Solicitar información por WhatsApp
          </a>
        </Button>
      ) : (
        <Button asChild size="lg" className="rounded-full bg-brand-navy px-6 font-bold hover:bg-brand-navy/90">
          <a href={course.href} target="_blank" rel="noreferrer">
            <ShoppingCart className="size-4 mr-2" />
            Inscribirme ahora · {course.price}
          </a>
        </Button>
      )}

      {/* WhatsApp secundario */}
      <Button asChild variant="outline" size="lg" className="rounded-full border-brand-coral text-brand-coral hover:bg-brand-coral/5">
        <a
          href={waLink(WA_PASANTIAS, `Hola, deseo información sobre: ${course.title}`)}
          target="_blank"
          rel="noreferrer"
        >
          <MessageCircle className="size-4 mr-2" />
          Consultar por WhatsApp
        </a>
      </Button>

      {/* Perks */}
      <ul className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-brand-slate">
        {perks.map((p) => (
          <li key={p} className="flex items-center gap-1.5">
            <ShieldCheck className="size-4 text-brand-coral" /> {p}
          </li>
        ))}
      </ul>

      {/* Accordion */}
      <Accordion items={details} openFirst />
    </div>
  )
}

/* ───────── Programas relacionados ───────── */
function RelatedPrograms({ current }: { current: Course }) {
  const related = getRelated(current)
  if (related.length === 0) return null

  return (
    <section className="mx-auto max-w-7xl px-5 py-16">
      <div className="mb-8 flex items-end justify-between">
        <h2 className="text-2xl font-bold text-brand-navy md:text-3xl">También te puede interesar</h2>
        <Link to="/cursos-y-diplomados" className="text-sm text-brand-coral underline underline-offset-4">
          Ver todos
        </Link>
      </div>
      <ul className="grid grid-cols-2 gap-6 lg:grid-cols-4">
        {related.map((c) => {
          const isWa = !c.price
          return (
            <li key={c.id} className="group">
              <div className="relative aspect-[3/4] overflow-hidden rounded-xl bg-brand-cream">
                <Link to={`/programa/${c.slug}`} className="block size-full">
                  <img
                    src={c.image}
                    alt={c.title}
                    loading="lazy"
                    className="absolute inset-0 size-full object-contain p-3 transition-transform duration-500 group-hover:scale-105"
                  />
                </Link>
                <span
                  className={cn(
                    "absolute left-3 top-3 rounded-full px-2.5 py-1 text-xs font-medium text-white",
                    toneClass[c.badgeTone]
                  )}
                >
                  {c.badge}
                </span>
                <Link
                  to={`/programa/${c.slug}`}
                  className={cn(
                    "absolute inset-x-3 bottom-3 flex items-center justify-center gap-2 rounded-full px-4 py-2 text-sm font-medium text-white shadow-lg transition md:translate-y-2 md:opacity-0 md:group-hover:translate-y-0 md:group-hover:opacity-100",
                    isWa ? "bg-emerald-600" : "bg-brand-navy"
                  )}
                >
                  {isWa ? (
                    <><MessageCircle className="size-4" /> Info</>
                  ) : (
                    <><ShoppingCart className="size-4" /> {c.price}</>
                  )}
                </Link>
              </div>
              <h3 className="mt-3 font-semibold text-brand-navy">
                <Link to={`/programa/${c.slug}`} className="hover:text-brand-coral hover:underline">
                  {c.title}
                </Link>
              </h3>
              <p className="text-sm text-brand-slate">{c.category}</p>
              <div className="mt-1 flex flex-wrap gap-2 text-xs text-brand-slate/70">
                {c.meta.map(({ icon: Icon, text }) => (
                  <span key={text} className="inline-flex items-center gap-1"><Icon className="size-3" />{text}</span>
                ))}
              </div>
            </li>
          )
        })}
      </ul>
    </section>
  )
}

/* ───────── FAQ ───────── */
function FAQ({ isPasantia }: { isPasantia: boolean }) {
  const faqs = isPasantia
    ? [
        { title: "¿Qué incluye la pasantía?", body: "Incluye traslado interno, alojamiento, asistencia a audiencias reales, talleres de litigación, certificación internacional y acompañamiento académico." },
        { title: "¿Necesito pasaporte?", body: "Sí, se requiere pasaporte vigente con al menos 6 meses de validez. APECC brinda asistencia con los trámites necesarios." },
        { title: "¿Los cupos son limitados?", body: "Sí, cada pasantía tiene cupos limitados para garantizar una experiencia personalizada. Recomendamos inscribirse con anticipación." },
        { title: "¿Se emite certificación?", body: "Sí, se emite certificado internacional válido, expedido por APECC y las instituciones asociadas del país anfitrión." },
        { title: "¿Cómo me inscribo?", body: "Escríbenos por WhatsApp para recibir información detallada, fechas disponibles y reservar tu cupo." },
      ]
    : [
        { title: "¿Las clases son en vivo?", body: "Sí, todas las clases se imparten en vivo a través de Zoom. Podrás interactuar directamente con los docentes y realizar preguntas en tiempo real." },
        { title: "¿Puedo ver las grabaciones después?", body: "Sí, las grabaciones de cada sesión estarán disponibles en el Aula Virtual por 30 días para que puedas revisarlas cuando desees." },
        { title: "¿El certificado es válido para concursos?", body: "Sí, el diploma incluye código de verificación QR y es válido para concursos públicos, ascensos y procesos de selección en el sector público." },
        { title: "¿Puedo pagar en cuotas?", body: "Sí, contamos con opciones de pago fraccionado. Consulta por WhatsApp para conocer las facilidades de pago disponibles." },
        { title: "¿Qué materiales incluye?", body: "Incluye material didáctico digital descargable, presentaciones de los docentes, normativa actualizada y jurisprudencia relevante." },
      ]

  return (
    <section className="bg-brand-cream/50 py-16">
      <div className="mx-auto max-w-3xl px-5">
        <h2 className="text-2xl font-bold text-brand-navy md:text-3xl">Preguntas frecuentes</h2>
        <p className="mb-8 mt-2 text-brand-slate">
          ¿Otra duda?{" "}
          <a
            href={waLink(WA_PASANTIAS, "Hola, tengo una consulta sobre los programas de APECC")}
            target="_blank"
            rel="noreferrer"
            className="text-brand-coral underline"
          >
            Escríbenos por WhatsApp
          </a>
          .
        </p>
        <Accordion items={faqs} />
      </div>
    </section>
  )
}

/* ───────── Trust bar ───────── */
function TrustBar() {
  const items = [
    { icon: GraduationCap, title: "Docentes de primer nivel", text: "Magistrados y fiscales en ejercicio" },
    { icon: Award, title: "Certificación válida", text: "Con código QR verificable" },
    { icon: Laptop, title: "Plataforma 24/7", text: "Aula Virtual con acceso ilimitado" },
  ]
  return (
    <div className="border-y border-brand-navy/5 bg-white py-4">
      <div className="mx-auto grid max-w-7xl gap-4 px-5 md:grid-cols-3">
        {items.map(({ icon: Icon, title, text }) => (
          <div key={title} className="flex items-center justify-center gap-3 md:justify-start">
            <Icon className="size-6 shrink-0 text-brand-coral" />
            <div>
              <strong className="block text-sm text-brand-navy">{title}</strong>
              <small className="text-xs text-brand-slate">{text}</small>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

/* ───────── PAGE ───────── */
export default function CursoDetalle() {
  const { slug } = useParams()
  const course = ALL_PROGRAMS.find((c) => c.slug === slug)

  usePageTitle(course ? `${course.title} | APECC` : "Programa no encontrado | APECC")

  if (!course) return <Navigate to="/cursos-y-diplomados" replace />

  const isPasantia = course.category === "Pasantía Internacional"

  return (
    <div className="min-h-screen bg-[#faf7f2] text-brand-navy antialiased">
      {/* Breadcrumb */}
      <nav className="mx-auto flex max-w-7xl items-center gap-2 px-5 py-4 text-sm text-brand-slate">
        <Link to="/" className="hover:text-brand-navy">Inicio</Link>
        <ChevronRight className="size-3.5" />
        <Link to="/cursos-y-diplomados" className="hover:text-brand-navy">Cursos y Diplomados</Link>
        <ChevronRight className="size-3.5" />
        <span className="text-brand-navy font-medium line-clamp-1">{course.title}</span>
      </nav>

      {/* Producto: Gallery + BuyBox */}
      <section className="mx-auto grid max-w-7xl gap-12 px-5 pb-16 md:grid-cols-2">
        <Gallery course={course} />
        <BuyBox course={course} />
      </section>

      {/* Trust bar */}
      <TrustBar />

      {/* CTA grande */}
      <section className="mx-auto max-w-7xl px-5 py-16">
        <div className="grid gap-8 rounded-2xl bg-brand-navy p-8 text-white md:grid-cols-2 md:items-center md:p-12">
          <div>
            <Badge className="mb-3 rounded-full bg-brand-coral px-3 py-1 text-white">Formación Continua</Badge>
            <h2 className="text-2xl font-bold md:text-3xl">
              Impulsa tu carrera jurídica con APECC
            </h2>
            <p className="mt-2 text-brand-cream/80">
              Explora todos nuestros programas de especialización, diplomados y pasantías internacionales. Certificación válida y docentes de primer nivel.
            </p>
          </div>
          <div className="flex flex-col items-start gap-3 md:items-end">
            <Button asChild size="lg" className="rounded-full bg-brand-coral px-8 font-bold hover:bg-brand-coral/90">
              <Link to="/cursos-y-diplomados">
                <BookOpen className="size-4 mr-2" /> Ver todos los programas
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="rounded-full border-white/30 text-white hover:bg-white/10">
              <a
                href={waLink(WA_PASANTIAS, "Hola, deseo información sobre los programas de APECC")}
                target="_blank"
                rel="noreferrer"
              >
                <MessageCircle className="size-4 mr-2" /> Consultar por WhatsApp
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Programas relacionados */}
      <RelatedPrograms current={course} />

      {/* FAQ */}
      <FAQ isPasantia={isPasantia} />
    </div>
  )
}
