import React, { useState, useContext, useEffect } from 'react'
import HomepageContext from "../../../context/HomepageContext"
import { Select } from 'antd'
import { Input, Form, notification, Button } from 'antd'
import './AddUnit.css'
import '../../../api/base/club'
import { addClub } from '../../../api/base/club'
import { addUnit } from '../../../api/base/unit'
import { getUnitAll } from '../../../api/base/unit'
import AddUnit from './AddUnit'
import AddClub from './AddClub'
const AddUnitClub = (props) => {
    const { Option } = Select
    // const { getFieldDecorator } = props.form
    const { setNameMap, setLoading } = useContext(HomepageContext)
    // const [unit, setUnit] = useState([])
    // const fetchData = async () => {
    //     const result = await getUnitAll()
    //     setLoading(false)
    //     if (result.data.success) {
    //         setUnit(result.data.data)
    //     }
    // }
    // const handleSubmitClub = e => {
    //     e.preventDefault()
    //     props.form.validateFields(async (err, values) => {
    //         if (!err) {
    //             setLoading(true)
    //             const { success } = await addClub(values)
    //             setLoading(false)
    //             if (success) {
    //                 notification['success']({
    //                     message: 'Thêm thành công đội!'
    //                 })
    //             } else {
    //                 notification['error']({
    //                     message: 'Thêm không thành công đội!'
    //                 })
    //             }
    //         }
    //     })
    // }

    // const handleSubmitUnit = e => {
    //     e.preventDefault()
    //     props.form.validateFields(async (err, values) => {
    //         if (!err) {
    //             setLoading(true)
    //             const { success } = await addUnit(values)
    //             setLoading(false)
    //             if (success) {
    //                 notification['success']({
    //                     message: 'Thêm thành công chi hội!'
    //                 })
    //             } else {
    //                 notification['error']({
    //                     message: 'Thêm không thành công chi hội!'
    //                 })
    //             }
    //         }
    //     })
    // }

    const [name, setName] = useState(true)

    useEffect(() => {
        // fetchData()
        setNameMap({
            ['/']: 'Trang chủ',
            ['/them-don-vi']: 'Thêm đơn vị'
        })
    }, [])

    return (
        <div className="para-add-unit">
            <div className='change-div-AU'>
                <div className="ButtonForMobile">
                    <button className="buttonD" onClick={() => setName(true)}>Chi Hội</button>
                    <button className="buttonD" onClick={() => setName(false)}>Đội</button>
                </div>
            </div>
            <div className="paren-body-AU" style={{ display: name ? 'block' : 'none' }}>
                <AddUnit/>
            </div>
            <div className="paren-body-AU" style={{ display: name ? 'none' : 'block' }}>
                <AddClub/> 
            </div>
        </div>
    )
}
// export default Form.create()(AddUnit)
export default AddUnitClub