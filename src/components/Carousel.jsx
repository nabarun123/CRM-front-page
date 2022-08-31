import React from "react";
import { UncontrolledCarousel } from "reactstrap";
import sliderImage1 from "../assets/sliderImage1.jpg";
import sliderImage2 from "../assets/sliderImage2.jpg";
import sliderImage3 from "../assets/sliderImage3.jpg";
import sliderImage4 from "../assets/sliderImage4.jpg";
import sliderImage5 from "../assets/sliderImage5.jpg";

const images = [
  {
    src: sliderImage1,
    id: 1,
    altText: "Slide 1",
  },
];

function Carousel() {
  return (
    <UncontrolledCarousel
      items={images}
      interval="1500"
      style={{ marginTop: "0.3%" }}
    />
  );
}

export default Carousel;
