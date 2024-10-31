import { Link } from 'react-router-dom'

export const Projects = () => {
  return (
    <section id="home-projects" className="h-screen px-6 bg-blue-600">

    <h2 className="text-center text-6xl mb-8">Proyectos</h2>

    <div className="mb-4">
      <h4 className="text-2xl text-center mb-2 leading-6 mb-6">Cine Online</h4>
        {/* Títulos */}
        <Link to="/proyect/1">
          <div className="w-full flex flex-col items-center">
            <div className="bg-red-500 w-80 h-60 mb-6 rounded-xl">
              {/* <img src="" alt="Certificado de aprobación en Educación IT" /> */}
            </div>
          </div>
        </Link>
    </div>

    <div className="mb-4">
      <h4 className="text-2xl text-center mb-2 leading-6 mb-6">Valiant</h4>
        {/* Títulos */}
        <div className="w-full flex flex-col items-center">
          <Link to="/proyect/2">
            <div className="bg-red-500 w-80 h-60 mb-6 rounded-xl">
              {/* <img src="" alt="Certificado de aprobación en Educación IT" /> */}
            </div>
          </Link>
        </div>
    </div>
      
    </section>
  )
}
