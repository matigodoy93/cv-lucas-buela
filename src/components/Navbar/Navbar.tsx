import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768); // Cambia 768 por tu punto de corte
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <>
      {/* DESKTOP */}
      <div className={`${isMobile && 'hidden'}`}>
      <nav className="bg-black md:bg-transparent w-full flex items-center justify-between md:pe-6 md:py-4 fixed top-0 z-50">

          <hr className="w-1/3 hidden md:block" />

          <ul 
            className={` w-2/5 lg:w-1/3 text-base flex-row justify-around py-0 opacity-100 translate-y-0 flex `} 
          >
            <li className="w-full text-center py-2 underline-offset-8 hover:underline md:px-2">
              <Link className="whitespace-nowrap" to="about">
                Sobre Mí
              </Link>
            </li>
            <li className="w-full text-center py-2 underline-offset-8 hover:underline md:px-2">
              <Link to="education">
                Educación
              </Link>
            </li>
            <li className="w-full text-center py-2 underline-offset-8 hover:underline md:px-2">
              <Link to="home-projects">
                Proyectos
              </Link>
            </li>
            <li className="w-full text-center py-2 underline-offset-8 hover:underline md:ps-2">
              <Link to="contact">
                Contacto
              </Link>
            </li>
          </ul>
        </nav>
      </div>

      {/* MOBILE */}
      <div className={`${!isMobile && 'hidden'}`}>
        <nav className="bg-black w-full flex items-center justify-between md:pe-6 md:py-4 fixed top-0 z-50">
          {/* Botón de hamburguesa visible solo en pantallas pequeñas */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)} 
            className="text-white text-4xl p-4 focus:outline-none absolute top-0 right-0 md:hidden z-50"
          >
            {/* SVG de hamburguesa */}
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              fill="none" 
              viewBox="0 0 24 24" 
              strokeWidth="2" 
              stroke="currentColor" 
              className="w-8 h-8"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>

          <hr className="w-1/3 hidden md:block" />

          <ul 
            className={`
              w-full md:w-2/5 lg:w-1/3 text-4xl md:text-base flex flex-col items-center 
              md:flex-row md:justify-around py-6 md:py-0 transition-all duration-300 ease-in-out 
              ${isMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full'} md:opacity-100 md:translate-y-0 md:flex
            `} 
            style={{ position: isMenuOpen ? 'relative' : 'absolute', top: isMenuOpen ? '0' : '-100%' }}
            id="navbarLinks"
          >
            <li className="w-full text-center py-2 underline-offset-8 hover:underline md:px-2">
              <Link className="whitespace-nowrap" to="about">
                Sobre Mí
              </Link>
            </li>
            <li className="w-full text-center py-2 underline-offset-8 hover:underline md:px-2">
              <Link to="education">
                Educación
              </Link>
            </li>
            <li className="w-full text-center py-2 underline-offset-8 hover:underline md:px-2">
              <Link to="home-projects">
                Proyectos
              </Link>
            </li>
            <li className="w-full text-center py-2 underline-offset-8 hover:underline md:ps-2">
              <Link to="contact">
                Contacto
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}
