import { AboutMe } from "./components/AboutMe/AboutMe"
import { Education } from "./components/Education/Education"
import { Navbar } from "./components/Navbar/Navbar"
import { Projects } from "./components/Projects/Projects"

function App() {

  return (
    <>
      <div className="app-main-container">
        {/* Navbar */}
        <Navbar />

        {/* Sobre mí */}
        <AboutMe />

        {/* Educación */}
        <Education />

        {/* Mis Trabajos */}
        <Projects />

      </div>
    </>
  )
}

export default App
