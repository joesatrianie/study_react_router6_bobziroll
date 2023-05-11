import { NavLink, Outlet } from "react-router-dom";

function HostLayout() {
  let activeStyles = {
    color: "#161616",
    textDecoration: "underline",
    fontWeight: "bold",
  };

  return (
    <>
      <nav className="host-nav">
        <NavLink
          to="."
          style={({ isActive }) => (isActive ? activeStyles : null)}
          end
        >
          Dashboard
        </NavLink>
        <NavLink
          to="income"
          style={({ isActive }) => (isActive ? activeStyles : null)}
        >
          Income
        </NavLink>
        <NavLink
          to="vans"
          style={({ isActive }) => (isActive ? activeStyles : null)}
        >
          Vans
        </NavLink>
        <NavLink
          to="reviews"
          style={({ isActive }) => (isActive ? activeStyles : null)}
        >
          Reviews
        </NavLink>
      </nav>
      <Outlet />
    </>
  );
}

export default HostLayout;
