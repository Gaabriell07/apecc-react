import {
  Award, Briefcase, Building2, GraduationCap, Laptop, MapPin, ShieldCheck, Users,
  type LucideIcon,
} from "lucide-react"

/* ───────── Constantes ───────── */
export const SHOP_URL = "https://apecc.com.pe/noticias"
export const WP_UPLOADS = `${SHOP_URL}/wp-content/uploads/2026/10`
export const WA_PASANTIAS = "51996894991"
export const WA_LIBROS = "51996894994"

export const waLink = (phone: string, text: string) =>
  `https://wa.me/${phone}?text=${encodeURIComponent(text)}`

/* ───────── Hero ───────── */
export const heroSlides = [
  { src: "/images/nosotros1.webp", alt: "APECC - Consorcio Jurídico & Asociados" },
  { src: "/images/nosotros2.webp", alt: "APECC - Actividades y Capacitación" },
  { src: "/images/nosotros3.webp", alt: "APECC - Conferencias Internacionales" },
  { src: "/images/nosotros4.webp", alt: "APECC - Formación Especializada" },
  { src: "/images/nosotros5.webp", alt: "APECC - Comunidad Académica" },
]

/* ───────── Cursos / pasantías ───────── */
export type Course = {
  id: number
  slug: string
  title: string
  description: string
  category: string
  image: string
  badge: string
  badgeTone: "red" | "green" | "navy"
  meta: [{ icon: LucideIcon; text: string }, { icon: LucideIcon; text: string }]
  href: string
  /** Si hay `price` se muestra precio + "Comprar"; si no, "Cupos limitados" + WhatsApp. */
  price?: string
}

const product = (slug: string) => `${SHOP_URL}/producto/${slug}/`
const pasantia = (pais: string) =>
  waLink(WA_PASANTIAS, `Hola, solicito información sobre la Pasantía Internacional en ${pais}.`)

export const pasantias: Course[] = [
  {
    id: 101, slug: "pasantia-argentina",
    title: "Pasantía Internacional en Litigación Oral - Argentina",
    description: "Programa intensivo de inmersión en el sistema acusatorio argentino con asistencia a audiencias reales en Buenos Aires, talleres de litigación oral y certificación internacional.",
    category: "Pasantía Internacional",
    image: "/Cursos/pasantia_argentina.jpg",
    badge: "Internacional", badgeTone: "red",
    meta: [{ icon: MapPin, text: "Buenos Aires" }, { icon: Building2, text: "Audiencias in situ" }],
    href: pasantia("Argentina"),
  },
  {
    id: 102, slug: "pasantia-brasil",
    title: "Pasantía Internacional en Derecho y Litigación - Brasil",
    description: "Experiencia académica internacional en el sistema jurídico brasileño, con visitas a tribunales, conferencias magistrales y networking con profesionales del derecho en Brasil.",
    category: "Pasantía Internacional",
    image: "/Cursos/pasantia_brasil.jpg",
    badge: "Internacional", badgeTone: "red",
    meta: [{ icon: MapPin, text: "Brasil" }, { icon: Building2, text: "Audiencias in situ" }],
    href: pasantia("Brasil"),
  },
  {
    id: 103, slug: "pasantia-miami",
    title: "Pasantía en Litigación Oral y Sistema Acusatorio - Miami (EE.UU.)",
    description: "Pasantía de alta especialización en el sistema acusatorio estadounidense con acceso a Cortes Federales en Miami, Florida. Incluye talleres de contraexamen y certificación internacional.",
    category: "Pasantía Internacional",
    image: "/Cursos/pasantia_miami.jpg",
    badge: "Internacional", badgeTone: "red",
    meta: [{ icon: MapPin, text: "Miami, Florida" }, { icon: Building2, text: "Cortes Federales" }],
    href: pasantia("Miami (EE.UU.)"),
  },
  {
    id: 104, slug: "formacion-conciliadores-extrajudiciales",
    title: "Curso de Formación y Capacitación de Conciliadores Extrajudiciales",
    description: "Curso oficial autorizado por el Ministerio de Justicia (R.M. 122-2000-JUS) para la formación de conciliadores extrajudiciales. Incluye materiales, prácticas simuladas y certificación válida para ejercer.",
    category: "Conciliación Extrajudicial",
    image: "/Cursos/conciliacion_2.jpg",
    badge: "Oficial MINJUS", badgeTone: "green",
    meta: [{ icon: Award, text: "R.M. 122-2000-JUS" }, { icon: ShieldCheck, text: "MINJUS" }],
    href: product("curso-de-formacion-y-capacitacion-de-conciliadores-extrajudiciales"),
    price: "S/ 380.00",
  },
]

