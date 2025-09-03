import Home from "../Components/Home";
import About from "../Components/About";
import "./index.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
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
    </BrowserRouter>
  );
}

export default App;
