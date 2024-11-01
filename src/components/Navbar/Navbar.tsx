import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLink } from '@fortawesome/free-solid-svg-icons';
import './Navbar.css'
import { useTranslation } from 'react-i18next';

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  useEffect(() => {
    i18n.changeLanguage(navigator.language);
  }, [])
  
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

          <ul
            className={` w-2/5 md:w-3/4 lg:w-2/4 text-base flex-row justify-around items-center py-0 opacity-100 translate-y-0 flex `} 
          >
            <li className="w-full md:text-2xl text-center py-2 underline-offset-8 hover:underline md:px-2">
              <button className="whitespace-nowrap underline-offset-8 hover:underline" onClick={() => {
                const element = document.getElementById('about')
                element?.scrollIntoView({
                  behavior: 'smooth'
                })
              }}>
                {t('aboutMe')}
              </button>
            </li>
            <li className="w-full md:text-2xl text-center py-2 underline-offset-8 hover:underline md:px-2">
              <button className='underline-offset-8 hover:underline' onClick={() => {
                const element = document.getElementById('education')
                element?.scrollIntoView({
                  behavior: 'smooth'
                })
              }}>
                {t('education')}
              </button>
            </li>
            <li className="w-full md:text-2xl text-center py-2 md:px-2">
              <button className='underline-offset-8 hover:underline' onClick={() => {
                const element = document.getElementById('home-projects')
                element?.scrollIntoView({
                  behavior: 'smooth'
                })
              }}>
                {t('projects')}
              </button>
            </li>
            <li className="w-full md:text-2xl text-center py-2 underline-offset-8 hover:underline md:px-2">
              <a className='underline-offset-8 hover:underline flex items-center' href='https://drive.google.com/file/d/1eiSLpaJ6cTe6zAJVCXrbB3Rsjni9Ex19/view' target='_blank'>
                {t('curriculum')} <FontAwesomeIcon className='ms-1' icon={faLink} />
              </a>
            </li>

            {/* SWITCH DE IDIOMA */}
            <li className="w-full text-center py-2 underline-offset-8 hover:underline md:px-2">
              <label className="switch">
                <input 
                  type="checkbox" 
                  onChange={() => i18n.language === 'es' ? changeLanguage('en') : changeLanguage('es')}
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
            className={`
              w-full md:w-2/5 lg:w-1/3 text-4xl md:text-base flex flex-col items-center 
              md:flex-row md:justify-around py-6 md:py-0 transition-all duration-300 ease-in-out 
              ${isMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full'} md:opacity-100 md:translate-y-0 md:flex
            `} 
            style={{ position: isMenuOpen ? 'relative' : 'absolute', top: isMenuOpen ? '0' : '-100%' }}
            id="navbarLinks"
          >
            <li className="w-full text-center py-12 md:px-2">
              <button className="whitespace-nowrap" onClick={() => {
                const element = document.getElementById('about')
                setIsMenuOpen(false);
                element?.scrollIntoView({
                  behavior: 'smooth'
                })
              }}>
                {t('aboutMe')}
              </button>
            </li>
            <li className="w-full text-center py-12 md:px-2">
              <button onClick={() => {
                const element = document.getElementById('education')
                setIsMenuOpen(false);
                element?.scrollIntoView({
                  behavior: 'smooth'
                })
              }}>
                {t('education')}
              </button>
            </li>
            <li className="w-full text-center py-12 md:px-2">
              <button onClick={() => {
                const element = document.getElementById('home-projects')
                setIsMenuOpen(false);
                element?.scrollIntoView({
                  behavior: 'smooth'
                })
              }}>
                {t('projects')}
              </button>
            </li>
            <li className="w-full text-center py-12 md:px-2">
              <a  href='https://drive.google.com/file/d/1eiSLpaJ6cTe6zAJVCXrbB3Rsjni9Ex19/view' target='_blank'>
                {t('curriculum')} <FontAwesomeIcon icon={faLink} />
              </a>
            </li>
            
            {/* SWITCH DE IDIOMA */}
            <li className="w-full text-center py-2 underline-offset-8 hover:underline md:px-2">
              <label className="switch">
                <input 
                  type="checkbox" 
                  onChange={() => i18n.language === 'es' ? changeLanguage('en') : changeLanguage('es')}
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
          </ul>
        </nav>
      </div>
    </>
  );
}
