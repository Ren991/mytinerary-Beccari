import React from "react";
import "../styles/styles.css";
import { useState } from "react";
import { Fade } from "react-bootstrap";
import { Link as LinkRouter } from "react-router-dom";

function Example({city}) {//le paso como props las ciudades filtradas desde cities
  const [open, setOpen] = useState(false);
   //creo una variable con las props
  
  return (
    <>
    
      
          <div className="cityCard" >
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
       
    </>
  );
}

export default Example;
