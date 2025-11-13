 import {NavLink,Link} from "react-router-dom"

 export default function Header() {
const activeStyle = {
  fontWeight: "bold",
  textDecoration: "underline",
  color: "#161616"
}

    return(
 <header className="flex justify-between p-5">
      <Link className="font-bold text-2xl" to="/">#VANLIFE</Link>
     <nav className="flex gap-5 font-medium">

      <NavLink style={({isActive})=> isActive ? activeStyle : null } to="/host">
         Host
         </NavLink>

      <NavLink style={({isActive})=> isActive ? activeStyle : null } to="/About">
         About
         </NavLink>

      <NavLink style={({isActive})=> isActive ? activeStyle : null } to="/Vans">
         Vans
         </NavLink>
         
    </nav>
 </header>
    )
 }