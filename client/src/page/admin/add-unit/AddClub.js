import React, { useState, useContext, useEffect } from 'react'
import HomepageContext from "../../../context/HomepageContext"
import { Select } from 'antd'
import { Input, Form, notification, Button } from 'antd'
import './AddUnit.css'
import '../../../api/base/club'
import { addClub } from '../../../api/base/club'
import { addUnit } from '../../../api/base/unit'
import { getUnitAll } from '../../../api/base/unit'
const AddClub = (props) => {
    const { Option } = Select
    const { getFieldDecorator } = props.form
    const { setNameMap, setLoading } = useContext(HomepageContext)
    const [unit, setUnit] = useState([])
    const fetchData = async () => {
        const result = await getUnitAll()
        setLoading(false)
        if (result.data.success) {
            setUnit(result.data.data)
        }
    }
    const handleSubmitClub = e => {
        e.preventDefault()
        props.form.validateFields(async (err, values) => {
            if (!err) {
                setLoading(true)
                const { success } = await addClub(values)
                setLoading(false)
                if (success) {
                    notification['success']({
                        message: 'Thêm thành công đội!'
                    })
                } else {
                    notification['error']({
                        message: 'Thêm không thành công đội!'
                    })
                }
            }
        })
    }

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


    // useEffect(() => {
    //     fetchData()
    //     setNameMap({
    //         ['/']: 'Trang chủ',
    //         ['/them-don-vi']: 'Thêm đơn vị'
    //     })
    // }, [])

    return (
        <div className="paren-body-AU">
                <Form onSubmit={handleSubmitClub}>
                    <Form.Item>
                    <div style={{backgroundColor:"#ff4d4d",height:30,lineHeight:'30px'}}>
                        <span style={{color:"white", marginLeft:15,fontWeight:600,fontSize:18}}>ĐỘI</span>
                    </div>
                        <div style={{padding: "0px 20px 0px 20px"}}>
                            <span className="span-label-AU">Đơn vị:</span>
                            {getFieldDecorator('tendoi')(
                                <Input type="text" style={{ width: "60%", backgroundColor: "white", border: "none", borderBottom: "1px solid grey", borderRadius: 0, marginBottom: 2 }} />
                            )} <br />
                            <span className="span-label-AU">Mã Đơn vị:</span>
                            {getFieldDecorator('madoi')(
                                <Input type="text" style={{ width: "60%", backgroundColor: "white", border: "none", borderBottom: "1px solid grey", borderRadius: 0, marginBottom: 2 }} />
                            )} <br />
                            <span className="span-label-AU">Địa chỉ:</span>
                            {getFieldDecorator('diachi')(
                                <Input type="text" style={{ width: "60%", backgroundColor: "white", border: "none", borderBottom: "1px solid grey", borderRadius: 0, marginBottom: 2 }} />
                            )} <br />
                            <span className="span-label-AU">Đơn vị trực thuộc quản lý:</span>
                            {getFieldDecorator('donviql')(
                                <Input type="text" style={{ width: "60%", backgroundColor: "white", border: "none", borderBottom: "1px solid grey", borderRadius: 0, marginBottom: 2 }} />
                            )} <br />
                            <span className="span-label-AU">Phụ trách đơn vị hiện tại:</span>
                            {getFieldDecorator('phutrach')(
                                <Input type="text" style={{ width: "60%", backgroundColor: "white", border: "none", borderBottom: "1px solid grey", borderRadius: 0, marginBottom: 2 }} />
                            )} <br />
                            <span className="span-label-AU">Năm thành lập:</span>
                            {getFieldDecorator('ngaythanhlap')(
                                <Input type="number" style={{ width: "60%", backgroundColor: "white", border: "none", borderBottom: "1px solid grey", borderRadius: 0, marginBottom: 2 }} />
                            )} <br />
                            <span className="span-label-AU">Ngày truyền thống:</span>
                            {getFieldDecorator('ngaytruyenthong')(
                                <Input type="date" style={{ width: "60%", backgroundColor: "white", border: "none", borderBottom: "1px solid grey", borderRadius: 0, marginBottom: 2 }} />
                            )} <br />
                        </div>
                        <div style={{padding: "0px 20px 0px 20px"}}>
                            <span className="span-label-AU">Thành viên hiện tại: </span>
                        </div>
                        <div style={{width:"100%",padding: "0px 20px 0px 20px"}}>
                        <div className="unit-table-infor" style={{width:"100%"}}>
                            <div className="unit-column-infor">
                                <div className="unit-div-infor">
                                    <div className="unit-div1-infor">
                                        <span className="unit-span-infor">Cảm tình viên</span>
                                    </div>
                                    <div className="unit-div2-infor">

                                        {getFieldDecorator('camtinhvien')(
                                            <Input type="number" min="0" style={{ width: "60%", height: 31, backgroundColor: "white", border: "none", borderBottom: "1px solid grey", borderRadius: 0, marginBottom: 2 }} />
                                        )}

                                    </div>
                                </div>
                                <div className="unit-div-infor">
                                    <div className="unit-div1-infor">
                                        <span className="unit-span-infor">Tình nguyện viên</span>
                                    </div>
                                    <div className="unit-div2-infor">

                                        {getFieldDecorator('tnv')(
                                            <Input type="number" min="0" style={{ width: "60%", height: 31, backgroundColor: "white", border: "none", borderBottom: "1px solid grey", borderRadius: 0, marginBottom: 2 }} />
                                        )}

                                    </div>
                                </div>
                                <div className="unit-div-infor">
                                    <div className="unit-div1-infor">
                                        <span className="unit-span-infor">Hội viên</span>
                                    </div>
                                    <div className="unit-div2-infor">

                                        {getFieldDecorator('hoivien')(
                                            <Input type="number" min="0" style={{ width: "60%", height: 31, backgroundColor: "white", border: "none", borderBottom: "1px solid grey", borderRadius: 0, marginBottom: 2 }} />
                                        )}

                                    </div>
                                </div>
                            </div>{/*unit-column-infor*/}

                            <div className="unit-column-infor">
                                <div className="unit-div-infor">
                                    <div className="unit-div1-infor">
                                        <span className="unit-span-infor">Hướng dẫn viên/Cán bộ tăng cường</span>
                                    </div>
                                    <div className="unit-div2-infor">

                                        {getFieldDecorator('huongdanvien')(
                                            <Input type="number" min="0" style={{ width: "60%", height: 31, backgroundColor: "white", border: "none", borderBottom: "1px solid grey", borderRadius: 0, marginBottom: 2 }} />
                                        )}

                                    </div>
                                </div>
                                <div className="unit-div-infor">
                                    <div className="unit-div1-infor">
                                        <span className="unit-span-infor">Huấn luyện viên</span>
                                    </div>
                                    <div className="unit-div2-infor">

                                        {getFieldDecorator('huanluyenvien')(
                                            <Input type="number" min="0" style={{ width: "60%", height: 31, backgroundColor: "white", border: "none", borderBottom: "1px solid grey", borderRadius: 0, marginBottom: 2 }} />
                                        )}

                                    </div>
                                </div>
                                <div className="unit-div-infor">
                                    <div className="unit-div1-infor">
                                        <span className="unit-span-infor">Cán bộ</span>
                                    </div>
                                    <div className="unit-div2-infor">

                                        {getFieldDecorator('canbotangcuong')(
                                            <Input type="number" min="0" style={{ width: "60%", height: 31, backgroundColor: "white", border: "none", borderBottom: "1px solid grey", borderRadius: 0, marginBottom: 2 }} />
                                        )}

                                    </div>
                                </div>
                            </div>{/*unit-column-infor*/}
                        </div>{/*---------------unit-table-infor-------------------------*/}
                        </div>
                        <div style={{padding: "0px 20px 0px 20px"}}>
                        <div>
                            {getFieldDecorator('branchId', {
                                rules: [{
                                required: true,
                                message: 'Chưa chọn chi hội trực thuộc!'
                                }]
                            })(
                                <Select placeholder="Tên Chi Hội" style={{ width: '60%' }}>
                                    {unit.map(unit => (
                                        <Option style={{ textAlign: "center" }} key={unit.id}>{unit.Tenchihoi}</Option>
                                    ))}
                                </Select>
                            )}
                        </div>

                        <span className="span-label-AU">Điểm hiến máu thường xuyên tổ chức:</span>
                        {getFieldDecorator('diemhienmau')(
                            <Input type="text" style={{ width: "60%", backgroundColor: "white", border: "none", borderBottom: "1px solid grey", borderRadius: 0, marginBottom: 2 }} />
                        )} <br />
                        <span className="span-label-AU">Kết quả hoạt động:</span>
                        {getFieldDecorator('ketquahoatdong')(
                            <Input type="text" style={{ width: "60%", backgroundColor: "white", border: "none", borderBottom: "1px solid grey", borderRadius: 0, marginBottom: 2 }} />
                        )}
                        </div>
                        
                        <div className="buttonSubmitForMobile">
                            <Button className="buttonS" type="primary" htmlType="submit">Thêm mới</Button>
                        </div>
                    </Form.Item>
                </Form>
        </div>
    )
}
export default Form.create()(AddClub)
