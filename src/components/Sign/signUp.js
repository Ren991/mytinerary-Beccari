import React, { useState } from "react";
import { connect } from "react-redux";
import userActions from "../../redux/actions/userActions";
import { Link as LinkRouter } from "react-router-dom";
import "../../styles/styles.css";
import Snack from "./snackbar";
import FacebookSignUp from "./FacebookSignUp";

function SignUp(props) {
  const paises = [
    "unselected",
    "Argentina",
    "Brazil",
    "Colombia",
    "Chile",
    "Uruguay",
    "Venezuela",
    "Paraguay",
    "Ecuador",
  ];

  const [selectPaises, setSelectPaises] = useState("unselected");

  function selected(event) {
    console.log(event.target.value);
    setSelectPaises(event.target.value);
  }
  console.log(props);
  const handleSubmit = (event) => {
    event.preventDefault(); //evitamos el comportamiento por defecto (el refresco) ante el evento (submit), prevengo el refresco
    console.log(event.target);
    const userData = {
      //recolecto los datos del formulario
      name: event.target[0].value,
      lastName: event.target[1].value,
      email: event.target[2].value,
      password: event.target[3].value,
      country: selectPaises,
      photo: event.target[5].value,
      from: "form-Signup",
    };
    props.signUpUser(userData); //A la funcion signUpUser le paso todos los datos del objeto userData
  };
  //console.log(props);

  return (
    <div className="formSignUp">
      <div className="styled-select">
        <Snack />
       
      </div>
      {selectPaises !== "unselected" ? (
        <>
       
          <h2 className="freeCount text-center">Get started with your free account</h2>

         
          <FacebookSignUp pais={selectPaises} />
          <form onSubmit={handleSubmit}>
            <div className="form-group name">
              <input
                name="name"
                className="form-control"
                placeholder="name"
                type="text"
              />
            </div>

            <div className="form-group input-group">
              <input
                name="lastName"
                className="form-control"
                placeholder="last name"
                type="text"
              />
            </div>

            <div className="form-group input-group">
              <input
                name="email"
                className="form-control"
                placeholder="Email address"
                type="email"
              />
            </div>

            <div className="form-group input-group">
              <input
                name="password"
                className="form-control"
                placeholder="Create password"
                type="password"
              />
            </div>

            <div className="form-group input-group">
              <input
                name="photo"
                className="form-control"
                placeholder="Photo Url"
                type="text"
              />
            </div>

            <div className="form-group">
              <button type="submit" className="btn btn-primary btn-block">
                {" "}
                Create Account{" "}
              </button>
            </div>
            <div className="text-center">
              Have an account? <LinkRouter  to="/signIn">SignIn</LinkRouter>{" "}
            </div>
          </form>
        </>
      ) : (
        <>
        <h1>Select a country to start registration</h1>
        <select
        className="form-group form-select-sm"
        aria-label=".form-select-sm example"
        onChange={selected}
      >
        {paises.map((pais,index) => (
          <option key={index}>{pais}</option>
        ))}
      </select>
       
      </>
      )}
    </div>
  );

  
}

const mapDispatchToProps = {
  signUpUser: userActions.signUpUser,
};
const mapStateToProps = (state) => {
  return {
    message: state.userR.message,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
