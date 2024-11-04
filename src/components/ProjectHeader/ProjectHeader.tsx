import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import './ProjectHeader.css';

interface Props {
    title: string;
}

// Este componente igual estaría bueno unirlo con el Navbar porque deberían ser el mismo componente.
export const ProjectHeader = ({ title }: Props) => {

  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  const [isEnglish, setIsEnglish] = useState(false);

  const { i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    localStorage.setItem('appLanguage', lng);
    setIsEnglish(lng === 'en'); // Actualiza el estado según el idioma
  };

  useEffect(() => {
    const savedLanguage = localStorage.getItem('appLanguage') || 'es'; // Predeterminado a 'es'
    i18n.changeLanguage(savedLanguage);
    setIsEnglish(savedLanguage === 'en'); // Establece el estado del switch
  }, [i18n]);
  
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

        <hr className="w-1/2 scroll-watcher hidden md:inline-block md:1/4 md:w-1/5 lg:w-2/5" />

        {/* TÍTULO */}
        <div className="w-full absolute">
          <h2 className='uppercase text-center'>{ title }</h2>
        </div>

        <ul
          className={`w-2/5 md:w-fit text-base flex-row justify-around items-center py-0 opacity-100 translate-y-0 flex `} 
        >
          {/* SWITCH DE IDIOMA */}
          <li className="w-fit text-center py-2 underline-offset-8 hover:underline md:px-2">
            <label className="switch">
              <input 
                type="checkbox" 
                onChange={() => changeLanguage(isEnglish ? 'es' : 'en')}
                checked={isEnglish}
              />
              <span className="slider">
                <span className="flag es">
                  <img src="https://flagcdn.com/w20/ar.png" alt="Argentina" />
                </span>
                <span className="flag en">
                  <img src="https://flagcdn.com/w20/us.png" alt="Estados Unidos" />
                </span>
              </span>
            </label>
          </li>
          <li className="w-fit md:text-2xl text-center py-2 underline-offset-8 hover:underline md:px-2">
          <button
            onClick={() => navigate('/')}
            className="text-2xl px-4 py-1 bg-blue-500 rounded-full hover:bg-blue-600 transition duration-200"
          >
            <FontAwesomeIcon icon={faArrowLeft} />
          </button>
          </li>
        </ul>
      </nav>
    </div>

    {/* MOBILE */}
      <div className={`${!isMobile && 'hidden'}`}>
        <nav className="menu flex items-center justify-between fixed top-0 z-50 w-full md:bg-transparent md:pe-6 md:py-4">
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
              className="w-14 h-14"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>

          <hr className="w-1/3 hidden md:block" />

          <ul 
            className={`mt-10 md:mt-0
              w-full md:w-2/5 lg:w-1/3 text-4xl md:text-base flex flex-col items-center 
              md:flex-row md:justify-around py-6 md:py-0 transition-all duration-300 ease-in-out 
              ${isMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full'} md:opacity-100 md:translate-y-0 md:flex
            `} 
            style={{ position: isMenuOpen ? 'relative' : 'absolute', top: isMenuOpen ? '0' : '-100%' }}
            id="navbarLinks"
          >
            {/* SWITCH DE IDIOMA */}
            <li className="w-full text-center py-12 underline-offset-8 hover:underline md:px-2">
              <label className="switch">
                <input 
                  type="checkbox" 
                  onChange={() => changeLanguage(isEnglish ? 'es' : 'en')}
                  checked={isEnglish}
                />
                <span className="slider">
                  <span className="flag es">
                    <img src="https://flagcdn.com/w20/ar.png" alt="Argentina" />
                  </span>
                  <span className="flag en">
                    <img src="https://flagcdn.com/w20/us.png" alt="Estados Unidos" />
                  </span>
                </span>
              </label>
            </li>
            <li className="w-full text-center py-12 md:px-2">
            <button
              onClick={() => navigate('/')}
              className="text-2xl px-4 py-1 bg-blue-500 rounded-full hover:bg-blue-600 transition duration-200"
            >
              <FontAwesomeIcon icon={faArrowLeft} />
            </button>
            </li>
          </ul>
        </nav>
      </div>
    </>
  )
}
