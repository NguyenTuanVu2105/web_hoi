import React, { useState, useContext, useEffect } from 'react'
import HomepageContext from "../../../context/HomepageContext";
// import CBH from "../Component/CBH";
import './changeBackground.scss'
import { getAllBackground, uploadBackground, editBackground } from '../../../api/base/background'
import InfiniteScroll from 'react-infinite-scroll-component'
import { Form, Button, Input, notification, Upload, Icon, Modal, Spin } from 'antd'

const ChangeBackground = (props) => {
    const { nameMap, setNameMap, setLoading } = useContext(HomepageContext)
    const [cover, setCover] = useState([])
    const {page, setPage} = useState(1)

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
    const removeImg = () => {

    }
    // sửa khi có bảng update sửa lại handlesubmit
    const handleSubmit = (e) => {
        e.preventDefault()
        props.form.validateFields(async (err, values) => {
            if (!err) {
                setLoading(true)
                const { success } = await uploadBackground(file, values)
                setLoading(false)
                if (success) {
                    notification['success']({
                        message: 'Cập nhật thông tin thành công!',
                    })
                    setOpenBack(false)

                } else {
                    notification['error']({
                        message: 'Cập nhật thông tin thất bại!',
                    })
                }
            }
        })
    }

    const handleUpdate = (e) => {
        e.preventDefault()
        props.form.validateFields(async (err, values) => {
            if (!err) {
                setLoading(true)
                const { success } = await editBackground(values)
                setLoading(false)
                if (success) {
                    notification['success']({
                        message: 'Cập nhật thông tin background thành công!',
                    })
                    setOpenBack(false)
                    
                } else {
                    notification['error']({
                        message: 'Cập nhật thông tin background thất bại!',
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
    // const [count, setCount] = useState(0)

    // const arr = []
    // for (let i = 0; i < count; i++) {
    //     arr.push(<CBH id={i} />)
    // }
    const [openBack, setOpenBack] = useState(false)

    const showModal = () => {
        setOpenBack(true)
    };

    const handleCancel = e => {
        setOpenBack(false)
    };
    // console.log(cover.length)
    return (
        <div className="para">
            {/* <button className="add-background" onClick={() => setCount(1)}>Thêm background</button>
            {
                arr
            } */}
            <div style={{width:1100, margin:'0 auto'}}>
                <Button type="primary" style={{ marginBottom: 15 }} onClick={showModal}>
                    Thêm chương trình
                </Button>
            </div>
            
            <Modal
                title="Thêm chương trình"
                visible={openBack}
                footer={null}
                onCancel={handleCancel}
            >
                <Form onSubmit={handleSubmit}>
                    <Form.Item>
                        {getFieldDecorator('tenchuongtrinh')(
                            <Input type="text" name="name" style={{ marginBottom: 10 }} placeholder="Tên chương trình" required />
                        )}
                        {getFieldDecorator('linkchuongtrinh')(
                            <Input type="text" name="link" style={{ marginBottom: 10 }} placeholder="Link chương trình" required />
                        )}
                        <label className="change-color-header">Ngày diễn ra: </label>
                        {getFieldDecorator('ngaydienra')(
                            <Input type="date" name="date" style={{ marginBottom: 10 }} placeholder="Ngày diễn ra" required />
                        )}
                        <label className="change-color-header">Ngày kết thúc: </label>
                        {getFieldDecorator('ngayketthuc')(
                            <Input type="date" name="hihi" style={{ marginBottom: 10 }} placeholder="Ngày kết thúc" required />
                        )}
                        {getFieldDecorator('diadiem')(
                            <Input type="text" name="place" style={{ marginBottom: 10 }} placeholder="Địa điểm tổ chức" required />
                        )}
                        <label className="change-color-header">Màu nền: </label>
                        {getFieldDecorator('maunen', {
                            initialValue: "rgb(0, 0, 0)"
                        })(
                            <Input name="background" type="color" style={{ marginBottom: 10, width: 80, marginLeft: 5 }} required />
                        )}<br />
                        <label className="change-color-header">Màu chữ: </label>
                        {getFieldDecorator('mauchu', {
                            initialValue: "white"
                        })(
                            <Input name="color" type="color" style={{ marginBottom: 10, width: 80, marginLeft: 5 }} required />
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
                                <label className="change-color-header">Tải ảnh lên: </label>
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
            </Modal>

            <div style={{width:1100, margin:"0 auto",boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.2), 0 1px 6px 0 rgba(0, 0, 0, 0.19)'}}>
                <InfiniteScroll
                    dataLength={cover.length}
                >
                    {
                        cover.map((data, index) => (
                            <div key={"cover" + index} className='page-header' id={data.id} style={{ marginBottom: 30 }}>
                                <div className="information-img-reposive" style={{ backgroundColor: `${data.Maunen}` }}>
                                    <div>
                                        <label name="time" className="label-header" style={{ color: `${data.Mauchu}` }}>Tên chương trình:</label><br />
                                        <label name="name" className="label-header" style={{ color: `${data.Mauchu}`, fontSize: 26 }}>
                                            <a href={data.Linkchuongtrinh} style={{ color: `${data.Mauchu}` }} target="blank">
                                                {data.Tenchuongtrinh}
                                            </a>
                                        </label><br />
                                        <label name="time" className="label-header" style={{ color: `${data.Mauchu}` }}>
                                            Ngày diễn ra: {data.Ngaydienra} - {data.Ngayketthuc}
                                        </label><br />
                                        <label name="place" className="label-header" style={{ color: `${data.Mauchu}` }}>
                                            Địa điểm tổ chức: {data.Diadiem}
                                        </label><br />
                                        <a className="change-background-header" data-toggle="modal" data-target={'#modalBackground' + data.id}>
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
                                                        <Form onSubmit={handleUpdate}>
                                                            <Form.Item>
                                                                {getFieldDecorator('id', {
                                                                    initialValue: data.id
                                                                })}
                                                                {getFieldDecorator('tenchuongtrinh', {
                                                                    initialValue: data.Tenchuongtrinh
                                                                })(
                                                                    <Input type="text" name="name" style={{ marginBottom: 10 }} placeholder="Tên chương trình" required />
                                                                )}
                                                                {getFieldDecorator('linkchuongtrinh', {
                                                                    initialValue: data.Linkchuongtrinh
                                                                })(
                                                                    <Input type="text" name="link" style={{ marginBottom: 10 }} placeholder="Link chương trình" required />
                                                                )}
                                                                <label className="change-color-header">Ngày diễn ra: </label>
                                                                {getFieldDecorator('ngaydienra', {
                                                                    initialValue: data.Ngaydienra
                                                                })(
                                                                    <Input type="date" name="date" style={{ marginBottom: 10 }} placeholder="Ngày diễn ra" required />
                                                                )}
                                                                <label className="change-color-header">Ngày kết thúc: </label>
                                                                {getFieldDecorator('ngayketthuc', {
                                                                    initialValue: data.Ngayketthuc
                                                                })(
                                                                    <Input type="date" name="hihi" style={{ marginBottom: 10 }} placeholder="Ngày kết thúc" required />
                                                                )}
                                                                {getFieldDecorator('diadiem', {
                                                                    initialValue: data.Diadiem
                                                                })(
                                                                    <Input type="text" name="place" style={{ marginBottom: 10 }} placeholder="Địa điểm tổ chức" required />
                                                                )}
                                                                <label className="change-color-header">Màu nền: </label>
                                                                {getFieldDecorator('maunen', {
                                                                    initialValue: data.Maunen
                                                                })(
                                                                    <Input name="background" type="color" style={{ marginBottom: 10, width: 80, marginLeft: 5 }} required />
                                                                )}<br />
                                                                <label className="change-color-header">Màu chữ: </label>
                                                                {getFieldDecorator('mauchu', {
                                                                    initialValue: data.Mauchu
                                                                })(
                                                                    <Input name="color" type="color" style={{ marginBottom: 10, width: 80, marginLeft: 5 }} required />
                                                                )}
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
                                <div className="reponsive-header">
                                    <div className="triangle-img" style={{ borderLeft: `60px solid ${data.Maunen}` }}></div>
                                    <div name="linkAnh" className="background-cover-header" style={{ backgroundImage: `url(${data.Linkanh})` }}>
                                        {/* -------xóa background------ */}
                                        <div className="div-remove">
                                            <a className="button-remove" data-toggle="modal" data-target={'#modalRemove' + data.id}>
                                                X
                                        </a>
                                            <div className="modal fade AA" id={"modalRemove" + data.id} role="dialog">
                                                <div className="modal-dialog">
                                                    <div className="modal-content">
                                                        <div className="modal-header">
                                                            <h4>Xóa background</h4>
                                                            <button type="button" className="close" data-dismiss="modal">&times;</button>
                                                        </div>
                                                        <div className="modal-body" style={{ paddingBottom: 0 }}>
                                                            <label className="change-color-header">Bạn có chắc muốn xóa background, hành động này không thể hoàn tác! </label>
                                                        </div>
                                                        <div className="modal-footer">
                                                            <button type="button" className="modal-button-remove" onClick={removeImg}>Xóa</button>
                                                            <button type="button" className="modal-button-remove" data-dismiss="modal">Hủy</button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>{/* -------xóa background------ */}
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </InfiniteScroll>
            </div>

        </div>
    )
}

export default Form.create()(ChangeBackground)