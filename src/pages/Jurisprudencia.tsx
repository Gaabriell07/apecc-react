import { Calendar, ExternalLink, Gavel } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { SHOP_URL } from "@/data/site"
import { usePageTitle } from "@/lib/usePageTitle"

export default function Jurisprudencia() {
  usePageTitle("Jurisprudencia Comentada | APECC")

  const fallos = [
    {
      id: 1,
      tribunal: "Corte Suprema de Justicia",
      tipo: "Acuerdo Plenario",
      numero: "Acuerdo Plenario Nº 01-2023/CIJ-116",
      materia: "Derecho Penal / Proceso Acusatorio",
      titulo: "Alcances del estándar probatorio para la prisión preventiva y sospecha fuerte",
      analisis: "Criterios vinculantes sobre la valoración de los elementos de convicción y el peligro procesal en las audiencias de prisión preventiva bajo el Código Procesal Penal.",
      fecha: "Setiembre 2026",
      url: `${SHOP_URL}/category/jurisprudencia/`,
    },
    {
      id: 2,
      tribunal: "Sala Penal Permanente",
      tipo: "Casación",
      numero: "Casación Nº 1422-2022/Cusco",
      materia: "Litigación Oral / Contraexamen",
      titulo: "Límites y pertinencia de las preguntas sugestivas en el contrainterrogatorio de peritos",
      analisis: "La Corte delimita las facultades del abogado defensor para formular preguntas asertivas y sugestivas dirigidas a contrastar la idoneidad metodológica del informe pericial.",
      fecha: "Agosto 2026",
      url: `${SHOP_URL}/category/jurisprudencia/`,
    },
    {
      id: 3,
      tribunal: "Tribunal Constitucional",
      tipo: "Sentencia Vinculante",
      numero: "Exp. Nº 00892-2023-PA/TC",
      materia: "Derecho Constitucional / Debido Proceso",
      titulo: "Derecho a la debida motivación de las resoluciones judiciales en sede cautelar",
      analisis: "Fija doctrina sobre la exigencia de fundamentación autónoma e individualizada frente a cada uno de los investigados en casos de presunto crimen organizado.",
      fecha: "Julio 2026",
      url: `${SHOP_URL}/category/jurisprudencia/`,
    },
    {
      id: 4,
      tribunal: "Sala Civil Permanente",
      tipo: "Casación",
      numero: "Casación Nº 3105-2021/Lima",
      materia: "Derecho Civil / Conciliación",
      titulo: "Eficacia ejecutiva del Acta de Conciliación con acuerdo y ejecución directa",
      analisis: "Reitera que el Acta de Conciliación Extrajudicial constituye título ejecutivo incuestionable para ordenar de inmediato el desalojo y el pago de penalidades pactadas.",
      fecha: "Junio 2026",
      url: `${SHOP_URL}/category/jurisprudencia/`,
    },
    {
      id: 5,
      tribunal: "Sala Penal Especial",
      tipo: "Recurso de Apelación",
      numero: "Apelación Nº 45-2024/Suprema",
      materia: "Corrupción de Funcionarios",
      titulo: "Tipicidad objetiva en el delito de colusión agravada y acreditación del perjuicio patrimonial",
      analisis: "Análisis sobre la prueba indiciaria y la concertación ilegal de funcionarios públicos en contrataciones con el Estado.",
      fecha: "Mayo 2026",
      url: `${SHOP_URL}/category/jurisprudencia/`,
    },
    {
      id: 6,
      tribunal: "Corte Superior de Justicia de Lima",
      tipo: "Pleno Jurisdiccional",
      numero: "Pleno Jurisdiccional de Familia 2026",
      materia: "Derecho de Familia",
      titulo: "Criterios para la fijación prudencial de la pensión de alimentos y cargas probatorias",
      analisis: "Uniformización de criterios judiciales para la determinación de las necesidades del alimentista y la capacidad económica presunta del demandado.",
      fecha: "Abril 2026",
      url: `${SHOP_URL}/category/jurisprudencia/`,
    },
  ]

  return (
    <div className="bg-background min-h-screen py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-8">
        {/* Encabezado */}
        <div className="mx-auto max-w-3xl text-center mb-14">
          <Badge className="bg-brand-navy text-brand-cream mb-3 px-3 py-1">Análisis Doctrinal</Badge>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-brand-navy">Jurisprudencia Relevante</h1>
          <p className="mt-4 text-lg text-brand-slate leading-relaxed">
            Selección comentada de fallos de la Corte Suprema, Tribunal Constitucional y acuerdos plenarios de interés para la comunidad jurídica y litigantes del país.
          </p>
        </div>

        {/* Grid de Jurisprudencia */}
        <div className="grid gap-6 md:grid-cols-2">
          {fallos.map((f) => (
            <Card key={f.id} className="border-border/80 bg-white p-6 shadow-xs hover:border-brand-coral/50 transition-colors flex flex-col justify-between">
              <div>
                <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                  <Badge variant="outline" className="border-brand-coral/40 text-brand-coral text-xs font-semibold">
                    {f.tipo}
                  </Badge>
                  <span className="text-xs text-muted-foreground flex items-center gap-1">
                    <Calendar className="size-3 text-brand-coral" /> {f.fecha}
                  </span>
                </div>
                <div className="text-xs font-bold uppercase tracking-wider text-brand-slate">{f.tribunal}</div>
                <div className="text-sm font-semibold text-brand-navy mt-0.5">{f.numero}</div>

                <h3 className="font-bold text-brand-navy text-lg mt-3 leading-snug">
                  {f.titulo}
                </h3>

                <Badge variant="secondary" className="bg-brand-cream text-brand-navy text-[11px] mt-2">
                  {f.materia}
                </Badge>

                <p className="mt-3 text-xs sm:text-sm text-brand-slate leading-relaxed">
                  {f.analisis}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-border/60">
                <Button asChild variant="outline" size="sm" className="w-full justify-between text-xs font-semibold rounded-lg hover:border-brand-coral hover:text-brand-coral">
                  <a href={f.url} target="_blank" rel="noreferrer">
                    Ver análisis completo en el portal <ExternalLink className="size-3.5" />
                  </a>
                </Button>
              </div>
            </Card>
          ))}
        </div>

        {/* Banner Informativo */}
        <div className="mt-16 rounded-3xl bg-brand-navy text-white p-8 sm:p-12 text-center">
          <Gavel className="mx-auto size-12 text-brand-coral mb-4" />
          <h2 className="text-2xl sm:text-3xl font-bold">Base de Jurisprudencia APECC</h2>
          <p className="mt-2 text-brand-cream/80 text-sm max-w-xl mx-auto">
            Accede a nuestra colección continua de jurisprudencia penal, civil y constitucional analizada por los juristas y docentes de nuestra plana académica.
          </p>
          <div className="mt-6">
            <Button asChild size="lg" className="rounded-full bg-brand-coral hover:bg-brand-coral/90 text-white font-semibold px-8 shadow-sm">
              <a href={`${SHOP_URL}/category/jurisprudencia/`} target="_blank" rel="noreferrer">
                Explorar Jurisprudencia en el Portal <ExternalLink className="size-4 ml-2" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
