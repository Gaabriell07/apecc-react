import { Route, Routes } from "react-router"
import Layout from "@/components/Layout"
import Home from "@/pages/Home"
import Nosotros from "@/pages/Nosotros"
import CursosDiplomados from "@/pages/CursosDiplomados"
import CursoDetalle from "@/pages/CursoDetalle"
import Pasantias from "@/pages/Pasantias"
import Conciliacion from "@/pages/Conciliacion"
import CentroConciliacion from "@/pages/CentroConciliacion"
import Libreria from "@/pages/Libreria"
import LibroDetalle from "@/pages/LibroDetalle"
import Noticias from "@/pages/Noticias"
import Jurisprudencia from "@/pages/Jurisprudencia"

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="nosotros" element={<Nosotros />} />
        <Route path="cursos-y-diplomados" element={<CursosDiplomados />} />
        <Route path="cursos-especializados" element={<CursosDiplomados />} />
        <Route path="programa/:slug" element={<CursoDetalle />} />
        <Route path="pasantias" element={<Pasantias />} />
        <Route path="diplomados" element={<Pasantias />} />
        <Route path="conciliacion" element={<Conciliacion />} />
        <Route path="centro-de-conciliacion" element={<CentroConciliacion />} />
        <Route path="libreria" element={<Libreria />} />
        <Route path="libreria/:id" element={<LibroDetalle />} />
        <Route path="noticias" element={<Noticias />} />
        <Route path="jurisprudencia" element={<Jurisprudencia />} />
        {/* Fallback de convenios y ponentes hacia Home o Nosotros */}
        <Route path="convenios" element={<Home />} />
        <Route path="ponentes" element={<Home />} />
      </Route>
    </Routes>
  )
}
