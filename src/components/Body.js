import Restrauntcard from "./restrauntCard";
import { useEffect, useState } from "react";
import Shimmer from "../components/Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import useBody from "../utils/useBody";

const Body = () => {
  const [searchText, setsearchText] = useState("");
  const [filteredRestraunt, setfilteredRestraunt] = useState([]);
  const listOfRestaraunts = useBody();

  const onlineStatus = useOnlineStatus();

  useEffect(() => {
    setfilteredRestraunt(listOfRestaraunts);
  }, [listOfRestaraunts]);

  if (onlineStatus === false)
    return <h1>you are offline please check your internet connection</h1>;

  return listOfRestaraunts.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div>
          <input
            type="text"
            className="search-box"
            value={searchText}
            onChange={(e) => {
              setsearchText(e.target.value);
            }}
          />
          <button
            className="search-button"
            onClick={() => {
              console.log("hello");
              const filteredRestraunt = listOfRestaraunts.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setfilteredRestraunt(filteredRestraunt);
            }}
          >
            Search
          </button>
        </div>
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = listOfRestaraunts.filter(
              (res) => res.info.avgRating >= 4.4
            );
            setfilteredRestraunt(filteredList);
          }}
        >
          Top rated restraunt's
        </button>
      </div>
      <div className="res-container">
        {filteredRestraunt.map((restraunt) => (
          <Link to={"/restraunts/" + restraunt.info.id} key={restraunt.info.id}>
            <Restrauntcard resData={restraunt} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
