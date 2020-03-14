import React, { useState, useEffect } from "react";

const NewTrip = props => {
  const [titleValue, setTitleValue] = useState("");
  const handleTitleChange = event => {
    setTitleValue(event.currentTarget.value);
  };
  const handleSubmit = event => {
    const params = { trip: { title: titleValue } };
    fetch(`http://localhost:3001/trips/${props.id}.json`, {
      method: "POST",
      body: JSON.stringify(params)
    }).then(res => res.json());
  };

  return (
    <div>
      <p>
        <label>Title</label>
        <input type="text" value={titleValue} onChange={handleTitleChange} />
      </p>
      <p>
        <label>Location #1</label>
        <input type="text" value={titleValue} onChange={handleTitleChange} />
      </p>
      <p>
        <label>Location #2</label>
        <input type="text" value={titleValue} onChange={handleTitleChange} />
      </p>
      <p>
        <label>Location #3</label>
        <input type="text" value={titleValue} onChange={handleTitleChange} />
      </p>
      <p>
        <label>Latitude</label>
        <input type="text" value={titleValue} onChange={handleTitleChange} />
      </p>
      <p>
        <label>Longitude</label>
        <input type="text" value={titleValue} onChange={handleTitleChange} />
      </p>
      <button onClick={handleSubmit}>Create Trip</button>
    </div>
  );
};

export default NewTrip;
