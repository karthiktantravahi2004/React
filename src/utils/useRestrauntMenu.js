import { useEffect, useState } from "react";
import { MENU_URL } from "../utils/constants";

const useRestrauntMenu = (resId) => {
  const [resinfo, setresInfo] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(MENU_URL + resId);

    const json = await data.json();
    setresInfo(json);
  };

  return resInfo;
};

export default useRestrauntMenu;
