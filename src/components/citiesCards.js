import React from "react";
import "../styles/styles.css";
import { useState } from "react";
import { Fade } from "react-bootstrap";
import { Link as LinkRouter } from "react-router-dom";

function Example(props) {
  const [open, setOpen] = useState(false);
  const cities = props.cities;

  return (
    <>
      {cities.length > 0 ? (
        cities?.map((city, index) => (
          <div className="cityCard" key={index}>
            <img
              className="imgCard"
              src={process.env.PUBLIC_URL + `/imagenes/${city.image}`}
              width="90%"
            />

            <div className="cardContainer">
              <LinkRouter to={`/citiesDetails/${city._id}`}>
                <h2
                  onMouseOver={() => setOpen(!open)}
                  aria-controls="description-city"
                  aria-expanded={open}
                >
                  {city.name}
                </h2>
              </LinkRouter>
              <h6>{city.country}</h6>
              <Fade in={!open}>
                <div className="cityDescription" id="description-city">
                  {city.description}
                </div>
              </Fade>
            </div>
          </div>
        ))
      ) : (
        <h1 className="noResults">No results founded </h1>
      )}
    </>
  );
}

export default Example;
