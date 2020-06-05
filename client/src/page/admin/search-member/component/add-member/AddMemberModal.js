import React, {useContext, useEffect, useState} from "react";
import {Button, Form, Input, Modal, notification, Radio, Select} from "antd";
import {getPosition, getSpecialized} from "../../../../../api/base/consernposition";
import {getClubAll} from "../../../../../api/base/admin";
import {addNewMember} from "../../../../../api/base/tablesearch";
import HomepageContext from "../../../../../context/HomepageContext";

const AddMemberModal = (props) => {
    const {visible, onCancel, setVisible, resetData} = props
    const { getFieldDecorator } = props.form
    const [position, setPosition] = useState([])
    const [specialized, setSpecialized] = useState([])
    const {Option} = Select
    const [club, setClub] = useState([])
    const { setLoading } = useContext(HomepageContext)

    const fetchDataPosition = async () => {
        const result = await getPosition()
        if (result.data.success) {
            setPosition(result.data.data)
        }
    }
    const fetchDataSpecialized = async () => {
        const result = await getSpecialized()
        if (result.data.success) {
            setSpecialized(result.data.data)
        }
    }

    const fetchClubData = async () => {
        const result = await getClubAll()
        if (result.data.success) {
            setClub(result.data.data)
        }
    }

    useEffect(() => {
        fetchDataPosition()
        fetchDataSpecialized()
        fetchClubData()
    }, [])

    const handleSubmit = e => {
        e.preventDefault()
        props.form.validateFields(async (err, values) => {
            if (!err) {
                setLoading(true)
                const {success} = await addNewMember(values)
                setLoading(false)
                setVisible(false)
                if (success) {
                    notification['success']({
                        message: 'Thêm thành công thành viên ' + values.hovaten
                    })
                    resetData()
                } else {
                    notification['error']({
                        message: 'Thêm không thành công'
                    })
                }
            }
        })
    };

    return (
        <Modal
            title="Thêm thành viên"
            visible={visible}
            onCancel={onCancel}
            okText="Thêm"
            footer={null}
        >
            <Form onSubmit={handleSubmit}>
                <Form.Item>
                    {getFieldDecorator('hovaten', {
                        rules: [{
                            required: true,
                            message: 'Chưa nhập họ và tên!'
                        }]
                    })(
                        <Input placeholder="Họ và tên" />
                    )}
                </Form.Item>
                <Form.Item>
                    {getFieldDecorator('ngaysinh', {
                        rules: [{
                            required: true,
                            message: 'Chưa chọn ngày sinh!'
                        }]
                    })(
                        <Input type='date' placeholder="Basic usage"/>
                    )}
                </Form.Item>
                <Form.Item>
                    {getFieldDecorator('gioitinh', {
                        rules: [{
                            required: true,
                            message: 'Chưa chọn giới tính!'
                        }]
                    })(
                        <Radio.Group name="radiogroup">
                            <Radio value={1} style={{ marginLeft: '5px'}} class="radio_information"> Nam </Radio>
                            <Radio value={0} class="radio_information"> Nữ </Radio>
                        </Radio.Group>
                    )}
                </Form.Item>
                <Form.Item>
                    {getFieldDecorator('positionId', {
                        rules: [{
                            required: true,
                            message: 'Chưa chọn chức vụ!'
                        }]
                    })(
                        <Select placeholder="Chức vụ" style={{ height: 30}}>
                            {position.map(position => (
                                <Option style={{ textAlign: "center" }} key={position.id} value={position.id}>{position.Chucvu}</Option>
                            ))}
                        </Select>
                    )}
                </Form.Item>
                <Form.Item>
                    {getFieldDecorator('specializedId', {
                        rules: [{
                            required: true,
                            message: 'Chưa chọn bậc chuyên môn!'
                        }]
                    })(
                        <Select placeholder="Bậc chuyên môn" style={{ height: 30 }} >
                            {specialized.map(specialized => (
                                <Option style={{ textAlign: "center" }} key={specialized.id} value={specialized.id}>{specialized.Bacchuyenmon}</Option>
                            ))}
                        </Select>
                    )}
                </Form.Item>
                <Form.Item>
                    {getFieldDecorator('clubId', {
                        rules: [{
                            required: true,
                            message: 'Chưa chọn đội!'
                        }]
                    })(
                        <Select 
                            showSearch
                            placeholder="Tên đội" 
                            style={{ width: '100%' }}
                            filterOption={(input, option) =>
                                option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                            }>
                            {club.map(club => (
                                <Option style={{ textAlign: "center" }} key={club.id} value={club.id}>{club.Tendoi}</Option>
                            ))}
                        </Select>
                    )}
                </Form.Item>
                <Form.Item>
                    {getFieldDecorator('tinhtranghd', {
                        rules: [{
                            required: true,
                            message: 'Chưa chọn tình trạng hoạt động!'
                        }]
                    })(
                        <Radio.Group name="radiogroup">
                            <Radio value={1} style={{ marginLeft: '5px'}} class="radio_information"> Đang hoạt động </Radio>
                            <Radio value={0} class="radio_information"> Nghỉ hoạt động </Radio>
                        </Radio.Group>
                    )}
                </Form.Item>
                <Form.Item>
                    <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                        <Button type="primary" htmlType="submit">Tạo</Button>
                    </div>
                </Form.Item>
            </Form>
        </Modal>
    )
}

export default Form.create()(AddMemberModal)