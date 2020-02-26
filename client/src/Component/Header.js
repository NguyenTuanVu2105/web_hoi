import React, { Component } from 'react'
import '../css/Header.css'

const Header = () =>{
    return(
        <div className='pageHeader'>
            <i className='fas fa-arrow-circle-left' style={{fontSize:45, color:'gray',opacity:'.8'}}/>
            <div className="informationImg">
                <label>Tên chương trình: Người Việt Trẻ 3000<a></a></label><br/>
                <label>Ngày diễn ra: 30/2/3000 - 31/2/3000</label><br/>
                <label>Địa điểm tổ chức: Hà Nội-Việt Nam</label>
            </div>
            <div className="triangleImg">

            </div>
            <div className="backgroundCover">

            </div>
            <i className='fas fa-arrow-circle-right' style={{fontSize:45, color:'gray',opacity:'.8'}}/>
        </div>
    )
}
export default Header;