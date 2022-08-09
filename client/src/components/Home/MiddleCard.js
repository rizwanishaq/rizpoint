import React, { useState, useEffect } from "react";
import Card from "react-bootstrap/Card";
import Carousel from "react-bootstrap/Carousel";

const MiddleCard = () => {
  const [index, setIndex] = useState(0);
  const [joke, setJoke] = useState("");

  useEffect(() => {
    const getJoke = async () => {
      const response = await fetch("https://api.chucknorris.io/jokes/random");
      const data = await response.json();
      setJoke(data["value"]);
    };
    getJoke();
  }, [index, setJoke]);

  return (
    <Card className="text-center bg-secondary text-white my-5 py-4">
      <Card.Body>
        <Carousel
          onSelect={(selectedIndex, e) => {
            setIndex(selectedIndex);
          }}
          indicators={false}
        >
          <Carousel.Item>{joke}</Carousel.Item>
          <Carousel.Item>{joke}</Carousel.Item>
        </Carousel>
      </Card.Body>
    </Card>
  );
};

export default MiddleCard;
