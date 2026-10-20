import { useMemo, useState } from "react"
import { CreditCard, MessageCircle, Search, ShieldCheck, Truck } from "lucide-react"
import { Link } from "react-router"
import BookCard from "@/components/BookCard"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { WA_LIBROS, bookHref, books, waLink, type BookCategory } from "@/data/site"
import { usePageTitle } from "@/lib/usePageTitle"

const filters: { value: "all" | BookCategory; label: string }[] = [
  { value: "all", label: "Todos los libros" },
  { value: "litigacion", label: "Litigación Oral" },
  { value: "penal", label: "Derecho Penal" },
  { value: "conciliacion", label: "Conciliación" },
  { value: "civil", label: "Derecho Civil" },
]

const perks = [
  { icon: Truck, title: "Envíos a todo el Perú", text: "Entrega rápida y segura a nivel nacional" },
  { icon: ShieldCheck, title: "Obras 100% originales", text: "Publicaciones oficiales de Editorial APECC" },
  { icon: CreditCard, title: "Compra fácil y segura", text: "Pago online o transferencia bancaria" },
]

export default function Libreria() {
  usePageTitle("Librería Jurídica | APECC - Asociación Peruana de Ciencias Jurídicas y Conciliación")
  const [filter, setFilter] = useState<"all" | BookCategory>("all")
  const [query, setQuery] = useState("")

  const visible = useMemo(() => {
    const q = query.trim().toLowerCase()
    return books.filter(
      (b) => (filter === "all" || b.categories.includes(filter)) && (!q || b.title.toLowerCase().includes(q))
    )
  }, [filter, query])

  return (
    <>
      <div className="bg-brand-navy py-16 text-center text-white lg:py-24">
        <div className="mx-auto max-w-3xl px-4">
          <Badge className="mb-3 rounded-full bg-brand-coral px-3 py-1 text-white">Editorial Jurídica APECC</Badge>
          <h1 className="mb-3 text-4xl font-bold lg:text-5xl">Librería Jurídica Especializada</h1>
          <p className="mb-4 text-lg text-brand-cream">
            Obras doctrinarias, manuales prácticos y tratados de litigación oral del Dr. Oscar Peña Gonzáles y destacados juristas del país.
          </p>
          <nav aria-label="breadcrumb" className="text-sm">
            <Link to="/" className="text-brand-coral-soft hover:underline">Inicio</Link>
            <span className="mx-2 text-white/50">/</span>
            <span aria-current="page">Librería</span>
          </nav>
        </div>
      </div>

      <div className="border-b bg-brand-cream py-4">
        <div className="mx-auto grid max-w-7xl gap-4 px-4 md:grid-cols-3">
          {perks.map(({ icon: Icon, title, text }) => (
            <div key={title} className="flex items-center justify-center gap-3 md:justify-start">
              <Icon className="size-7 text-brand-coral" />
              <div>
                <strong className="block text-brand-navy">{title}</strong>
                <small className="text-brand-slate">{text}</small>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 py-12 lg:py-16">
        <div className="mb-8 flex flex-col justify-between gap-4 lg:flex-row lg:items-center">
          <div className="flex flex-wrap gap-2">
            {filters.map((f) => (
              <Button
                key={f.value}
                size="sm"
                variant={filter === f.value ? "default" : "outline"}
                className="rounded-full px-4"
                onClick={() => setFilter(f.value)}
              >
                {f.label}
              </Button>
            ))}
          </div>
          <div className="relative w-full lg:w-80">
            <Search className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-brand-slate" />
            <Input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Buscar libro por título..." className="bg-muted pl-9" />
          </div>
        </div>

        {visible.length ? (
          <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {visible.map((b) => <BookCard key={b.id} book={b} href={bookHref(b, "carrito")} newTab />)}
          </div>
        ) : (
          <p className="py-16 text-center text-brand-slate">No encontramos libros con ese título. Prueba con otra palabra o cambia el filtro.</p>
        )}

        <div className="mt-16 rounded-xl bg-brand-navy p-8 text-center text-white">
          <Badge className="mb-3 rounded-full bg-brand-coral px-3 py-1 text-white">Atención personalizada</Badge>
          <h3 className="mb-3 text-2xl font-semibold">¿Deseas pedidos corporativos o asesoría en compras?</h3>
          <p className="mb-5 text-lg text-brand-cream">Realizamos envíos a todo Lima y provincias por Olva Courier y agencias autorizadas.</p>
          <Button asChild size="lg" className="rounded-full bg-brand-coral px-8 font-bold hover:bg-brand-coral/90">
            <a href={waLink(WA_LIBROS, "Hola, deseo adquirir libros de la Librería Jurídica APECC")} target="_blank" rel="noreferrer">
              <MessageCircle /> Consultar por WhatsApp
            </a>
          </Button>
        </div>
      </div>
    </>
  )
}
