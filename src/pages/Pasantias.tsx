import { Building2, CheckCircle2, ChevronRight, Globe2, MapPin, ShieldCheck, Users } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { WA_PASANTIAS, waLink } from "@/data/site"
import { usePageTitle } from "@/lib/usePageTitle"

export default function Pasantias() {
  usePageTitle("Pasantías Internacionales | APECC")

  const destinos = [
    {
      pais: "Argentina",
      ciudad: "Buenos Aires",
      image: "/Cursos/pasantia_argentina.jpg",
      titulo: "Pasantía Internacional en Litigación Oral - Argentina",
      institucion: "Cortes Judiciales de la Nación y Universidades de Buenos Aires",
      puntos: [
        "Presencia en audiencias orales reales del sistema acusatorio argentino",
        "Conferencias magistrales con jueces federales y procesalistas de primer orden",
        "Taller intensivo de interrogatorio y contrainterrogatorio práctico",
        "Certificación académica internacional con carga horaria",
      ],
      whatsapp: waLink(WA_PASANTIAS, "Hola, solicito información detallada sobre la Pasantía en Argentina."),
    },
    {
      pais: "Brasil",
      ciudad: "São Paulo / Brasilia",
      image: "/Cursos/pasantia_brasil.jpg",
      titulo: "Pasantía Internacional en Derecho y Litigación - Brasil",
      institucion: "Tribunales de Justicia y Centros de Resolución de Conflictos",
      puntos: [
        "Estudio comparado del proceso penal brasileño y el modelo acusatorio",
        "Visitas guiadas a los Tribunales Superiores de Justicia",
        "Intercambio con juristas y defensores públicos brasileños",
        "Certificado expedido con respaldo de instituciones anfitrionas",
      ],
      whatsapp: waLink(WA_PASANTIAS, "Hola, solicito información detallada sobre la Pasantía en Brasil."),
    },
    {
      pais: "Estados Unidos",
      ciudad: "Miami, Florida",
      image: "/Cursos/pasantia_miami.jpg",
      titulo: "Pasantía en Litigación Oral y Sistema Acusatorio - Miami (EE.UU.)",
      institucion: "Cortes Federales y Estatales del Condado de Miami-Dade",
      puntos: [
        "Asistencia a juicios por jurado en Cortes Federales de EE.UU.",
        "Sesiones con litigantes certificados y fiscales del Estado de Florida",
        "Técnicas avanzadas de teoría del caso bajo el estándar anglosajón",
        "Diploma oficial de participación internacional",
      ],
      whatsapp: waLink(WA_PASANTIAS, "Hola, solicito información detallada sobre la Pasantía en Miami (EE.UU.)."),
    },
    {
      pais: "Colombia",
      ciudad: "Medellín",
      image: "/Cursos/pasantia_medellin.jpg",
      titulo: "Pasantía Internacional en Sistema Acusatorio y Dogmática Penal - Colombia",
      institucion: "Juzgados Penales de Circuito y Universidades de Medellín",
      puntos: [
        "Análisis de casos complejos en extinción de dominio y lavado de activos",
        "Psicología del testimonio y razonamiento probatorio",
        "Práctica en salas de audiencias del sistema penal colombiano",
        "Certificación conjunta internacional",
      ],
      whatsapp: waLink(WA_PASANTIAS, "Hola, solicito información detallada sobre la Pasantía en Medellín (Colombia)."),
    },
  ]

  const beneficios = [
    { icon: Building2, title: "Audiencias In Situ", desc: "Observa juicios reales y audiencias preliminares directamente en cortes judiciales internacionales." },
    { icon: Globe2, title: "Networking Global", desc: "Conecta con colegas litigantes, jueces y fiscales de diversos países de la región." },
    { icon: ShieldCheck, title: "Certificación de Élite", desc: "Diplomas con valor curricular expedidos por APECC e instituciones anfitrionas." },
    { icon: Users, title: "Grupos Reducidos", desc: "Asesoría personalizada y acompañamiento constante de nuestros directores académicos." },
  ]

  return (
    <div className="bg-background min-h-screen py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-8">
        {/* Encabezado */}
        <div className="mx-auto max-w-3xl text-center mb-16">
          <Badge className="bg-brand-coral text-white mb-3 px-3 py-1">Experiencia Global</Badge>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-brand-navy">Pasantías Internacionales APECC</h1>
          <p className="mt-4 text-lg text-brand-slate leading-relaxed">
            Vive una inmersión académica única. Conoce de primera mano cómo se litiga y resuelven casos en las cortes judiciales más prestigiosas del continente.
          </p>
        </div>

        {/* Destinos */}
        <div className="space-y-12">
          {destinos.map((d, index) => (
            <Card key={d.titulo} className="overflow-hidden border-border/80 bg-white shadow-sm hover:shadow-md transition-shadow">
              <div className={`grid gap-8 lg:grid-cols-2 items-center ${index % 2 === 1 ? "lg:grid-flow-dense" : ""}`}>
                <div className={`relative flex h-80 sm:h-[420px] w-full items-center justify-center bg-slate-100/80 p-2 sm:p-4 ${index % 2 === 1 ? "lg:col-start-2" : ""}`}>
                  <img src={d.image} alt={d.titulo} className="h-full w-full object-contain" />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-brand-navy text-white text-xs px-3 py-1 font-semibold flex items-center gap-1 shadow-md">
                      <MapPin className="size-3 text-brand-coral" /> {d.ciudad}, {d.pais}
                    </Badge>
                  </div>
                </div>

                <div className="p-6 sm:p-10 flex flex-col justify-between">
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wide text-brand-coral">{d.institucion}</span>
                    <h2 className="mt-1 text-2xl sm:text-3xl font-extrabold text-brand-navy">{d.titulo}</h2>
                    <ul className="mt-6 space-y-2.5">
                      {d.puntos.map((p, i) => (
                        <li key={i} className="flex items-start gap-2.5 text-sm text-brand-slate">
                          <CheckCircle2 className="size-4 text-brand-coral shrink-0 mt-0.5" />
                          <span>{p}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-8 flex flex-wrap items-center gap-4">
                    <Button asChild size="lg" className="rounded-full bg-brand-coral hover:bg-brand-coral/90 text-white font-semibold px-6 shadow-sm">
                      <a href={d.whatsapp} target="_blank" rel="noreferrer">
                        Solicitar Cronograma y Requisitos <ChevronRight className="size-4 ml-1" />
                      </a>
                    </Button>
                    <span className="text-xs text-muted-foreground font-medium">Cupos limitados por delegación</span>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Beneficios */}
        <div className="mt-20 rounded-3xl bg-brand-navy text-white p-8 sm:p-12">
          <div className="mx-auto max-w-2xl text-center mb-10">
            <h2 className="text-3xl font-bold">Ventajas de viajar con APECC</h2>
            <p className="mt-2 text-brand-cream/80 text-sm">Organización integral, convenios institucionales y acompañamiento permanente.</p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {beneficios.map((b) => (
              <div key={b.title} className="rounded-2xl bg-white/5 border border-white/10 p-6">
                <b.icon className="size-8 text-brand-coral mb-3" />
                <h3 className="font-bold text-base">{b.title}</h3>
                <p className="text-xs text-brand-cream/70 mt-2 leading-relaxed">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
