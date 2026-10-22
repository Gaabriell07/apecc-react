import { Award, CheckCircle2, ChevronRight, FileText, Scale, ShieldCheck } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { WA_PASANTIAS, waLink } from "@/data/site"
import { usePageTitle } from "@/lib/usePageTitle"

export default function Conciliacion() {
  usePageTitle("Conciliación Extrajudicial | Centro de Formación MINJUS APECC")

  const cursosConciliacion = [
    {
      titulo: "Curso de Formación y Capacitación de Conciliadores Extrajudiciales",
      resolucion: "R.M. Nº 122-2000-JUS / R.D. Nº 915-2008-JUS",
      duracion: "Fase Lectiva + Prácticas Reales de Audiencia",
      modalidad: "Semipresencial / Virtual en Vivo",
      certificacion: "Registro Oficial como Conciliador Extrajudicial ante el MINJUS",
      image: "/Cursos/conciliacion_2.jpg",
      beneficios: [
        "Acreditación oficial del Ministerio de Justicia y Derechos Humanos",
        "Habilita para ejercer profesionalmente en cualquier centro de conciliación del país",
        "Módulos en teoría del conflicto, negociación de Harvard y técnicas de audiencia",
        "Simulaciones de casos reales y talleres de redacción de Actas con valor de sentencia",
      ],
      whatsapp: waLink(WA_PASANTIAS, "Hola, solicito información y matrícula para el Curso de Formación de Conciliadores Extrajudiciales."),
    },
    {
      titulo: "Curso de Especialización en Conciliación Extrajudicial Familiar",
      resolucion: "R.D. Nº 915-2008-JUS / Acreditado MINJUS",
      duracion: "Alta Especialización en Materia de Familia",
      modalidad: "Virtual en Vivo con Talleres Prácticos",
      certificacion: "Registro de Conciliador Especialista en Familia ante el MINJUS",
      image: "/Cursos/conciliacion.jpg",
      beneficios: [
        "Requisito indispensable para conciliar materias de alimentos, tenencia y régimen de visitas",
        "Abordaje psicológico y emocional de la dinámica familiar en crisis",
        "Interés superior del niño, niña y adolescente en sede conciliatoria",
        "Elaboración de fórmulas conciliatorias sostenibles y actas inobjetables",
      ],
      whatsapp: waLink(WA_PASANTIAS, "Hola, solicito información para el Curso de Especialización en Conciliación Familiar."),
    },
  ]

  const requisitos = [
    "Copia simple de DNI vigente",
    "Estudios secundarios completos (para conciliador básico)",
    "Resolución de acreditación como conciliador previo (para especialización en familia)",
    "Ficha de matrícula y fotografía digital",
  ]

  return (
    <div className="bg-background min-h-screen py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-8">
        {/* Encabezado */}
        <div className="mx-auto max-w-3xl text-center mb-16">
          <Badge className="bg-brand-coral text-white mb-3 px-3 py-1">Acreditación Oficial MINJUS</Badge>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-brand-navy">
            Centro de Formación y Capacitación de Conciliadores
          </h1>
          <p className="mt-4 text-lg text-brand-slate leading-relaxed">
            Autorizado por <strong>Resolución Ministerial Nº 122-2000-JUS</strong> y <strong>Resolución Directoral Nº 915-2008-JUS</strong>.
            Formamos conciliadores líderes capacitados para resolver controversias pacíficamente al amparo de la Ley Nº 26872.
          </p>
        </div>

        {/* Marco Legal Destacado */}
        <div className="mb-14 rounded-2xl border border-brand-coral/30 bg-brand-cream/30 p-6 sm:p-8 flex flex-col md:flex-row items-center gap-6">
          <div className="size-16 rounded-2xl bg-brand-navy text-white flex items-center justify-center shrink-0">
            <ShieldCheck className="size-8 text-brand-coral" />
          </div>
          <div>
            <h2 className="text-xl font-bold text-brand-navy">Respaldo Oficial del Ministerio de Justicia (MINJUS)</h2>
            <p className="mt-2 text-sm text-brand-slate leading-relaxed">
              APECC cuenta con más de dos décadas de autorización legal ininterrumpida para impartir los programas formativos exigidos por el Estado Peruano. Nuestros egresados obtienen su registro oficial y código de conciliador extrajudicial con plena vigencia nacional.
            </p>
          </div>
        </div>

        {/* Programas */}
        <div className="space-y-12">
          {cursosConciliacion.map((c) => (
            <Card key={c.titulo} className="overflow-hidden border-border/80 bg-white shadow-sm hover:shadow-md transition-shadow">
              <div className="grid gap-8 lg:grid-cols-12 items-center">
                <div className="lg:col-span-5 flex items-center justify-center bg-slate-100/60 p-4 lg:p-6 min-h-[320px]">
                  <img
                    src={c.image}
                    alt={c.titulo}
                    className="max-h-[380px] sm:max-h-[440px] w-auto max-w-full rounded-lg object-contain shadow-sm"
                  />
                </div>
                <div className="lg:col-span-7 p-6 sm:p-10 flex flex-col justify-between">
                  <div>
                    <div className="flex flex-wrap items-center gap-2 mb-2">
                      <Badge variant="secondary" className="bg-brand-cream text-brand-navy text-xs font-semibold">
                        {c.resolucion}
                      </Badge>
                      <Badge variant="outline" className="text-brand-coral border-brand-coral/40 text-xs font-semibold">
                        {c.modalidad}
                      </Badge>
                    </div>
                    <h2 className="text-2xl sm:text-3xl font-extrabold text-brand-navy mt-1">{c.titulo}</h2>
                    <p className="mt-3 text-sm font-semibold text-brand-coral flex items-center gap-1.5">
                      <Award className="size-4" /> Certificación: {c.certificacion}
                    </p>

                    <div className="mt-6">
                      <h4 className="text-sm font-bold text-brand-navy uppercase tracking-wide">Ventajas y Competencias:</h4>
                      <ul className="mt-3 space-y-2">
                        {c.beneficios.map((b, i) => (
                          <li key={i} className="flex items-start gap-2.5 text-sm text-brand-slate">
                            <CheckCircle2 className="size-4 text-brand-coral shrink-0 mt-0.5" />
                            <span>{b}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="mt-8">
                    <Button asChild size="lg" className="rounded-full bg-brand-coral hover:bg-brand-coral/90 text-white font-semibold px-8 shadow-sm">
                      <a href={c.whatsapp} target="_blank" rel="noreferrer">
                        Consultar Próximo Inicio y Matrícula <ChevronRight className="size-4 ml-1" />
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Requisitos y Proceso de Inscripción */}
        <div className="mt-16 grid gap-8 md:grid-cols-2">
          <Card className="border-border/80 bg-white p-6 sm:p-8">
            <h3 className="text-xl font-bold text-brand-navy flex items-center gap-2">
              <FileText className="size-5 text-brand-coral" /> Requisitos de Admisión
            </h3>
            <ul className="mt-4 space-y-3">
              {requisitos.map((r, i) => (
                <li key={i} className="flex items-center gap-3 text-sm text-brand-slate">
                  <div className="size-6 rounded-full bg-brand-cream text-brand-navy text-xs font-bold flex items-center justify-center shrink-0">
                    {i + 1}
                  </div>
                  <span>{r}</span>
                </li>
              ))}
            </ul>
          </Card>

          <Card className="border-border/80 bg-white p-6 sm:p-8">
            <h3 className="text-xl font-bold text-brand-navy flex items-center gap-2">
              <Scale className="size-5 text-brand-coral" /> Salida Laboral
            </h3>
            <p className="mt-3 text-sm text-brand-slate leading-relaxed">
              Al culminar y aprobar satisfactoriamente el programa, quedas habilitado para:
            </p>
            <ul className="mt-3 space-y-2 text-sm text-brand-slate">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="size-4 text-brand-coral shrink-0 mt-0.5" />
                <span>Ejercer como conciliador en centros públicos o privados del Perú.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="size-4 text-brand-coral shrink-0 mt-0.5" />
                <span>Fundar y dirigir tu propio Centro de Conciliación Extrajudicial.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="size-4 text-brand-coral shrink-0 mt-0.5" />
                <span>Asesorar a empresas e instituciones en métodos alternos de resolución de conflictos.</span>
              </li>
            </ul>
          </Card>
        </div>
      </div>
    </div>
  )
}
