import React, {  useContext, useEffect, useState } from 'react'
import HomepageContext from "../../../../context/HomepageContext";
import '../introduce/component/introduleBloodDisplay.scss'
import { Form, Input, Modal, Button } from 'antd';
const HistoryBlood = () => {
    const { setNameMap } = useContext(HomepageContext)
    useEffect(() => {
        setNameMap({
            ['/']: 'Trang chủ',
            ['/ho-so-to-chuc']: 'Hồ sơ tổ chức',
            ['/lich-su-hoi']: 'Lịch sử Hội',
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
            <iframe 
            // cho link vào đây ------------------------------------------------------------
                src="https://drive.google.com/file/d/1vIKk1qYAxAEghLyUcksTKwqe-r9SbTQo/preview"
                style={{width: "100%", height: "700px"}}
            >
            </iframe>
            
        </div>
    )
}

export default HistoryBlood;