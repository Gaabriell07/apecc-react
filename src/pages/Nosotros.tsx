import { Award, CheckCircle2, ChevronRight, MapPin, ShieldCheck, Users } from "lucide-react"
import { Link } from "react-router"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { usePageTitle } from "@/lib/usePageTitle"

export default function Nosotros() {
  usePageTitle("Nosotros | APECC - Asociación Peruana de Ciencias Jurídicas y Conciliación")

  const stats = [
    { value: "+25 años", label: "De trayectoria jurídica", sub: "Desde el año 2000 capacitando al país" },
    { value: "+150", label: "Docentes y juristas", sub: "Magistrados, fiscales y catedráticos" },
    { value: "6 países", label: "Pasantías internacionales", sub: "Argentina, Brasil, EE.UU., Colombia y más" },
    { value: "+15,000", label: "Egresados certificados", sub: "En todo el territorio nacional" },
  ]

  const acreditaciones = [
    {
      title: "Centro de Formación y Capacitación de Conciliadores",
      norma: "R.M. Nº 122-2000-JUS / R.D. Nº 915-2008-JUS",
      desc: "Autorizado por el Ministerio de Justicia y Derechos Humanos (MINJUS) para formar y acreditar conciliadores extrajudiciales y especialistas en conciliación familiar con registro oficial.",
    },
    {
      title: "Centro de Conciliación y Arbitraje APECC",
      norma: "R.V. Nº 141-2001-JUS",
      desc: "Centro autorizado para brindar servicios de solución pacífica de conflictos. Las actas de conciliación expedidas tienen mérito ejecutivo equivalente a una sentencia judicial firme.",
    },
    {
      title: "Ley de Conciliación Nº 26872 y D.S. 001-98-JUS",
      norma: "Marco Legal Vigente",
      desc: "Todas nuestras actividades académicas y operativas cumplen rigurosamente con los estándares legales y normativos del Estado Peruano.",
    },
  ]

  const valores = [
    { title: "Excelencia Académica", desc: "Plana docente integrada por los más reconocidos especialistas del foro jurídico." },
    { title: "Compromiso Ético", desc: "Fomentamos la cultura de paz, el diálogo constructivo y el estricto respeto a la ley." },
    { title: "Innovación Continua", desc: "Metodologías prácticas de litigación oral, teoría del caso y simulación de audiencias." },
    { title: "Validez Oficial", desc: "Certificaciones y diplomas con respaldo institucional y acreditación MINJUS." },
  ]

  return (
    <div className="bg-background">
      {/* Hero Institucional */}
      <section className="relative overflow-hidden bg-brand-navy py-16 sm:py-24 text-white">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#f49685_1px,transparent_1px)] [background-size:16px_16px]" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <Badge variant="outline" className="mb-4 border-brand-coral/40 bg-brand-coral/10 text-brand-coral px-4 py-1 text-sm font-semibold rounded-full">
              Institucional
            </Badge>
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white">
              Asociación Peruana de Ciencias Jurídicas y Conciliación
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-brand-cream/90 leading-relaxed">
              Más de 25 años liderando la formación, capacitación y alta especialización de profesionales del Derecho y conciliadores en todo el Perú.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Button asChild size="lg" className="rounded-full bg-brand-coral hover:bg-brand-coral/90 text-white font-semibold px-8 shadow-lg">
                <Link to="/cursos-y-diplomados">Explorar Programas</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="rounded-full border-white/30 text-white hover:bg-white/10 px-8">
                <Link to="/conciliacion">Conocer Centro MINJUS</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Cifras de Impacto */}
      <section className="relative -mt-10 z-10 mx-auto max-w-7xl px-4 sm:px-8">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((s) => (
            <Card key={s.label} className="border-border/80 bg-white/95 backdrop-blur-md shadow-md text-center py-6">
              <CardContent className="p-4">
                <div className="text-3xl sm:text-4xl font-extrabold text-brand-navy">{s.value}</div>
                <div className="mt-1 font-semibold text-brand-coral text-base">{s.label}</div>
                <p className="mt-1 text-xs text-brand-slate">{s.sub}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Quiénes somos y Misión / Visión */}
      <section className="mx-auto max-w-7xl px-4 sm:px-8 py-16 sm:py-24">
        <div className="grid gap-12 lg:grid-cols-2 items-center">
          <div>
            <span className="text-sm font-bold tracking-wide uppercase text-brand-coral">Nuestra Historia</span>
            <h2 className="mt-2 text-3xl sm:text-4xl font-extrabold text-brand-navy">
              ¿Quiénes somos?
            </h2>
            <p className="mt-4 text-base sm:text-lg text-brand-slate leading-relaxed">
              La <strong>Asociación Peruana de Ciencias Jurídicas y Conciliación (APECC)</strong> fue fundada con la visión de elevar los estándares de la práctica jurídica y fomentar los mecanismos alternativos de resolución de conflictos en el Perú.
            </p>
            <p className="mt-4 text-base text-brand-slate leading-relaxed">
              Bajo el liderazgo académico del <strong>Dr. Oscar Peña Gonzáles</strong>, autor de reconocidas obras doctrinarias y manuales de litigación oral, APECC se ha consolidado como un referente indiscutible en la formación de abogados, jueces, fiscales y conciliadores extrajudiciales.
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="rounded-xl border border-border bg-muted/40 p-5">
                <h3 className="font-bold text-brand-navy text-lg flex items-center gap-2">
                  <CheckCircle2 className="size-5 text-brand-coral" /> Misión
                </h3>
                <p className="mt-2 text-sm text-brand-slate">
                  Brindar educación jurídica de máxima calidad mediante programas prácticos y actualizados, capacitando a juristas y conciliadores con rigor ético y excelencia procesal.
                </p>
              </div>
              <div className="rounded-xl border border-border bg-muted/40 p-5">
                <h3 className="font-bold text-brand-navy text-lg flex items-center gap-2">
                  <Award className="size-5 text-brand-coral" /> Visión
                </h3>
                <p className="mt-2 text-sm text-brand-slate">
                  Ser la institución académica líder en Latinoamérica en litigación oral, derecho penal y resolución pacífica de controversias, con proyección internacional constante.
                </p>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <img src="/images/nosotros1.webp" alt="APECC Actividades" className="rounded-2xl shadow-lg object-cover w-full h-64" />
            <img src="/images/nosotros3.webp" alt="Conferencias APECC" className="rounded-2xl shadow-lg object-cover w-full h-64 mt-6" />
            <img src="/images/nosotros2.webp" alt="Capacitación Jurídica" className="rounded-2xl shadow-lg object-cover w-full h-64" />
            <img src="/images/nosotros5.webp" alt="Comunidad APECC" className="rounded-2xl shadow-lg object-cover w-full h-64 mt-6" />
          </div>
        </div>
      </section>

      {/* Acreditaciones MINJUS */}
      <section className="bg-brand-navy/5 py-16 border-y border-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-8">
          <div className="mx-auto max-w-3xl text-center mb-12">
            <span className="text-sm font-bold tracking-wide uppercase text-brand-coral">Respaldo del Estado Peruano</span>
            <h2 className="mt-2 text-3xl font-extrabold text-brand-navy">
              Autorizaciones y Acreditaciones Oficiales
            </h2>
            <p className="mt-3 text-brand-slate">
              Garantía jurídica y validez legal en todos nuestros programas y actas conciliatorias.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {acreditaciones.map((a) => (
              <Card key={a.title} className="border-border/80 bg-white shadow-sm flex flex-col justify-between">
                <CardContent className="p-6">
                  <div className="size-12 rounded-xl bg-brand-navy text-white flex items-center justify-center mb-4">
                    <ShieldCheck className="size-6 text-brand-coral" />
                  </div>
                  <Badge variant="secondary" className="mb-2 text-xs font-semibold text-brand-navy bg-brand-cream">
                    {a.norma}
                  </Badge>
                  <h3 className="font-bold text-brand-navy text-lg mt-2">{a.title}</h3>
                  <p className="mt-3 text-sm text-brand-slate leading-relaxed">{a.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Valores institucionales */}
      <section className="mx-auto max-w-7xl px-4 sm:px-8 py-16 sm:py-24">
        <div className="mx-auto max-w-2xl text-center mb-12">
          <span className="text-sm font-bold tracking-wide uppercase text-brand-coral">Nuestros Principios</span>
          <h2 className="mt-2 text-3xl font-extrabold text-brand-navy">Pilares de APECC</h2>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {valores.map((v) => (
            <div key={v.title} className="rounded-xl border border-border/80 p-6 bg-white shadow-xs hover:border-brand-coral/50 transition-colors">
              <h3 className="font-bold text-brand-navy text-lg">{v.title}</h3>
              <p className="mt-2 text-sm text-brand-slate leading-relaxed">{v.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Sede Institucional */}
      <section className="bg-brand-navy text-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-8 grid gap-8 md:grid-cols-2 items-center">
          <div>
            <Badge className="bg-brand-coral text-white mb-3">Sede Central</Badge>
            <h2 className="text-3xl font-extrabold">Visítanos en Lince, Lima</h2>
            <p className="mt-4 text-brand-cream/90 leading-relaxed">
              Nuestras instalaciones cuentan con salas de audiencias para conciliación, aulas audiovisuales de simulación de juicios orales y centro de atención al usuario.
            </p>
            <div className="mt-6 space-y-3 text-sm text-brand-cream/80">
              <div className="flex items-center gap-3">
                <MapPin className="size-5 text-brand-coral shrink-0" />
                <span>Jr. Carlos Alayza y Roel 2647, Lince, Lima - Perú</span>
              </div>
              <div className="flex items-center gap-3">
                <Users className="size-5 text-brand-coral shrink-0" />
                <span>Atención: Lunes a Viernes 9:00 am - 7:00 pm | Sábados 9:00 am - 1:00 pm</span>
              </div>
            </div>
            <div className="mt-8">
              <Button asChild size="lg" className="rounded-full bg-brand-coral hover:bg-brand-coral/90 text-white font-semibold">
                <a href="https://wa.me/51996894991?text=Hola,%20deseo%20visitar%20la%20sede%20de%20APECC" target="_blank" rel="noreferrer">
                  Contactar por WhatsApp <ChevronRight className="size-4 ml-1" />
                </a>
              </Button>
            </div>
          </div>
          <div className="rounded-2xl overflow-hidden shadow-2xl border border-white/20">
            <img src="/images/nosotros6.webp" alt="Sede APECC" className="w-full h-80 object-cover" />
          </div>
        </div>
      </section>
    </div>
  )
}
