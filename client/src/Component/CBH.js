import React, { Component, useState } from 'react'
import '../css/Header.css'
import { Form, Button, Input, Upload, Icon } from 'antd'

const CBH = (props) => {
    const { getFieldDecorator } = props.form

    const onChooseFile = ({ data, filename, file }) => {
        props.setFile({ data, filename, file })
    }

    const changeBackgroudHeader = (event) => {
        var target = event.target;
        var name = target.name;
        var value = target.value;
        setInf({
            ...inf,
            [name]: value
        })
    }
    const [inf, setInf] = useState({
        name: 'Người Việt Trẻ 3000',
        link: 'https://www.facebook.com/',
        linkAnh: 'https://scontent.fhan4-1.fna.fbcdn.net/v/t1.0-9/85240841_2892567020796099_125429988689182720_o.jpg?_nc_cat=105&_nc_sid=dd9801&_nc_ohc=ZJ7DekKJR2sAX-dA-_M&_nc_ht=scontent.fhan4-1.fna&oh=47c35d57c93d60761ef95b8720d1c55a&oe=5EF562A8',
        time: '30/2/3000-31/2/3000',
        place: 'Hà Nội-Việt Nam',
        background: 'rgb(87, 78, 78)',
        color: 'white'

    })
    const handleConfirm = () =>{
        
    }
    return (
        <div className='pageHeader' id={props.id} style={{ marginBottom: 30 }}>
            <div className="informationImg" style={{ backgroundColor: `${inf.background}` }}>
                <div>
                    <label name="time" className="labelHeader" style={{ color: `${inf.color}` }}>Tên chương trình:</label><br />
                    <label name="name" className="labelHeader" style={{ color: `${inf.color}`, fontSize: 26 }}><a href={inf.link} style={{ color: `${inf.color}` }} target="blank">{inf.name}</a></label><br />
                    <label name="time" className="labelHeader" style={{ color: `${inf.color}` }}>Ngày diễn ra: {inf.time}</label><br />
                    <label name="place" className="labelHeader" style={{ color: `${inf.color}` }}>Địa điểm tổ chức: {inf.place}</label><br />
                    <a className="doiBackground" data-toggle="modal" data-target={'#modalBackground' + props.id}> Changebackground >>></a>
                </div>

                <div className="modal fade AA" id={"modalBackground" + props.id} role="dialog">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h4>Chỉnh sửa background</h4>
                                <button type="button" className="close" data-dismiss="modal">&times;</button>
                            </div>
                            <div className="modal-body" style={{ paddingBottom: 0 }}>
                                {/* <form>
                                    <input type="text" name="name" className="changeBackground" placeholder="Tên chương trình" onChange={e=>changeBackgroudHeader(e)} />
                                    <input type="text" name="link" className="changeBackground" placeholder="Link chương trình" onChange={e=>changeBackgroudHeader(e)} />
                                    <input type="text" name="linkAnh" className="changeBackground" placeholder="LinkAnh" onChange={e=>changeBackgroudHeader(e)} />
                                    <input type="text" name="time" className="changeBackground" placeholder="Ngày diễn ra" onChange={e=>changeBackgroudHeader(e)}/>
                                    <input type="text" name="place" className="changeBackground" placeholder="Địa điểm tổ chức" onChange={e=>changeBackgroudHeader(e)} />
                                    <label className="changeColor">Màu nền: </label>
                                    <input name="background" type="color" className="Ccolor" defaultValue="#ff0000" onChange={e=>changeBackgroudHeader(e)}/><br />
                                    <label className="changeColor">Màu chữ: </label>
                                    <input name="color" type="color" className="Ccolor"defaultValue="#ff0000" onChange={e=>changeBackgroudHeader(e)} /><br />
                                </form> */}
                                <Form >
                                    <Form.Item>
                                        <Input type="text" name="name" style={{ marginBottom: 10 }} placeholder="Tên chương trình" onChange={e => changeBackgroudHeader(e)} required/>
                                        <Input type="text" name="link" style={{ marginBottom: 10 }} placeholder="Link chương trình" onChange={e => changeBackgroudHeader(e)}/>
                                        <Input type="text" name="time" style={{ marginBottom: 10 }} placeholder="Ngày diễn ra - Ngày kết thúc" onChange={e => changeBackgroudHeader(e)}/>
                                        <Input type="date" name="hihi" style={{ marginBottom: 10 }} placeholder="Ngày kết thúc" required/> {/*sử lý gì tự sử lý đi nha */}
                                        <Input type="text" name="place" style={{ marginBottom: 10 }} placeholder="Địa điểm tổ chức" onChange={e => changeBackgroudHeader(e)}/>
                                        <label className="changeColor">Màu nền: </label>
                                        <Input name="background" type="color" style={{ marginBottom: 10, width: 80, marginLeft: 5 }} defaultValue="#ff0000" onChange={e => changeBackgroudHeader(e)} /><br />
                                        <label className="changeColor">Màu chữ: </label>
                                        <Input name="color" type="color" style={{ marginBottom: 10, width: 80, marginLeft: 5 }} defaultValue="#ff0000" onChange={e => changeBackgroudHeader(e)} /><br />
                                        <Upload
                                            // link to upload
                                            customRequest={onChooseFile}
                                            // end
                                            accept={".png,.jpg,.jpeg"}
                                            multiple={false}
                                            fileList={[]}
                                        >
                                            <div style={{ display: 'flex', flexWrap: 'wrap', marginBottom: 10 }}><label className="changeColor">Tải ảnh lên: </label><Icon style={{ marginLeft: 5 }} type="camera" theme="filled" className="icon_change_avatar" /></div>
                                            {/* <p style={{ textAlign: "center", color: "white", width: "100%" }}>Thay đổi</p> */}
                                        </Upload>
                                        <div className="modal-footer" style={{ paddingBottom: 0 }}>
                                            <Button type="submit" className="footerButton"  onClick={()=>handleConfirm()}>Lưu thay đổi</Button>
                                        </div>
                                    </Form.Item>
                                </Form>
                            </div>
                            {/* <div className="modal-footer">
                                <button type="button" className="footerButton" data-dismiss="modal">Lưu thay đổi</button>
                            </div> */}
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div className="triangleImg" style={{ borderLeft: `60px solid ${inf.background}` }}></div>
                <div name="linkAnh" className="backgroundCover" style={{ backgroundImage: `url(${inf.linkAnh})` }}></div>
            </div>
        </div>
    )
}
export default Form.create()(CBH)