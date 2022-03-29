import React from "react";
import Carousel from "react-grid-carousel";
import "../styles/styles.css";
import CitiesInfo from "./citiesData";

const Carrousel = () => {
  return (
    <div className="Carousel">
      <h2>Popular MyTineraries!!!</h2>
      <Carousel
        cols={2}
        rows={2}
        autoplay={2300}
        gap={10}
        loop
        responsiveLayout={[
          {
            breakpoint: 1200,
            cols: 2,
            gap: 2,
            autoplay: 2300,
          },
          {
            breakpoint: 1000,
            cols: 2,
            gap: 5,
            autoplay: 2300,
          },
          {
            breakpoint: 900,
            cols: 2,
            gap: 3,
            autoplay: 2300,
          },
          {
            breakpoint: 620,
            cols: 1,
            gap: 3,
            rows: 4,
            autoplay: 2300,
          },
        ]}
        mobileBreakpoint={164}
      >
        {CitiesInfo.map((city, index) => (
          <Carousel.Item key={index}>
            <div className="imgText">
              <h3 style={{ position: "relative", color: "white", right: 2 }}>
                {city.name}
              </h3>
              <img
                className="img"
                src={process.env.PUBLIC_URL + `/imagenes/${city.image}`}
                width="90%"
              />
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
};
export default Carrousel;
