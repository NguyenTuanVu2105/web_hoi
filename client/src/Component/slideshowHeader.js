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
    // console.log(`slide transition from ${oldIndex} to ${newIndex}`);
  }
}
const arr = []
for (var i = 0; i < 4; i++){
  arr.push(<div key={i.toString()} className="each-slide">
  <Header/>
</div>)
} 
const Slideshow = () => {
    return (
      <div className="slide-container" style={{width:'93%',maxWidth:1165,margin:'0 auto'}}>
        <Slide {...properties}>
          {/* <div className="each-slide">
            <Header/>
          </div>
          <div className="each-slide">
            <Header/>
          </div>
          <div className="each-slide">
            <Header/>
          </div> */}
          {
            arr
          }
        </Slide>
        
      </div>
    )
}
export default Slideshow;