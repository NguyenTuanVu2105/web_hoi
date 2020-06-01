import React, { useState, useEffect } from 'react'
import { Slide } from 'react-slideshow-image';
import './Header.css'
import { getSlideShowBackground } from '../../../../api/base/background'

const properties = {
  duration: 4000,
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
      }
    }
  }
  useEffect(() => {
    fetchData()
  }, [])
  return (
    <div className="para-header-s-0">
      <div className="slide-container para-header-s">
        <Slide {...properties}>
          {
            inf.map((inf,index) => (
              <div key={"ink"+index} className="each-slide">
                <div className='page-header'>
                  {/* <div className="information-img" style={{ backgroundColor: `${inf.Maunen}` }}>
                    <div>
                      <label name="time" className="label-header" style={{ color: `${inf.Mauchu}` }}>Tên chương trình:</label><br />
                      <label name="name" className="label-header" style={{ color: `${inf.Mauchu}`, fontSize: 24 }}> <a href={inf.Linkanh} style={{ color: `${inf.Mauchu}` }} target="blank">{inf.Tenchuongtrinh}</a></label><br />
                      <label name="time" className="label-header" style={{ color: `${inf.Mauchu}` }}>Ngày diễn ra: <label style={{fontWeight:500}}>{inf.Ngaydienra}</label></label><br />
                      <label name="place" className="label-header" style={{ color: `${inf.Mauchu}` }}>Địa điểm tổ chức: <label style={{fontWeight:500}}>{inf.Diadiem}</label></label><br />
                    </div>
                  </div> */}
                  <div className="reponsive-header">
                    {/* <div className="triangle-img" style={{ borderLeft: `60px solid ${inf.Maunen}`}} /> */}
                    <div>
                      <img className="background-cover-header" src={inf.Linkanh}/>
                    </div>
                  </div>
                </div>
              </div>
            ))
          }
        </Slide>
      </div>
      <div className="menu-right-s">
          <div className="title-header-s">HỘI MÁU HÀ NỘI</div>
          <div className="content-header-s" style={{height:'175px'}}>
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
                <a href="#cac-chuong-trinh-lon" className="tag-a-header-s">Các chương trình lớn</a>
              </div>
            </div>
          </div>
          <div className="content-header-s" style={{height:'65px'}}>
            <div style={{marginRight:'2px',backgroundColor:"#4267b2", width:"calc(50% - 1px)"}}>
              <a className="href-link-header-s" href="https://www.facebook.com/hoimauhanoi/" target="_blank" style={{backgroundColor:"#4267b2"}}>
              <div style={{color:"white",fontWeight:"500",marginRight:'5px'}}>Facebook</div>
              <div className="icon-header-s" style={{paddingTop:"4.5px"}}><i className="fa fa-facebook-f" style={{fontSize:34,color:'#4267b2'}}/></div>
              </a>
            </div>
            <div style={{backgroundColor:"#4267b2", width:"calc(50% - 1px)"}}>
            <a className="href-link-header-s" href="http://mau.vn/" target="_blank" style={{backgroundColor:"#ff524d"}}>
              <div style={{color:"white",fontWeight:"500",marginRight:'5px'}}>Mau.vn</div>
              <div className="icon-header-s" style={{borderRadius:"50%"}}><img style={{width:"38px", height:"auto", borderRadius:"50%"}} src="https://scontent.fhan5-1.fna.fbcdn.net/v/t1.0-9/p960x960/79601448_2757775170941952_3792868997574164480_o.png?_nc_cat=109&_nc_sid=85a577&_nc_ohc=fwSetp_69fMAX9rcBm-&_nc_ht=scontent.fhan5-1.fna&oh=289de5bd24485af7a08a59927601e0ac&oe=5EF55A9B"></img></div>
              </a>
            </div>
          </div>
      </div>
    </div>

  )
}
export default Slideshow;