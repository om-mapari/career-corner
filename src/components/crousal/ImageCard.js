import React from "react";
import { Card } from "react-bootstrap";

const ImageCard = (props) => {
  return (
    <>
      <Card style={{ width: "inherit" }}>
        <Card.Img variant="top" src={props.imgSrc} />
      </Card>
    </>
  );
};

export default ImageCard;
