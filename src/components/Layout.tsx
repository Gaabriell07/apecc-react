import { useEffect, useRef, useState } from "react"
import { Link, NavLink, Outlet, useLocation } from "react-router"
import {
  ChevronDown,
  GraduationCap,
  Mail,
  MapPin,
  Menu,
  Newspaper,
  Phone,
  Scale,
  X,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export default function Layout() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [noticiasDropdownOpen, setNoticiasDropdownOpen] = useState(false)
  const [mobileNoticiasOpen, setMobileNoticiasOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)
  const location = useLocation()

  // Cerrar menús al cambiar de ruta
  useEffect(() => {
    setMobileMenuOpen(false)
    setNoticiasDropdownOpen(false)
  }, [location.pathname])

  // Cerrar dropdown al hacer click fuera
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setNoticiasDropdownOpen(false)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  const isNoticiasActive =
    location.pathname.startsWith("/noticias") || location.pathname.startsWith("/jurisprudencia")

  const navLinks = [
    { to: "/nosotros", label: "Nosotros" },
    { to: "/cursos-y-diplomados", label: "Cursos y Diplomados" },
    { to: "/pasantias", label: "Pasantías" },
    { to: "/conciliacion", label: "Conciliación" },
    { to: "/centro-de-conciliacion", label: "Centro de Conciliación" },
    { to: "/libreria", label: "Librería" },
  ]

  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      {/* ───────── Navbar Principal de Color Azul ───────── */}
      <header className="sticky top-0 z-50 border-b border-white/10 bg-brand-navy text-white shadow-md">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between gap-4 px-4 sm:px-8">
          {/* Logo APECC */}
          <Link to="/" className="group flex shrink-0 items-center" aria-label="Inicio APECC">
            <img
              src="/images/logo.webp"
              alt="APECC - Asociación Peruana de Ciencias Jurídicas y Conciliación"
              className="h-12 w-auto object-contain transition-transform duration-200 group-hover:scale-105"
            />
          </Link>

          {/* Menú de Navegación de Escritorio */}
          <nav className="hidden items-center gap-1 lg:flex xl:gap-2">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) =>
                  cn(
                    "rounded-lg px-3 py-2 text-sm font-semibold transition-all duration-150",
                    isActive
                      ? "bg-brand-coral text-white font-bold shadow-xs"
                      : "text-white/90 hover:bg-white/10 hover:text-brand-coral"
                  )
                }
              >
                {link.label}
              </NavLink>
            ))}

            {/* Dropdown de Noticias con Jurisprudencia abajo */}
            <div
              ref={dropdownRef}
              className="relative"
              onMouseEnter={() => setNoticiasDropdownOpen(true)}
              onMouseLeave={() => setNoticiasDropdownOpen(false)}
            >
              <button
                type="button"
                onClick={() => setNoticiasDropdownOpen((prev) => !prev)}
                className={cn(
                  "flex items-center gap-1.5 rounded-lg px-3 py-2 text-sm font-semibold transition-all duration-150",
                  isNoticiasActive || noticiasDropdownOpen
                    ? "bg-brand-coral text-white font-bold shadow-xs"
                    : "text-white/90 hover:bg-white/10 hover:text-brand-coral"
                )}
                aria-expanded={noticiasDropdownOpen}
              >
                <span>Noticias</span>
                <ChevronDown
                  className={cn(
                    "size-4 transition-transform duration-200",
                    noticiasDropdownOpen && "rotate-180"
                  )}
                />
              </button>

              {/* Menú desplegable */}
              {noticiasDropdownOpen && (
                <div className="absolute right-0 top-full pt-2 w-64 z-50 animate-in fade-in-0 zoom-in-95 duration-150">
                  <div className="rounded-xl border border-border bg-white text-brand-navy p-2 shadow-2xl ring-1 ring-black/10">
                    {/* Opción 1: Noticias */}
                    <NavLink
                      to="/noticias"
                      onClick={() => setNoticiasDropdownOpen(false)}
                      className={({ isActive }) =>
                        cn(
                          "flex items-start gap-3 rounded-lg p-2.5 transition-colors group",
                          isActive ? "bg-muted text-brand-coral font-semibold" : "hover:bg-muted/80"
                        )
                      }
                    >
                      <div className="rounded-md bg-brand-navy/10 p-2 text-brand-navy group-hover:bg-brand-coral group-hover:text-white transition-colors">
                        <Newspaper className="size-4" />
                      </div>
                      <div>
                        <div className="text-sm font-bold text-brand-navy">Noticias</div>
                        <p className="text-xs text-muted-foreground">Actualidad y eventos académicos</p>
                      </div>
                    </NavLink>

                    {/* Separador */}
                    <div className="my-1 border-t border-border/60" />

                    {/* Opción 2: Jurisprudencia (abajo de noticias) */}
                    <NavLink
                      to="/jurisprudencia"
                      onClick={() => setNoticiasDropdownOpen(false)}
                      className={({ isActive }) =>
                        cn(
                          "flex items-start gap-3 rounded-lg p-2.5 transition-colors group",
                          isActive ? "bg-muted text-brand-coral font-semibold" : "hover:bg-muted/80"
                        )
                      }
                    >
                      <div className="rounded-md bg-brand-navy/10 p-2 text-brand-navy group-hover:bg-brand-coral group-hover:text-white transition-colors">
                        <Scale className="size-4" />
                      </div>
                      <div>
                        <div className="text-sm font-bold text-brand-navy">Jurisprudencia</div>
                        <p className="text-xs text-muted-foreground">Sentencias y fallos comentados</p>
                      </div>
                    </NavLink>
                  </div>
                </div>
              )}
            </div>
          </nav>

          {/* Botón CTA derecho */}
          <div className="hidden items-center gap-3 sm:flex">
            <Button
              asChild
              className="rounded-full bg-brand-coral px-5 py-2 font-semibold text-white shadow-md hover:bg-brand-coral/90"
            >
              <a
                href="https://aulavirtualapecc.com/aula/login/index.php"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1.5"
              >
                <GraduationCap className="size-4" />
                <span>Aula Virtual</span>
              </a>
            </Button>
          </div>

          {/* Botón hamburguesa móvil */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            aria-label="Alternar menú"
            className="rounded-lg p-2 text-white hover:bg-white/10 focus:outline-none lg:hidden"
          >
            {mobileMenuOpen ? <X className="size-6" /> : <Menu className="size-6" />}
          </button>
        </div>

        {/* ───────── Drawer Móvil ───────── */}
        {mobileMenuOpen && (
          <div className="border-t border-white/10 bg-brand-navy px-4 py-4 text-white shadow-xl lg:hidden animate-in slide-in-from-top-2 duration-200">
            <nav className="flex flex-col space-y-1">
              {navLinks.map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  onClick={() => setMobileMenuOpen(false)}
                  className={({ isActive }) =>
                    cn(
                      "rounded-lg px-3 py-2.5 text-base font-semibold transition-colors",
                      isActive
                        ? "bg-brand-coral text-white font-bold"
                        : "text-white/90 hover:bg-white/10 hover:text-brand-coral"
                    )
                  }
                >
                  {link.label}
                </NavLink>
              ))}

              {/* Sección Noticias y Jurisprudencia móvil */}
              <div className="border-t border-white/15 pt-2">
                <button
                  type="button"
                  onClick={() => setMobileNoticiasOpen((prev) => !prev)}
                  className="flex w-full items-center justify-between rounded-lg px-3 py-2.5 text-base font-semibold text-white hover:bg-white/10"
                >
                  <span>Noticias</span>
                  <ChevronDown
                    className={cn(
                      "size-4 transition-transform",
                      mobileNoticiasOpen && "rotate-180"
                    )}
                  />
                </button>

                {mobileNoticiasOpen && (
                  <div className="space-y-1 py-1 pl-4 pr-2">
                    <NavLink
                      to="/noticias"
                      onClick={() => setMobileMenuOpen(false)}
                      className="flex items-center gap-2.5 rounded-md px-3 py-2 text-sm font-medium text-white/90 hover:bg-white/10 hover:text-brand-coral"
                    >
                      <Newspaper className="size-4 text-brand-coral" />
                      <span>Noticias</span>
                    </NavLink>
                    <NavLink
                      to="/jurisprudencia"
                      onClick={() => setMobileMenuOpen(false)}
                      className="flex items-center gap-2.5 rounded-md px-3 py-2 text-sm font-medium text-white/90 hover:bg-white/10 hover:text-brand-coral"
                    >
                      <Scale className="size-4 text-brand-coral" />
                      <span>Jurisprudencia</span>
                    </NavLink>
                  </div>
                )}
              </div>

              {/* Botones de acción móvil */}
              <div className="pt-4 space-y-2">
                <Button
                  asChild
                  className="w-full rounded-full bg-brand-coral py-2.5 font-bold text-white hover:bg-brand-coral/90 shadow-sm"
                >
                  <a
                    href="https://aulavirtualapecc.com/aula/login/index.php"
                    target="_blank"
                    rel="noreferrer"
                    className="flex justify-center items-center gap-2"
                  >
                    <GraduationCap className="size-4 text-white" />
                    <span>Ingresar al Aula Virtual</span>
                  </a>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="w-full rounded-full border-white/20 bg-white/5 text-brand-cream hover:bg-white/10 hover:text-white"
                >
                  <a
                    href="https://wa.me/51996894991?text=Hola%20APECC,%20solicito%20informaci%C3%B3n"
                    target="_blank"
                    rel="noreferrer"
                    className="flex justify-center items-center gap-2"
                  >
                    <Phone className="size-4 text-emerald-400" />
                    <span>WhatsApp: +51 996 894 991</span>
                  </a>
                </Button>
              </div>
            </nav>
          </div>
        )}
      </header>

      {/* ───────── Contenido Principal ───────── */}
      <main className="flex-1">
        <Outlet />
      </main>

      {/* ───────── Footer Corporativo APECC ───────── */}
      <footer className="border-t border-white/10 bg-brand-navy text-white">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-8">
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {/* Columna 1: Identidad */}
            <div>
              <img
                src="/images/logo.webp"
                alt="APECC Logo"
                className="h-12 w-auto brightness-0 invert object-contain mb-4"
              />
              <p className="text-xs text-brand-cream/80 leading-relaxed">
                Asociación Peruana de Ciencias Jurídicas y Conciliación. Más de 25 años dedicados a la formación, capacitación y especialización de profesionales del Derecho y resolución pacífica de controversias.
              </p>
              <div className="mt-4 text-xs text-brand-coral font-semibold">
                Autorizado por R.M. Nº 122-2000-JUS / R.V. Nº 141-2001-JUS
              </div>
            </div>

            {/* Columna 2: Navegación Rápida */}
            <div>
              <h4 className="text-sm font-bold uppercase tracking-wider text-brand-coral mb-4">
                Menú Principal
              </h4>
              <ul className="space-y-2 text-xs text-brand-cream/80">
                <li><Link to="/nosotros" className="hover:text-brand-coral transition-colors">Nosotros</Link></li>
                <li><Link to="/cursos-y-diplomados" className="hover:text-brand-coral transition-colors">Cursos y Diplomados</Link></li>
                <li><Link to="/pasantias" className="hover:text-brand-coral transition-colors">Pasantías Internacionales</Link></li>
                <li><Link to="/conciliacion" className="hover:text-brand-coral transition-colors">Conciliación Extrajudicial</Link></li>
                <li><Link to="/centro-de-conciliacion" className="hover:text-brand-coral transition-colors">Centro de Conciliación</Link></li>
                <li><Link to="/libreria" className="hover:text-brand-coral transition-colors">Librería Jurídica</Link></li>
              </ul>
            </div>

            {/* Columna 3: Información y Prensa */}
            <div>
              <h4 className="text-sm font-bold uppercase tracking-wider text-brand-coral mb-4">
                Prensa y Doctrinas
              </h4>
              <ul className="space-y-2 text-xs text-brand-cream/80">
                <li><Link to="/noticias" className="hover:text-brand-coral transition-colors">Noticias Jurídicas</Link></li>
                <li><Link to="/jurisprudencia" className="hover:text-brand-coral transition-colors">Jurisprudencia Relevante</Link></li>
                <li>
                  <a href="https://aulavirtualapecc.com/aula/login/index.php" target="_blank" rel="noreferrer" className="hover:text-brand-coral transition-colors">
                    Acceso Aula Virtual
                  </a>
                </li>
                <li>
                  <a href="https://apecc.com.pe/noticias/tienda/" target="_blank" rel="noreferrer" className="hover:text-brand-coral transition-colors">
                    Tienda Virtual Oficial
                  </a>
                </li>
              </ul>
            </div>

            {/* Columna 4: Contacto */}
            <div>
              <h4 className="text-sm font-bold uppercase tracking-wider text-brand-coral mb-4">
                Sede Central
              </h4>
              <ul className="space-y-2.5 text-xs text-brand-cream/80">
                <li className="flex items-start gap-2">
                  <MapPin className="size-4 text-brand-coral shrink-0 mt-0.5" />
                  <span>Jr. Carlos Alayza y Roel 2647, Lince, Lima - Perú</span>
                </li>
                <li className="flex items-center gap-2">
                  <Phone className="size-4 text-brand-coral shrink-0" />
                  <span>+51 996 894 991 / +51 996 894 994</span>
                </li>
                <li className="flex items-center gap-2">
                  <Mail className="size-4 text-brand-coral shrink-0" />
                  <span>informes@apecc.com.pe</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-12 border-t border-white/10 pt-6 text-center text-xs text-brand-cream/60">
            &copy; {new Date().getFullYear()} APECC - Asociación Peruana de Ciencias Jurídicas y Conciliación. Todos los derechos reservados.
          </div>
        </div>
      </footer>
    </div>
  )
}
