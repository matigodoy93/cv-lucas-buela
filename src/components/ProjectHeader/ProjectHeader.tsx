import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import './ProjectHeader.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useNavigate } from 'react-router-dom';

interface Props {
    title: string;
}

export const ProjectHeader = ({ title }: Props) => {

  const navigate = useNavigate();
  const { i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  useEffect(() => {
    i18n.changeLanguage(navigator.language);
  }, [i18n])

  return (
    <div className='hidden lg:block'>
        <div className="menu w-full flex items-center justify-between md:pe-6 md:py-4 fixed top-0 z-50">
            <hr className="w-1/2 scroll-watcher hidden md:inline-block md:1/4 md:w-1/5 lg:w-2/5 absolute" />
            
            {/* TÍTULO */}
            <div className="w-full">
              <h2 className='uppercase text-end'>{ title }</h2>
            </div>

            <div className="flex justify-end items-center w-full">
              {/* SWITCH DE IDIOMA */}
              <div className="text-center py-2 underline-offset-8 hover:underline md:px-2">
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
              </div>

              <button
                onClick={() => navigate('/')}
                className="text-2xl px-4 py-1 bg-blue-500 rounded-full hover:bg-blue-600 transition duration-200"
              >
                <FontAwesomeIcon icon={faArrowLeft} />
              </button>
            </div>
        </div>
    </div>
  )
}
