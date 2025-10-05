import { useState, useEffect } from "react";

const useBody = () => {
  const [listOfRestaraunts, setlistOfRestaraunts] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=16.9890648&lng=82.2474648&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();
    setlistOfRestaraunts(
      json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants
    );
  };

  return listOfRestaraunts;
};
export default useBody;
