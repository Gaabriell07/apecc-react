import { useState } from "react"
import { Link, useParams, Navigate } from "react-router"
import {
  BookOpen,
  ChevronRight,
  MessageCircle,
  ShoppingCart,
  Truck,
  ShieldCheck,
  CreditCard,
} from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  books,
  bookHref,
  waLink,
  WA_LIBROS,
  type Book,
} from "@/data/site"
import { cn } from "@/lib/utils"
import { usePageTitle } from "@/lib/usePageTitle"

/* ───────── Helpers ───────── */
const categoryLabels: Record<string, string> = {
  litigacion: "Litigación Oral",
  penal: "Derecho Penal",
  conciliacion: "Conciliación",
  civil: "Derecho Civil",
}

const getRelated = (book: Book) =>
  books.filter((b) => b.id !== book.id && b.categories.some((c) => book.categories.includes(c))).slice(0, 4)

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
function Gallery({ book }: { book: Book }) {
  /* Para libros usamos la imagen principal; si tuvieran más se agregarían */
  const images = [
    { src: book.image, alt: book.title },
  ]
  const [active, setActive] = useState(0)

  return (
    <div className="flex flex-col-reverse gap-4 md:flex-row">
      {images.length > 1 && (
        <ul className="flex gap-3 md:flex-col">
          {images.map((im, i) => (
            <li key={im.src}>
              <button
                type="button"
                onClick={() => setActive(i)}
                aria-label={`Mostrar imagen ${i + 1}`}
                className={cn(
                  "block h-20 w-20 overflow-hidden rounded-md border-2",
                  i === active ? "border-brand-navy" : "border-transparent"
                )}
              >
                <img src={im.src} alt="" className="size-full object-contain bg-brand-cream p-1" />
              </button>
            </li>
          ))}
        </ul>
      )}
      <div className="relative aspect-square w-full flex-1 overflow-hidden rounded-xl bg-brand-cream">
        <img
          src={images[active].src}
          alt={images[active].alt}
          className="absolute inset-0 size-full object-contain p-8"
        />
        {book.badge && (
          <span
            className={cn(
              "absolute left-4 top-4 rounded-full px-3 py-1 text-xs font-medium text-white",
              book.badge.tone === "coral" ? "bg-brand-coral" : "bg-brand-navy"
            )}
          >
            {book.badge.text}
          </span>
        )}
      </div>
    </div>
  )
}

