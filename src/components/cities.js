import React, { useEffect, useState } from "react";
import "../styles/styles.css";
import Example from "./citiesCards";
import axios from "axios";

const Cities = (props) => {
  window.scrollTo({top: 0, behavior: "smooth"})
  const [apiCiudades, setapiCiudades] = useState();
  useEffect(() => {
    axios
      .get("http://localhost:4000/api/allcities")
      .then((response) => setapiCiudades(response.data.response.ciudades));
  }, []);

  
  const [citiesResult, setCities] = useState(); //cities
  const [searchResult, setSearchResult] = useState();
  console.log(apiCiudades);

  function searchInput(event) {
    let search = event.target.value;
    setSearchResult(
      apiCiudades.filter((city) =>
        city.name.toLowerCase().startsWith(search.toLowerCase().trim())
      )
    );
  }
  useEffect(() => {
    if (searchResult === undefined) {
      setCities();
    } else {
      setCities(searchResult);
    }
  }, [searchResult]); //lee el valor de la constante search Result , si esta cambio vuelve a ejecutar lo que esta dentro del useEffect
  console.log(citiesResult);
  setSearchResult(apiCiudades)
  return (
    <div className="citiesContainer">
      <h1 className="citiesTitle">what will be your next destination?</h1>
      <input
        className="inputCitie"
        placeholder="type"
        onChange={searchInput}
      ></input>

    {/*    <div className="totalCards">
        <Example cities={citiesResult} />
      </div>  */}
    </div>
  );
};
export default Cities;
