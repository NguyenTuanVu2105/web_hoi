import React, { Component, useState } from 'react'
import '../css/Header.css'

const CBH = () => {
    const changeBackgroudHeader = (event) => {
        var target= event.target;
        var name = target.name;
        var value = target.value;
        setInf({...inf,
            [name]: value
        })
    }
    const [inf, setInf] = useState({
        name: 'Người Việt Trẻ 3000',
        link: 'https://www.facebook.com/',
        linkAnh:'https://scontent.fhan4-1.fna.fbcdn.net/v/t1.0-9/85240841_2892567020796099_125429988689182720_o.jpg?_nc_cat=105&_nc_sid=dd9801&_nc_ohc=ZJ7DekKJR2sAX-dA-_M&_nc_ht=scontent.fhan4-1.fna&oh=47c35d57c93d60761ef95b8720d1c55a&oe=5EF562A8',
        time: '30/2/3000-31/2/3000',
        place: 'Hà Nội-Việt Nam',
        background: 'rgb(87, 78, 78)',
        color: ''

    })

    return (
        <div className='pageHeader' style={{marginBottom:30}}>            
            <div  className="informationImg" style={{backgroundColor:`${inf.background}`}}>                
                <div>                                   
                    <label name="name" className="labelHeader" style={{color:`${inf.color}`}}>Tên chương trình: <a href={inf.link} style={{color:`${inf.color}`}} target="blank">{inf.name}</a></label><br />
                    <label name="time" className="labelHeader" style={{color:`${inf.color}`}}>Ngày diễn ra: {inf.time}</label><br />
                    <label name="place" className="labelHeader" style={{color:`${inf.color}`}}>Địa điểm tổ chức: {inf.place}</label><br />                    
                    <a className="doiBackground" data-toggle="modal" data-target="#modalBackground"> Changebackground >>></a>
                </div>

                <div className="modal fade AA" id="modalBackground" role="dialog">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h4>Chỉnh sửa background</h4>
                                <button type="button" className="close" data-dismiss="modal">&times;</button>
                            </div>
                            <div className="modal-body">
                                <form>
                                    <input type="text" name="name" className="changeBackground" placeholder="Tên chương trình" onChange={e=>changeBackgroudHeader(e)} />
                                    <input type="text" name="link" className="changeBackground" placeholder="Link chương trình" onChange={e=>changeBackgroudHeader(e)} />
                                    <input type="text" name="linkAnh" className="changeBackground" placeholder="LinkAnh" onChange={e=>changeBackgroudHeader(e)} />
                                    <input type="text" name="time" className="changeBackground" placeholder="Ngày diễn ra" onChange={e=>changeBackgroudHeader(e)}/>
                                    <input type="text" name="place" className="changeBackground" placeholder="Địa điểm tổ chức" onChange={e=>changeBackgroudHeader(e)} />
                                    <label className="changeColor">Màu nền: </label>
                                    <input name="background" type="color" className="Ccolor" defaultValue="#ff0000" onChange={e=>changeBackgroudHeader(e)}/><br />
                                    <label className="changeColor">Màu chữ: </label>
                                    <input name="color" type="color" className="Ccolor"defaultValue="#ff0000" onChange={e=>changeBackgroudHeader(e)} /><br />
                                    <label className="changeColor">Link Background: </label>
                                    {/* <input type="file" style={{ marginLeft: 5 }} /><br /> */}

                                </form>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="footerButton" data-dismiss="modal">Lưu thay đổi</button>
                            </div>
                        </div>
                    </div>
                </div>


            </div>
            <div>
                <div className="triangleImg" style={{borderLeft:`60px solid ${inf.background}`}}>

                </div>
                <div name="linkAnh" className="backgroundCover" style={{backgroundImage:`url(${inf.linkAnh})`}}>
                </div>
            </div>            
        </div>
    )
}
export default CBH;