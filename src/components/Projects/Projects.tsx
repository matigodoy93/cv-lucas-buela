import { useRef } from 'react';
import { Link } from 'react-router-dom'
import './Projects.css'

export const Projects = () => {
  const projectsHomeRef = useRef<HTMLDivElement | null>(null);

  return (
    <section id="home-projects" ref={projectsHomeRef} className="h-full px-8 py-10">

    <h2 className="text-center text-5xl mb-8 uppercase">Proyectos</h2>

    {/* Proyectos */}
    <div className="md:flex md:flex-wrap md:justify-center">
      
      <div className="mb-4 md:w-2/4">
        <h4 className="text-2xl text-center leading-6 mb-6">Cine Online</h4>
          {/* Títulos */}
          <Link to="/proyect/1">
            <div className="w-full flex flex-col items-center">
              <div className="project bg-red-500 transition-all ease-in-out w-full duration-300 md:w-3/4 h-full rounded-xl mb-10 md:mb-0 md:relative hover:-translate-y-1 md:opacity-75 md:hover:opacity-100">
                <img className="w-full" src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/Aspect-ratio-16x9.svg/1200px-Aspect-ratio-16x9.svg.png" alt="Certificado de aprobación en Educación IT" />
              </div>
            </div>
          </Link>
      </div>
      
      <div className="mb-4 md:w-2/4">
        <h4 className="text-2xl text-center leading-6 mb-6">Valiant</h4>
          {/* Títulos */}
          <Link to="/proyect/2">
            <div className="w-full flex flex-col items-center">
              <div className="project bg-red-500 transition-all ease-in-out w-full duration-300 md:w-3/4 h-full rounded-xl mb-10 md:mb-0 md:relative hover:-translate-y-1 md:opacity-75 md:hover:opacity-100">
                <img className="w-full" src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/Aspect-ratio-16x9.svg/1200px-Aspect-ratio-16x9.svg.png" alt="Certificado de aprobación en Educación IT" />
              </div>
            </div>
          </Link>
      </div>
      
      <div className="mb-4 md:w-2/4">
        <h4 className="text-2xl text-center leading-6 mb-6">Cine Online</h4>
          {/* Títulos */}
          <Link to="/proyect/3">
            <div className="w-full flex flex-col items-center">
              <div className="project bg-red-500 transition-all ease-in-out w-full duration-300 md:w-3/4 h-full rounded-xl mb-10 md:mb-0 md:relative hover:-translate-y-1 md:opacity-75 md:hover:opacity-100">
                <img className="w-full" src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/Aspect-ratio-16x9.svg/1200px-Aspect-ratio-16x9.svg.png" alt="Certificado de aprobación en Educación IT" />
              </div>
            </div>
          </Link>
      </div>
      
      <div className="mb-4 md:w-2/4">
        <h4 className="text-2xl text-center leading-6 mb-6">Cine Online</h4>
          {/* Títulos */}
          <Link to="/proyect/4">
            <div className="w-full flex flex-col items-center">
              <div className="project bg-red-500 transition-all ease-in-out w-full duration-300 md:w-3/4 h-full rounded-xl mb-10 md:mb-0 md:relative hover:-translate-y-1 md:opacity-75 md:hover:opacity-100">
                <img className="w-full" src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/Aspect-ratio-16x9.svg/1200px-Aspect-ratio-16x9.svg.png" alt="Certificado de aprobación en Educación IT" />
              </div>
            </div>
          </Link>
      </div>
      
      <div className="mb-4 md:w-2/4">
        <h4 className="text-2xl text-center leading-6 mb-6">Cine Online</h4>
          {/* Títulos */}
          <Link to="/proyect/5">
            <div className="w-full flex flex-col items-center">
              <div className="project bg-red-500 transition-all ease-in-out w-full duration-300 md:w-3/4 h-full rounded-xl mb-10 md:mb-0 md:relative hover:-translate-y-1 md:opacity-75 md:hover:opacity-100">
                <img className="w-full" src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/Aspect-ratio-16x9.svg/1200px-Aspect-ratio-16x9.svg.png" alt="Certificado de aprobación en Educación IT" />
              </div>
            </div>
          </Link>
      </div>
      
      <div className="mb-4 md:w-2/4">
        <h4 className="text-2xl text-center leading-6 mb-6">Cine Online</h4>
          {/* Títulos */}
          <Link to="/proyect/6">
            <div className="w-full flex flex-col items-center">
              <div className="project bg-red-500 transition-all ease-in-out w-full duration-300 md:w-3/4 h-full rounded-xl mb-10 md:mb-0 md:relative hover:-translate-y-1 md:opacity-75 md:hover:opacity-100">
                <img className="w-full" src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/Aspect-ratio-16x9.svg/1200px-Aspect-ratio-16x9.svg.png" alt="Certificado de aprobación en Educación IT" />
              </div>
            </div>
          </Link>
      </div>
      
      <div className="mb-4 md:w-2/4">
        <h4 className="text-2xl text-center leading-6 mb-6">Cine Online</h4>
          {/* Títulos */}
          <Link to="/proyect/7">
            <div className="w-full flex flex-col items-center">
              <div className="project bg-red-500 transition-all ease-in-out w-full duration-300 md:w-3/4 h-full rounded-xl mb-10 md:mb-0 md:relative hover:-translate-y-1 md:opacity-75 md:hover:opacity-100">
                <img className="w-full" src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/Aspect-ratio-16x9.svg/1200px-Aspect-ratio-16x9.svg.png" alt="Certificado de aprobación en Educación IT" />
              </div>
            </div>
          </Link>
      </div>
      
      <div className="mb-4 md:w-2/4">
        <h4 className="text-2xl text-center leading-6 mb-6">Cine Online</h4>
          {/* Títulos */}
          <Link to="/proyect/8">
            <div className="w-full flex flex-col items-center">
              <div className="project bg-red-500 transition-all ease-in-out w-full duration-300 md:w-3/4 h-full rounded-xl mb-10 md:mb-0 md:relative hover:-translate-y-1 md:opacity-75 md:hover:opacity-100">
                <img className="w-full" src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/Aspect-ratio-16x9.svg/1200px-Aspect-ratio-16x9.svg.png" alt="Certificado de aprobación en Educación IT" />
              </div>
            </div>
          </Link>
      </div>
      
      <div className="mb-4 md:w-2/4">
        <h4 className="text-2xl text-center leading-6 mb-6">Cine Online</h4>
          {/* Títulos */}
          <Link to="/proyect/9">
            <div className="w-full flex flex-col items-center">
              <div className="project bg-red-500 transition-all ease-in-out w-full duration-300 md:w-3/4 h-full rounded-xl mb-10 md:mb-0 md:relative hover:-translate-y-1 md:opacity-75 md:hover:opacity-100">
                <img className="w-full" src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/Aspect-ratio-16x9.svg/1200px-Aspect-ratio-16x9.svg.png" alt="Certificado de aprobación en Educación IT" />
              </div>
            </div>
          </Link>
      </div>

    </div>
      
    </section>
  )
}
