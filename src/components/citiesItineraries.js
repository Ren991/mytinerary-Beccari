import React from "react";
import Accordion from "react-bootstrap/Accordion";
import "../styles/styles.css";
import clock from "./assets/clock.png";

import like from "./assets/like.png"



const Itineraries = ({itinerary}) => {
  return (
    <Accordion className="detailsAccordion" defaultActiveKey="1" >
      
            <h2 className="itineraryTitle">{itinerary.title}</h2>
            <div className="itineraryContainer"> 
            <div className="durationItinerary">
              <h4>
                <img width="50rem" src={clock} />
                {itinerary.hours}hs
              </h4>
            </div>
            <div className="priceItinerary">
              <h4>
              <p>Price:{"💵".repeat(parseInt(itinerary.price))}</p>
                
              </h4>
            </div>
            <div className="userNameImg">
              <h4>
                {itinerary.userName}
                <img width="50rem" src={itinerary.userImg} className="userImg"/>
              </h4>
            </div>
            <div className="likesItinerary">
              <h4>
                
                <img width="50rem" src={like} />
                {itinerary.likes}
              </h4>
            </div>
            <div>
              <h5 className="hashtag">
                
                {itinerary.hashtags}
              </h5>
            </div>
            
          </div>
      <Accordion.Item eventKey="0" >
        <Accordion.Header >
          <h3 className="accordionHeader">View More</h3>
          
        </Accordion.Header>
        <Accordion.Body>
        <h5>Not activities available yet</h5>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
};
export default Itineraries;
