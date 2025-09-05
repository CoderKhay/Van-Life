import Home from "../Components/Home";
import About from "../Components/About";
import "./index.css";
import { HashRouter, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <HashRouter>
      <header>
        <Link className="site-logo" to="/Home">
          #VANLIFE
        </Link>
        <nav>
          <Link to="/About">About</Link>
        </nav>
      </header>
      <Routes>
        <Route path="/Home" element={<Home />} />
        <Route path="/About" element={<About />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
