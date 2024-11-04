import { useRef } from 'react';
import { useTranslation } from 'react-i18next';
import profile from '../../assets/images/about/perfil.jpg';
import './AboutMe.css';

export const AboutMe = () => {
  
  const aboutRef = useRef<HTMLDivElement | null>(null);
  const { t } = useTranslation();

  return (
    <section id="about" ref={aboutRef} className='h-full md:h-screen md:pt-20 lg:pt-0 lg:h-screen px-4 lg:px-8 lg:flex lg:items-center'>
      
      <div className="ms-0 lg:ms-32 pt-20 lg:pt-0 lg:flex lg:flex-row lg:justify-evenly lg:items-center">
        {/* Foto */}
        <div className="photo-face lg:mt-0 mx-auto lg:mx-0 w-80 h-80 lg:w-96 lg:h-96 overflow-hidden bg-blue-900 rounded-full">
          <img className=" w-full transform -translate-y-44" src={profile} alt="Lucas Gustavo Buela" />
        </div>

        {/* Texto */}
        <div className="background-about-description rounded-2xl w-full flex flex-col p-8 lg:w-2/4 lg:justify-center">
          <h2 className="font-bold text-center text-6xl mb-8 uppercase md:text-7xl lg:text-start lg:text-7xl">{ t('aboutMe') }</h2>
          <p className="text-xl md:text-5xl md:text-justify text-center md:leading-tight lg:text-start lg:text-2xl leading-7">{t('aboutMeDescrition')}</p>
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
