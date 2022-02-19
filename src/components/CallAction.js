import React from 'react'
import "../styles/callAction.css"
import bridge from './assets/bridge.png'
import city from './assets/city.png'

const CallToAction = () => {
    return (
      
      <div className="callContainer" >
      
      <div className="callCenter">
      <h2 className="phraseCall" >Don't waste any more time, the opportunity to travel is now, check the destinations we have for you</h2>
      <button className='buttonClick'>Click here</button>
      </div>  
      <div className="imagesContainer">
      <img className="bridge" width="20%"  src={bridge}/>
      <img className="city" width="20%"  src={city}/>
      </div>
      </div>
      
      
    )
  }
  export default CallToAction;