import React from "react";
import { Carousel } from "react-responsive-carousel";
import classes from "./carousel.module.css";
import { img } from "./carousalImages/data";
import "react-responsive-carousel/lib/styles/carousel.min.css";

function CarouselEffect() {
  return (
    <div>
      <Carousel
        autoPlay={true}
        infiniteLoop={true}
        showIndicators={false}
        showThumbs={false}
      >
        {
        img.map((imageitems, index) => {
          return <img src={imageitems} key={index}/>;
        })}
      </Carousel>
      <div className={classes.hero__img}></div>
    </div>
  );
}

export default CarouselEffect;
