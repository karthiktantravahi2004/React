import React from "react";
import ReactDOM from "react-dom/client";
import "/index.css";
import batman from "./src/batman.jpg";

//component composition
const Heading = () => {
  return (
    <header>
      <div className="logo">
        <h1>Batman</h1>
      </div>
      <div className="searchbar">
        <input type="text" placeholder="Search"></input>
      </div>
      <div className="icon">
        <img src="/src/batmangig" alt="batman" />
      </div>
    </header>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<Heading />);
