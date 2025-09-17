import { useEffect, useState } from "react";
import { useParams, Link, Outlet, NavLink } from "react-router-dom";

const ChosenVanHost = () => {
  const { id } = useParams();
  const [currentVan, setCurrentVan] = useState(null);

  useEffect(() => {
    fetch(`/api/host/vans/${id}`)
      .then((response) => response.json())
      .then((data) => setCurrentVan(data.vans));
  }, [id]);

  if (!currentVan) {
    return <h1>Loading...</h1>;
  }

  return (
    <section className="chosen-van-host-detail-container">
      <Link to=".." relative="path" className="back-button">
        &larr; <span>Back to all vans</span>
      </Link>
      <div className="chosen-van-host-container">
        <div className="chosen-van-host-van-detail">
          <img src={currentVan.imageUrl} />
          <div className="chosen-van-host-detail-info-text">
            <i className={`van-type van-type-${currentVan.type}`}>
              {currentVan.type}
            </i>
            <h3>{currentVan.name}</h3>
            <h4>${currentVan.price}/day</h4>
          </div>
        </div>
      </div>

      <nav className="host-van-detail-nav">
        <NavLink
          end
          className={({ isActive }) => (isActive ? "lastNavBar" : null)}
          to="."
        >
          Details
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? "lastNavBar" : null)}
          to="pricing"
        >
          Pricing
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? "lastNavBar" : null)}
          to="photos"
        >
          Photos
        </NavLink>
      </nav>

      <Outlet context={{ currentVan }} />
    </section>
  );
};

export default ChosenVanHost;
