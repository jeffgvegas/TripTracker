import React, { useState, useEffect } from "react";
import Card from "./Card";

const Cards = () => {
  const [trips, setTrips] = useState([]);
  const [displayTrip, setDisplayTrip] = useState(false);
  const [currentTrip, setCurrentTrip] = useState({});
  const [displayEditTrip, setDisplayEditTrip] = useState(false);

  const showTrip = trip => {
    setDisplayTrip(true);
    setDisplayEditTrip(false);
    setCurrentTrip(trip);
  };

  const editSong = trip => {
    setDisplayEditTrip(true);
    setDisplayTrip(false);
    setCurrentTrip(trip);
  };
};

const Board = () => {
  return (
    <div className="Board">
      <Cards />
    </div>
  );
};

export default Board;