/* ───────── BuyBox ───────── */
function BuyBox({ book }: { book: Book }) {
  const [qty, setQty] = useState(1)
  const price = parseFloat(book.price.replace(/[^\d.]/g, ""))
  const total = price * qty

  const perks = [
    "Envío a todo el Perú",
    "100% original — Editorial APECC",
    "Entrega por Olva Courier",
  ]

  const details = [
    {
      title: "Descripción completa",
      body: <p>{book.description}</p>,
    },
    {
      title: "Sobre el autor / editorial",
      body: (
        <p>
          Publicado por <strong>{book.author}</strong>. Las obras de la Editorial APECC son referencia
          obligatoria en el foro jurídico peruano, utilizadas por magistrados, fiscales y abogados litigantes
          en todo el país.
        </p>
      ),
    },
    {
      title: "Envíos y devoluciones",
      body: (
        <div className="space-y-2">
          <p>Envíos a Lima Metropolitana: 1-3 días hábiles.</p>
          <p>Envíos a provincias: 3-7 días hábiles vía Olva Courier o agencia autorizada.</p>
          <p>Para cambios o devoluciones, comunícate por WhatsApp dentro de los 7 días posteriores a la entrega.</p>
        </div>
      ),
    },
  ]

  return (
    <div className="flex flex-col gap-6">
      {/* Categorías */}
      <div className="flex flex-wrap gap-2">
        {book.categories.map((c) => (
          <Link
            key={c}
            to={`/libreria?cat=${c}`}
            className="rounded-full bg-brand-cream px-3 py-1 text-xs font-medium text-brand-slate hover:text-brand-navy"
          >
            {categoryLabels[c] || c}
          </Link>
        ))}
      </div>

      {/* Título y precio */}
      <div>
        <h1 className="text-3xl font-bold text-brand-navy md:text-4xl">{book.title}</h1>
        <p className="mt-2 text-brand-slate">{book.description}</p>
        <div className="mt-4 flex items-center gap-4">
          <span className="text-3xl font-bold text-brand-navy">{book.price}</span>
          <Badge variant="secondary" className="text-sm">{book.author}</Badge>
        </div>
      </div>

      {/* Cantidad + Agregar al carrito */}
      <div className="flex gap-3">
        <div className="flex items-center rounded-full border border-brand-navy/20">
          <button
            type="button"
            aria-label="Disminuir cantidad"
            className="px-4 py-3 text-brand-navy hover:text-brand-coral"
            onClick={() => setQty((q) => Math.max(1, q - 1))}
          >
            −
          </button>
          <span className="w-8 text-center font-medium text-brand-navy" aria-live="polite">{qty}</span>
          <button
            type="button"
            aria-label="Aumentar cantidad"
            className="px-4 py-3 text-brand-navy hover:text-brand-coral"
            onClick={() => setQty((q) => q + 1)}
          >
            +
          </button>
        </div>
        <Button asChild size="lg" className="flex-1 rounded-full bg-brand-navy px-6 font-bold hover:bg-brand-navy/90">
          <a
            href={bookHref(book, "carrito")}
            target="_blank"
            rel="noreferrer"
          >
            <ShoppingCart className="size-4 mr-2" />
            Agregar al carrito · S/ {total.toFixed(2)}
          </a>
        </Button>
      </div>

      {/* WhatsApp */}
      <Button asChild variant="outline" size="lg" className="rounded-full border-brand-coral text-brand-coral hover:bg-brand-coral/5">
        <a
          href={waLink(WA_LIBROS, `Hola, deseo adquirir el libro "${book.title}" (${book.price})`)}
          target="_blank"
          rel="noreferrer"
        >
          <MessageCircle className="size-4 mr-2" />
          Comprar por WhatsApp
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

      {/* Accordion detalles */}
      <Accordion items={details} openFirst />
    </div>
  )
}

/* ───────── Related Products ───────── */
function RelatedBooks({ current }: { current: Book }) {
  const related = getRelated(current)
  if (related.length === 0) return null

  return (
    <section className="mx-auto max-w-7xl px-5 py-16">
      <div className="mb-8 flex items-end justify-between">
        <h2 className="text-2xl font-bold text-brand-navy md:text-3xl">También te puede interesar</h2>
        <Link to="/libreria" className="text-sm text-brand-coral underline underline-offset-4">
          Ver todo
        </Link>
      </div>
      <ul className="grid grid-cols-2 gap-6 lg:grid-cols-4">
        {related.map((b) => (
          <li key={b.id} className="group">
            <div className="relative aspect-[3/4] overflow-hidden rounded-xl bg-brand-cream">
              <Link to={`/libreria/${b.id}`} className="block size-full">
                <img
                  src={b.image}
                  alt={b.title}
                  loading="lazy"
                  className="absolute inset-0 size-full object-contain p-4 transition-transform duration-500 group-hover:scale-105"
                />
              </Link>
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
              <a
                href={bookHref(b, "carrito")}
                target="_blank"
                rel="noreferrer"
                className="absolute inset-x-3 bottom-3 flex items-center justify-center gap-2 rounded-full bg-brand-navy px-4 py-2 text-sm font-medium text-white shadow-lg transition md:translate-y-2 md:opacity-0 md:group-hover:translate-y-0 md:group-hover:opacity-100"
              >
                <ShoppingCart className="size-4" /> Comprar · {b.price}
              </a>
            </div>
            <h3 className="mt-3 font-semibold text-brand-navy">
              <Link to={`/libreria/${b.id}`} className="hover:text-brand-coral hover:underline">
                {b.title}
              </Link>
            </h3>
            <p className="text-sm text-brand-slate">{b.price}</p>
            <Badge variant="secondary" className="mt-1 text-xs">{b.author}</Badge>
          </li>
        ))}
      </ul>
    </section>
  )
}

