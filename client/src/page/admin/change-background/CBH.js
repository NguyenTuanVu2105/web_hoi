import React, { Component, useState, useContext, useEffect } from 'react'
import '../../homepage/component/header/Header.css'
import { Form, Button, Input, notification, Upload, Icon,Modal } from 'antd'
import { getOneBackground, editBackground } from '../../../api/base/background'
import HomepageContext from "../../../context/HomepageContext"

const CBH = (props) => {
    const { getFieldDecorator } = props.form
    const { id } = props
    const { setLoading } = useContext(HomepageContext)
    const [background, setBackground] = useState([])

    const fetchData = async () => {
        setLoading(true)
        const result = await getOneBackground(id)
        setLoading(false)
        if (result.success) {
            if (result.data.success) {
                setBackground(result.data.data)
            }
        }
    }

    const handleUpdate = (e) => {
        e.preventDefault()
            props.form.validateFields(async (err, values) => {
            if (!err) {
                console.log(values)
                setLoading(true)
                const { success } = await editBackground(values)
                setLoading(false)
                if (success) {
                    notification['success']({
                        message: 'Cập nhật thông tin background thành công!',
                    })
                    setOpenChange(false)
                    
                } else {
                    notification['error']({
                        message: 'Cập nhật thông tin background thất bại!',
                    })
                }
            }
        })
        
    }

    const [openChange, setOpenChange] = useState(false)

    const showModal = () => {
        setOpenChange(true)
    };

    const handleCancel = e => {
        setOpenChange(false)
    };

    useEffect(() => {
        fetchData()
    }, [])
    return (
        <div className='page-header' id={id} style={{ marginBottom: 30 }}>
            <Button type="primary" style={{ marginBottom: 15 }} onClick={showModal}>
                    Sửa
            </Button>
            <Modal
                title="Thêm chương trình"
                visible={openChange}
                footer={null}
                okText="submit"
                onCancel={handleCancel}
            >
                <Form onSubmit={handleUpdate}>
                    <Form.Item>
                        {getFieldDecorator('id', {
                            initialValue: id
                        })}
                        {getFieldDecorator('tenchuongtrinh', {
                            initialValue: background.Tenchuongtrinh
                        })(
                            <Input type="text" name="name" style={{ marginBottom: 10 }} placeholder="Tên chương trình" required />
                        )}
                        {getFieldDecorator('linkchuongtrinh', {
                            initialValue: background.Linkchuongtrinh
                        })(
                            <Input type="text" name="link" style={{ marginBottom: 10 }} placeholder="Link chương trình" required />
                        )}
                        <label className="change-color-header">Ngày diễn ra: </label>
                        {getFieldDecorator('ngaydienra', {
                            initialValue: background.Ngaydienra
                        })(
                            <Input type="date" name="date" style={{ marginBottom: 10 }} placeholder="Ngày diễn ra" required />
                        )}
                        <label className="change-color-header">Ngày kết thúc: </label>
                        {getFieldDecorator('ngayketthuc', {
                            initialValue: background.Ngayketthuc
                        })(
                            <Input type="date" name="hihi" style={{ marginBottom: 10 }} placeholder="Ngày kết thúc" required />
                        )}
                        {getFieldDecorator('diadiem', {
                            initialValue: background.Diadiem
                        })(
                            <Input type="text" name="place" style={{ marginBottom: 10 }} placeholder="Địa điểm tổ chức" required />
                        )}
                        <label className="change-color-header">Màu nền: </label>
                        {getFieldDecorator('maunen', {
                            initialValue: background.Maunen
                        })(
                            <Input name="background" type="color" style={{ marginBottom: 10, width: 80, marginLeft: 5 }} required />
                        )}<br />
                        <label className="change-color-header">Màu chữ: </label>
                        {getFieldDecorator('mauchu', {
                            initialValue: background.Mauchu
                        })(
                            <Input name="color" type="color" style={{ marginBottom: 10, width: 80, marginLeft: 5 }} required />
                        )}
                        <div className="modal-footer" style={{ paddingBottom: 0 }}>
                            <Button type="primary" htmlType="submit" className="footerButton">Lưu thay đổi</Button>
                        </div>
                    </Form.Item>
                </Form>
            </Modal>

        </div>
    )
}
export default Form.create()(CBH)