import { useEffect, useState } from "react";

const User = ({ name }) => {
  const [count, setcount] = useState(0);

  return (
    <div className="user-card">
      <h2>count : {count}</h2>
      <button
        onClick={() => {
          setcount(count + 1);
        }}
      >
        count+
      </button>
      <h2>Location : Kakinada </h2>
      <h2>Contact : @karthik_tantravahi</h2>
    </div>
  );
};

export default User;
