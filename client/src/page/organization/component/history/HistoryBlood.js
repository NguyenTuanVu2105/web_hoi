import React, {  useContext, useEffect, useState } from 'react'
import HomepageContext from "../../../../context/HomepageContext";
import '../introduce/component/introduleBloodDisplay.scss'
import { Form, Input, Modal, Button, notification } from 'antd'
import { getUser, checkAuth } from '../../../../api/auth/auth'
import { getPDF, editPDFHistory} from '../../../../api/base/association'
const HistoryBlood = (props) => {
    const { getFieldDecorator } = props.form
    const { setLoading } = useContext(HomepageContext)

    const [pdf, setPDF] = useState([])

    const fetchData = async () => {
        const result = await getPDF()
        if (result.success) {
            if (result.data.success) {
                if (result.data.message.TailieuHistory !== null) {
                    setPDF(result.data.message.TailieuHistory)
                } else  {
                    setPDF('https://drive.google.com/file/d/1vIKk1qYAxAEghLyUcksTKwqe-r9SbTQo/preview')
                }
            }
        }
    }

    const handleSubmit = e => {
        e.preventDefault()
        props.form.validateFields(async (err, values) => {
            if (!err) {
                setLoading(true)
                const {success} = await editPDFHistory(values)
                setLoading(false)
                if (success) {
                    notification['success']({
                        message: 'Sửa thành công!'
                    })
                } else {
                    notification['error']({
                        message: 'Sửa không thành công'
                    })
                }
            }
        })
    }

    const roles = () => {
        getUser().then((value) => {
            if (checkAuth()) {
                var edit = document.getElementById('edit')
                if (value.role === 'hoitruong') {
                    edit.style.display = 'block'
                } else {
                    edit.style.display = 'none'
                }
            }
        })
    }

    useEffect(() => {
        fetchData()
        roles()
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
                <Modal
                    title="Sửa file PDF"
                    visible={OpenModal}
                    onOk={handleOk}
                    onCancel={handleCancel}
                    footer={null}
                >
                    <Form onSubmit={handleSubmit}>
                        <Form.Item>
                            {getFieldDecorator('TailieuHistory')(
                                <Input placeholder="Link PDF"></Input>
                            )}
                        </Form.Item>
                        <Form.Item>
                            <Button type="primary" htmlType="submit"> Sửa </Button>
                        </Form.Item>
                    </Form>
                </Modal>
            </div>
            <iframe 
            // cho link vào đây ------------------------------------------------------------
                src={pdf}
                style={{width: "100%", height: "700px"}}
            >
            </iframe>
            
            <Button id='edit' type="primary" onClick={showModal}>
                Sửa
            </Button>
        </div>
    )
}

export default Form.create()(HistoryBlood)