export const cursos: Course[] = [
  {
    id: 201, slug: "corrupcion-funcionarios-crimen-organizado",
    title: "Corrupción de Funcionarios, Crimen Organizado y Análisis del Caso",
    description: "Programa de alta especialización que aborda la dogmática penal, tipología de delitos contra la administración pública, crimen organizado y técnicas de análisis de casos complejos con enfoque en litigación oral.",
    category: "Derecho Penal",
    image: "/Cursos/CFCAL.jpg",
    badge: "En vivo", badgeTone: "navy",
    meta: [{ icon: GraduationCap, text: "Alta Especialización" }, { icon: Laptop, text: "Virtual" }],
    href: product("corrupcion-de-funcionarios-crimen-organizado-y-analisis-del-caso"),
    price: "S/ 200.00",
  },
  {
    id: 202, slug: "conciliacion-extrajudicial-familiar",
    title: "Conciliación Extrajudicial Familiar",
    description: "Especialización en resolución de conflictos familiares mediante conciliación extrajudicial. Aborda tenencia, alimentos, régimen de visitas y liquidación de sociedad de gananciales con enfoque práctico.",
    category: "Conciliación Extrajudicial",
    image: "/Cursos/conciliacion.jpg",
    badge: "Especialización", badgeTone: "navy",
    meta: [{ icon: Users, text: "Derecho de Familia" }, { icon: Laptop, text: "En vivo" }],
    href: product("conciliacion-extrajudicial-familiar"),
    price: "S/ 300.00",
  },
  {
    id: 203, slug: "especializacion-arbitraje",
    title: "Curso de Especialización en Arbitraje",
    description: "Formación especializada en arbitraje nacional e internacional. Comprende el marco normativo, el convenio arbitral, el proceso arbitral, laudos y mecanismos de impugnación desde el Centro APECC.",
    category: "Arbitraje y Conflictos",
    image: "/Cursos/Curso_especializacion.jpg",
    badge: "Especialización", badgeTone: "navy",
    meta: [{ icon: Briefcase, text: "Centro APECC" }, { icon: Laptop, text: "Virtual" }],
    href: product("curso-de-especializacion-en-arbitraje"),
    price: "S/ 150.00",
  },
  {
    id: 204, slug: "delitos-libertad-sexual-mineria-corrupcion",
    title: "Delitos Contra la Libertad Sexual, Minería Ilegal y Corrupción",
    description: "Seminario intensivo de litigación penal que analiza los delitos contra la libertad sexual, la problemática de la minería ilegal y los delitos de corrupción de funcionarios, con jurisprudencia y casos prácticos actuales.",
    category: "Derecho Penal",
    image: "/Cursos/Delitos_Contra_Libertad_smic.jpg",
    badge: "Seminario", badgeTone: "navy",
    meta: [{ icon: GraduationCap, text: "Litigación Penal" }, { icon: Laptop, text: "En vivo" }],
    href: product("seminario-sobre-delitos-contra-la-libertad-sexual-mineria-ilegal-y-corrupcion"),
    price: "S/ 200.00",
  },
]

/* ───────── Libros ───────── */
export type BookCategory = "litigacion" | "penal" | "conciliacion" | "civil"
export type Book = {
  id: number
  title: string
  author: string
  description: string
  price: string
  image: string
  categories: BookCategory[]
  badge?: { text: string; tone: "coral" | "navy" }
  /** ID de WooCommerce → /carrito/?add-to-cart=ID (usado en la página Librería) */
  cartId: number
  /** Slug del producto → /producto/slug/ (solo los 4 destacados del Inicio) */
  slug?: string
}

const EA = "Editorial APECC"
const OP = "Dr. Oscar Peña Gonzáles"

