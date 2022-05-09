import React from "react";
import './content.css';
import { carouselimages } from "../../Assets/carouselimages";
import Carousel from "react-bootstrap/Carousel";

function Content() {
  return (
    <>
      <Carousel fade>
      {carouselimages.map((data) => {
          return (
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={data.img}
                    alt={data.alt}
                />
            </Carousel.Item>
          );
      })};
      </Carousel>
    </>
  );
}
export default Content;
