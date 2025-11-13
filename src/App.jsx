import { BrowserRouter, Routes , Route} from "react-router-dom";
import Layout from "../Components/Layout"
import Home from "../Pages/Home"
import About from "../Pages/About"
import Vans from "../Pages/Vans"
import VanDetail from "../Pages/VanDetail"
import HostLayout from "../Components/HostLayout";
import Dashboard from "../Pages/Host/Dashboard";
import Income from "../Pages/Host/Income";
import HostVans from "../Pages/Host/HostVans";
import HostVanPhotos from "../Pages/Host/HostVanPhotos"
import HostVanInfo from "../Pages/Host/HostVanInfo"
import HostVanPricing from "../Pages/Host/HostVanPricing"
import HostVanDetail from "../Pages/Host/HostVanDetail";
import Reviews from "../Pages/Host/Reviews";

function App() {
  return(

    <BrowserRouter>
    <Routes>
      <Route element={<Layout/>}>
      <Route path='/' element={<Home/>}/>
      <Route path='about' element={<About/>}/>
    <Route path='vans' element={<Vans/>}/>
    <Route path='vans/:id' element={<VanDetail/>}/>

    <Route path="host" element={<HostLayout/>}>
    <Route index element={<Dashboard/>}/>
    <Route path='income' element={<Income/>}/>
    <Route path="vans" element={<HostVans/>}/>


    <Route path="vans/:id" element={<HostVanDetail/>}>
    <Route index element={<HostVanInfo/>}/>
    <Route path="pricing" element={<HostVanPricing/>}/>
    <Route path="photos" element={<HostVanPhotos/>}/>
    </Route>


    <Route path='reviews' element={<Reviews/>}/>
    </Route>

    </Route>
    </Routes>
    </BrowserRouter>
 )
}

export default App;
