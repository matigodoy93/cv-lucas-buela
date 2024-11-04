import { useRef } from 'react';
import './Education.css';
import { useTranslation } from 'react-i18next';
import certified1 from '../../assets/images/education/1.jpeg';
import certified2 from '../../assets/images/education/2.jpg';

export const Education = () => {
  
  const educationRef = useRef<HTMLDivElement | null>(null);
  const { t } = useTranslation();

  return (
    <section id="education" ref={educationRef} className="h-full md:pt-20 lg:pt-0 lg:flex px-8 py-10 lg:h-screen lg:items-center">

      <div className="lg:flex lg:justify-evenly lg:items-center lg:px-4">
        {/* Texto */}
        <div className="flex flex-col mb-6 w-full lg:w-2/4 2xl:ps-20">
          <h2 className="font-bold text-center  mb-8 uppercase md:text-7xl lg:text-start text-6xl lg:text-7xl">{ t('education') }</h2>

          <div className="mb-8">
            <h4 className="text-2xl text-center md:text-4xl lg:text-start mb-4 leading-6"><b>{ t('educationDavinciTitle') }</b></h4>
            <p className="text-xl text-center md:text-2xl lg:text-start leading-6">{ t('educationDavinciDescription') }</p>
          </div>

          <div className="">
            <h4 className="text-2xl text-center md:text-4xl lg:text-start mb-4 leading-6"><b>Educacion IT</b></h4>
            <p className="text-xl text-center md:text-2xl lg:text-start leading-6">{ t('educacionItDescription') }</p>
          </div>

        </div>

        {/* Certificados */}
        <div className="w-full lg:w-2/4 lg:flex">
          <div className="w-full flex flex-col items-end lg:relative lg:top-24">
            <div className="certified-glow  certified-animation bg-blue-900 w-full md:w-3/4 md:mx-auto lg:w-3/4 h-full rounded-xl mb-10 lg:mb-0 lg:relative">
              <img className="w-full" src={ certified1 } alt="Certificado de aprobación en Educación IT" />
            </div>
            <div className="certified-glow  certified-animation bg-blue-900 w-full md:w-3/4 md:mx-auto lg:w-3/4 h-full rounded-xl lg:absolute lg:-top-1/3 lg:right-44 2xl:right-80 lg:transform">
              <img className="w-full" src={ certified2 } alt="Certificado de asistencia en Educación IT" />
            </div>
          </div>
        </div>
      </div>
      
    </section>
  )
}
