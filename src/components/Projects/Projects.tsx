import { Link } from 'react-router-dom'

export const Projects = () => {
  return (
    <section id="home-projects" className="h-full px-8 mb-10">

    <h2 className="text-center text-6xl mb-8 uppercase">Proyectos</h2>


    {/* Proyectos */}
    <div className="md:grid md:grid-cols-2 md:gap-4">
      
      <div className="mb-4">
        <h4 className="text-2xl text-center leading-6 mb-6">Cine Online</h4>
          {/* Títulos */}
          <Link to="/proyect/1">
            <div className="w-full flex flex-col items-center">
              <div className="bg-red-500 w-full md:w-4/5 h-60 mb-6 rounded-xl">
                {/* <img src="" alt="Certificado de aprobación en Educación IT" /> */}
              </div>
            </div>
          </Link>
      </div>
      
      <div className="mb-4">
        <h4 className="text-2xl text-center leading-6 mb-6">Cine Online</h4>
          {/* Títulos */}
          <Link to="/proyect/1">
            <div className="w-full flex flex-col items-center">
              <div className="bg-red-500 w-full md:w-4/5 h-60 mb-6 rounded-xl">
                {/* <img src="" alt="Certificado de aprobación en Educación IT" /> */}
              </div>
            </div>
          </Link>
      </div>

    </div>
      
    </section>
  )
}
