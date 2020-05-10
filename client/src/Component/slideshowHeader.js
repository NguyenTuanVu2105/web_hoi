import React, { useState, useEffect } from 'react'
import { Slide } from 'react-slideshow-image';
// import Header from '../Component/Header';
import '../css/Header.css'
import { getAllBackground } from '../api/base/background'
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
const Slideshow = () => {
  const [inf, setInf] = useState([])

  const fetchData = async () => {
    const result = await getAllBackground()
    if (result.data.success) {
      setInf(result.data.data)
    }
  }
  useEffect(() => {
    fetchData()
  }, [])

  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', marginLeft: 15, marginRight: 15 }}>
      <div className="slide-container" style={{ width: 1200, margin: "0 auto" }}>
        <Slide {...properties}>
          {
            inf.map(inf => (
              <div className="each-slide">
                <div className='pageHeader'>
                  <div className="informationImg" style={{ backgroundColor: `${inf.Maunen}` }}>
                    <div>
                      <label name="time" className="labelHeader" style={{ color: `${inf.Mauchu}` }}>Tên chương trình:</label><br />
                      <label name="name" className="labelHeader" style={{ color: `${inf.Mauchu}`, fontSize: 26 }}> <a href={inf.Linkanh} style={{ color: `${inf.Mauchu}` }} target="blank">{inf.Tenchuongtrinh}</a></label><br />
                      <label name="time" className="labelHeader" style={{ color: `${inf.Mauchu}` }}>Ngày diễn ra: {inf.Ngaydienra}</label><br />
                      <label name="place" className="labelHeader" style={{ color: `${inf.Mauchu}` }}>Địa điểm tổ chức: {inf.Diadiem}</label><br />
                    </div>
                  </div>
                  <div>
                    <div className="triangleImg" style={{ borderLeft: `60px solid ${inf.Maunen}` }} />
                    <div className="backgroundCover" style={{backgroundImage: `url(${inf.Linkanh})`}} />
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