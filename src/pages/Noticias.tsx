import { useRef, useState } from "react"
import { Calendar, ChevronRight, ExternalLink, Eye, Flame, Heart, Newspaper, Play, Video } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { SHOP_URL } from "@/data/site"
import { usePageTitle } from "@/lib/usePageTitle"

export default function Noticias() {
  usePageTitle("Noticias Jurídicas & Videos Académicos | APECC")

  const tiktokVideos = [
    {
      id: 1,
      youtubeId: "Wf6FzlTtpxk",
      titulo: "¿Quiénes pueden ser Conciliadores Extrajudiciales y campo laboral?",
      autor: "Dr. Oscar Peña Gonzáles",
      tema: "Conciliación Extrajudicial",
      vistas: "14.2K",
      likes: "1.4K",
      duracion: "45:20",
      resumen: "El Dr. Oscar Peña Gonzáles, presidente de APECC, expone el marco legal de la Ley Nº 26872, los requisitos de acreditación ante el MINJUS y las oportunidades laborales del conciliador.",
      imagen: "/Cursos/conciliacion.jpg",
      tags: ["#conciliacion", "#minjus", "#apecc", "#derechoperu"],
    },
    {
      id: 2,
      youtubeId: "vQJPpSFdPAk",
      titulo: "Conferencia: Modificatorias en Materia Penal y Análisis de la Ley 32108",
      autor: "Dr. Frank Almanza",
      tema: "Derecho Penal Acusatorio",
      vistas: "21.8K",
      likes: "2.3K",
      duracion: "1:15:30",
      resumen: "Análisis dogmático y procesal de las recientes reformas penales en crimen organizado, tipicidad y allanamientos judiciales.",
      imagen: "/Cursos/CFCAL.jpg",
      tags: ["#derechopenal", "#ley32108", "#frankalmanza", "#fiscalia"],
    },
    {
      id: 3,
      youtubeId: "9r0pU7LiSW8",
      titulo: "Pasantía Internacional en Litigación Oral: Audiencia Judicial en Argentina",
      autor: "Delegación APECC en Argentina",
      tema: "Pasantías Internacionales",
      vistas: "18.5K",
      likes: "1.9K",
      duracion: "38:40",
      resumen: "Nuestros estudiantes y juristas peruanos presenciando audiencias reales del sistema acusatorio argentino en los tribunales de Buenos Aires.",
      imagen: "/Cursos/pasantia_argentina.jpg",
      tags: ["#pasantias", "#argentina", "#juiciooral", "#litigacionoral"],
    },
    {
      id: 4,
      youtubeId: "sNGkkFRYJkY",
      titulo: "Principios Lógicos del Razonamiento Probatorio y Contrainterrogatorio",
      autor: "Dr. Orion Vargas (Colombia)",
      tema: "Litigación Oral & Prueba",
      vistas: "16.1K",
      likes: "1.7K",
      duracion: "52:15",
      resumen: "Taller especializado sobre epistemología de la prueba, credibilidad del testigo y formulación estratégica de preguntas en juicio oral.",
      imagen: "/images/nosotros3.webp",
      tags: ["#razonamientoprobatorio", "#teoriadelcaso", "#litigacionoral", "#abogados"],
    },
  ]

  const [selectedVideo, setSelectedVideo] = useState(tiktokVideos[0])
  const [isPlaying, setIsPlaying] = useState(false)
  const playerRef = useRef<HTMLDivElement>(null)

  function handleSelectVideo(v: (typeof tiktokVideos)[0]) {
    setSelectedVideo(v)
    setIsPlaying(true)
    if (playerRef.current) {
      playerRef.current.scrollIntoView({ behavior: "smooth", block: "nearest" })
    }
  }

  const noticias = [
    {
      id: 1,
      titulo: "APECC anuncia nuevas convocatorias para Diplomados de Alta Especialización 2026",
      categoria: "Académico",
      fecha: "18 Octubre, 2026",
      resumen: "Se aperturan inscripciones para los programas de litigación penal avanzada, arbitraje comercial y especialización en conciliación familiar con certificación universitaria.",
      imagen: "/images/nosotros2.webp",
      url: `${SHOP_URL}/`,
    },
    {
      id: 2,
      titulo: "Conferencia Magistral: La Teoría del Caso en el Proceso Penal Acusatorio",
      categoria: "Derecho Penal",
      fecha: "15 Octubre, 2026",
      resumen: "El Dr. Oscar Peña Gonzáles y juristas invitados expusieron ante más de 500 profesionales las técnicas clave para el examen y contraexamen de testigos en juicio oral.",
      imagen: "/images/nosotros3.webp",
      url: `${SHOP_URL}/`,
    },
    {
      id: 3,
      titulo: "Convenio Interinstitucional con Colegios de Abogados del interior del país",
      categoria: "Convenios",
      fecha: "10 Octubre, 2026",
      resumen: "Nuevas alianzas académicas permitirán a los agremiados acceder a beneficios exclusivos, becas parciales y certificación directa en cursos y pasantías.",
      imagen: "/images/nosotros1.webp",
      url: `${SHOP_URL}/`,
    },
    {
      id: 4,
      titulo: "Abiertas las postulaciones para la Pasantía Internacional en Miami 2026",
      categoria: "Pasantías",
      fecha: "05 Octubre, 2026",
      resumen: "La delegación de APECC visitará las Cortes Federales de Florida para participar en juicios reales y talleres de interrogatorio bajo el sistema acusatorio estadounidense.",
      imagen: "/Cursos/pasantia_miami.jpg",
      url: `${SHOP_URL}/`,
    },
    {
      id: 5,
      titulo: "Lanzamiento de nuevas obras de la Editorial Jurídica APECC",
      categoria: "Editorial",
      fecha: "28 Setiembre, 2026",
      resumen: "Disponibles en formato físico y digital los tratados actualizados de Código Penal Comentado, Balotarios Civiles y Técnicas de Litigación Oral.",
      imagen: "/images/nosotros5.webp",
      url: `${SHOP_URL}/tienda/`,
    },
    {
      id: 6,
      titulo: "La Conciliación Extrajudicial como vía eficaz para descongestionar el Poder Judicial",
      categoria: "Conciliación",
      fecha: "20 Setiembre, 2026",
      resumen: "Análisis sobre la importancia del Acta con mérito ejecutivo de sentencia judicial en materias civiles, contratos y pensiones de alimentos.",
      imagen: "/Cursos/conciliacion_2.jpg",
      url: `${SHOP_URL}/`,
    },
  ]

  return (
    <div className="bg-background min-h-screen py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-8">
        {/* Encabezado Principal */}
        <div className="mx-auto max-w-3xl text-center mb-14">
          <Badge className="bg-brand-coral text-white mb-3 px-3 py-1">Actualidad APECC</Badge>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-brand-navy">Noticias, Novedades y Multimedia</h1>
          <p className="mt-4 text-lg text-brand-slate leading-relaxed">
            Sigue nuestros eventos académicos, convenios, artículos de doctrina y reproduce nuestros videos formativos y cápsulas jurídicas.
          </p>
        </div>

        {/* ───────── Sección de Videos con Reproductor Activo Integrado ───────── */}
        <section className="mb-20 rounded-3xl border border-neutral-800 bg-neutral-950 text-white p-6 sm:p-10 shadow-2xl">
          {/* Header de la sección de Videos */}
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 pb-8 border-b border-white/10">
            <div>
              <div className="flex flex-wrap items-center gap-2 mb-2">
                <span className="inline-flex items-center justify-center size-8 rounded-full bg-brand-coral text-white font-bold text-xs">
                  <Play className="size-4 fill-white" />
                </span>
                <Badge className="bg-brand-coral text-white text-xs px-2.5 py-0.5">
                  Reproductor Multimedia APECC
                </Badge>
                <Badge variant="outline" className="border-white/20 text-white/90 text-xs">
                  <Flame className="size-3 mr-1 text-brand-coral" /> Videos y Conferencias
                </Badge>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
                Videos y Conferencias Jurídicas
              </h2>
              <p className="text-xs sm:text-sm text-neutral-400 mt-1">
                Haz clic en cualquier video para reproducirlo directamente aquí en la página en alta definición.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <Button
                asChild
                className="rounded-full bg-white text-neutral-900 hover:bg-neutral-200 font-bold text-xs sm:text-sm px-5 shadow-xs"
              >
                <a href="https://www.tiktok.com/@apecc_oficial" target="_blank" rel="noreferrer">
                  Ver canal de TikTok @apecc_oficial <ExternalLink className="size-3.5 ml-1.5" />
                </a>
              </Button>
            </div>
          </div>

          {/* Reproductor de Video Integrado Principal */}
          <div ref={playerRef} className="mt-8 rounded-2xl overflow-hidden border border-white/10 bg-neutral-900 shadow-2xl">
            <div className="relative aspect-video w-full bg-black">
              {isPlaying ? (
                <iframe
                  src={`https://www.youtube-nocookie.com/embed/${selectedVideo.youtubeId}?autoplay=1&rel=0`}
                  title={selectedVideo.titulo}
                  className="size-full border-0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              ) : (
                <div
                  className="relative size-full group cursor-pointer"
                  onClick={() => setIsPlaying(true)}
                >
                  <img
                    src={selectedVideo.imagen}
                    alt={selectedVideo.titulo}
                    className="size-full object-cover opacity-60 transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

                  {/* Botón Central de Play Gigante */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center gap-3">
                    <button
                      type="button"
                      className="size-20 sm:size-24 rounded-full bg-brand-coral text-white flex items-center justify-center shadow-2xl transition-transform duration-300 group-hover:scale-110 ring-8 ring-brand-coral/30"
                      aria-label="Reproducir video"
                    >
                      <Play className="size-10 fill-white ml-1" />
                    </button>
                    <span className="rounded-full bg-black/80 px-4 py-1.5 text-xs sm:text-sm font-semibold text-white backdrop-blur-sm border border-white/20">
                      Haz clic para reproducir este video
                    </span>
                  </div>

                  <div className="absolute top-4 left-4">
                    <Badge className="bg-brand-coral text-white text-xs px-3 py-1 font-semibold">
                      {selectedVideo.tema}
                    </Badge>
                  </div>
                  <div className="absolute top-4 right-4">
                    <span className="rounded-md bg-black/80 px-2 py-1 text-xs font-mono text-white/90 border border-white/15">
                      {selectedVideo.duracion}
                    </span>
                  </div>
                </div>
              )}
            </div>

            {/* Barra de información del video en reproducción */}
            <div className="p-5 sm:p-6 bg-neutral-950 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1.5">
                  <span className="inline-block size-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-xs font-bold text-brand-coral uppercase tracking-wider">
                    {selectedVideo.autor}
                  </span>
                  <span className="text-neutral-500">•</span>
                  <span className="text-xs text-neutral-400">{selectedVideo.tema}</span>
                </div>
                <h3 className="text-lg sm:text-xl font-extrabold text-white">
                  {selectedVideo.titulo}
                </h3>
                <p className="mt-2 text-xs sm:text-sm text-neutral-300 leading-relaxed max-w-4xl">
                  {selectedVideo.resumen}
                </p>
              </div>

              <div className="flex items-center gap-3 shrink-0">
                <div className="text-right text-xs text-neutral-400 hidden sm:block">
                  <div><strong className="text-white">{selectedVideo.vistas}</strong> vistas</div>
                  <div><strong className="text-rose-400">{selectedVideo.likes}</strong> me gusta</div>
                </div>
                {!isPlaying && (
                  <Button
                    onClick={() => setIsPlaying(true)}
                    className="rounded-full bg-brand-coral hover:bg-brand-coral/90 text-white font-bold px-5 text-xs shadow-md"
                  >
                    <Play className="size-3.5 fill-white mr-1.5" /> Reproducir ahora
                  </Button>
                )}
              </div>
            </div>
          </div>

          {/* Selector de los 4 Videos (Grid interactivo) */}
          <div className="mt-10">
            <h4 className="text-sm font-bold uppercase tracking-wider text-neutral-400 mb-4 flex items-center gap-2">
              <Video className="size-4 text-brand-coral" /> Selecciona un video para reproducir:
            </h4>
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {tiktokVideos.map((v) => {
                const isActive = selectedVideo.id === v.id
                return (
                  <div
                    key={v.id}
                    onClick={() => handleSelectVideo(v)}
                    className={`group relative flex flex-col justify-between overflow-hidden rounded-2xl border transition-all duration-300 cursor-pointer ${
                      isActive
                        ? "border-brand-coral bg-neutral-900 ring-2 ring-brand-coral/50 shadow-lg scale-[1.02]"
                        : "border-white/10 bg-neutral-900/80 hover:border-white/30 hover:bg-neutral-900 hover:-translate-y-1"
                    }`}
                  >
                    {/* Miniatura */}
                    <div className="relative h-44 w-full overflow-hidden bg-black">
                      <img
                        src={v.imagen}
                        alt={v.titulo}
                        className={`size-full object-cover transition-transform duration-500 group-hover:scale-105 ${
                          isActive ? "opacity-100" : "opacity-75"
                        }`}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />

                      {/* Badge activo o categoría */}
                      <div className="absolute top-2.5 left-2.5 right-2.5 flex items-center justify-between">
                        {isActive ? (
                          <Badge className="bg-emerald-500 text-white text-[10px] font-bold shadow-md">
                            Reproduciendo ahora
                          </Badge>
                        ) : (
                          <Badge className="bg-black/75 backdrop-blur-md text-white text-[10px] border border-white/20">
                            {v.tema}
                          </Badge>
                        )}
                        <span className="rounded bg-black/80 px-1.5 py-0.5 text-[10px] font-mono text-white/90">
                          {v.duracion}
                        </span>
                      </div>

                      {/* Icono de Play */}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div
                          className={`size-11 rounded-full flex items-center justify-center shadow-lg transition-transform duration-200 group-hover:scale-110 ${
                            isActive
                              ? "bg-brand-coral text-white scale-110"
                              : "bg-black/70 text-white group-hover:bg-brand-coral"
                          }`}
                        >
                          <Play className="size-5 fill-white ml-0.5" />
                        </div>
                      </div>

                      {/* Vistas y Likes */}
                      <div className="absolute bottom-2 left-2.5 right-2.5 flex items-center justify-between text-[11px] text-white/90 font-medium">
                        <span className="flex items-center gap-1">
                          <Eye className="size-3 text-brand-coral" /> {v.vistas}
                        </span>
                        <span className="flex items-center gap-1">
                          <Heart className="size-3 text-rose-400" /> {v.likes}
                        </span>
                      </div>
                    </div>

                    {/* Info de la tarjeta */}
                    <div className="p-3.5 flex flex-col justify-between flex-1 bg-neutral-950">
                      <div>
                        <div className="text-[11px] text-brand-coral font-semibold">{v.autor}</div>
                        <h5 className="font-bold text-xs sm:text-sm text-white mt-1 leading-snug line-clamp-2 group-hover:text-brand-coral transition-colors">
                          {v.titulo}
                        </h5>
                      </div>

                      <div className="mt-3 pt-2.5 border-t border-neutral-800 flex items-center justify-between">
                        <span className="text-[10px] text-neutral-400 font-mono">
                          {isActive ? "Activo en reproductor" : "Clic para reproducir"}
                        </span>
                        <span className="inline-flex items-center text-xs font-bold text-brand-coral group-hover:translate-x-0.5 transition-transform">
                          <Play className="size-3 fill-brand-coral mr-1" /> Ver video
                        </span>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Banner complementario */}
          <div className="mt-10 rounded-2xl bg-neutral-900 border border-white/10 p-6 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="size-12 rounded-2xl bg-black text-white flex items-center justify-center shrink-0 border border-white/10">
                <Video className="size-6 text-brand-coral" />
              </div>
              <div>
                <h4 className="font-bold text-white text-base">¿Deseas ver más videos y cápsulas jurídicas?</h4>
                <p className="text-xs text-neutral-400 mt-0.5">
                  Accede a nuestro canal oficial de TikTok @apecc_oficial y YouTube para ver todas las clases en vivo y transmisiones.
                </p>
              </div>
            </div>
            <Button
              asChild
              className="rounded-full bg-brand-coral hover:bg-brand-coral/90 text-white font-semibold text-xs px-6 shrink-0"
            >
              <a href="https://www.tiktok.com/@apecc_oficial" target="_blank" rel="noreferrer">
                Ir a @apecc_oficial en TikTok <ExternalLink className="size-3 ml-1.5" />
              </a>
            </Button>
          </div>
        </section>

        {/* ───────── Sección de Artículos y Noticias Escritas ───────── */}
        <div className="mb-8">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-brand-navy">
            Artículos y Comunicados Institucionales
          </h2>
          <p className="text-sm text-brand-slate mt-1">
            Notas de prensa, convenios y acuerdos académicos de APECC.
          </p>
        </div>

        {/* Grid de Noticias */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {noticias.map((n) => (
            <Card
              key={n.id}
              className="overflow-hidden border-border/80 bg-white shadow-xs hover:shadow-md transition-shadow flex flex-col justify-between"
            >
              <div>
                <div className="relative h-48 w-full overflow-hidden">
                  <img
                    src={n.imagen}
                    alt={n.titulo}
                    className="size-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                  <div className="absolute top-3 left-3">
                    <Badge className="bg-brand-navy text-white text-xs">{n.categoria}</Badge>
                  </div>
                </div>
                <CardContent className="p-5">
                  <div className="flex items-center gap-2 text-xs text-muted-foreground mb-2">
                    <Calendar className="size-3.5 text-brand-coral" />
                    <span>{n.fecha}</span>
                  </div>
                  <h3 className="font-bold text-brand-navy text-lg leading-snug line-clamp-2 hover:text-brand-coral transition-colors">
                    {n.titulo}
                  </h3>
                  <p className="mt-2 text-xs sm:text-sm text-brand-slate line-clamp-3 leading-relaxed">
                    {n.resumen}
                  </p>
                </CardContent>
              </div>

              <div className="p-5 pt-0">
                <Button
                  asChild
                  variant="outline"
                  className="w-full justify-between text-xs font-semibold rounded-lg hover:border-brand-coral hover:text-brand-coral"
                >
                  <a href={n.url} target="_blank" rel="noreferrer">
                    Leer artículo completo <ExternalLink className="size-3.5" />
                  </a>
                </Button>
              </div>
            </Card>
          ))}
        </div>

        {/* CTA al blog completo */}
        <div className="mt-16 text-center rounded-3xl bg-brand-navy text-white p-8 sm:p-12">
          <Newspaper className="mx-auto size-12 text-brand-coral mb-4" />
          <h2 className="text-2xl sm:text-3xl font-bold">¿Deseas leer más publicaciones?</h2>
          <p className="mt-2 text-brand-cream/80 text-sm max-w-xl mx-auto">
            Visita nuestro blog oficial de noticias jurídicas para acceder al archivo histórico de eventos, notas de prensa y artículos de opinión.
          </p>
          <div className="mt-6">
            <Button
              asChild
              size="lg"
              className="rounded-full bg-brand-coral hover:bg-brand-coral/90 text-white font-semibold px-8 shadow-sm"
            >
              <a href={SHOP_URL} target="_blank" rel="noreferrer">
                Ir al Portal de Noticias APECC <ChevronRight className="size-4 ml-1" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
