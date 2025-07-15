import Restrauntcard from "./restrauntCard";
import { use, useEffect, useState } from "react";
import Shimmer from "../components/Shimmer";
const Body = () => {
  const [listOfRestaraunts, setlistOfRestaraunts] = useState([]);
  const [searchText, setsearchText] = useState("");
  const [filteredRestraunt, setfilteredRestraunt] = useState([]);

  console.log("hehe");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=16.9890648&lng=82.2474648&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();
    console.log(json);
    setlistOfRestaraunts(
      json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants
    );
    setfilteredRestraunt(
      json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants
    );
  };

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
              (res) => res.info.avgRating > 4.4
            );
            setlistOfRestaraunts(filteredList);
          }}
        >
          Top rated restraunt's
        </button>
      </div>
      <div className="res-container">
        {filteredRestraunt.map((restraunt) => (
          <Restrauntcard key={restraunt.info.id} resData={restraunt} />
        ))}
      </div>
    </div>
  );
};

export default Body;
