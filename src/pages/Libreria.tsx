import { useMemo, useState } from "react"
import { Link } from "react-router"
import {
  BookOpen,
  CreditCard,
  MessageCircle,
  Search,
  ShieldCheck,
  ShoppingCart,
  SlidersHorizontal,
  Star,
  Truck,
  X,
} from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  WA_LIBROS,
  bookHref,
  books,
  waLink,
  type Book,
  type BookCategory,
} from "@/data/site"
import { cn } from "@/lib/utils"
import { usePageTitle } from "@/lib/usePageTitle"

/* ───────── Categorías (steps) ───────── */
const STEPS: { id: "all" | BookCategory; label: string }[] = [
  { id: "all", label: "Todos los libros" },
  { id: "litigacion", label: "Litigación Oral" },
  { id: "penal", label: "Derecho Penal" },
  { id: "conciliacion", label: "Conciliación" },
  { id: "civil", label: "Derecho Civil" },
]

/* ───────── Autores (concern equivalent) ───────── */
const AUTHORS = [...new Set(books.map((b) => b.author))]

/* ───────── Ordenamiento ───────── */
type SortKey = "relevancia" | "precio-asc" | "precio-desc" | "titulo"
const SORTS: Record<SortKey, { label: string; fn: (a: Book, b: Book) => number }> = {
  relevancia: { label: "Relevancia", fn: (a, b) => (b.slug ? 1 : 0) - (a.slug ? 1 : 0) || a.id - b.id },
  "precio-asc": { label: "Precio: menor a mayor", fn: (a, b) => parseFloat(a.price.replace(/[^\d.]/g, "")) - parseFloat(b.price.replace(/[^\d.]/g, "")) },
  "precio-desc": { label: "Precio: mayor a menor", fn: (a, b) => parseFloat(b.price.replace(/[^\d.]/g, "")) - parseFloat(a.price.replace(/[^\d.]/g, "")) },
  titulo: { label: "Título A-Z", fn: (a, b) => a.title.localeCompare(b.title) },
}

/* ───────── Perks ───────── */
const perks = [
  { icon: Truck, title: "Envíos a todo el Perú", text: "Entrega rápida vía Olva Courier" },
  { icon: ShieldCheck, title: "Obras 100% originales", text: "Publicaciones oficiales APECC" },
  { icon: CreditCard, title: "Compra fácil y segura", text: "Pago online o transferencia" },
]

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
  onToggle: (value: string) => void
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

function ProductCard({ book: b }: { book: Book }) {
  const href = bookHref(b, "carrito")
  return (
    <li className="group">
      {/* Imagen con hover */}
      <div className="relative aspect-[3/4] overflow-hidden rounded-xl bg-brand-cream">
        <Link
          to={`/libreria/${b.id}`}
          className="block size-full"
          aria-label={b.title}
        >
          <img
            src={b.image}
            alt={b.title}
            loading="lazy"
            className="absolute inset-0 size-full object-contain p-4 transition-transform duration-500 group-hover:scale-105"
          />
        </Link>

        {/* Badge */}
        {b.badge && (
          <span
            className={cn(
              "absolute left-3 top-3 rounded-full px-2.5 py-1 text-xs font-medium text-white",
              b.badge.tone === "coral" ? "bg-brand-coral" : "bg-brand-navy"
            )}
          >
            {b.badge.text}
          </span>
        )}

        {/* Botón comprar — aparece en hover (desktop), siempre visible en móvil */}
        <a
          href={href}
          target="_blank"
          rel="noreferrer"
          className="absolute inset-x-3 bottom-3 flex items-center justify-center gap-2 rounded-full bg-brand-navy px-4 py-2.5 text-sm font-medium text-white shadow-lg transition hover:bg-brand-navy/90 md:translate-y-2 md:opacity-0 md:group-hover:translate-y-0 md:group-hover:opacity-100 md:focus-visible:translate-y-0 md:focus-visible:opacity-100"
        >
          <ShoppingCart className="size-4" aria-hidden="true" />
          Comprar · {b.price}
        </a>
      </div>

      {/* Info debajo */}
      <div className="mt-3 flex items-start justify-between gap-3">
        <h3 className="text-base font-semibold text-brand-navy">
          <Link
            to={`/libreria/${b.id}`}
            className="hover:text-brand-coral hover:underline"
          >
            {b.title}
          </Link>
        </h3>
        <p className="shrink-0 text-base font-bold text-brand-navy">{b.price}</p>
      </div>
      <p className="mt-0.5 text-sm text-brand-slate line-clamp-2">{b.description}</p>
      <Badge variant="secondary" className="mt-2 text-xs">{b.author}</Badge>
    </li>
  )
}

