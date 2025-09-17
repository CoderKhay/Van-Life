import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

const Vandetail = () => {
  const param = useParams();

  const [vanDetail, setVanDetail] = useState(null);

  try {
    useEffect(() => {
      fetch(`/api/vans/${param.id}`)
        .then((response) => response.json())
        .then((data) => {
          setVanDetail(data.vans);
          console.log(data.vans);
        });
    }, [param.id]);
  } catch (error) {
    setVanDetail(error);
  }

  return (
    <div className="van-detail-container">
      {vanDetail ? (
        <div className="van-detail">
          <img src={vanDetail.imageUrl} />
          <i className={`van-type ${vanDetail.type} selected`}>
            {vanDetail.type}
          </i>
          <h2>{vanDetail.name}</h2>
          <p className="van-price">
            <span>${vanDetail.price}</span>/day
          </p>
          <p>{vanDetail.description}</p>
          <button className="link-button">Rent this van</button>
        </div>
      ) : (
        <h2>Loading...</h2>
      )}
    </div>
  );
};

export default Vandetail;
