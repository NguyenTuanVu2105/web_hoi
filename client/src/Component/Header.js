import React, { Component, useState } from 'react'
import '../css/Header.css'
import { Slide } from 'react-slideshow-image';

const Header = () => {
    const [inf, setInf] = useState({
        name: 'Người Việt Trẻ 3000',
        link: 'https://www.facebook.com/',
        time: '30/2/3000-31/2/3000',
        place: 'Hà Nội-Việt Nam',
        background: 'rgb(87, 78, 78)',
        color: ''

    })
    const changeBackgroudHeader = (event) => {
        var target= event.target;
        var name = target.name;
        var value = target.value;
        setInf({...inf,
            [name]: value
        })
    }
    return (
        <div className='pageHeader'>
            {/* <i className='fas fa-arrow-circle-left' style={{ fontSize: 45, color: 'gray', opacity: '.8' }} /> */}
            <div  className="informationImg" style={{backgroundColor:`${inf.background}`}}>
                <a className="doiBackground" data-toggle="modal" data-target="#modalBackground">Thay đổi background >>></a>
                <div>                     
                    <label name="name" className="labelHeader" style={{color:`${inf.color}`}}>Tên chương trình: <a href={inf.link} style={{color:`${inf.color}`}} target="blank">{inf.name}</a></label><br />
                    <label name="time" className="labelHeader" style={{color:`${inf.color}`}}>Ngày diễn ra: {inf.time}</label><br />
                    <label name="place" className="labelHeader" style={{color:`${inf.color}`}}>Địa điểm tổ chức: {inf.place}</label><br />                    
                </div>

                <div className="modal fade AA" id="modalBackground" role="dialog">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h4>Chỉnh sửa background</h4>
                                <button type="button" className="close" data-dismiss="modal">&times;</button>
                            </div>
                            <div class="modal-body">
                                <form>
                                    <input type="text" name="name" className="changeBackground" placeholder="Tên chương trình" onChange={e=>changeBackgroudHeader(e)} />
                                    <input type="text" name="link" className="changeBackground" placeholder="Link chương trình" onChange={e=>changeBackgroudHeader(e)} />
                                    <input type="text" name="time" className="changeBackground" placeholder="Ngày diễn ra" onChange={e=>changeBackgroudHeader(e)}/>
                                    <input type="text" name="place" className="changeBackground" placeholder="Địa điểm tổ chức" onChange={e=>changeBackgroudHeader(e)} />
                                    <label className="changeColor">Màu nền: </label>
                                    <input name="background" type="color" className="Ccolor" defaultValue="#ff0000" onChange={e=>changeBackgroudHeader(e)}/><br />
                                    <label className="changeColor">Màu chữ: </label>
                                    <input name="color" type="color" className="Ccolor"defaultValue="#ff0000" onChange={e=>changeBackgroudHeader(e)} /><br />
                                    <label className="changeColor">Background: </label>
                                    <input type="file" style={{ marginLeft: 5 }} /><br />
                                </form>
                            </div>
                            <div class="modal-footer">
                                <button type="button" className="footerButton" data-dismiss="modal">Lưu thay đổi</button>
                            </div>
                        </div>
                    </div>
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