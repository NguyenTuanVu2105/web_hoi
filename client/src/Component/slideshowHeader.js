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
const arr1 = []
for (var i = 0; i < 4; i++) {
  arr1.push(<div key={i.toString()} className="each-slide">
    <div className="chil-cont">
      <Header width="340px" height="135px" />
    </div>
    
  </div>)
}

const Slideshow = () => {
  return (
    <div style={{display:'flex', flexWrap:'wrap',marginLeft:15, marginRight:15}}>
      <div className="slide-container" style={{ width: 900}}>
        <Slide {...properties}>
          {
            arr
          }
        </Slide>
      </div>
      <div className="menu-cont" id="scroll-menu">

          {
            arr1
          }

      </div>
    </div>

  )
}
export default Slideshow;