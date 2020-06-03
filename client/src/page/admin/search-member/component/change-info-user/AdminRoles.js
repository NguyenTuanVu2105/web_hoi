import React, { useState, useEffect, useContext } from 'react'
import HomepageContext from "../../../../../context/HomepageContext"
import { Modal, Button, Form, notification } from 'antd'
import { Select } from 'antd'
import './ChangeInfUser.css'
import {editRoles, viewRoles} from '../../../../../api/base/admin'
const { Option } = Select

const AdminRoles = (props) => {
    const { idUser } = props
    const { getFieldDecorator } = props.form
    const { setLoading } = useContext(HomepageContext)
    const [roles, setRoles] = useState([])
    const fetchData = async () => {
        setLoading(true)
        const result = await viewRoles(idUser)
        setLoading(false)
        if (result.success) {
            if (result.data.success) {
                setRoles(result.data.message)
            }
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        props.form.validateFields(async (err, values) => {
            if (!err) {
                setLoading(true)
                const {success} = await editRoles(values)
                setLoading(false)
                if (success) {
                    notification['success']({
                        message: 'Cập nhật thông tin thành công!',
                    })
                } else {
                    notification['error']({
                        message: 'Cập nhật thông tin thất bại!',
                    })
                }
            }
        })
    }

    useEffect(() => {
        fetchData()
    }, [])
    return (<div>
        <Form style={{ width: 150,marginLeft:10, marginRight:10 }} onSubmit={handleSubmit}>
            {getFieldDecorator('id', {
                initialValue: roles.id
            })}
            {getFieldDecorator('role', {
                initialValue: roles.role ? roles.role : "Phân quyền"
            })(
                <Select style={{ height: 30 }} defaultValue="Phân quyền">
                    <Option style={{ textAlign: "center" }} value="hoitruong">Admin</Option>
                    <Option style={{ textAlign: "center" }} value="chihoitruong">Chi hội trưởng</Option>
                    <Option style={{ textAlign: "center" }} value="doitruong">Đội trưởng</Option>
                    <Option style={{ textAlign: "center" }} value="member">Thành viên</Option>
                </Select>
            )}
        </Form>
    </div>)
}

export default Form.create()(AdminRoles)