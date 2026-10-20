import { CheckCircle2, ChevronRight, Clock, DollarSign, FileCheck, Lock, PhoneCall, Scale, Users } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { WA_PASANTIAS, waLink } from "@/data/site"
import { usePageTitle } from "@/lib/usePageTitle"

export default function CentroConciliacion() {
  usePageTitle("Centro de Conciliación y Arbitraje | APECC")

  const materiasCivil = [
    "Desalojo por vencimiento de contrato o falta de pago",
    "Obligación de dar suma de dinero (cobro de deudas, letras, pagarés)",
    "Incumplimiento de contratos civiles y comerciales",
    "División y partición de bienes y herencias",
    "Indemnización por daños y perjuicios",
    "Resolución o rescisión de contratos de compraventa y arrendamiento",
    "Retiro de obras o edificaciones no autorizadas",
  ]

  const materiasFamilia = [
    "Pensión de alimentos para hijos menores o mayores de edad estudiantes",
    "Aumento, reducción, exoneración o prorrateo de pensión de alimentos",
    "Tenencia y custodia legal de menores de edad",
    "Régimen de visitas (fijación, ampliación o flexibilización)",
    "Gastos de embarazo y parto",
    "Liquidación y división voluntaria de sociedad de gananciales",
  ]

  const ventajas = [
    { icon: Clock, title: "Rapidez Comprobada", desc: "Resuelve tu controversia en una sola audiencia o en pocos días, evitando procesos judiciales que duran años." },
    { icon: DollarSign, title: "Ahorro Económico", desc: "Tarifas sociales y transparentes muy por debajo del costo de honorarios judiciales y tasas procesales." },
    { icon: FileCheck, title: "Valor de Sentencia Judicial", desc: "El Acta de Conciliación con acuerdo tiene mérito ejecutivo equivalente a una sentencia judicial firme e inimpugnable." },
    { icon: Lock, title: "Absoluta Confidencialidad", desc: "Todo lo tratado durante las sesiones se mantiene bajo estricta reserva y secreto profesional de ley." },
  ]

  const whatsappConciliacion = waLink(WA_PASANTIAS, "Hola, deseo solicitar una Audiencia de Conciliación en el Centro de APECC.")

  return (
    <div className="bg-background min-h-screen py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-8">
        {/* Encabezado */}
        <div className="mx-auto max-w-3xl text-center mb-16">
          <Badge className="bg-brand-coral text-white mb-3 px-3 py-1">Servicio a la Comunidad</Badge>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-brand-navy">
            Centro de Conciliación y Arbitraje APECC
          </h1>
          <p className="mt-4 text-lg text-brand-slate leading-relaxed">
            Autorizado por <strong>Resolución Viceministerial Nº 141-2001-JUS</strong>.
            Ofrecemos a la ciudadanía y empresas la solución pacífica, legal y rápida de controversias sin necesidad de iniciar un juicio.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Button asChild size="lg" className="rounded-full bg-brand-coral hover:bg-brand-coral/90 text-white font-semibold px-8 shadow-md">
              <a href={whatsappConciliacion} target="_blank" rel="noreferrer">
                Solicitar Audiencia de Conciliación <ChevronRight className="size-4 ml-1" />
              </a>
            </Button>
          </div>
        </div>

        {/* ¿Qué es el Acta de Conciliación? */}
        <div className="mb-16 rounded-3xl bg-brand-navy text-white p-8 sm:p-12 relative overflow-hidden">
          <div className="grid gap-8 md:grid-cols-12 items-center">
            <div className="md:col-span-8">
              <span className="text-brand-coral text-xs font-bold uppercase tracking-wider">Eficacia Jurídica Plena</span>
              <h2 className="text-2xl sm:text-3xl font-extrabold mt-1">¿Por qué conciliar en vez de ir a juicio?</h2>
              <p className="mt-4 text-brand-cream/90 text-sm sm:text-base leading-relaxed">
                Según el <strong>Artículo 18 de la Ley de Conciliación Nº 26872</strong>, el Acta de Conciliación que contiene acuerdos entre las partes constituye <strong>título de ejecución</strong>. Esto significa que si una de las partes incumple lo acordado, se puede exigir su cumplimiento forzoso ante el juez de manera inmediata, exactamente igual que una sentencia judicial consentida.
              </p>
            </div>
            <div className="md:col-span-4 flex justify-center">
              <div className="rounded-2xl bg-white/10 border border-white/20 p-6 text-center backdrop-blur-sm">
                <Scale className="size-12 text-brand-coral mx-auto mb-2" />
                <div className="text-lg font-bold">Título de Ejecución</div>
                <p className="text-xs text-brand-cream/70 mt-1">Mérito ejecutivo equivalente a una Sentencia del Poder Judicial</p>
              </div>
            </div>
          </div>
        </div>

        {/* Ventajas */}
        <div className="mb-20">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h2 className="text-3xl font-bold text-brand-navy">Beneficios de nuestro Centro</h2>
            <p className="text-brand-slate text-sm mt-2">Ponemos a tu servicio conciliadores de primer nivel en un ambiente seguro y neutral.</p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {ventajas.map((v) => (
              <Card key={v.title} className="border-border/80 bg-white p-6 shadow-xs hover:border-brand-coral/50 transition-colors">
                <v.icon className="size-8 text-brand-coral mb-3" />
                <h3 className="font-bold text-brand-navy text-lg">{v.title}</h3>
                <p className="mt-2 text-xs sm:text-sm text-brand-slate leading-relaxed">{v.desc}</p>
              </Card>
            ))}
          </div>
        </div>

        {/* Materias Conciliables */}
        <div className="grid gap-8 lg:grid-cols-2">
          {/* Materia Civil y Comercial */}
          <Card className="border-border/80 bg-white p-6 sm:p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="size-10 rounded-xl bg-brand-navy text-white flex items-center justify-center shrink-0">
                <Scale className="size-5 text-brand-coral" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-brand-navy">Materia Civil y Comercial</h3>
                <p className="text-xs text-brand-slate">Conflictos patrimoniales y contractuales</p>
              </div>
            </div>
            <ul className="space-y-3">
              {materiasCivil.map((m, i) => (
                <li key={i} className="flex items-start gap-2.5 text-sm text-brand-slate">
                  <CheckCircle2 className="size-4 text-brand-coral shrink-0 mt-0.5" />
                  <span>{m}</span>
                </li>
              ))}
            </ul>
          </Card>

          {/* Materia de Familia */}
          <Card className="border-border/80 bg-white p-6 sm:p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="size-10 rounded-xl bg-brand-navy text-white flex items-center justify-center shrink-0">
                <Users className="size-5 text-brand-coral" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-brand-navy">Materia de Familia</h3>
                <p className="text-xs text-brand-slate">Bienestar de los hijos y acuerdos familiares</p>
              </div>
            </div>
            <ul className="space-y-3">
              {materiasFamilia.map((m, i) => (
                <li key={i} className="flex items-start gap-2.5 text-sm text-brand-slate">
                  <CheckCircle2 className="size-4 text-brand-coral shrink-0 mt-0.5" />
                  <span>{m}</span>
                </li>
              ))}
            </ul>
          </Card>
        </div>

        {/* Pasos para conciliar */}
        <div className="mt-20 rounded-3xl border border-border bg-muted/30 p-8 sm:p-12">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h2 className="text-3xl font-bold text-brand-navy">¿Cómo solicitar una audiencia?</h2>
            <p className="text-brand-slate text-sm mt-2">Procedimiento sencillo y guiado por nuestros secretarios y conciliadores.</p>
          </div>
          <div className="grid gap-6 sm:grid-cols-3">
            <div className="rounded-2xl bg-white p-6 border border-border/80 text-center">
              <div className="size-10 rounded-full bg-brand-navy text-brand-coral font-extrabold flex items-center justify-center mx-auto mb-3">1</div>
              <h3 className="font-bold text-brand-navy">Presentación de Solicitud</h3>
              <p className="text-xs text-brand-slate mt-2 leading-relaxed">Presenta los datos de ambas partes y describe brevemente el conflicto a conciliar.</p>
            </div>
            <div className="rounded-2xl bg-white p-6 border border-border/80 text-center">
              <div className="size-10 rounded-full bg-brand-navy text-brand-coral font-extrabold flex items-center justify-center mx-auto mb-3">2</div>
              <h3 className="font-bold text-brand-navy">Invitación a Conciliar</h3>
              <p className="text-xs text-brand-slate mt-2 leading-relaxed">El Centro de APECC notifica a la otra parte con fecha y hora para la audiencia.</p>
            </div>
            <div className="rounded-2xl bg-white p-6 border border-border/80 text-center">
              <div className="size-10 rounded-full bg-brand-navy text-brand-coral font-extrabold flex items-center justify-center mx-auto mb-3">3</div>
              <h3 className="font-bold text-brand-navy">Audiencia y Acta</h3>
              <p className="text-xs text-brand-slate mt-2 leading-relaxed">Con la ayuda del conciliador, llegan a un acuerdo y se firma el Acta con valor de sentencia.</p>
            </div>
          </div>
          <div className="mt-10 text-center">
            <Button asChild size="lg" className="rounded-full bg-brand-navy hover:bg-brand-navy/90 text-white font-semibold px-8 shadow-sm">
              <a href={whatsappConciliacion} target="_blank" rel="noreferrer">
                Escríbenos para iniciar tu trámite <PhoneCall className="size-4 ml-2" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
