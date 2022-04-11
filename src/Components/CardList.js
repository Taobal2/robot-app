import React from "react";
import Card from "./Card";
import "../Card.css";

const CardList = ({ robots }) => {
  return (
    <div className="card-list">
      {robots.map((props, i) => (
        <Card
          key={i}
          id={robots[i].id}
          name={robots[i].name}
          email={robots[i].email}
        />
      ))}
    </div>
  );
};

export default CardList;
