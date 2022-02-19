import React from "react";
import "../styles/footer.css";
import instagram from './assets/instagram.png'
import facebook from './assets/facebook.png'
import twitter from './assets/twitter.png'

const Footer = () => {
  return(
    <div className="mainFooter">
     <h3>My Tinerary||All rights reserved </h3>
     <a href="#">Home</a>
     <a href="#">Cities</a>
     
     <h4>Do not miss the offers and promotions! follow us</h4>
    <div>
      <img className="bridge" width="45rem"  src={instagram}/>
      <img className="bridge" width="45rem"  src={twitter}/>
      <img className="bridge" width="45rem"  src={facebook}/>
    </div>
    </div>
    
    
    
    ) 
};
export default Footer;
