import React from "react";
import "../styles/styles.css";
import instagram from './assets/instagram.png'
import facebook from './assets/facebook.png'
import twitter from './assets/twitter.png'
import logo from './assets/logo.png'
import {Link as LinkRouter} from 'react-router-dom'

const Footer = () => {
  return(
    <div className="mainFooter">
     <h3>My Tinerary||All rights reserved </h3>
     <img width="50rem"  src={logo}/>
     <LinkRouter to="/" className="FooterButton" >
     Home
     </LinkRouter>
    
     <LinkRouter to="/cities" className="FooterButton">
     Cities
     </LinkRouter>
     
     <h4>Do not miss the offers and promotions! follow us</h4>
    <div>
      <a href="#">
      <img  width="45rem"  src={instagram}/>
      </a>
      
      <a href="#" >
      <img width="45rem"  src={twitter}/>
      </a>
      
      <a href="#">
      <img width="45rem"  src={facebook}/>
      </a>
      
    </div>
    </div>
    ) 
};
export default Footer;
