import React, { useContext, useEffect, useState } from 'react'
import HomepageContext from "../../../../../context/HomepageContext";
import './introduleBloodDisplay.scss'
import { Form, Input, Modal, Button } from 'antd';
const IntroduleBloodDisplay = () => {
    const { setNameMap } = useContext(HomepageContext)
    useEffect(() => {
        setNameMap({
            ['/']: 'Trang chủ',
            ['/ho-so-to-chuc']: 'Hồ sơ tổ chức',
            ['/gioi-thieu-ve-hoi']: 'Giới thiệu về Hội',
            ['/gioi-thieu-ve-hoi-chi-tiet']: 'Giới thiệu về Hội(Chi tiết)'
        })
    }, [])
    const [OpenModal, setOpenModal] = useState(false)
    const showModal = () => {
        setOpenModal(true)
    };

    const handleOk = e => {
        console.log(e);
        setOpenModal(false)
    };

    const handleCancel = e => {
        console.log(e);
        setOpenModal(false)
    };

    return (
        <div className="para-IBD-s">
            <iframe
            // cho link vào đây ------------------------------------------------------------
                src="https://drive.google.com/file/d/1jz2hyNr1bMqejn5qTO8wciYRqs3VP6G3/preview"
                style={{ width: "100%", height: "700px" }}
            >
            </iframe>
            <div>
                <Button type="primary" onClick={showModal}>
                    Sửa
                </Button>
                <Modal
                    title="Sửa file PDF"
                    visible={OpenModal}
                    onOk={handleOk}
                    onCancel={handleCancel}
                >
                    <Form>
                        <Form.Item>
                            <Input placeholder="Link PDF"></Input>
                        </Form.Item>
                    </Form>
                </Modal>
            </div>
        </div>
    )
}

export default IntroduleBloodDisplay;