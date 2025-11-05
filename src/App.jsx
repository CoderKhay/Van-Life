import { BrowserRouter, Routes , Route, Link} from "react-router-dom";
import Home from "../Pages/Home"
import About from "../Pages/About"

function App(){
  return(
    <BrowserRouter>
 <header className="flex justify-between p-5">
      <Link className="font-bold text-2xl" to="/">#VANLIFE</Link>
     <nav className="flex gap-5 font-medium">
      <Link to="/About">About</Link>
      <Link>Vans</Link>
    </nav>
 </header>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/About' element={<About/>}></Route>
    </Routes>
    </BrowserRouter>
 )
}

export default App;
