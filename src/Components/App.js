import React from 'react';
import Nav from './Nav'
import Cards from './Cards'
import Show from './Show'
import '../Assets/App.css';

function App() {
  return (
    <div className="App">
      <h1>TRIPTRACKER</h1>
      <Nav />
      <Cards />
      <Show />
    </div>
  );
}

export default App;
