import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';

import Inicio from './pages/Inicio';
import Servicios from './pages/Servicios';
import Sneakers from './pages/Sneakers';
import Accesorios from './pages/Accesorios';
import BrightClub from './pages/BrightClub';
import Galeria from './pages/Galeria';
import Nosotros from './pages/Nosotros';
import Faq from './pages/Faq';
import Contacto from './pages/Contacto';
import Terminos from './pages/Terminos';

export default function App() {
  return (
    <div className="min-h-screen bg-[#f0f4f8] text-gray-800 flex flex-col justify-between">
      <div>
        <Navbar />
        <main className="max-w-5xl mx-auto p-6 mt-4">
          <Routes>
            <Route path="/" element={<Inicio />} />
            <Route path="/servicios" element={<Servicios />} />
            <Route path="/limpieza-sneakers" element={<Sneakers />} />
            <Route path="/limpieza-accesorios" element={<Accesorios />} />
            <Route path="/bright-club" element={<BrightClub />} />
            <Route path="/galeria" element={<Galeria />} />
            <Route path="/nosotros" element={<Nosotros />} />
            <Route path="/faq" element={<Faq />} />
            <Route path="/contacto" element={<Contacto />} />
            <Route path="/terminos" element={<Terminos />} />
          </Routes>
        </main>
      </div>

      <footer className="bg-[#12171a] text-white text-center p-4 border-t-2 border-[#00c5df] text-sm mt-8">
        &copy; 2026 Bright Clean Sneaker Lab | Celaya, Gto.
      </footer>
    </div>
  );
}