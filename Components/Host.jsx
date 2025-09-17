import { NavLink, Outlet } from "react-router-dom";

const Host = () => {
  const activeChildNav = {
    fontWeight: " bold",
    textDecoration: "underline",
    color: "#161616",
  };

  return (
    <>
      <nav className="host-nav">
        <NavLink
          style={({ isActive }) => (isActive ? activeChildNav : null)}
          end
          to="."
        >
          Dashboard
        </NavLink>
        <NavLink
          style={({ isActive }) => (isActive ? activeChildNav : null)}
          to="Income"
        >
          Income
        </NavLink>

        <NavLink
          style={({ isActive }) => (isActive ? activeChildNav : null)}
          to="VansHost"
        >
          Vans
        </NavLink>
        <NavLink
          style={({ isActive }) => (isActive ? activeChildNav : null)}
          to="Reviews"
        >
          Reviews
        </NavLink>
      </nav>
      <div>
        <Outlet />
      </div>
    </>
  );
};

export default Host;
