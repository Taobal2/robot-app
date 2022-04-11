import React from "react";
import "../Card.css";

const Card = (props) => {
  return (
    <div className="card">
      <img alt="robots" src={"https://robohash.org/test"} />
      <h1>{props.name}</h1>
      <p>{props.email}</p>
    </div>
  );
};

export default Card;
