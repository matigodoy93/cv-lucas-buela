import { useRef } from 'react';
import './Education.css';
import { useTranslation } from 'react-i18next';
import certified1 from '../../assets/images/education/1.jpeg';
import certified2 from '../../assets/images/education/2.jpg';

export const Education = () => {
  
  const educationRef = useRef<HTMLDivElement | null>(null);
  const { t } = useTranslation();

  return (
    <section id="education" ref={educationRef} className="h-full md:flex px-8 py-10 md:h-screen md:items-center">

      <div className="md:flex md:justify-evenly md:items-center md:px-20">
        {/* Texto */}
        <div className="flex flex-col mb-6 w-full md:w-2/4 2xl:ps-20">
          <h2 className="font-bold text-center md:text-start text-6xl md:text-7xl mb-8 uppercase">{ t('education') }</h2>

          <div className="mb-8">
            <h4 className="text-2xl text-center md:text-start mb-4 leading-6"><b>{ t('educationDavinciTitle') }</b></h4>
            <p className="text-xl text-center md:text-start leading-6">{ t('educationDavinciDescription') }</p>
          </div>

          <div className="">
            <h4 className="text-2xl text-center md:text-start mb-4 leading-6"><b>Educacion IT</b></h4>
            <p className="text-xl text-center md:text-start leading-6">{ t('educacionItDescription') }</p>
          </div>

        </div>

        {/* Certificados */}
        <div className="w-full md:w-2/4 md:flex ">
          <div className="w-full flex flex-col items-end md:relative lg:top-24">
            <div className="certified-glow  certified-animation bg-blue-500 w-full md:w-3/4 h-full rounded-xl mb-10 md:mb-0 md:relative">
              <img className="w-full" src={ certified1 } alt="Certificado de aprobación en Educación IT" />
            </div>
            <div className="certified-glow  certified-animation bg-blue-800 w-full md:w-3/4 h-full rounded-xl md:absolute md:-top-1/2 lg:-top-1/3 md:right-44 2xl:right-80 md:transform">
              <img className="w-full" src={ certified2 } alt="Certificado de asistencia en Educación IT" />
            </div>
          </div>
        </div>
      </div>
      
    </section>
  )
}
