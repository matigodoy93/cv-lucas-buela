import { Link } from 'react-router-dom'

export const Navbar = () => {
  return (
    <nav className="bg-red-400 w-full flex items-center md:justify-between md:pe-6 md:py-4 md:my-auto">
            <hr className="w-1/3 hidden md:block" />
      
            <ul className="w-full md:w-2/5 lg:w-1/3 text-xl md:text-base flex items-center flex-col md:flex-row md:justify-around" id="navbarLinks">
                <li className="w-full text-center py-2 underline-offset-8 hover:underline md:px-2">
                  <Link className="whitespace-nowrap" to="about">
                    Sobre Mí
                  </Link>
                </li>
                <li className="w-full text-center py-2 underline-offset-8 hover:underline md:px-2">
                  <Link className="" to="education">
                    Educación
                  </Link>
                </li>
                <li className="w-full text-center py-2 underline-offset-8 hover:underline md:px-2">
                  <Link className="" to="home-projects">
                    Proyectos
                  </Link>
                </li>
                <li className="w-full text-center py-2 underline-offset-8 hover:underline md:ps-2">
                  <Link className="" to="contact">
                    Contacto
                  </Link>
                </li>
            </ul>
    </nav>
  )
}
