import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const Cards = (props) => {
  return (
    <div>
      <Card
        className="mx-auto"
        style={{ width: "18rem", boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)" }}
      >
        <Card.Img style={{ width: "18rem" }} variant="top" src={props.imgsrc} />
        <Card.Body>
          <Card.Title>{props.title}</Card.Title>
          {/* <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text> */}
          <a href={props.link}>
            <Button variant="primary">View</Button>
          </a>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Cards;