export const books: Book[] = [
  { id: 1, title: "Teoría del Caso", author: EA, price: "S/ 15.00", cartId: 3284, slug: "teoria-del-caso",
    description: "Metodología práctica para la construcción de la teoría del caso en el proceso penal acusatorio.",
    image: `${WP_UPLOADS}/Teoria-del-Caso.jpg`, categories: ["penal", "litigacion"], badge: { text: "Destacado", tone: "coral" } },
  { id: 2, title: "Balotario Desarrollado Civil", author: EA, price: "S/ 50.00", cartId: 3287, slug: "balotario-desarrollado-civil",
    description: "Preguntas clave y casos prácticos de Derecho Civil para postulantes a magistrados y profesionales.",
    image: `${WP_UPLOADS}/Balotario-Desarrollado-civil.jpg`, categories: ["civil"] },
  { id: 3, title: "Código Penal Comentado", author: EA, price: "S/ 35.00", cartId: 3289, slug: "codigo-penal-comentado",
    description: "Guía práctica, concordada y analítica del Código Penal Peruano con jurisprudencia reciente.",
    image: `${WP_UPLOADS}/Codigo-Penal.jpg`, categories: ["penal"] },
  { id: 4, title: "Conciliación Extrajudicial: Teoría y Práctica", author: OP, price: "S/ 60.00", cartId: 3291, slug: "conciliacion-extrajudicial-teoria-y-practica",
    description: "Tratado integral de resolución de conflictos, técnicas de negociación y audiencias conciliatorias.",
    image: `${WP_UPLOADS}/Conciliacion-Extrajudicial.jpg`, categories: ["conciliacion"], badge: { text: "Recomendado", tone: "navy" } },
  { id: 5, title: "El Contrainterrogatorio", author: OP, price: "S/ 50.00", cartId: 3293,
    description: "Técnicas avanzadas para el contrainterrogatorio de testigos y peritos en el juicio oral.",
    image: `${WP_UPLOADS}/Contrainterrogatorio.jpg`, categories: ["litigacion"] },
  { id: 6, title: "Contrainterrogatorio como Arma Fundamental", author: OP, price: "S/ 50.00", cartId: 3295,
    description: "Estrategias procesales de alta eficacia para desmontar testimonios contrarios en audiencia.",
    image: `${WP_UPLOADS}/El-Contrainterrogatorio-como-arma-fundamental-en-el-juzgamiento.jpg`, categories: ["litigacion"] },
  { id: 7, title: "El Delito de Lavado de Activos", author: EA, price: "S/ 30.00", cartId: 3297,
    description: "Dogmática penal, tipicidad y análisis probatorio del lavado de activos en el Perú.",
    image: `${WP_UPLOADS}/El-delito-de-lavado-de-activos.jpg`, categories: ["penal"] },
  { id: 8, title: "El Interrogatorio Directo", author: OP, price: "S/ 15.00", cartId: 3299,
    description: "Cómo acreditar testigos, formular preguntas abiertas y obtener testimonios persuasivos.",
    image: `${WP_UPLOADS}/El-interrogatorio-Directo.jpg`, categories: ["litigacion"] },
  { id: 9, title: "Manual de Argumentación Jurídica", author: OP, price: "S/ 40.00", cartId: 3301,
    description: "Razonamiento lógico-jurídico aplicado a la redacción de resoluciones, demandas y alegatos.",
    image: `${WP_UPLOADS}/Manual-de-Argumentacion-Juridica.jpg`, categories: ["litigacion"] },
  { id: 10, title: "Teoría del Delito", author: "Peña Gonzáles & Almanza", price: "S/ 60.00", cartId: 3303,
    description: "Tipicidad, antijuricidad y culpabilidad aplicadas a casos prácticos reales.",
    image: `${WP_UPLOADS}/Teoria-del-Delito.jpg`, categories: ["penal"] },
  { id: 11, title: "Técnicas de Litigación Oral", author: OP, price: "S/ 50.00", cartId: 3305,
    description: "Alegatos de apertura, objeciones, examen de testigos y alegato de clausura.",
    image: `${WP_UPLOADS}/Tecnicas-de-Litigacion-Oral.jpg`, categories: ["litigacion"] },
]

export const bookHref = (b: Book, mode: "producto" | "carrito") =>
  mode === "producto" && b.slug
    ? `${SHOP_URL}/producto/${b.slug}/`
    : `${SHOP_URL}/carrito/?add-to-cart=${b.cartId}`

/* ───────── Convenios ───────── */
const S3 = "https://udea-assets.s3.amazonaws.com/media/agreements"
export const convenios = [
  { name: "Ilustre Colegio de Abogados de Cañete", src: `${S3}/colegio-de-abogados-de-canete.png` },
  { name: "Ilustre Colegio de Abogados de Ventanilla", src: `${S3}/colegio-de-abogados-ventanilla.png` },
  { name: "Colegio de Economistas de Ayacucho", src: `${S3}/colegio-de-economistas-de-ayacucho.png` },
  { name: "Colegio de Antropólogos de Ayacucho", src: `${S3}/colegio-de-antropologos-de-ayacucho.png` },
  { name: "Universidad Nacional Micaela Bastidas de Apurímac", src: `${S3}/logo-unamba.png` },
  { name: "Colegio de Licenciados en Turismo de Ayacucho", src: `${S3}/colegio-de-licenciados-en-turismo-ayacucho.png` },
]

/* ───────── Docentes ───────── */
export type Docente = { name: string; role: string; bio: string; image: string; slug: string }
const doc = (name: string, role: string, file: string, slug: string, bio: string): Docente =>
  ({ name, role, bio, slug, image: `${WP_UPLOADS}/${file}` })

