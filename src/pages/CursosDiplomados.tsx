import { useMemo, useState } from "react"
import { Link } from "react-router"
import {
  Award,
  BookOpen,
  GraduationCap,
  Laptop,
  MessageCircle,
  Search,
  ShieldCheck,
  ShoppingCart,
  SlidersHorizontal,
  Star,
  X,
} from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { cursos, pasantias, type Course } from "@/data/site"
import { cn } from "@/lib/utils"
import { usePageTitle } from "@/lib/usePageTitle"

/* ───────── Todos los programas ───────── */
const ALL_PROGRAMS = [...pasantias, ...cursos]

/* ───────── Categorías (steps) ───────── */
const STEPS = [
  { id: "todos", label: "Todos los programas" },
  { id: "penal", label: "Derecho Penal" },
  { id: "conciliación", label: "Conciliación" },
  { id: "arbitraje", label: "Arbitraje" },
  { id: "pasantía", label: "Pasantías" },
] as const
type StepId = (typeof STEPS)[number]["id"]

/* ───────── Modalidades ───────── */
const MODALIDADES = ["Virtual", "En vivo", "Audiencias in situ", "Cortes Federales", "Centro APECC"] as const

/* ───────── Ordenamiento ───────── */
type SortKey = "relevancia" | "precio-asc" | "precio-desc" | "titulo"
const parsePrice = (p?: string) => (p ? parseFloat(p.replace(/[^\d.]/g, "")) : 0)
const SORTS: Record<SortKey, { label: string; fn: (a: Course, b: Course) => number }> = {
  relevancia: { label: "Relevancia", fn: (_a, _b) => 0 },
  "precio-asc": { label: "Precio: menor a mayor", fn: (a, b) => parsePrice(a.price) - parsePrice(b.price) },
  "precio-desc": { label: "Precio: mayor a menor", fn: (a, b) => parsePrice(b.price) - parsePrice(a.price) },
  titulo: { label: "Título A-Z", fn: (a, b) => a.title.localeCompare(b.title) },
}

/* ───────── Badge tones ───────── */
const toneClass = {
  red: "bg-red-600",
  green: "bg-emerald-600",
  navy: "bg-brand-navy",
} as const

/* ───────── Sub-componentes ───────── */
function FilterGroup({
  title,
  items,
  selected,
  onToggle,
}: {
  title: string
  items: { label: string; count: number }[]
  selected: string[]
  onToggle: (v: string) => void
}) {
  return (
    <fieldset>
      <legend className="mb-3 text-sm font-medium text-brand-navy">{title}</legend>
      <ul className="space-y-2">
        {items.map(({ label, count }) => (
          <li key={label}>
            <label className="flex cursor-pointer items-center justify-between gap-2 text-sm text-brand-slate">
              <span className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={selected.includes(label)}
                  onChange={() => onToggle(label)}
                  className="size-4 rounded border-brand-slate/40 accent-brand-navy"
                />
                {label}
              </span>
              <span className="text-brand-slate/60">{count}</span>
            </label>
          </li>
        ))}
      </ul>
    </fieldset>
  )
}

function ProgramCard({ course: c }: { course: Course }) {
  const isWhatsApp = !c.price

  return (
    <li className="group">
      {/* Imagen con hover */}
      <div className="relative aspect-[3/4] overflow-hidden rounded-xl bg-brand-cream">
        <Link to={`/programa/${c.slug}`} className="block size-full" aria-label={c.title}>
          <img
            src={c.image}
            alt={c.title}
            loading="lazy"
            className="absolute inset-0 size-full object-contain p-3 transition-transform duration-500 group-hover:scale-105"
          />
        </Link>

        {/* Badge */}
        <span
          className={cn(
            "absolute left-3 top-3 rounded-full px-2.5 py-1 text-xs font-medium text-white",
            toneClass[c.badgeTone]
          )}
        >
          {c.badge}
        </span>

        {/* Botón CTA hover (desktop) / siempre visible (móvil) */}
        <Link
          to={`/programa/${c.slug}`}
          className={cn(
            "absolute inset-x-3 bottom-3 flex items-center justify-center gap-2 rounded-full px-4 py-2.5 text-sm font-medium text-white shadow-lg transition md:translate-y-2 md:opacity-0 md:group-hover:translate-y-0 md:group-hover:opacity-100 md:focus-visible:translate-y-0 md:focus-visible:opacity-100",
            isWhatsApp
              ? "bg-emerald-600 hover:bg-emerald-700"
              : "bg-brand-navy hover:bg-brand-navy/90"
          )}
        >
          {isWhatsApp ? (
            <>
              <MessageCircle className="size-4" aria-hidden="true" />
              Ver detalles
            </>
          ) : (
            <>
              <ShoppingCart className="size-4" aria-hidden="true" />
              Ver programa · {c.price}
            </>
          )}
        </Link>
      </div>

      {/* Info debajo de la tarjeta */}
      <div className="mt-3 flex items-start justify-between gap-3">
        <h3 className="text-base font-semibold text-brand-navy">
          <Link to={`/programa/${c.slug}`} className="hover:text-brand-coral hover:underline">
            {c.title}
          </Link>
        </h3>
        {c.price ? (
          <p className="shrink-0 text-base font-bold text-brand-navy">{c.price}</p>
        ) : (
          <span className="shrink-0 rounded-full bg-emerald-100 px-2 py-0.5 text-xs font-semibold text-emerald-700">
            Cupos limitados
          </span>
        )}
      </div>
      <p className="mt-0.5 text-sm text-brand-slate">{c.category}</p>
      <div className="mt-1.5 flex flex-wrap items-center gap-3 text-xs text-brand-slate/70">
        {c.meta.map(({ icon: Icon, text }) => (
          <span key={text} className="inline-flex items-center gap-1">
            <Icon className="size-3.5" /> {text}
          </span>
        ))}
      </div>
    </li>
  )
}

