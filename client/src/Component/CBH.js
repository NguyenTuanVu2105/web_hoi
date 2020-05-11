import React, { Component, useState, useContext } from 'react'
import '../css/Header.css'
import { Form, Button, Input, notification, Upload, Icon } from 'antd'
import { uploadBackground} from '../api/base/background'
import HomepageContext from "../context/HomepageContext"

const CBH = (props) => {
    const { getFieldDecorator } = props.form
    const [file, setFile] = useState({})
    const [nameFile, setNameFile] = useState(null)
    const { setLoading } = useContext(HomepageContext)

    const onChooseFile = ({ data, filename, file }) => {
        setFile({ data, filename, file })
        setNameFile(file.name)
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

    const handleSubmit = (e) => {
        e.preventDefault()
        props.form.validateFields(async (err, values) => {
            if (!err) {
                setLoading(true)
                    const {success} = await uploadBackground(file, values)
                setLoading(false)
                if (success) {
                    notification['success']({
                        message: 'Cập nhật thông tin thành công!',
                    })
                } else {
                    notification['error']({
                        message: 'Cập nhật thông tin thất bại!',
                    })
                }
            }
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
                                <Form onSubmit={handleSubmit}>
                                    <Form.Item>
                                        {getFieldDecorator('tenchuongtrinh')(
                                            <Input type="text" name="name" style={{ marginBottom: 10 }} placeholder="Tên chương trình" onChange={e => changeBackgroudHeader(e)} required/>
                                        )}
                                        {getFieldDecorator('linkchuongtrinh')(
                                            <Input type="text" name="link" style={{ marginBottom: 10 }} placeholder="Link chương trình" onChange={e => changeBackgroudHeader(e)} required/>
                                        )}
                                        <label className="changeColor">Ngày diễn ra: </label>
                                        {getFieldDecorator('ngaydienra')(
                                            <Input type="date" name="date" style={{ marginBottom: 10 }} placeholder="Ngày diễn ra" onChange={e => changeBackgroudHeader(e)} required/>
                                        )}
                                        <label className="changeColor">Ngày kết thúc: </label>
                                        {getFieldDecorator('ngayketthuc')(
                                            <Input type="date" name="hihi" style={{ marginBottom: 10 }} placeholder="Ngày kết thúc" required/>
                                        )}
                                        {getFieldDecorator('diadiem')(
                                            <Input type="text" name="place" style={{ marginBottom: 10 }} placeholder="Địa điểm tổ chức" onChange={e => changeBackgroudHeader(e)} required/>
                                        )}
                                        <label className="changeColor">Màu nền: </label>
                                        {getFieldDecorator('maunen', {
                                            initialValue: "#ff0000"
                                        })(
                                            <Input name="background" type="color" style={{ marginBottom: 10, width: 80, marginLeft: 5 }} onChange={e => changeBackgroudHeader(e)}required />
                                        )}<br />
                                        <label className="changeColor">Màu chữ: </label>
                                        {getFieldDecorator('mauchu', {
                                            initialValue: "#ff0000"
                                        })(
                                            <Input name="color" type="color" style={{ marginBottom: 10, width: 80, marginLeft: 5 }} onChange={e => changeBackgroudHeader(e)} required/>
                                        )}<br />                             
                                        <Upload
                                            // link to upload
                                            customRequest={onChooseFile}
                                            // end
                                            accept={".png,.jpg,.jpeg"}
                                            multiple={false}
                                            fileList={[]}
                                        >
                                            <div style={{ display: 'flex', flexWrap: 'wrap', marginBottom: 10 }}>
                                                <label className="changeColor">Tải ảnh lên: </label>
                                                <button>
                                                    <Icon type="upload" /> Choose File
                                                </button>
                                                {nameFile}
                                            </div>
                                        </Upload>
                                        <div className="modal-footer" style={{ paddingBottom: 0 }}>
                                            <Button type="primary" htmlType="submit" className="footerButton">Lưu thay đổi</Button>
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