import "../styles/styles.css";
import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link as LinkRouter } from "react-router-dom";

const CitiesDetails = () => {
  const [details, setDetails] = useState([]);
  const [city, setCity] = useState([]);

  const { id } = useParams();

  const api = () => {
    axios
      .get("http://localhost:4000/api/allcities")
      .then((response) => {
        setDetails(response.data.response.cities);
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    api();

    setCity(details.filter((cities) => cities._id === id));
  }, [details]); // array de dependencia , empieza vacio. Cada vez que cambie se va a ejecutar el useEffect

  return (
    <div className="detailsPage">
      <h2>Page under construction</h2>
      <LinkRouter to="/cities">
        <button className="buttonClick">Go to cities</button>
      </LinkRouter>

      <>
        {city.length > 0
          ? city.map((hola) => {
              return (
                <>
                  <h2>{hola.name}</h2>
                  <img
                    className="imgCard"
                    src={process.env.PUBLIC_URL + `/imagenes/${hola.image}`}
                    width="90%"
                  />
                </>
              );
            })
          : null}
      </>
    </div>
  );
};
export default CitiesDetails;