function AulaCta() {
  return (
    <li className="col-span-2 flex flex-col justify-between rounded-xl bg-brand-cream p-6 md:col-span-1 md:aspect-[3/4]">
      <div>
        <GraduationCap className="size-10 text-brand-coral mb-3" />
        <p className="text-xl leading-snug font-bold text-brand-navy">
          ¿No sabes por dónde empezar? Descubre tu ruta de aprendizaje ideal.
        </p>
        <p className="mt-2 text-sm text-brand-slate">
          Accede al Aula Virtual para explorar todos los programas, descargar temarios y consultar fechas de inicio.
        </p>
      </div>
      <a
        href="https://aulavirtualapecc.com/aula/login/index.php"
        target="_blank"
        rel="noreferrer"
        className="mt-6 inline-flex w-fit items-center gap-2 rounded-full bg-brand-navy px-5 py-2.5 text-sm font-medium text-white hover:bg-brand-navy/90"
      >
        <Laptop className="size-4" /> Ingresar al Aula Virtual
      </a>
    </li>
  )
}

/* ───────── Página principal ───────── */
export default function CursosDiplomados() {
  usePageTitle("Cursos y Diplomados | APECC")

  const [step, setStep] = useState<StepId>("todos")
  const [modalidades, setModalidades] = useState<string[]>([])
  const [query, setQuery] = useState("")
  const [sort, setSort] = useState<SortKey>("relevancia")
  const [filtersOpen, setFiltersOpen] = useState(false)

  const toggle = (setter: React.Dispatch<React.SetStateAction<string[]>>) => (value: string) =>
    setter((prev) => (prev.includes(value) ? prev.filter((v) => v !== value) : [...prev, value]))

  const stepCount = (id: StepId) =>
    id === "todos"
      ? ALL_PROGRAMS.length
      : ALL_PROGRAMS.filter((p) => p.category.toLowerCase().includes(id.toLowerCase())).length

  const modalidadCount = (m: string) =>
    ALL_PROGRAMS.filter((p) => p.meta.some((meta) => meta.text === m)).length

  const visible = useMemo(() => {
    const q = query.trim().toLowerCase()
    return ALL_PROGRAMS
      .filter((p) => step === "todos" || p.category.toLowerCase().includes(step.toLowerCase()))
      .filter((p) => modalidades.length === 0 || modalidades.some((m) => p.meta.some((meta) => meta.text === m)))
      .filter((p) => !q || p.title.toLowerCase().includes(q) || p.category.toLowerCase().includes(q))
      .sort(SORTS[sort].fn)
  }, [step, modalidades, query, sort])

  const clear = () => { setStep("todos"); setModalidades([]); setQuery("") }
  const hasFilters = step !== "todos" || modalidades.length > 0 || query.length > 0

  /* Sidebar reutilizado desktop + drawer móvil */
  const sidebar = (
    <div className="space-y-8">
      {/* Categoría */}
      <fieldset>
        <legend className="mb-3 text-sm font-medium text-brand-navy">Especialidad</legend>
        <ul className="space-y-2">
          {STEPS.map(({ id, label }) => (
            <li key={id}>
              <button
                type="button"
                onClick={() => setStep(id)}
                aria-current={step === id}
                className={cn(
                  "flex w-full items-center justify-between text-sm",
                  step === id ? "font-semibold text-brand-navy" : "text-brand-slate hover:text-brand-navy"
                )}
              >
                {label}
                <span className="text-brand-slate/50">{stepCount(id)}</span>
              </button>
            </li>
          ))}
        </ul>
      </fieldset>

      {/* Modalidad */}
      <FilterGroup
        title="Modalidad"
        selected={modalidades}
        onToggle={toggle(setModalidades)}
        items={MODALIDADES.filter((m) => modalidadCount(m) > 0).map((m) => ({ label: m, count: modalidadCount(m) }))}
      />

      {/* CTA lateral */}
      <p className="text-sm text-brand-slate">
        ¿Necesitas asesoría personalizada?{" "}
        <a
          href="https://wa.me/51996894991?text=Hola%20APECC,%20solicito%20información%20sobre%20cursos"
          target="_blank"
          rel="noreferrer"
          className="font-medium text-brand-navy underline underline-offset-4"
        >
          Escríbenos por WhatsApp
        </a>
      </p>
    </div>
  )

  /* Tarjetas de programas */
  const cards = visible.map((p) => <ProgramCard key={p.title} course={p} />)

  return (
    <div className="min-h-screen bg-[#faf7f2] text-brand-navy antialiased">
      {/* Hero */}
      <section className="relative isolate overflow-hidden bg-brand-navy">
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-brand-navy via-brand-navy/95 to-brand-coral/20" />
        <div className="mx-auto max-w-7xl px-5 py-16 text-white md:py-24">
          <nav aria-label="breadcrumb" className="mb-4 text-sm">
            <Link to="/" className="text-brand-coral-soft hover:underline">Inicio</Link>
            <span className="mx-2 text-white/50">/</span>
            <span aria-current="page">Cursos y Diplomados</span>
          </nav>
          <Badge className="mb-4 rounded-full bg-brand-coral px-3 py-1 text-white">Formación Continua</Badge>
          <h1 className="text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
            Cursos y Diplomados de Alta Especialización
          </h1>
          <p className="mt-4 max-w-xl text-base text-brand-cream/90 md:text-lg">
            Programas diseñados para jueces, fiscales, abogados litigantes y profesionales del foro jurídico con certificación oficial.
          </p>
          <p className="mt-4 inline-flex items-center gap-1.5 text-sm">
            <Star className="size-4 fill-current text-brand-coral" aria-hidden="true" />
            <span className="font-semibold">{ALL_PROGRAMS.length} programas disponibles</span>
            <span className="text-white/60 ml-1">· Modalidad virtual en vivo</span>
          </p>
        </div>
      </section>

      {/* Contenido principal: sidebar + grid */}
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-10 lg:grid-cols-[220px_1fr]">
        {/* Sidebar escritorio */}
        <aside className="hidden lg:block" aria-label="Filtros">
          <div className="sticky top-24">{sidebar}</div>
        </aside>

        <section>
          {/* Chips de categorías (móvil) */}
          <div className="-mx-5 mb-4 flex gap-2 overflow-x-auto px-5 pb-1 lg:hidden">
            {STEPS.map(({ id, label }) => (
              <button
                key={id}
                type="button"
                onClick={() => setStep(id)}
                className={cn(
                  "shrink-0 rounded-full border px-4 py-1.5 text-sm transition-colors",
                  step === id
                    ? "border-brand-navy bg-brand-navy text-white"
                    : "border-brand-slate/30 text-brand-slate"
                )}
              >
                {id === "todos" ? "Todos" : label}
              </button>
            ))}
          </div>

          {/* Barra de herramientas */}
          <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <button
                type="button"
                onClick={() => setFiltersOpen(true)}
                className="inline-flex items-center gap-2 rounded-full border border-brand-slate/30 px-4 py-1.5 text-sm lg:hidden"
              >
                <SlidersHorizontal className="size-4" aria-hidden="true" /> Filtros
              </button>
              <p className="text-sm text-brand-slate" aria-live="polite">
                {visible.length} {visible.length === 1 ? "programa" : "programas"}
              </p>
              {hasFilters && (
                <button type="button" onClick={clear} className="text-sm text-brand-coral underline underline-offset-4">
                  Limpiar todo
                </button>
              )}
            </div>

            <div className="flex items-center gap-3">
              {/* Búsqueda inline */}
              <div className="relative hidden sm:block">
                <Search className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-brand-slate/60" />
                <input
                  type="text"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Buscar curso..."
                  className="rounded-full border border-brand-slate/30 bg-transparent pl-9 pr-4 py-1.5 text-sm focus:border-brand-coral focus:outline-none focus:ring-1 focus:ring-brand-coral w-52"
                />
              </div>
              <label className="flex items-center gap-2 text-sm">
                <span className="text-brand-slate hidden sm:inline">Ordenar</span>
                <select
                  value={sort}
                  onChange={(e) => setSort(e.target.value as SortKey)}
                  className="rounded-full border border-brand-slate/30 bg-transparent px-3 py-1.5 text-sm"
                >
                  {Object.entries(SORTS).map(([key, { label }]) => (
                    <option key={key} value={key}>{label}</option>
                  ))}
                </select>
              </label>
            </div>
          </div>

          {/* Búsqueda móvil */}
          <div className="mb-6 sm:hidden">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-brand-slate/60" />
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Buscar curso o diplomado..."
                className="w-full rounded-full border border-brand-slate/30 bg-transparent pl-9 pr-4 py-2 text-sm focus:border-brand-coral focus:outline-none focus:ring-1 focus:ring-brand-coral"
              />
            </div>
          </div>

          {/* Grid de programas */}
          {visible.length === 0 ? (
            <div className="py-24 text-center">
              <BookOpen className="mx-auto size-12 text-brand-slate/40 mb-4" />
              <p className="text-lg text-brand-navy font-semibold">No se encontraron programas.</p>
              <p className="mt-1 text-sm text-brand-slate">Prueba cambiando los filtros o el término de búsqueda.</p>
              <button
                type="button"
                onClick={clear}
                className="mt-4 rounded-full bg-brand-navy px-5 py-2.5 text-sm font-medium text-white hover:bg-brand-navy/90"
              >
                Limpiar filtros
              </button>
            </div>
          ) : (
            <ul className="grid grid-cols-2 gap-x-4 gap-y-10 md:grid-cols-3 md:gap-x-6">
              {cards}
            </ul>
          )}
        </section>
      </div>

      {/* Drawer de filtros (móvil) */}
      {filtersOpen && (
        <div className="fixed inset-0 z-50 lg:hidden" role="dialog" aria-modal="true" aria-label="Filtros">
          <div className="absolute inset-0 bg-black/40" onClick={() => setFiltersOpen(false)} />
          <div className="absolute inset-y-0 left-0 w-80 max-w-[85%] overflow-y-auto bg-[#faf7f2] p-6">
            <div className="mb-6 flex items-center justify-between">
              <h2 className="text-lg font-semibold text-brand-navy">Filtros</h2>
              <button type="button" onClick={() => setFiltersOpen(false)} aria-label="Cerrar filtros">
                <X className="size-5" />
              </button>
            </div>
            <div className="relative mb-6">
              <Search className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-brand-slate/60" />
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Buscar curso..."
                className="w-full rounded-full border border-brand-slate/30 bg-transparent pl-9 pr-4 py-2 text-sm focus:border-brand-coral focus:outline-none focus:ring-1 focus:ring-brand-coral"
              />
            </div>
            {sidebar}
            {hasFilters && (
              <button
                type="button"
                onClick={() => { clear(); setFiltersOpen(false) }}
                className="mt-8 w-full rounded-full bg-brand-navy px-5 py-2.5 text-sm font-medium text-white"
              >
                Limpiar filtros y cerrar
              </button>
            )}
          </div>
        </div>
      )}

      {/* Beneficios de APECC */}
      <div className="mx-auto max-w-7xl px-5 pb-16">
        <div className="rounded-3xl bg-brand-navy text-white p-8 sm:p-12">
          <div className="mx-auto max-w-2xl text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold">¿Por qué capacitarte en APECC?</h2>
            <p className="mt-2 text-brand-cream/80 text-sm">Respaldo institucional y calidad académica demostrada en cada sesión.</p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-2xl bg-white/5 border border-white/10 p-5">
              <Laptop className="size-8 text-brand-coral mb-3" />
              <h3 className="font-bold text-base">Plataforma 24/7</h3>
              <p className="text-xs text-brand-cream/70 mt-1">Clases en vivo y grabaciones disponibles en el Aula Virtual con acceso ilimitado.</p>
            </div>
            <div className="rounded-2xl bg-white/5 border border-white/10 p-5">
              <GraduationCap className="size-8 text-brand-coral mb-3" />
              <h3 className="font-bold text-base">Plana Docente Top</h3>
              <p className="text-xs text-brand-cream/70 mt-1">Magistrados en ejercicio, fiscales corporativos y catedráticos universitarios.</p>
            </div>
            <div className="rounded-2xl bg-white/5 border border-white/10 p-5">
              <ShieldCheck className="size-8 text-brand-coral mb-3" />
              <h3 className="font-bold text-base">Certificación Válida</h3>
              <p className="text-xs text-brand-cream/70 mt-1">Diplomas con código de verificación QR válidos para concursos públicos y ascensos.</p>
            </div>
            <div className="rounded-2xl bg-white/5 border border-white/10 p-5">
              <Award className="size-8 text-brand-coral mb-3" />
              <h3 className="font-bold text-base">Convenios Oficiales</h3>
              <p className="text-xs text-brand-cream/70 mt-1">Acreditados con Colegios de Abogados y Universidades del Perú.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
