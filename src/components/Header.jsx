import { NavLink, Link } from "react-router-dom";
import loginAvatar from "/src/assets/images/avatar-icon.png";

function Header() {
  let activeStyles = {
    color: "#161616",
    textDecoration: "underline",
    fontWeight: "bold",
  };

  return (
    <header>
      <NavLink className="site-logo" to="/">
        #VANLIFE
      </NavLink>
      <nav>
        <NavLink
          to="/host"
          style={({ isActive }) => (isActive ? activeStyles : null)}
        >
          Host
        </NavLink>
        <NavLink
          to="/about"
          style={({ isActive }) => (isActive ? activeStyles : null)}
        >
          About
        </NavLink>
        <NavLink
          to="/vans"
          style={({ isActive }) => (isActive ? activeStyles : null)}
        >
          Vans
        </NavLink>
        <Link to="login" className="login-link">
          <img src={loginAvatar} className="login-icon" />
        </Link>
      </nav>
    </header>
  );
}
export default Header;
