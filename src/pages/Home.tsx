import { AboutMe } from '../components/AboutMe/AboutMe'
import { Contact } from '../components/Contact/Contact'
import { Education } from '../components/Education/Education'
import { Projects } from '../components/Projects/Projects'

export const Home = () => {
  return (
    <div>
        {/* Sobre mí */}
        <AboutMe />

        {/* Educación */}
        <Education />

        {/* Mis Trabajos */}
        <Projects />

        {/* Contacto */}
        <Contact />
    </div>
  )
}
