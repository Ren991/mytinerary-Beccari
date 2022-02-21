import React from 'react'
import "../styles/home.css"
import Carrousel from './carrousel'
import airplane from './assets/airplane.gif'
import logo from './assets/logo.png'
import bridge from './assets/bridge.png'
import city from './assets/city.png'
import {Link as LinkRouter} from 'react-router-dom'



const Home = () => {
    return (
      <div>
      <img className="imgHero" width="100%"  src={airplane}/> 
      <div className="logoDiv">
      <img className="logo" width="20%"  src={logo}/>
      <h2>MyTinerary</h2>
      
      <h3 className="slogan">Find your perfect trip, designed by insiders who know and love their cities!</h3>
      </div>

      <div className="callContainer" >
      
      <div className="callCenter">
      <h2 className="phraseCall" >The opportunity to travel is now, check the destinations we have for you</h2>
      
      <LinkRouter to="/cities">
      <button className='buttonClick'>Click here</button>
      </LinkRouter>
      
      
      </div>  
      <div className="imagesContainer">
      <img className="bridge" width="20%"  src={bridge}/>
      <img className="city" width="20%"  src={city}/>
      </div>
      </div>
    
     <Carrousel/>

      </div>

     
    )
    
  }
 
  export default Home;