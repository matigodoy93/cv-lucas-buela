import './Navbar.css'

export const Navbar = () => {
  return (
    <nav className="navbar">
            <hr className='navbar-line'/>
            <ul className="navbar-links" id="navbarLinks">
                <li><a href="#about">Sobre Mí</a></li>
                <li><a href="#education">Educación</a></li>
                <li><a href="#projects">Mis Trabajos</a></li>
                <li><a href="#greeting">Saludo</a></li>
            </ul>
    </nav>
  )
}