/* ───────── FAQ ───────── */
function FAQ() {
  const faqs = [
    {
      title: "¿Hacen envíos a provincia?",
      body: "Sí, realizamos envíos a todo el Perú a través de Olva Courier y agencias autorizadas. El costo varía según el destino.",
    },
    {
      title: "¿Cómo puedo pagar?",
      body: "Aceptamos pagos por transferencia bancaria (BCP, Interbank, BBVA), Yape, Plin y tarjeta de crédito/débito a través de la tienda online.",
    },
    {
      title: "¿Los libros son originales?",
      body: "Absolutamente. Todos nuestros libros son publicaciones originales de la Editorial APECC, impresos en Lima con materiales de alta calidad.",
    },
    {
      title: "¿Puedo hacer un pedido corporativo?",
      body: "Sí, contáctanos por WhatsApp para pedidos corporativos, institucionales o al por mayor. Ofrecemos precios especiales.",
    },
    {
      title: "¿Cuánto tarda el envío?",
      body: "Lima Metropolitana: 1-3 días hábiles. Provincias: 3-7 días hábiles dependiendo del destino.",
    },
  ]

  return (
    <section className="bg-brand-cream/50 py-16">
      <div className="mx-auto max-w-3xl px-5">
        <h2 className="text-2xl font-bold text-brand-navy md:text-3xl">Preguntas frecuentes</h2>
        <p className="mb-8 mt-2 text-brand-slate">
          ¿Otra duda?{" "}
          <a
            href={waLink(WA_LIBROS, "Hola, tengo una consulta sobre los libros de la Librería APECC")}
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
    { icon: Truck, title: "Envío a todo el Perú", text: "Lima y provincias" },
    { icon: ShieldCheck, title: "Obras 100% originales", text: "Editorial APECC" },
    { icon: CreditCard, title: "Pago seguro", text: "Transferencia o tarjeta" },
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
export default function LibroDetalle() {
  const { id } = useParams()
  const book = books.find((b) => b.id === Number(id))

  usePageTitle(book ? `${book.title} | Librería APECC` : "Libro no encontrado | APECC")

  if (!book) return <Navigate to="/libreria" replace />

  return (
    <div className="min-h-screen bg-[#faf7f2] text-brand-navy antialiased">
      {/* Breadcrumb */}
      <nav className="mx-auto flex max-w-7xl items-center gap-2 px-5 py-4 text-sm text-brand-slate">
        <Link to="/" className="hover:text-brand-navy">Inicio</Link>
        <ChevronRight className="size-3.5" />
        <Link to="/libreria" className="hover:text-brand-navy">Librería</Link>
        <ChevronRight className="size-3.5" />
        <span className="text-brand-navy font-medium">{book.title}</span>
      </nav>

      {/* Producto: Gallery + BuyBox */}
      <section className="mx-auto grid max-w-7xl gap-12 px-5 pb-16 md:grid-cols-2">
        <Gallery book={book} />
        <BuyBox book={book} />
      </section>

      {/* Trust bar */}
      <TrustBar />

      {/* CTA grande */}
      <section className="mx-auto max-w-7xl px-5 py-16">
        <div className="grid gap-8 rounded-2xl bg-brand-navy p-8 text-white md:grid-cols-2 md:items-center md:p-12">
          <div>
            <Badge className="mb-3 rounded-full bg-brand-coral px-3 py-1 text-white">Editorial APECC</Badge>
            <h2 className="text-2xl font-bold md:text-3xl">
              Completa tu biblioteca jurídica
            </h2>
            <p className="mt-2 text-brand-cream/80">
              Descubre todos nuestros títulos sobre litigación oral, derecho penal, conciliación y más.
              Envíos a todo el Perú.
            </p>
          </div>
          <div className="flex flex-col items-start gap-3 md:items-end">
            <Button asChild size="lg" className="rounded-full bg-brand-coral px-8 font-bold hover:bg-brand-coral/90">
              <Link to="/libreria">
                <BookOpen className="size-4 mr-2" /> Ver todos los libros
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="rounded-full border-white/30 text-white hover:bg-white/10">
              <a
                href={waLink(WA_LIBROS, "Hola, deseo adquirir libros de la Librería APECC")}
                target="_blank"
                rel="noreferrer"
              >
                <MessageCircle className="size-4 mr-2" /> Consultar por WhatsApp
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Libros relacionados */}
      <RelatedBooks current={book} />

      {/* FAQ */}
      <FAQ />
    </div>
  )
}
