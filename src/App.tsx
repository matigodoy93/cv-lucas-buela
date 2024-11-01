import {
  Route,
  Routes,
  useLocation
} from "react-router-dom";
import { Navbar } from "./components/Navbar/Navbar";
import { Project } from "./pages/Project";
import { Home } from "./pages/Home";

function App() {

  const location = useLocation()
  
  return (
    <>
      {
        location.pathname == '/' && <Navbar />
      }

      <Routes>
        <Route index element={<Home />} />
        <Route path='project/online-cinema' element={<Project />} />
        <Route path='project/valiant' element={<Project />} />
        <Route path='project/3' element={<Project />} />
        <Route path='project/4' element={<Project />} />
        <Route path='project/5' element={<Project />} />
        <Route path='project/6' element={<Project />} />
        <Route path='project/7' element={<Project />} />
        <Route path='project/8' element={<Project />} />
        <Route path='project/9' element={<Project />} />
      </Routes>
    </>
  )
}

export default App
