import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const VansHost = () => {
  const [vansHostList, setVansHostList] = useState([]);

  useEffect(() => {
    fetch("/api/host/vans")
      .then((res) => res.json())
      .then((data) => {
        setVansHostList(data.vans);
      });
  }, []);

  const handleVansList = vansHostList.map((van) => (
    <Link className="list-link" to={`/host/vansHost/${van.id}`} key={van.id}>
      <div className="host-van-single">
        <img src={van.imageUrl} alt={van.name} />
        <div>
          <h3>{van.name}</h3>
          <p>${van.price}/day</p>
        </div>
      </div>
    </Link>
  ));

  return (
    <section>
      <h1 className="host-vans-title">Your listed vans</h1>
      <div className="host-vans-list">
        {vansHostList.length > 0 ? (
          <section>{handleVansList}</section>
        ) : (
          <h2>Loading...</h2>
        )}
      </div>
    </section>
  );
};

export default VansHost;
