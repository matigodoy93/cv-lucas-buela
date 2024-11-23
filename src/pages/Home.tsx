import { AboutMe } from '../components/AboutMe/AboutMe'
import { Contact } from '../components/Contact/Contact'
import CursorBackground from '../components/CursorBackground/CursorBackground'
import { Education } from '../components/Education/Education'
import { Projects } from '../components/Projects/Projects'

export const Home = () => {
  
  return (
    <>
      <CursorBackground />

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
    </>

  )
}
