import React from "react";
import NewTrip from "../Pages/TripNew.js";
import Map from "./Map";
import "../Assets/Show.css";
import TripShow from "../Pages/TripShow.js";

function Show() {
  return (
    <div className="Show">
      <Map />
      <TripShow />
      <NewTrip />
    </div>
  );
}

export default Show;