export const docentes: Docente[] = [
  doc("Dra. Giulliana Loza Ávalos", "Abogada Especialista en Derecho Penal", "DRA.-GIULLIANA-LOZA-AVALOS.jpg", "dra-giulliana-loza-avalos",
    "Abogada con más de 20 años de experiencia en Derecho Penal y Procesal Penal, lidero el Estudio Loza Avalos, donde dirijo un equipo especializado en la defensa penal y la consultoría jurídica para instituciones públicas y privadas. Nuestra labor se focaliza en brindar soluciones legales efectivas y personalizadas, respaldadas por un profundo conocimiento en litigación penal y asesoría jurídica."),
  doc("Dr. Luis Paredes Tejada", "Abogado Experto en Litigios Penales", "DR.-LUIS-PAREDES-TEJADA.jpg", "dr-luis-paredes-tejada",
    "Abogado experto en litigios penales. Maestrando con mención en ciencias penales por la UNMSM. Pasantía internacional en Colombia por la Universidad Nacional de Medellín en Inteligencia artificial, razonamiento probatorio, sistema acusatorio, psicología del testimonio y litigación estratégica. Pasantía internacional en Colombia por el Juzgado 15 penal de Circuito de Medellín en sistema acusatorio, lavado de activos, extinción de dominio y litigación oral en materia penal."),
  doc("Dr. José Luis Pacheco De La Cruz", "Médico Legista y Abogado - Docente de Posgrado USMP", "DR.-JOSE-LUIS-PACHECO-DE-LA-CRUZ.jpg", "dr-jose-luis-pacheco-de-la-cruz",
    "Docente de Maestrías y Doctorados de la Sección de Post grado de las Facultades de Medicina Humana y Derecho de la USMP, y actual Profesor Responsable del curso Medicina Legal y Patología Forense del Departamento Académico de Medicina. Presidente del Sistema de Titulación de Médicos especialistas en Medicina Legal de la USMP."),
  doc("Dr. Christian Salas Beteta", "Abogado Penalista - Exprocurador Anticorrupción", "DR.CRHISTIAN-SALAS-BETETA.jpg", "dr-christian-salas-beteta",
    "Abogado especializado en Derecho Penal | Ejercicio de defensa legal en casos de presuntos delitos contra la administración pública, lavado de activos y crimen organizado, tramitados con las reglas del CPP-2004 | Capacitador y conferencista nacional."),
  doc("Dr. Jefferson Moreno Nieves", "Abogado Penalista - Especialista en Litigación Oral", "DR.-JEFFERSON-MORENO-NIEVES.jpg", "dr-jefferson-moreno-nieves",
    "Abogado de la Universidad de San Martín de Porres con Maestrías en Derecho Penal, Ciencias Penales, y en Derecho con mención en Sistema Acusatorio y Litigación Oral. Cuenta con especializaciones en bases del razonamiento probatorio en la Universitat de Girona, en Litigación Oral y Sistema Acusatorio en la Universidad de California y en Contrainterrogatorio Avanzado en la Academia Judicial Puertorriqueña."),
  doc("Dr. Sergio Chávez Panduro", "Fiscal Especializado en Delitos de Corrupción", "DR.-SERGIO-CHAVEZ-PANDURO.jpg", "dr-sergio-chavez-panduro",
    "Abogado de la fiscalía corporativa especializada en delitos de corrupción de funcionarios de Lima, maestría en ciencias penales Universidad Nacional Mayor de San Marcos."),
  doc("Dr. Frank Almanza Altamirano", "Fiscal Superior y Docente Universitario", "Frank-Almanza-Altamirano.jpg", "dr-frank-almanza-altamirano",
    "Frank Robert Almanza Altamirano es un destacado abogado y fiscal peruano, especializado en derecho penal y procesal penal. Su amplia experiencia en el Ministerio Público y su labor docente en diversas universidades lo han consolidado como una figura influyente en el ámbito jurídico peruano."),
  doc("Dr. Henrry Coronado Salazar", "Fiscal Provincial y Especialista en Litigación Oral", "Henrry-Coronado-Salazar-scaled.jpg", "dr-henrry-coronado-salazar",
    "Doctorado en Derecho y Ciencias Políticas y Magíster en Ciencias Penales por la UNMSM. Especialista en: Delitos contra la Administración Pública por la PUCP, Lavado de Activos, Extinción de Domicilio y Crimen Organizado por la Universidad de Medellín - Colombia y en Contraexamen por California Western School of Law - EUA."),
]
export const docenteUrl = (slug: string) => `${SHOP_URL}/${slug}/`
export const DOCENTES_URL = `${SHOP_URL}/category/docentes/`

/* ───────── Testimonios (imágenes locales en /public/testimonios) ───────── */
const t = (n: number) => `/testimonios/${n}.webp`
const range = (start: number, end: number, step = 3) =>
  Array.from({ length: Math.floor((end - start) / step) + 1 }, (_, i) => start + i * step)

export const testimonioRows = [
  { images: range(1, 26, 3).map(t), duration: 25, reverse: false },
  { images: range(2, 26, 3).map(t), duration: 21, reverse: true },
  { images: range(3, 26, 3).map(t), duration: 23, reverse: false },
]
