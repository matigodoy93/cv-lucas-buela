import { useRef } from 'react';
import { Link } from 'react-router-dom'
import './Projects.css'
import { useTranslation } from 'react-i18next';
import project1 from '../../assets/images/project-cineonline/5.jpg';
import project2 from '../../assets/images/project-valiant/1.png';
// import project3 from '../../assets/images/project-cineonline/5.jpg';
// import project4 from '../../assets/images/project-cineonline/5.jpg';
// import project5 from '../../assets/images/project-cineonline/5.jpg';
// import project6 from '../../assets/images/project-cineonline/5.jpg';
// import project7 from '../../assets/images/project-cineonline/5.jpg';
// import project8 from '../../assets/images/project-cineonline/5.jpg';
// import project9 from '../../assets/images/project-cineonline/5.jpg';

export const Projects = () => {
  const projectsHomeRef = useRef<HTMLDivElement | null>(null);
  const { t } = useTranslation();

  return (
    <section id="home-projects" ref={projectsHomeRef} className="h-full px-8 py-10">

      <h2 className="font-bold text-center text-6xl md:text-7xl mb-8 uppercase">{ t('projects') }</h2>

      {/* Proyectos */}
      <div className="md:flex md:flex-wrap md:justify-center">
        
        <div className="mb-4 md:w-2/4">
          <h4 className="text-3xl text-bold text-center leading-6 mb-6">{ t('cinemaOnline') }</h4>
            {/* Títulos */}
            <Link to="/proyect/1">
              <div className="w-full flex flex-col items-center">
                <div className=" project-glow project bg-red-500 transition-all ease-in-out w-full duration-300 md:w-3/4 h-full rounded-xl mb-10 md:mb-0 md:relative hover:-translate-y-1 md:opacity-75 md:hover:opacity-100">
                  <img className="w-full" src={project1} alt="Certificado de aprobación en Educación IT" />
                </div>
              </div>
            </Link>
        </div>
        
        <div className="mb-4 md:w-2/4">
          <h4 className="text-3xl text-center leading-6 mb-6">Valiant</h4>
            {/* Títulos */}
            <Link to="/proyect/2">
              <div className="w-full flex flex-col items-center">
                <div className=" project-glow project bg-red-500 transition-all ease-in-out w-full duration-300 md:w-3/4 h-full rounded-xl mb-10 md:mb-0 md:relative hover:-translate-y-1 md:opacity-75 md:hover:opacity-100">
                  <img className="w-full" src={project2} alt="Certificado de aprobación en Educación IT" />
                </div>
              </div>
            </Link>
        </div>
        
        <div className="mb-4 md:w-2/4">
          <h4 className="text-3xl text-center leading-6 mb-6">Cine Online</h4>
            {/* Títulos */}
            <Link to="/proyect/3">
              <div className="w-full flex flex-col items-center">
                <div className=" project-glow project bg-red-500 transition-all ease-in-out w-full duration-300 md:w-3/4 h-full rounded-xl mb-10 md:mb-0 md:relative hover:-translate-y-1 md:opacity-75 md:hover:opacity-100">
                  <img className="w-full" src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/Aspect-ratio-16x9.svg/1200px-Aspect-ratio-16x9.svg.png" alt="Certificado de aprobación en Educación IT" />
                </div>
              </div>
            </Link>
        </div>
        
        <div className="mb-4 md:w-2/4">
          <h4 className="text-3xl text-center leading-6 mb-6">Cine Online</h4>
            {/* Títulos */}
            <Link to="/proyect/4">
              <div className="w-full flex flex-col items-center">
                <div className=" project-glow project bg-red-500 transition-all ease-in-out w-full duration-300 md:w-3/4 h-full rounded-xl mb-10 md:mb-0 md:relative hover:-translate-y-1 md:opacity-75 md:hover:opacity-100">
                  <img className="w-full" src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/Aspect-ratio-16x9.svg/1200px-Aspect-ratio-16x9.svg.png" alt="Certificado de aprobación en Educación IT" />
                </div>
              </div>
            </Link>
        </div>
        
        <div className="mb-4 md:w-2/4">
          <h4 className="text-3xl text-center leading-6 mb-6">Cine Online</h4>
            {/* Títulos */}
            <Link to="/proyect/5">
              <div className="w-full flex flex-col items-center">
                <div className=" project-glow project bg-red-500 transition-all ease-in-out w-full duration-300 md:w-3/4 h-full rounded-xl mb-10 md:mb-0 md:relative hover:-translate-y-1 md:opacity-75 md:hover:opacity-100">
                  <img className="w-full" src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/Aspect-ratio-16x9.svg/1200px-Aspect-ratio-16x9.svg.png" alt="Certificado de aprobación en Educación IT" />
                </div>
              </div>
            </Link>
        </div>
        
        <div className="mb-4 md:w-2/4">
          <h4 className="text-3xl text-center leading-6 mb-6">Cine Online</h4>
            {/* Títulos */}
            <Link to="/proyect/6">
              <div className="w-full flex flex-col items-center">
                <div className=" project-glow project bg-red-500 transition-all ease-in-out w-full duration-300 md:w-3/4 h-full rounded-xl mb-10 md:mb-0 md:relative hover:-translate-y-1 md:opacity-75 md:hover:opacity-100">
                  <img className="w-full" src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/Aspect-ratio-16x9.svg/1200px-Aspect-ratio-16x9.svg.png" alt="Certificado de aprobación en Educación IT" />
                </div>
              </div>
            </Link>
        </div>
        
        <div className="mb-4 md:w-2/4">
          <h4 className="text-3xl text-center leading-6 mb-6">Cine Online</h4>
            {/* Títulos */}
            <Link to="/proyect/7">
              <div className="w-full flex flex-col items-center">
                <div className=" project-glow project bg-red-500 transition-all ease-in-out w-full duration-300 md:w-3/4 h-full rounded-xl mb-10 md:mb-0 md:relative hover:-translate-y-1 md:opacity-75 md:hover:opacity-100">
                  <img className="w-full" src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/Aspect-ratio-16x9.svg/1200px-Aspect-ratio-16x9.svg.png" alt="Certificado de aprobación en Educación IT" />
                </div>
              </div>
            </Link>
        </div>
        
        <div className="mb-4 md:w-2/4">
          <h4 className="text-3xl text-center leading-6 mb-6">Cine Online</h4>
            {/* Títulos */}
            <Link to="/proyect/8">
              <div className="w-full flex flex-col items-center">
                <div className=" project-glow project bg-red-500 transition-all ease-in-out w-full duration-300 md:w-3/4 h-full rounded-xl mb-10 md:mb-0 md:relative hover:-translate-y-1 md:opacity-75 md:hover:opacity-100">
                  <img className="w-full" src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/Aspect-ratio-16x9.svg/1200px-Aspect-ratio-16x9.svg.png" alt="Certificado de aprobación en Educación IT" />
                </div>
              </div>
            </Link>
        </div>
        
        <div className="mb-4 md:w-2/4">
          <h4 className="text-3xl text-center leading-6 mb-6">Cine Online</h4>
            {/* Títulos */}
            <Link to="/proyect/9">
              <div className="w-full flex flex-col items-center">
                <div className=" project-glow project bg-red-500 transition-all ease-in-out w-full duration-300 md:w-3/4 h-full rounded-xl mb-10 md:mb-0 md:relative hover:-translate-y-1 md:opacity-75 md:hover:opacity-100">
                  <img className="w-full" src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/Aspect-ratio-16x9.svg/1200px-Aspect-ratio-16x9.svg.png" alt="Certificado de aprobación en Educación IT" />
                </div>
              </div>
            </Link>
        </div>

      </div>
      
    </section>
  )
}
