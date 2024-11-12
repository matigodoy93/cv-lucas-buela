import { useRef } from 'react';
import { Link } from 'react-router-dom'
import './Projects.css'
import { useTranslation } from 'react-i18next';
import project1 from '../../assets/images/project-cineonline/5.jpg';
import project2 from '../../assets/images/project-valiant/1.png';
import project3 from '../../assets/images/project-farmaconecta/0.png';
import project4 from '../../assets/images/project-ux-research-davinci/0.png';
// import project5 from '../../assets/images/project-cineonline/5.jpg';

export const Projects = () => {
  const projectsHomeRef = useRef<HTMLDivElement | null>(null);
  const { t } = useTranslation();

  return (
    <section id="home-projects" ref={projectsHomeRef} className="h-full px-8 py-10">

      <h2 className="font-bold text-center text-6xl mb-8 uppercase pt-20 md:text-7xl lg:pt-20 lg:text-7xl">{ t('projects') }</h2>

      {/* Proyectos */}
      <div className="lg:flex lg:flex-wrap lg:justify-center">
        
        <div className="mb-4 lg:w-2/4 lg:mb-14">
          <h4 className="text-3xl text-bold text-center leading-6 mb-6 md:text-4xl">{ t('cinemaOnline.title') }</h4>
            {/* Títulos */}
            <Link to="/project/online-cinema">
              <div className="w-full h-60 md:h-72 flex flex-col items-center md:w-3/4 md:mx-auto lg:w-full lg:mb-12">
                <div className=" project-glow project bg-blue-900 transition-all ease-in-out w-full duration-300 lg:w-3/4 rounded-xl mb-10 lg:mb-0 lg:relative hover:-translate-y-1 lg:opacity-75 lg:hover:opacity-100">
                  <img className='h-72 w-full' src={project1} alt="Certificado de aprobación en Educación IT" />
                </div>
              </div>
            </Link>
        </div>
        
        <div className="mb-4 lg:w-2/4 lg:mb-14">
          <h4 className="text-3xl text-center leading-6 mb-6 md:text-4xl">Valiant</h4>
            {/* Títulos */}
            <Link to="/project/valiant">
              <div className="w-full h-60 md:h-72 flex flex-col items-center md:w-3/4 md:mx-auto lg:w-full lg:mb-12">
                <div className=" project-glow project bg-blue-900 transition-all ease-in-out w-full duration-300 lg:w-3/4 rounded-xl mb-10 lg:mb-0 lg:relative hover:-translate-y-1 lg:opacity-75 lg:hover:opacity-100">
                  <img className='h-72 w-full' src={project2} alt="Certificado de aprobación en Educación IT" />
                </div>
              </div>
            </Link>
        </div>
        
        <div className="mb-4 lg:w-2/4 lg:mb-14">
          <h4 className="text-3xl text-center leading-6 mb-6 md:text-4xl">FARMACONECTA</h4>
            {/* Títulos */}
            <Link to="/project/farmaconecta">
              <div className="w-full h-60 md:h-72 flex flex-col items-center md:w-3/4 md:mx-auto lg:w-full lg:mb-12">
                <div className=" project-glow project bg-blue-900 transition-all ease-in-out w-full duration-300 lg:w-3/4 rounded-xl mb-10 lg:mb-0 lg:relative hover:-translate-y-1 lg:opacity-75 lg:hover:opacity-100">
                  <img className='h-72 w-full' src={project3} alt="FARMACONECTA" />
                </div>
              </div>
            </Link>
        </div>
        
        <div className="mb-4 lg:w-2/4 lg:mb-14">
          <h4 className="text-3xl text-center leading-6 mb-6 md:text-4xl">Final Da Vinci - UX Research</h4>
            {/* Títulos */}
            <Link to="/project/davinci">
              <div className="w-full h-60 md:h-72 flex flex-col items-center md:w-3/4 md:mx-auto lg:w-full lg:mb-12">
                <div className=" project-glow project bg-blue-900 transition-all ease-in-out w-full duration-300 lg:w-3/4 rounded-xl mb-10 lg:mb-0 lg:relative hover:-translate-y-1 lg:opacity-75 lg:hover:opacity-100">
                  <img className='h-72 w-full' src={project4} alt="Final Davinci - UX Research" />
                </div>
              </div>
            </Link>
        </div>
        
        <div className="mb-4 lg:w-2/4 lg:mb-14">
          <h4 className="text-3xl text-center leading-6 mb-6 md:text-4xl">NFT - Landing Page</h4>
            {/* Títulos */}
            <Link to="/project/5">
              <div className="w-full h-60 md:h-72 flex flex-col items-center md:w-3/4 md:mx-auto lg:w-full lg:mb-12">
                <div className=" project-glow project bg-blue-900 transition-all ease-in-out w-full duration-300 lg:w-3/4 rounded-xl mb-10 lg:mb-0 lg:relative hover:-translate-y-1 lg:opacity-75 lg:hover:opacity-100">
                  <img className='h-72 w-full' src={project4} alt="NFT - Landing Page" />
                </div>
              </div>
            </Link>
        </div>

      </div>
      
    </section>
  )
}
