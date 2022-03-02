import React, { useEffect, useState } from "react";
import "../styles/styles.css";
import Example from "./citiesCards";
import axios from "axios";

const Cities = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });

  const [cities, setCities] = useState([]);

  const [citiesFiltered, setCitiesFiltered] = useState([]);

  const api = () => {
    axios
      .get("http://localhost:4000/api/allcities")//lamo la api
      .then((response) => {
        setCities(response.data.response.cities);//seteo las cities
        setCitiesFiltered(response.data.response.cities);//
      })
      .catch((error) => console.log(error));
    console.log(cities);
  };

  useEffect(() => {
    api();
  }, []);

  function searchInput(event) {
    let value = event.target.value;

    let search = cities.filter((city) => {
      if (city.name.toLowerCase().startsWith(value.toLowerCase().trim())) { //aplico el filtro
        return city;
      }
    });

    setCitiesFiltered(search);// seteo cities filtered y le paso como parametro search
    console.log(search);
  }

  return (
    <>
      <div className="citiesContainer">
        <h1 className="citiesTitle">what will be your next destination?</h1>
        <input
          className="inputCitie"
          placeholder="type"
          onChange={(e) => searchInput(e)}//le aplico la funcion searchInput al input
        ></input>

        <div className="totalCards">  
          <Example cities={citiesFiltered} />
        </div>
      </div>
    </>
  );
};
export default Cities;
