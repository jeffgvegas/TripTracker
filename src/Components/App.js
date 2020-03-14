import React from "react";
import Nav from "./Nav";
import TripCard from "./Card";
import Show from "./Show";

function App() {
  return (
    <div className="App">
      <h1>TRIPTRACKER</h1>
      <Nav />
      <TripCard />
      <Show />
    </div>
  );
}

export default App;
