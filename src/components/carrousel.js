
import React from 'react'
import Carousel from 'react-grid-carousel'
import "../styles/styles.css";
import Cities from "./cities"

 const Carrousel = () => {
  return (
      <div className='Carousel'>
        <h2>Popular MyTineraries!!!</h2>
    <Carousel cols={2} rows={2} autoplay={2300} gap={6} loop
    responsiveLayout={[
        {
          breakpoint: 1200,
          cols: 2,
          gap:0.5,
          autoplay:2300, 
          
        },
        {
          breakpoint: 900,
          cols: 2,
          gap:0.5,
          autoplay:2300, 
        },
        {
            breakpoint: 620,
            cols: 1,
            
            rows:4,
            autoplay:2300, 
          }
      ]}
      mobileBreakpoint={164}
      >
      { Cities.map(city=>
        <Carousel.Item >
            <div className="imgText">
            <h3 style={{position:'relative',color:'white',right:2}}>{city.name}</h3>
            <img className="img" width="90%" src={process.env.PUBLIC_URL+`/imagenes/${city.image}`}/>
            
            </div>
        </Carousel.Item>
        
       )}
      
      
      
      
     
    </Carousel>
    </div>
  )
}
export default Carrousel;