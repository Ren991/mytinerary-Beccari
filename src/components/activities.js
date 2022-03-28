import { connect } from "react-redux";
import { useEffect, useState } from "react";
import activitiesActions from "../redux/actions/activitiesActions";
import React from "react";
import "../styles/styles.css";
import Carousel from "react-grid-carousel";
import like from "./assets/like.png"

const Activities = (props) => {
  console.log(props);
  
  
    console.log(props.activities);
    if(!props.activities){
      return (
       <h1>Todavia no hay activities</h1>
        );
    }
      return (
        
       
           
          
           <div className="imgText">
             <h3 style={{ position: "relative", color: "white", right: 2 }}>
               {props.name}
             </h3>
             <img
               className="imgActivities"
               src={props.img}
               width="95%"
             />
           </div>
         
         
 
           
        
        
    
      ); 
    };
   
    const mapStateToProps = (state) => {
        return {
         
          activities:state.activitieR.activitie,
        };
      };
      const mapDispatchToProps = {
       
        getActivities: activitiesActions.getActivities
      };
      export default connect(mapStateToProps, mapDispatchToProps)(Activities);
    