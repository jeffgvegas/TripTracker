import React from "react";
import "../Assets/Cards.css";
import TripCard from "./Card.js";

const Cards = () => {
  return (
    <div className="Cards">
      <TripCard />
      <TripCard />
      <TripCard />
    </div>
  );
};
export default Cards;
