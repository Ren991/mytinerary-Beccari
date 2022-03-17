import React, { useEffect } from "react";
import "./App.css";
import BarButtons from "./components/BarButtons";
import Home from "./components/home";
import Footer from "./components/footer";
import Cities from "./components/cities";
import CitiesDetails from "./components/citiesDetails";
import Container from "./components/Sign/container";
import SignUp from "./components/Sign/signUp"
import SignIn from "./components/Sign/signIn"
import { connect } from 'react-redux';
import userActions from './redux/actions/userActions';


import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = (props) => {
  useEffect(() => {
 
    if(localStorage.getItem('token')!== null){
      const token = localStorage.getItem("token")
      props.VerificarToken(token)
    }
  },[])
  return (
    <div className="App">
      <BrowserRouter>
        <BarButtons />
      
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cities" element={<Cities />} />
          <Route path="/citiesDetails/:id" element={<CitiesDetails />} />
          <Route path="/container" element={ <Container/>}/>
          <Route path="/signUp" element={ <SignUp/>}/>
          <Route path="/signIn" element={ <SignIn/>}/>

        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
};
const mapDispatchToProps = {
	VerificarToken: userActions.VerificarToken,

}



export default connect(null, mapDispatchToProps)(App);

