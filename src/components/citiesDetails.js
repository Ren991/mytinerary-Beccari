import "../styles/styles.css";

import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link as LinkRouter } from "react-router-dom";
import Itineraries from "./citiesItineraries";
import { connect } from "react-redux";
import itinerariesActions from "../redux/actions/itinerariesActions";
import citiesActions from "../redux/actions/citiesActions";

const CitiesDetails = (props) => {
  const [details, setDetails] = useState([]); //setDetails para llamar a la api //para filtrar el id del pais
  const { id } = useParams();

  useEffect(() => {
    if (props.cities.length === 0){ //esto soluciona el problema de async al apretar f5
      window.location.replace("/cities") // redirecciona a cities
    } //PREGUNTAR POR QUE NO PUEDO VER TODAS LAS PROPS Y USAR PROPS.HISTORY.PUSH("/")
    setDetails(
      props.cities.find((cities) => cities._id === id)// 
    );
    props.getItineraries(id)
  }, [props.cities]); 
  console.log(props.itineraries)
  console.log(details); 
  return (
    <div className="detailsPage">
      <div>
        <h2>{details.name}</h2>;
        <img
          className="imgCard"
          src={process.env.PUBLIC_URL + `/imagenes/${details.image}`}
          width="90%"
        />
      </div>
      {props.itineraries.length !== 0 && props.itineraries.map(itinerary=>
      <><Itineraries itinerary={itinerary}/>
     </>)}  
     <LinkRouter to="/cities">
        <button className="buttonClick">Go to cities</button>
      </LinkRouter>

    </div>
  
  );
  
};

const mapStateToProps = (state) => {
  return {
    cities: state.citiesR.cities,
    itineraries: state.itinerarieR.itineraries,
  };
};
const mapDispatchToProps = {
  getItineraries: itinerariesActions.getItineraries,
  getCities: citiesActions.getCities,
};
export default connect(mapStateToProps, mapDispatchToProps)(CitiesDetails);
