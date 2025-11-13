import {NavLink,Outlet} from "react-router-dom"

const HostLayout = () => {

  const activeStyle = {
    fontWeight: "bold",
    textDecoration: "underline",
    color: "#161616"
  }

  return (
    <> 
<nav className="m-5 p-2 w-70 flex justify-between text-gray-500">

 <NavLink style={({isActive})=> isActive ? activeStyle : null }  className="hover:underline hover:text-black hover:font-semibold" to="." end>
 Dashboard
 </NavLink>

 <NavLink style={({isActive})=> isActive ? activeStyle : null }  className="hover:underline hover:text-black hover:font-semibold" to="income">
 Income
 </NavLink>

 <NavLink style={({isActive})=> isActive ? activeStyle : null }  className="hover:underline hover:text-black hover:font-semibold" to="vans">
 Vans
 </NavLink>

 <NavLink style={({isActive})=> isActive ? activeStyle : null }  className="hover:underline hover:text-black hover:font-semibold" to="reviews">
 Reviews
 </NavLink>

</nav>
<Outlet/>
    </>
  )
}

export default HostLayout