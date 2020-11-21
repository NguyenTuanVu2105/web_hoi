import React, {useContext } from 'react'
import { Slide } from 'react-slideshow-image';
import './Header.css'
import HomepageContext from "../../../../context/HomepageContext";

const properties = {
  duration: 4500,
  transitionDuration: 500,
  infinite: true,
  indicators: true,
  arrows: true,
  onChange: (oldIndex, newIndex) => {
    // console.log(`slide transition from ${oldIndex} to ${newIndex}`);
  }
}
const Slideshow = (props) => {
  const { background } = useContext(HomepageContext)
  return (
    <div className="para-header-s-0">
      <div className="slide-container para-header-s" style={{ display: background.length ? "block" : "none" }}>
        <Slide {...properties}>
          {
            background.map((bg, index) => (
              <div key={"ink" + index} className="each-slide">
                <div className='page-header'>
                  <div className="reponsive-header">
                    <a href={bg.Linkchuongtrinh} target="blank" title={"Ngày diễn ra: " + bg.Ngaydienra + ". Địa điểm: " + bg.Diadiem} >
                      <img className="background-cover-header" src={bg.Linkanh} />
                    </a>
                  </div>
                </div>
              </div>
            ))
          }
        </Slide>
      </div>
      <div style={{ display: background.length ? "none" : "block" }}>
        <div className='page-header'>
          <div className="reponsive-header">
            <img className="background-cover-header" src="/img/backgroundlogo.png" />
          </div>
        </div>
      </div>
      <div className="menu-right-s">
        <div className="title-header-s">HỘI MÁU HÀ NỘI</div>
        <div className="content-header-s" style={{ height: '175px' }}>
          <div className="body-text-header-s">
            <div className="text-header-s">
              <a href="/gioi-thieu-ve-hoi" className="tag-a-header-s">Giới thiệu về Hội</a>
            </div>
          </div>
          <div className="body-text-header-s">
            <div className="text-header-s">
              <a href="/ho-so-don-vi" className="tag-a-header-s">Đơn vị trực thuộc</a>
            </div>
          </div>
          <div className="body-text-header-s">
            <div className="text-header-s">
              <a href="/lich-su-hoi" className="tag-a-header-s">Lịch sử Hội</a>
            </div>
          </div>
          <div className="body-text-header-s">
            <div className="text-header-s">
              <a href="https://www.facebook.com/groups/Giadinhhoimau/" target="_blank" className="tag-a-header-s">Gia đình Hội Máu</a>
            </div>
          </div>
        </div>
        <div className="content-header-s" style={{ height: '65px' }}>
          <div style={{ marginRight: '2px', backgroundColor: "#4267b2", width: "calc(50% - 1px)" }}>
            <a className="href-link-header-s" href="https://www.facebook.com/hoimauhanoi/" target="_blank" style={{ backgroundColor: "#4267b2" }}>
              <div style={{ color: "white", fontWeight: "500", marginRight: '5px' }}>Facebook</div>
              <div className="icon-header-s" style={{ paddingTop: "4.5px" }}><i className="fa fa-facebook-f" style={{ fontSize: 34, color: '#4267b2' }} /></div>
            </a>
          </div>
          <div style={{ backgroundColor: "#4267b2", width: "calc(50% - 1px)" }}>
            <a className="href-link-header-s" href="http://mau.vn/" target="_blank" style={{ backgroundColor: "#ff524d" }}>
              <div style={{ color: "white", fontWeight: "500", marginRight: '5px' }}>Mau.vn</div>
              <div className="icon-header-s" style={{ borderRadius: "50%" }}><img style={{ width: "38px", height: "auto", borderRadius: "50%" }} src="/img/navbar/logomau.png"></img></div>
            </a>
          </div>
        </div>
      </div>
    </div>

  )
}
export default Slideshow;