import {
  Route,
  Routes,
  useLocation
} from "react-router-dom";
import CursorBackground from "./components/CursorBackground/CursorBackground";
import { Navbar } from "./components/Navbar/Navbar";
import { CineOnline } from "./pages/CineOnline";
import { FarmaConecta } from "./pages/FarmaConecta";
import { Home } from "./pages/Home";
import { Valiant } from "./pages/Valiant";
import { DavinciFinal } from "./pages/davinci-final";
import { NftLanding } from "./pages/NftLanding";

function App() {

  const location = useLocation()
  
  return (
    <>
      <CursorBackground />

      {
        location.pathname == '/' && <Navbar />
      }

      <Routes>
        <Route index element={<Home />} />
        <Route path='project/online-cinema' element={<CineOnline />} />
        <Route path='project/valiant' element={<Valiant />} />
        <Route path='project/farmaconecta' element={<FarmaConecta />} />
        <Route path='project/davinci' element={<DavinciFinal />} />
        <Route path='project/nft-landing' element={<NftLanding />} />
      </Routes>
    </>
  )
}

export default App
