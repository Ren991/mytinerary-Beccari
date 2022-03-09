import React, { useEffect, useState } from "react";
import "../styles/styles.css";
import Example from "./citiesCards";

import { connect } from "react-redux";
import citiesActions from "../redux/actions/citiesActions";
const Cities = (props) => {
  window.scrollTo({ top: 0, behavior: "smooth" });

  const [cities, setCities] = useState([]);

  useEffect(() => {
    if (props.allCities.length === 0) {
      props.getCities();
    }
    setCities(props.allCities);//Cargo las ciudades a cities
  }, [props.allCities]);
  console.log(props);
  
  function returnCities() {//creo funcion para retornar ciudades
    if (cities === 0) { 
      return (
        <>
          <h2>Loading...</h2>
        </>
      );
    }
    if (props.oneCity.length === 0) { //Si no encuentra la ciudad que ingresamos en el input
      return (
        <>
          <p>Oops! We didn't found this place. Try other!</p>
        </>
      );
    } else {
      return (
        <>
          {props.oneCity.map((city) => (
            <Example key={city.name} city={city} /> //Componente que renderiza el estilos de las cards
          ))}
        </>
      );
    }
  }

  return (
    <>
      <input
        type="text"
        placeholder="Type here for search"
        onChange={(e) => props.filterCities(e.target.value.trim())}
      ></input>
      {returnCities()}
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    allCities: state.citiesR.cities,
    oneCity: state.citiesR.citiesFiltered,
  };
};

const mapDispatchToProps = {
  getCities: citiesActions.getCities,
  filterCities: citiesActions.filterCities,
};

export default connect(mapStateToProps, mapDispatchToProps)(Cities);
