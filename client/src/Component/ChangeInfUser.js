import React, { useState } from 'react'
import { Modal, Button, Radio, Form, notification } from 'antd'
import { Input } from 'antd'
import '../css/ChangeInfUser.css'
import ProFile from '../page/ProFile'
import LearningAndActivities from '../page/learningAndActivities'
const ChangeInfUser = () => {

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
    return (
        <div>
            <Button type="primary" onClick={showModal} style={{ backgroundColor: 'white', color: '#1890ff', whiteSpace: 'inherit', height: 30, width:'50px !important' }}>
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
                        <button className="ChooseClick" onClick={()=>setOpen(true)}>Thông tin cá nhân</button>
                        <button className="ChooseClick" onClick={()=>setOpen(false)}>Học tập và hoạt động</button>
                    </div>
                <Form onSubmit={handleSubmit}>
                    
                    <div style={{display:Open?"block":'none'}}>
                        <ProFile/>
                    </div>
                    <div  style={{display:Open?"none":"block"}}>
                        <LearningAndActivities/>
                    </div>
                </Form>
            </Modal>
        </div>

    )
}
export default ChangeInfUser