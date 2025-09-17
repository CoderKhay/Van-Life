import { NavLink, Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <Link className="site-logo" to="/">
        #VANLIFE
      </Link>
      <nav>
        <NavLink
          className={({ isActive }) => (isActive ? "activeBars" : null)}
          to="host"
        >
          Host
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? "activeBars" : null)}
          to="About"
        >
          About
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? "activeBars" : null)}
          to="Vans"
        >
          Vans
        </NavLink>
      </nav>
    </header>
  );
};

export default Header;
