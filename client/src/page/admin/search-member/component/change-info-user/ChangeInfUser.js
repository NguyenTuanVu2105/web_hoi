import React, { useState } from 'react'
import { Modal, Button, Form } from 'antd'
import './ChangeInfUser.css'
import AdminProFile from './AdminProfile'
import AdminLA from './AdminLA'
import AdminRoles from './AdminRoles'

const ChangeInfUser = (props) => {
    const { idUser } = props
    const [Visible, setVisible] = useState(false)
    const [Open, setOpen] = useState(0)

    const showModal = () => {
        setVisible(true)
    };
    const handleSubmit = e => {

    };

    const handleCancel = e => {
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
                    <button className="ChooseClick" onClick={() => setOpen(0)}>Thông tin cá nhân</button>
                    <button className="ChooseClick" onClick={() => setOpen(1)}>Học tập và hoạt động</button>
                    <button className="ChooseClick" onClick={() => setOpen(2)}>Phân quyền</button>
                </div>
                <Form onSubmit={handleSubmit}>
                    <div style={{ display: Open === 0 ? 'block' : 'none' }}>
                        <AdminProFile idUser = {idUser}/>
                    </div>
                    <div style={{ display: Open === 1 ? 'block' : 'none' }}>
                        <AdminLA idUser = {idUser}/>
                    </div>
                    <div style={{ display: Open === 2 ? 'block' : 'none' }}>
                        <AdminRoles idUser = {idUser}/>
                    </div>
                </Form>
            </Modal>
        </div>

    )
}
export default ChangeInfUser