function WhatsAppCta() {
  return (
    <li className="col-span-2 flex flex-col justify-between rounded-xl bg-brand-cream p-6 md:col-span-1 md:aspect-[3/4]">
      <div>
        <BookOpen className="size-10 text-brand-coral mb-3" />
        <p className="text-xl leading-snug font-bold text-brand-navy">
          ¿Necesitas asesoría para elegir tus libros o hacer un pedido corporativo?
        </p>
        <p className="mt-2 text-sm text-brand-slate">
          Nuestro equipo te asesora en la selección de material jurídico especializado. Envíos a todo Lima y provincias.
        </p>
      </div>
      <a
        href={waLink(WA_LIBROS, "Hola, deseo información sobre libros de la Librería Jurídica APECC")}
        target="_blank"
        rel="noreferrer"
        className="mt-6 inline-flex w-fit items-center gap-2 rounded-full bg-brand-navy px-5 py-2.5 text-sm font-medium text-white hover:bg-brand-navy/90"
      >
        <MessageCircle className="size-4" /> Consultar por WhatsApp
      </a>
    </li>
  )
}

/* ───────── Página principal ───────── */
export default function Libreria() {
  usePageTitle("Librería Jurídica | APECC - Asociación Peruana de Ciencias Jurídicas y Conciliación")

  const [step, setStep] = useState<"all" | BookCategory>("all")
  const [authors, setAuthors] = useState<string[]>([])
  const [query, setQuery] = useState("")
  const [sort, setSort] = useState<SortKey>("relevancia")
  const [filtersOpen, setFiltersOpen] = useState(false)

  const toggle = (setter: React.Dispatch<React.SetStateAction<string[]>>) => (value: string) =>
    setter((prev) => (prev.includes(value) ? prev.filter((v) => v !== value) : [...prev, value]))

  const stepCount = (id: "all" | BookCategory) =>
    id === "all" ? books.length : books.filter((b) => b.categories.includes(id)).length

  const authorCount = (author: string) => books.filter((b) => b.author === author).length

  const visible = useMemo(() => {
    const q = query.trim().toLowerCase()
    return books
      .filter((b) => step === "all" || b.categories.includes(step))
      .filter((b) => authors.length === 0 || authors.includes(b.author))
      .filter((b) => !q || b.title.toLowerCase().includes(q) || b.description.toLowerCase().includes(q))
      .sort(SORTS[sort].fn)
  }, [step, authors, query, sort])

  const clear = () => { setStep("all"); setAuthors([]); setQuery("") }
  const hasFilters = step !== "all" || authors.length > 0 || query.length > 0

  /* Sidebar de filtros (reutilizado en desktop y drawer móvil) */
  const sidebar = (
    <div className="space-y-8">
      {/* Categoría */}
      <fieldset>
        <legend className="mb-3 text-sm font-medium text-brand-navy">Categoría</legend>
        <ul className="space-y-2">
          {STEPS.map(({ id, label }) => (
            <li key={id}>
              <button
                type="button"
                onClick={() => setStep(id)}
                aria-current={step === id}
                className={cn(
                  "flex w-full items-center justify-between text-sm",
                  step === id
                    ? "font-semibold text-brand-navy"
                    : "text-brand-slate hover:text-brand-navy"
                )}
              >
                {label}
                <span className="text-brand-slate/50">{stepCount(id)}</span>
              </button>
            </li>
          ))}
        </ul>
      </fieldset>

      {/* Autor */}
      <FilterGroup
        title="Autor / Editorial"
        selected={authors}
        onToggle={toggle(setAuthors)}
        items={AUTHORS.map((a) => ({ label: a, count: authorCount(a) }))}
      />

      {/* CTA lateral */}
      <p className="text-sm text-brand-slate">
        ¿Buscas un título específico?{" "}
        <a
          href={waLink(WA_LIBROS, "Hola, busco un libro que no encuentro en la tienda")}
          target="_blank"
          rel="noreferrer"
          className="font-medium text-brand-navy underline underline-offset-4"
        >
          Consultar disponibilidad
        </a>
      </p>
    </div>
  )

  /* Tarjetas de libros */
  const cards = visible.map((b) => <ProductCard key={b.id} book={b} />)

  return (
    <div className="min-h-screen bg-[#faf7f2] text-brand-navy antialiased">
      {/* Hero */}
      <section className="relative isolate overflow-hidden bg-brand-navy">
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-brand-navy via-brand-navy/95 to-brand-coral/20" />
        <div className="mx-auto max-w-7xl px-5 py-16 text-white md:py-24">
          <nav aria-label="breadcrumb" className="mb-4 text-sm">
            <Link to="/" className="text-brand-coral-soft hover:underline">Inicio</Link>
            <span className="mx-2 text-white/50">/</span>
            <span aria-current="page">Librería</span>
          </nav>
          <Badge className="mb-4 rounded-full bg-brand-coral px-3 py-1 text-white">Editorial Jurídica APECC</Badge>
          <h1 className="text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
            Librería Jurídica Especializada
          </h1>
          <p className="mt-4 max-w-xl text-base text-brand-cream/90 md:text-lg">
            Obras doctrinarias, manuales prácticos y tratados de litigación oral del Dr. Oscar Peña Gonzáles y destacados juristas.
          </p>
          <p className="mt-4 inline-flex items-center gap-1.5 text-sm">
            <Star className="size-4 fill-current text-brand-coral" aria-hidden="true" />
            <span className="font-semibold">{books.length} títulos disponibles</span>
            <span className="text-white/60 ml-1">· Envíos a todo el Perú</span>
          </p>
        </div>
      </section>

      {/* Perks */}
      <div className="border-b border-brand-cream bg-white py-4">
        <div className="mx-auto grid max-w-7xl gap-4 px-5 md:grid-cols-3">
          {perks.map(({ icon: Icon, title, text }) => (
            <div key={title} className="flex items-center justify-center gap-3 md:justify-start">
              <Icon className="size-7 text-brand-coral shrink-0" />
              <div>
                <strong className="block text-sm text-brand-navy">{title}</strong>
                <small className="text-xs text-brand-slate">{text}</small>
              </div>
            </div>
          ))}
        </div>
      </div>

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
                {id === "all" ? "Todos" : label}
              </button>
            ))}
          </div>

          {/* Barra de herramientas */}
          <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              {/* Botón filtros (móvil) */}
              <button
                type="button"
                onClick={() => setFiltersOpen(true)}
                className="inline-flex items-center gap-2 rounded-full border border-brand-slate/30 px-4 py-1.5 text-sm lg:hidden"
              >
                <SlidersHorizontal className="size-4" aria-hidden="true" /> Filtros
              </button>

              <p className="text-sm text-brand-slate" aria-live="polite">
                {visible.length} {visible.length === 1 ? "libro" : "libros"}
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
                  placeholder="Buscar libro..."
                  className="rounded-full border border-brand-slate/30 bg-transparent pl-9 pr-4 py-1.5 text-sm focus:border-brand-coral focus:outline-none focus:ring-1 focus:ring-brand-coral w-52"
                />
              </div>

              {/* Orden */}
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
                placeholder="Buscar libro por título..."
                className="w-full rounded-full border border-brand-slate/30 bg-transparent pl-9 pr-4 py-2 text-sm focus:border-brand-coral focus:outline-none focus:ring-1 focus:ring-brand-coral"
              />
            </div>
          </div>

          {/* Grid de libros */}
          {visible.length === 0 ? (
            <div className="py-24 text-center">
              <BookOpen className="mx-auto size-12 text-brand-slate/40 mb-4" />
              <p className="text-lg text-brand-navy font-semibold">No encontramos libros con esos filtros.</p>
              <p className="mt-1 text-sm text-brand-slate">Prueba con otro término o cambia los filtros.</p>
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

            {/* Búsqueda dentro del drawer */}
            <div className="relative mb-6">
              <Search className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-brand-slate/60" />
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Buscar libro..."
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

      {/* CTA final */}
      <div className="mx-auto max-w-7xl px-5 pb-16">
        <div className="rounded-2xl bg-brand-navy p-8 text-center text-white sm:p-12">
          <Badge className="mb-3 rounded-full bg-brand-coral px-3 py-1 text-white">Atención personalizada</Badge>
          <h3 className="mb-3 text-2xl font-bold sm:text-3xl">¿Deseas pedidos corporativos o asesoría en compras?</h3>
          <p className="mb-6 text-base text-brand-cream/80 max-w-xl mx-auto">
            Realizamos envíos a todo Lima y provincias por Olva Courier y agencias autorizadas. Consultas sin compromiso.
          </p>
          <Button asChild size="lg" className="rounded-full bg-brand-coral px-8 font-bold hover:bg-brand-coral/90">
            <a
              href={waLink(WA_LIBROS, "Hola, deseo adquirir libros de la Librería Jurídica APECC")}
              target="_blank"
              rel="noreferrer"
            >
              <MessageCircle className="size-4 mr-1.5" /> Consultar por WhatsApp
            </a>
          </Button>
        </div>
      </div>
    </div>
  )
}
