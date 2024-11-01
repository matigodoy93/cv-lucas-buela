import { useRef } from 'react';
import './AboutMe.css'
import { useTranslation } from 'react-i18next';

export const AboutMe = () => {
  
  const aboutRef = useRef<HTMLDivElement | null>(null);
  const { t } = useTranslation();

  return (
    <section id="about" ref={aboutRef} className='h-full md:h-screen px-4 md:px-8 md:flex md:items-center'>
      
      <div className="md:flex md:flex-row">
        {/* Foto */}
        <div className="photo-face w-80 h-80 overflow-hidden mx-auto bg-red-700 rounded-full my-6">
          <img className="w-full" src="https://as2.ftcdn.net/v2/jpg/04/10/43/77/1000_F_410437733_hdq4Q3QOH9uwh0mcqAhRFzOKfrCR24Ta.jpg" alt="Lucas Gustavo Buela" />
        </div>

        {/* Texto */}
        <div className="w-full md:w-2/4 flex flex-col">
          <h2 className="text-center md:text-start text-5xl mb-8 uppercase">{ t('aboutMe') }</h2>
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
