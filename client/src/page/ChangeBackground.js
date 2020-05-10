import React, { Component, useState, useContext, useEffect } from 'react'
import HomepageContext from "../context/HomepageContext";
import CBH from "../Component/CBH";
import '../css/changeBackground.scss'
import { getAllBackground } from '../api/base/background'
import InfiniteScroll from 'react-infinite-scroll-component'
import { uploadBackground} from '../api/base/background'
import { Form, Button, Input, notification, Upload, Icon } from 'antd'
const ChangeBackground = (props) => {
    const { nameMap, setNameMap, setLoading } = useContext(HomepageContext)
    const [cover, setCover] = useState([])

    const { getFieldDecorator } = props.form
    const [file, setFile] = useState({})
    const [nameFile, setNameFile] = useState(null)

    const onChooseFile = ({ data, filename, file }) => {
        setFile({ data, filename, file })
        setNameFile(file.name)
    }
    const fetchData = async () => {
        setLoading(true)
        const result = await getAllBackground()
        setLoading(false)
        if (result) {
            if (result.data.success) {
                setCover(result.data.data)
            }
        }
    }
// sửa khi có bảng update sửa lại handlesubmit
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
                        window.location.reload();
                    } else {
                        notification['error']({
                            message: 'Cập nhật thông tin thất bại!',
                        })
                    }
                }
            })        
    }

    useEffect(() => {
        fetchData()
        setNameMap({
            ['/']: 'Trang chủ',
            ['/HistoryBlood']: 'Change Background',
        })
    }, [])
    const [count, setCount] = useState(0)

    const arr = []
    for (let i = 0; i < count; i++) {
        arr.push(<CBH id={i} />)
    }
    console.log(cover.length)
    return (
        <div className="para">
            <button className="addBackground" onClick={() => setCount(1)}>Thêm background</button>
            {
                arr
            }
            <InfiniteScroll
                dataLength={cover.length}
            >
            {
                cover.map((data, index) => (
                    <div className='pageHeader' id={data.id} style={{ marginBottom: 30 }}>
                        <div className="informationImg" style={{ backgroundColor: `${data.Maunen}` }}>
                            <div>
                                <label name="time" className="labelHeader" style={{ color: `${data.Mauchu}` }}>Tên chương trình:</label><br />
                                <label name="name" className="labelHeader" style={{ color: `${data.Mauchu}`, fontSize: 26 }}>
                                    <a href={data.Linkchuongtrinh} style={{ color: `${data.Mauchu}` }} target="blank">
                                        {data.Tenchuongtrinh}
                                    </a>
                                </label><br />
                                <label name="time" className="labelHeader" style={{ color: `${data.Mauchu}` }}>
                                    Ngày diễn ra: {data.Ngaydienra} - {data.Ngayketthuc}
                                </label><br />
                                <label name="place" className="labelHeader" style={{ color: `${data.Mauchu}` }}>
                                    Địa điểm tổ chức: {data.Diadiem}
                                </label><br />
                                <a className="doiBackground" data-toggle="modal" data-target={'#modalBackground' + data.id}> 
                                    Changebackground >>>
                                </a>
                                <div className="modal fade AA" id={"modalBackground" + data.id} role="dialog">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h4>Chỉnh sửa background</h4>
                                <button type="button" className="close" data-dismiss="modal">&times;</button>
                            </div>
                            <div className="modal-body" style={{ paddingBottom: 0 }}>
                                <Form onSubmit={handleSubmit}>
                                    <Form.Item>
                                        {getFieldDecorator('tenchuongtrinh',{
                                            initialValue: data.Tenchuongtrinh
                                        })(
                                            <Input type="text" name="name" style={{ marginBottom: 10 }} placeholder="Tên chương trình" required/>
                                        )}
                                        {getFieldDecorator('linkchuongtrinh',{
                                            initialValue: data.Linkchuongtrinh
                                        })(
                                            <Input type="text" name="link" style={{ marginBottom: 10 }} placeholder="Link chương trình" required/>
                                        )}
                                        <label className="changeColor">Ngày diễn ra: </label>
                                        {getFieldDecorator('ngaydienra',{
                                            initialValue: data.Ngaydienra
                                        })(
                                            <Input type="date" name="date" style={{ marginBottom: 10 }} placeholder="Ngày diễn ra" required/>
                                        )}
                                        <label className="changeColor">Ngày kết thúc: </label>
                                        {getFieldDecorator('ngayketthuc',{
                                            initialValue: data.Ngayketthuc
                                        })(
                                            <Input type="date" name="hihi" style={{ marginBottom: 10 }} placeholder="Ngày kết thúc" required/>
                                        )}
                                        {getFieldDecorator('diadiem',{
                                            initialValue: data.Diadiem
                                        })(
                                            <Input type="text" name="place" style={{ marginBottom: 10 }} placeholder="Địa điểm tổ chức" required/>
                                        )}
                                        <label className="changeColor">Màu nền: </label>
                                        {getFieldDecorator('maunen', {
                                            initialValue: data.Maunen
                                        })(
                                            <Input name="background" type="color" style={{ marginBottom: 10, width: 80, marginLeft: 5 }} required />
                                        )}<br />
                                        <label className="changeColor">Màu chữ: </label>
                                        {getFieldDecorator('mauchu', {
                                            initialValue: data.Mauchu
                                        })(
                                            <Input name="color" type="color" style={{ marginBottom: 10, width: 80, marginLeft: 5 }} required/>
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
                        </div>
                    </div>
                </div>
                            </div>
                        </div>
                            
                        <div>
                            <div className="triangleImg" style={{ borderLeft: `60px solid ${data.Maunen}` }}></div>
                            <div name="linkAnh" className="backgroundCover" style={{ backgroundImage: `url(${data.Linkanh})` }}></div>
                        </div>
                    </div>
                ))
            }
            </InfiniteScroll>
        </div>
    )
}

export default Form.create()(ChangeBackground)