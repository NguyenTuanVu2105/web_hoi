import React from 'react';
import { Slide } from 'react-slideshow-image';
import Header from '../Component/Header';


const properties = {
  duration: 3500,
  transitionDuration: 500,
  infinite: true,
  indicators: true,
  arrows: true,
  onChange: (oldIndex, newIndex) => {
    console.log(`slide transition from ${oldIndex} to ${newIndex}`);
  }
}
 
const Slideshow = () => {
    return (
      <div className="slide-container" style={{width:'93%',maxWidth:1165,margin:'0 auto'}}>
        <Slide {...properties}>
          <div className="each-slide">
            <Header/>

          </div>
          <div className="each-slide">
            <Header/>
          </div>
          <div className="each-slide">
            <Header/>
          </div>
        </Slide>
        
      </div>
    )
}
export default Slideshow;