import React from "react";
import Accordion from "react-bootstrap/Accordion";
import "../styles/styles.css";
import clock from "./assets/clock.png";
import money from "./assets/money.png";
import userimg from "./assets/userimg.png";
import like from "./assets/like.png"



const Itineraries = ({itinerary}) => {
  return (
    <Accordion className="detailsAccordion" defaultActiveKey="0" flush>
      
            <h2>{itinerary.title}</h2>
            <div className="itineraryContainer"> 
            <div className="durationItinerary">
              <h4>
                <img width="50rem" src={clock} />
                {itinerary.hours}hs
              </h4>
            </div>
            <div className="priceItinerary">
              <h4>
                Price:
                <img width="30rem" src={money} />
              </h4>
            </div>
            <div className="userNameImg" src={itinerary.userImg}>
              <h4>
                {itinerary.userName}
                <img width="50rem" src={userimg} />
              </h4>
            </div>
            <div className="likesItinerary">
              <h4>
                
                <img width="50rem" src={like} />
                {itinerary.likes}
              </h4>
            </div>
            <div className="likesItinerary">
              {itinerary.hashtags.map(hastag=><h4>
                
                {hastag}
              </h4>)}
            </div>
            
          </div>
      <Accordion.Item eventKey="0" >
        <Accordion.Header >
          <h3 className="accordionHeader">View More</h3>
          
        </Accordion.Header>
        <Accordion.Body>
         Not Activities available yet.
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
};
export default Itineraries;
