import React from 'react';
import Map from './Map'
import '../Assets/Show.css';
import React from "react";
import NewTrip from "../Pages/TripNew.js";

function Show() {
  return (
    <div className="Show">
      <Map />
      <NewTrip />
    </div>
  );
}

export default Show;
