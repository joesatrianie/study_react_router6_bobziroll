import { Link, NavLink, Outlet, useLoaderData } from "react-router-dom";
import { getHostVans } from "../../api";
import { requireAuth } from "../../utils";

export async function loader({ params }) {
  await requireAuth();
  return getHostVans(params.id);
}

function HostVanDetail() {
  let activeStyles = {
    color: "#161616",
    textDecoration: "underline",
    fontWeight: "bold",
  };
  // const { id } = useParams();
  // const [currentVan, setCurrentVan] = React.useState(null);
  const currentVan = useLoaderData()[0];
  // React.useEffect(() => {
  //   fetch(`/api/host/vans/${id}`)
  //     .then((res) => res.json())
  //     .then((data) => setCurrentVan(data.vans[0]));
  // }, [id]);
  // if (!currentVan) {
  //   return <h1>Loading...</h1>;
  // }
  return (
    <section>
      <Link to=".." relative="path" className="back-button">
        &larr; <span>Back to all vans</span>
      </Link>
      <div className="host-van-detail-layout-container">
        <div className="host-van-detail">
          <img src={currentVan.imageUrl} alt="" />
          <div className="host-van-detail-info-text">
            <i className={`van-type van-type-${currentVan.type}`}>
              {currentVan.type}
            </i>
            <h3>{currentVan.name}</h3>
            <h4>{currentVan.price}/day</h4>
          </div>
        </div>
        <nav className="host-van-detail-nav">
          <NavLink
            to="."
            style={({ isActive }) => (isActive ? activeStyles : null)}
            end
          >
            Details
          </NavLink>
          <NavLink
            to="pricing"
            style={({ isActive }) => (isActive ? activeStyles : null)}
          >
            Pricing
          </NavLink>
          <NavLink
            to="photo"
            style={({ isActive }) => (isActive ? activeStyles : null)}
          >
            Photo
          </NavLink>
        </nav>
        <Outlet context={{ currentVan }} />
      </div>
    </section>
  );
}
export default HostVanDetail;
