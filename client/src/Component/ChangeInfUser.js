import React, { useState } from 'react'
import { Modal, Button, Radio, Form, notification } from 'antd'
import { Select } from 'antd'
import '../css/ChangeInfUser.css'
import AdminProFile from '../Component/AdminProfile'
import AdminLA from '../Component/AdminLA'
const { Option } = Select
const ChangeInfUser = (props) => {
    const { dataUser } = props
    const [Visible, setVisible] = useState(false)
    const [Open, setOpen] = useState(true)
    const showModal = () => {
        setVisible(true)
    };
    const handleSubmit = e => {

    };

    const handleCancel = e => {
        console.log(e);
        setVisible(false)
    };
    const handleChange = () => {

    }
    return (
        <div>
            <Button type="primary" onClick={showModal} style={{ backgroundColor: 'white', color: '#1890ff', whiteSpace: 'inherit', height: 30, width: '50px !important' }}>
                Sửa
            </Button>
            <Modal
                width="900px"
                title="Sửa thông tin thành viên"
                visible={Visible}
                onCancel={handleCancel}
                okText="submit"
                footer={null}
            >
                <div className="flexChoose">
                    <button className="ChooseClick" onClick={() => setOpen(true)}>Thông tin cá nhân</button>
                    <button className="ChooseClick" onClick={() => setOpen(false)}>Học tập và hoạt động</button>
                    <Form style={{ width: 150,marginLeft:10, marginRight:10 }}>
                        <Select style={{ height: 30 }} defaultValue="Phân quyền" onChange={handleChange}>
                            <Option style={{ textAlign: "center" }} value="Phân quyền">Phân quyền</Option>
                            <Option style={{ textAlign: "center" }} value="Chủ tịch Hội">2</Option>
                            <Option style={{ textAlign: "center" }} value="3">3</Option>
                            <Option style={{ textAlign: "center" }} value="4">4</Option>
                        </Select>
                    </Form>
                </div>
                <Form onSubmit={handleSubmit}>

                    <div style={{ display: Open ? "block" : 'none' }}>
                        <AdminProFile dataUser = {dataUser}/>
                    </div>
                    <div style={{ display: Open ? "none" : "block" }}>
                        <AdminLA />
                    </div>
                </Form>
            </Modal>
        </div>

    )
}
export default ChangeInfUser