import React, { Component, useState } from 'react'
import '../css/Header.css'


const Header = (props) => {
    const [inf, setInf] = useState({
        name: 'Người Việt Trẻ 3000',
        link: 'https://www.facebook.com/',
        time: '30/2/3000-31/2/3000',
        place: 'Hà Nội-Việt Nam',
        background: 'rgb(87, 78, 78)',
        color: ''

    })

    return (
        <div className='pageHeader'>            
            <div  className="informationImg" style={{backgroundColor:`${inf.background}`}}>                
                <div>                     
                    <label name="name" className="labelHeader" style={{color:`${inf.color}`}}>Tên chương trình: <a href={inf.link} style={{color:`${inf.color}`}} target="blank">{inf.name}</a></label><br />
                    <label name="time" className="labelHeader" style={{color:`${inf.color}`}}>Ngày diễn ra: {inf.time}</label><br />
                    <label name="place" className="labelHeader" style={{color:`${inf.color}`}}>Địa điểm tổ chức: {inf.place}</label><br />                    
                </div>
            </div>
            <div>
                <div className="triangleImg" style={{borderLeft:`60px solid ${inf.background}`}}>

                </div>
                <div className="backgroundCover">

                </div>
            </div>            
            {/* <i className='fas fa-arrow-circle-right' style={{ fontSize: 45, color: 'gray', opacity: '.8' }} /> */}
        </div>
    )
}
export default Header;