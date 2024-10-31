import {
  Route,
  Routes
} from "react-router-dom";
import { Navbar } from "./components/Navbar/Navbar";
import { Projects } from "./components/Projects/Projects";
import { Home } from "./pages/Home";

function App() {

  return (
    <>
      <Navbar />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/project/:id' element={<Home />} />
      </Routes>
    </>
  )
}

export default App
