import React, { useState } from 'react'
import { Modal, Button, Radio, Form, notification } from 'antd'
import { Input } from 'antd'
import '../css/ChangeInfUser.css'
const ChangeInfUser = () => {

    const [Visible, setVisible] = useState(false)

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
            <Button className="addFM" type="primary" onClick={showModal} style={{ backgroundColor: 'white', color: '#1890ff', whiteSpace: 'inherit', height: 30 }}>
                Sửa
            </Button>
            <Modal
                title="Sửa"
                visible={Visible}
                onCancel={handleCancel}
                okText="submit"
                footer={null}
            >
                <Form onSubmit={handleSubmit}>
                    <Form.Item>
                        <div className="row body">
                            <div className=" row ChangeLeft">
                                <div className="col-3">
                                    <label className="label_Change">Họ và tên:</label><br />
                                    <label className="label_Change">CMND/CCCD/HC:</label><br/>
                                    <label className="label_Change">Ngày cấp:</label>
                                    <label className="label_Change">Nơi cấp:</label>
                                    <label className="label_Change">Điện thoại:</label>
                                    <label className="label_Change">Link Facebook:</label>
                                    <label className="label_Change">Địa chỉ Email:</label>
                                    <label className="label_Change">Số lần hiến máu:</label>
                                </div>
                                <div className="col-9">
                                    <input className="input_change" defaultValue="hihi" disabled /><br />

                                    <input className="input_change" defaultValue="" /><br />
                                    
                                    <input className="input_change" defaultValue="" /><br />
                                    
                                    <input className="input_change" defaultValue="" /><br />
                                    
                                    <input className="input_change" defaultValue="" /><br />
                                    
                                    <input className="input_change" defaultValue="" /><br />
                                    
                                    <input className="input_change" defaultValue="" /><br />
                                    
                                    <input className="input_change" defaultValue="" /><br />
                                </div>


                            </div>
                            <div>

                            </div>
                        </div>



                    </Form.Item>
                </Form>
            </Modal>
        </div>

    )
}
export default ChangeInfUser