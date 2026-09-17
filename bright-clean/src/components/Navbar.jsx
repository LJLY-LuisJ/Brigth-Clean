import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  const location = useLocation();

  const links = [
    { name: 'Inicio', path: '/' },
    { name: 'Servicios', path: '/servicios' },
    { name: 'Sneakers', path: '/limpieza-sneakers' },
    { name: 'Accesorios', path: '/limpieza-accesorios' },
    { name: 'Bright Club', path: '/bright-club' },
    { name: 'Galería', path: '/galeria' },
    { name: 'Nosotros', path: '/nosotros' },
    { name: 'Preguntas', path: '/faq' },
    { name: 'Contacto', path: '/contacto' },
    { name: 'Políticas', path: '/terminos' },
  ];

  return (
    <header className="bg-[#12171a] text-white p-6 text-center border-b-4 border-[#00c5df]">
      <h1 className="text-3xl font-black uppercase tracking-wider mb-2">BRIGHT CLEAN</h1>
      <p className="text-xs text-[#00c5df] tracking-widest uppercase mb-4">Sneaker Lab & Studio</p>
      
      <nav className="mt-4">
        <ul className="flex flex-wrap justify-center gap-2 max-w-5xl mx-auto">
          {links.map((link) => {
            const isActive = location.pathname === link.path;
            return (
              <li key={link.path}>
                <Link
                  to={link.path}
                  className={`px-4 py-2 rounded-full text-sm font-bold transition-all duration-300 block ${
                    isActive
                      ? 'bg-[#00c5df] text-[#12171a] shadow-md scale-105'
                      : 'hover:bg-[#00c5df] hover:text-[#12171a]'
                  }`}
                >
                  {link.name}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}