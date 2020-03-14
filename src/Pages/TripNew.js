import React, { useState, useEffect } from "react";

const NewTrip = props => {
  const [titleValue, setTitleValue] = useState("");
  const handleTitleChange = event => {
    setTitleValue(event.currentTarget.value);
  };
  const handleSubmit = event => {
    const params = { trip: { title: titleValue } };
    fetch(`http://trips_api:3001/trips/${props.id}.json`, {
      method: "POST",
      body: JSON.stringify(params)
    }).then(res => res.json());
  };

  return (
    <div>
      <p>
        <input type="text" value={titleValue} onChange={handleTitleChange} />
      </p>
      <button onClick={handleSubmit}>Create</button>
    </div>
  );
};

export default NewTrip;
