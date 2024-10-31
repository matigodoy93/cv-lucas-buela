import { useRef } from 'react';
import './Education.css';

export const Education = () => {
  
  const educationRef = useRef<HTMLDivElement | null>(null);

  return (
    <section id="education" ref={educationRef} className="h-full md:flex px-8 py-10 md:h-screen md:items-center">

      <div className="md:flex md:justify-around md:items-center">
        {/* Texto */}
        <div className="flex flex-col mb-6 w-full md:w-2/4">
          <h2 className="text-center text-6xl mb-8 uppercase">Educación</h2>

          <div className="mb-8">
            <h4 className="text-2xl text-center md:text-start mb-4 leading-6"><b>Escuela de Arte Multimedial "Da Vinci"</b></h4>
            <p className="text-xl text-center md:text-start leading-6">Analista de sistemas/Diseñador UX/UI | 2021-En curso</p>
          </div>

          <div className="">
            <h4 className="text-2xl text-center md:text-start mb-4 leading-6"><b>Educacion IT</b></h4>
            <p className="text-xl text-center md:text-start leading-6">Tester QA Manual/Automation Selenium | 2023 (Finalizado)</p>
          </div>

        </div>

        {/* Certificados */}
        <div className="w-full md:w-2/4 mb-6 md:mt-40">
          <div className="w-full flex flex-col items-end md:relative">
            <div className="certified bg-red-500 w-full md:w-3/4 h-full rounded-xl mb-10 md:mb-0 md:relative">
              <img className="w-full" src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/Aspect-ratio-16x9.svg/1200px-Aspect-ratio-16x9.svg.png" alt="Certificado de aprobación en Educación IT" />
            </div>
            <div className="certified bg-red-800 w-full md:w-3/4 h-full rounded-xl md:absolute md:-top-1/2 md:right-20 md:transform">
              <img className="w-full" src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/Aspect-ratio-16x9.svg/1200px-Aspect-ratio-16x9.svg.png" alt="Certificado de asistencia en Educación IT" />
            </div>
          </div>
        </div>
      </div>
      
    </section>
  )
}
