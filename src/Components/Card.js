import React from "react";
import Cards from "./Cards";

const Card = props => {
  return (
    <div className="Card">
      <h3>{props.title}</h3>
      <a href="#" onClick={() => showTrip(trip)}>
        Show
      </a>
      -
      <a href="#" onClick={() => editTrip(trip)}>
        Show
      </a>
      -
      <a href="#" onClick={() => deleteTrip(trip)}>
        Show
      </a>
    </div>
  );
};

export default Card;
