import React from "react";
import "../styles/styles.css";
import { useState } from "react";
import { Fade } from "react-bootstrap";
import CitiesInfo from "./citiesData";

function Example() {
  const [open, setOpen] = useState(false);

  return CitiesInfo.map((city, index) => (
    <div className="cityCard" key={index}>
      <img
        className="imgCard"
        src={process.env.PUBLIC_URL + `/imagenes/${city.image}`}
        width="90%"
      />

      <div className="cardContainer">
        <h2
          href="#"
          onMouseOver={() => setOpen(!open)}
          aria-controls="description-city"
          aria-expanded={open}
        >
          {city.name}
        </h2>
        <h6>{city.country}</h6>
        <Fade in={!open}>
          <div className="cityDescription" id="description-city">{city.description}</div>
        </Fade>
      </div>
    </div>
  ));
}

export default Example;

/*const DisplayCards = () => {
  const [visible, SetVisible] = useState(false);

  const changeVisibility = () => {
    SetVisible(!visible);
  };
  return (
    <>
      <img className="citiesImg" src={testCard}></img>
      <div className="cardContainer">

        <h1>Name city</h1>
      
        <h1 onMouseOver={changeVisibility}>
          {visible ? "show info" : "less info"}
        </h1>
        {(visible && "Press for more info")||
          (!visible && "Press for less info")}
      </div>
    </>
  );
};
export default DisplayCards;
*/
