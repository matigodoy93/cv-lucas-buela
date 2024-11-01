import { useRef } from 'react';
import { useTranslation } from 'react-i18next';
import profile from '../../assets/images/about/perfil.jpg';
import './AboutMe.css';

export const AboutMe = () => {
  
  const aboutRef = useRef<HTMLDivElement | null>(null);
  const { t } = useTranslation();

  return (
    <section id="about" ref={aboutRef} className='h-full md:h-screen px-4 md:px-8 md:flex md:items-center'>
      
      <div className="ms-0 md:ms-32 md:flex md:flex-row md:justify-evenly">
        {/* Foto */}
        <div className="photo-face mx-auto md:mx-0 w-80 h-80 md:w-96 md:h-96 overflow-hidden bg-red-700 rounded-full my-6">
          <img className="w-full transform -translate-y-44" src={profile} alt="Lucas Gustavo Buela" />
        </div>


        {/* Texto */}
        <div className="background-about-description rounded-2xl w-full flex flex-col p-8 md:w-2/4  md:justify-center">
          <h2 className="font-bold text-center md:text-start text-6xl md:text-7xl mb-8 uppercase">{ t('aboutMe') }</h2>
          <p className="text-xl text-center md:text-start leading-7">{t('aboutMeDescrition')}</p>
        </div>

        <div className="redes">
          <div className="flex justify-between">
            <div className=""><img className='w-full' src="" alt="" /></div>
          </div>
        </div>
      </div>

    </section>
  )
}
