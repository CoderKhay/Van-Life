import Home from "../Pages/Home";
import About from "../Pages/About";
import Vans from "../Pages/Vans/Vans";
import Vandetail from "../Pages/Vans/Vandetail";
import Layout from "../Components/Layout";
import "./index.css";
import Dashboard from "../Pages/Host/Dashboard";
import Host from "../Components/Host";
import Income from "../Pages/Host/Income";
import VansHost from "../Pages/Host/VansHost";
import ChosenVanHost from "../Pages/Host/ChosenVanHost";
import Reviews from "../Pages/Host/Reviews";
import HostVanPricing from "../Pages/Host/HostVanPricing";
import HostVanPhotos from "../Pages/Host/HostVanPhotos";
import HostVanInfo from "../Pages/Host/HostVanInfo";
import { HashRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="About" element={<About />} />
          <Route path="Vans" element={<Vans />} />
          <Route path="Vans/:id" element={<Vandetail />} />
          <Route path="host" element={<Host />}>
            <Route index element={<Dashboard />} />
            <Route path="Income" element={<Income />} />

            <Route path="VansHost" element={<VansHost />} />

            {/* A Nexted router below */}
            <Route path="VansHost/:id" element={<ChosenVanHost />}>
              <Route index element={<HostVanInfo />} />
              <Route path="Pricing" element={<HostVanPricing />} />
              <Route path="Photos" element={<HostVanPhotos />} />
              <Route />
            </Route>

            <Route path="Reviews" element={<Reviews />} />
          </Route>
        </Route>
      </Routes>
    </HashRouter>
  );
}

export default App;
