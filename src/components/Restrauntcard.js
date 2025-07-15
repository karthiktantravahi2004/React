import { CDN_URL } from "../utils/constants";

const Restrauntcard = ({ resData }) => {
  const { name, cuisines, avgRating } = resData?.info;
  return (
    <div className="res-card" style={{ backgroundColor: "#f0f0f0" }}>
      <img
        className="res-logo"
        alt="res-logo"
        src={CDN_URL + resData.info.cloudinaryImageId}
      />
      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating}</h4>
      <h4>{resData.info.deliveryTime} minutes</h4>
    </div>
  );
};

export default Restrauntcard;
