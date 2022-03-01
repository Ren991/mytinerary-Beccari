import React, { useEffect, useState } from "react";
import "./App.css";
import BarButtons from "./components/BarButtons";
import Home from "./components/home";
import Footer from "./components/footer";
import Cities from "./components/cities";
import CitiesDetails from "./components/citiesDetails";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import axios from "axios";

const App = () => {
 
  return (
    <div className="App">
      <BrowserRouter>
        <BarButtons />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cities" element={<Cities/>} />
          <Route path="/citiesDetails/:id" element={< CitiesDetails/>} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
