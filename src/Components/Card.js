import React, { useState, useEffect } from "react";
import { Card, ListGroupItem, ListGroup } from "react-bootstrap";
import { useParams } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "../Assets/Cards.css";

const TripCard = props => {
  const [trip, setTrip] = useState({});

  useEffect(() => {
    fetch(`http://localhost:3001`)
      .then(res => res.json())
      .then(data => setTrip(data));
  }, []);

  return (
    <Card style={{ width: "18rem" }}>
      <Card.Body>
        <Card.Title>{trip.title}</Card.Title>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroupItem>Start: {trip.location}</ListGroupItem>
        <ListGroupItem>End: {trip.location}</ListGroupItem>
      </ListGroup>
      <Card.Body>
        <Card.Link href="#">Edit</Card.Link>
        <Card.Link href="#">Show</Card.Link>
        <Card.Link href="#">Delete</Card.Link>
      </Card.Body>
    </Card>
  );
};

export default TripCard;
