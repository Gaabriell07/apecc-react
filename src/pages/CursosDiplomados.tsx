import { useState } from "react"
import { Award, BookOpen, GraduationCap, Laptop, Search, ShieldCheck } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import CourseCard from "@/components/CourseCard"
import { cursos, pasantias } from "@/data/site"
import { usePageTitle } from "@/lib/usePageTitle"

export default function CursosDiplomados() {
  usePageTitle("Cursos y Diplomados | APECC")

  const [categoria, setCategoria] = useState<string>("todos")
  const [busqueda, setBusqueda] = useState<string>("")

  const todosLosProgramas = [...cursos, ...pasantias]

  const filtrados = todosLosProgramas.filter((item) => {
    const matchCat = categoria === "todos" || item.category.toLowerCase().includes(categoria.toLowerCase())
    const matchBusqueda =
      item.title.toLowerCase().includes(busqueda.toLowerCase()) ||
      item.category.toLowerCase().includes(busqueda.toLowerCase())
    return matchCat && matchBusqueda
  })

  return (
    <div className="bg-background min-h-screen py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-8">
        {/* Encabezado */}
        <div className="mx-auto max-w-3xl text-center mb-10">
          <Badge className="bg-brand-coral text-white mb-3 px-3 py-1">Formación Continua</Badge>
          <h1 className="text-4xl font-extrabold text-brand-navy">Cursos y Diplomados de Alta Especialización</h1>
          <p className="mt-3 text-lg text-brand-slate">
            Programas diseñados para jueces, fiscales, abogados litigantes y profesionales del foro jurídico con certificación oficial y modalidad virtual en vivo.
          </p>
        </div>

        {/* Barra de Filtros */}
        <div className="mb-10 flex flex-col sm:flex-row items-center justify-between gap-4 rounded-2xl border border-border bg-white p-4 shadow-xs">
          <div className="flex flex-wrap items-center gap-2">
            {[
              { id: "todos", label: "Todos los programas" },
              { id: "penal", label: "Derecho Penal" },
              { id: "conciliación", label: "Conciliación Extrajudicial" },
              { id: "arbitraje", label: "Arbitraje" },
              { id: "pasantía", label: "Pasantías" },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setCategoria(tab.id)}
                className={`rounded-full px-4 py-2 text-sm font-semibold transition-all ${
                  categoria === tab.id
                    ? "bg-brand-navy text-white shadow-sm"
                    : "bg-muted text-brand-slate hover:bg-muted/80 hover:text-brand-navy"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <div className="relative w-full sm:w-72">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" />
            <input
              type="text"
              placeholder="Buscar curso o tema..."
              value={busqueda}
              onChange={(e) => setBusqueda(e.target.value)}
              className="w-full rounded-full border border-border bg-muted/40 pl-9 pr-4 py-2 text-sm text-foreground focus:border-brand-coral focus:outline-none focus:ring-1 focus:ring-brand-coral"
            />
          </div>
        </div>

        {/* Grid de Cursos */}
        {filtrados.length > 0 ? (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filtrados.map((item) => (
              <CourseCard key={item.title} course={item} />
            ))}
          </div>
        ) : (
          <div className="rounded-2xl border border-dashed border-border p-12 text-center">
            <BookOpen className="mx-auto size-12 text-muted-foreground/60" />
            <h3 className="mt-4 text-lg font-bold text-brand-navy">No se encontraron programas</h3>
            <p className="mt-1 text-sm text-brand-slate">Prueba cambiando los filtros o el término de búsqueda.</p>
            <Button onClick={() => { setCategoria("todos"); setBusqueda("") }} variant="outline" className="mt-4 rounded-full">
              Restablecer filtros
            </Button>
          </div>
        )}

        {/* Beneficios de Estudiar en APECC */}
        <div className="mt-16 rounded-3xl bg-brand-navy text-white p-8 sm:p-12">
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
