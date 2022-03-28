import "../styles/styles.css";

import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Link as LinkRouter } from "react-router-dom";
import Itineraries from "./citiesItineraries";
import { connect } from "react-redux";
import itinerariesActions from "../redux/actions/itinerariesActions";
import citiesActions from "../redux/actions/citiesActions";
import activitiesActions from "../redux/actions/activitiesActions";

const CitiesDetails = (props) => {
  const [details, setDetails] = useState([]);//setDetails para llamar a la api //para filtrar el id del pais
  const { id } = useParams();
  
  
  useEffect(() => {
    
      props.getOneCitie(id)
      .then((data)=>setDetails(data)) 
       //esto soluciona el problema de async al apretar f5
     ; // redirecciona a cities
    
     
    props.getItineraries(id);
  }, [props.details]);
  
  return (
    <div className="detailsPage">
      <div>
        <h2 className="detailsName"> {details.name} </h2>;
        <img
          className="imgCard"
          src={process.env.PUBLIC_URL + `/imagenes/${details.image}`}
          width="90%"
        />
      </div>
      
      {props.itineraries.length !== 0 ? (
        props.itineraries.map((itinerary,index) => (
          <div key={index}>
            <Itineraries itinerary={itinerary} id={itinerary._id} />
            {/*Les paso las props al componente que renderiza los itinerarios  */}
          </div>
        ))
      ) : (
        <h4 className="noItineraries">
          We dont have itineraries for this citie yet
        </h4>
      )}
      <LinkRouter to="/cities">
        <button className="buttonClick buttonCities">Go to cities</button>
      </LinkRouter>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    cities: state.citiesR.cities, //El estado de ciudades que necesito para que luego se modifique
    itineraries: state.itinerarieR.itineraries,//El estado de itinerarios que necesito
    //activities:state.activitieR.activities,
  };
};
const mapDispatchToProps = {
  getItineraries: itinerariesActions.getItineraries,//Las acciones de itinerarios que necesito
  getOneCitie:citiesActions.getOneCitie,
  getCities: citiesActions.getCities,//Las acciones de ciudades que necesito
  //getActivities: activitiesActions.getActivities
};
export default connect(mapStateToProps, mapDispatchToProps)(CitiesDetails);
