import React from 'react'
import "../styles/hero.css"
import airplane from './assets/airplane.gif'
import logo from './assets/logo.png'

const Hero = () => {
    return (
      <div>
      <img className="imgHero" width="100%"  src={airplane}/> 
      <div className="logoDiv">
      <img className="logo" width="20%"  src={logo}/>
      <h2>MyTinerary</h2>
      
      <h3 className="slogan">Find your perfect trip, designed by insiders who know and love their cities!</h3>
      </div>
      </div>
    )
  }
  export default Hero;