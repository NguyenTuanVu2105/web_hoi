import React from 'react';
import { Slide } from 'react-slideshow-image';
import Header from '../Component/Header';
import '../css/Header.css'

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
for (var i = 0; i < 4; i++) {
  arr.push(<div key={i.toString()} className="each-slide">
    <Header />
  </div>)
}

const Slideshow = () => {
  return (
    <div style={{display:'flex', flexWrap:'wrap',marginLeft:15, marginRight:15}}>
      <div className="slide-container" style={{ width: 1200, margin:"0 auto"}}>
        <Slide {...properties}>
          {
            arr
          }
        </Slide>
      </div>
    </div>

  )
}
export default Slideshow;