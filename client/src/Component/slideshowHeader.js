import React, { useState, useEffect } from 'react'
import { Slide } from 'react-slideshow-image';
import '../css/Header.css'
import { getSlideShowBackground } from '../api/base/background'

const properties = {
  duration: 1000000,
  transitionDuration: 500,
  infinite: true,
  indicators: true,
  arrows: true,
  onChange: (oldIndex, newIndex) => {
    // console.log(`slide transition from ${oldIndex} to ${newIndex}`);
  }
}
const Slideshow = () => {
  const [inf, setInf] = useState([])

  const fetchData = async () => {
    const result = await getSlideShowBackground()
    if (result) {
      if (result.data.success) {
        setInf(result.data.data)
        if (!inf) {
          console.log('nghia')
        }
      }
    }
  }
  useEffect(() => {
    fetchData()
  }, [])
console.log(inf)
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', marginLeft: 15, marginRight: 15 }}>
      <div className="slide-container para-header-s" style={{}}>
        <Slide {...properties}>
          {
            inf.map((inf,index) => (
              <div key={"ink"+index} className="each-slide">
                <div className='page-header'>
                  <div className="information-img" style={{ backgroundColor: `${inf.Maunen}` }}>
                    <div>
                      <label name="time" className="label-header" style={{ color: `${inf.Mauchu}` }}>Tên chương trình:</label><br />
                      <label name="name" className="label-header" style={{ color: `${inf.Mauchu}`, fontSize: 26 }}> <a href={inf.Linkanh} style={{ color: `${inf.Mauchu}` }} target="blank">{inf.Tenchuongtrinh}</a></label><br />
                      <label name="time" className="label-header" style={{ color: `${inf.Mauchu}` }}>Ngày diễn ra: {inf.Ngaydienra}</label><br />
                      <label name="place" className="label-header" style={{ color: `${inf.Mauchu}` }}>Địa điểm tổ chức: {inf.Diadiem}</label><br />
                    </div>
                  </div>
                  <div className="reponsive-header">
                    <div className="triangle-img" style={{ borderLeft: `60px solid ${inf.Maunen}` }} />
                    <div className="background-cover-header" style={{backgroundImage: `url(${inf.Linkanh})`}} />
                  </div>
                </div>
              </div>
            ))
          }
        </Slide>
      </div>
    </div>

  )
}
export default Slideshow;