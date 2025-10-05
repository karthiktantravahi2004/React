import { useEffect } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestrauntMenu from "../utils/useRestrauntMenu";

const RestrauntMenu = () => {
  const { resId } = useParams();

  const resInfo = useRestrauntMenu(resId);

  if (resInfo === null) {
    return <Shimmer />;
  }

  const { name, cuisines, cloudinaryImageId, costForTwoMessage } =
    resInfo?.cards?.[2]?.card?.card?.info || {};

  const { itemCards } =
    resInfo?.cards[4].groupedCard.cardGroupMap.REGULAR.cards[2].card.card;
  console.log(itemCards);

  return (
    <div className="menu">
      <h1>{name}</h1>
      <h3>
        {cuisines.join(", ")} - {costForTwoMessage}
      </h3>
      <h2>Menu</h2>
      <ul>
        {itemCards.map((item) => (
          <li key={item.card.info.id}>
            {item.card.info.name} -{" "}
            {"Rs.   " + item.card.info.defaultPrice / 100}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RestrauntMenu;
