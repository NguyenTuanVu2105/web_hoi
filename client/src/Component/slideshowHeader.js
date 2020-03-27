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
const arr2 = [
  {
  url:'url(https://scontent-xsp1-1.xx.fbcdn.net/v/t1.0-9/51286662_2026180040782516_4165779472919822336_o.jpg?_nc_cat=103&_nc_sid=dd9801&_nc_ohc=0PGCf6TM06sAX8Q4Vo8&_nc_ht=scontent-xsp1-1.xx&oh=7c9b75010736d7155ce83ed4e5b333f9&oe=5EA4196E)',
  },
  {
  url:'url(https://scontent-xsp1-1.xx.fbcdn.net/v/t1.0-9/57190328_2127488640651655_6894297008371138560_o.png?_nc_cat=108&_nc_sid=dd9801&_nc_ohc=DljSgN1lvrUAX9hT1KR&_nc_ht=scontent-xsp1-1.xx&oh=22a2ed8eaae9728c35c81e7fbc28b0f6&oe=5EA299D0)',
  },
{
  url:'url(https://scontent-xsp1-1.xx.fbcdn.net/v/t1.0-9/33027132_1679499492117241_1686761363696779264_o.jpg?_nc_cat=108&_nc_sid=dd9801&_nc_ohc=Z5SdKuqCAt4AX8464eF&_nc_ht=scontent-xsp1-1.xx&oh=c5da74190c14931d889e997092a6196e&oe=5EA434F6)'
}
]
console.log(arr2)
for (var i = 0; i < arr2.length; i++) {
  arr1.push(<div key={i.toString()} className="each-slide">
    <div className="chil-cont">
      <Header width="340px" height="135px" backgroundImage={arr2[i].url} />
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