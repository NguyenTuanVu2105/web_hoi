import React, { Component, useState, useContext, useEffect } from 'react'
import HomepageContext from "../context/HomepageContext"
import { Select } from 'antd'
import { Input, Form, notification, Button } from 'antd'
import '../css/AUDUnit.css'
import '../api/base/club'
import { addClub } from '../api/base/club'
import { addUnit } from '../api/base/unit'
import { getUnitAll } from '../api/base/unit'
const AUDUnit = (props) => {
    const { Option } = Select
    const { getFieldDecorator } = props.form
    const { nameMap, setNameMap, setLoading } = useContext(HomepageContext)
    const [unit, setUnit] = useState([])
    const fetchData = async () => {
        const result = await getUnitAll()
        setLoading(false)
        if (result.data.success) {
            setUnit(result.data.data)
        }
    }
    console.log(unit)
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

    const handleSubmitUnit = e => {
        e.preventDefault()
        props.form.validateFields(async (err, values) => {
            if (!err) {
                setLoading(true)
                const { success } = await addUnit(values)
                setLoading(false)
                if (success) {
                    notification['success']({
                        message: 'Thêm thành công chi hội!'
                    })
                } else {
                    notification['error']({
                        message: 'Thêm không thành công chi hội!'
                    })
                }
            }
        })
    }

    const [name, setName] = useState(true)

    useEffect(() => {
        fetchData()
        setNameMap({
            ['/']: 'Trang chủ',
            ['/OrganizationalRecords']: 'Hồ sơ tổ chức',
            ['/AUDUnit']: 'Thêm đơn vị'
        })
    }, [])

    return (
        <div className="para">
            <div className=' row changeAUDUnit'>
                <div className="ButtonForMobile">
                    <button className="buttonD" onClick={() => setName(true)}>Chi Hội</button>
                    <button className="buttonD" onClick={() => setName(false)}>Đội</button>
                </div>
            </div>
            <div className="para" style={{ display: name ? 'block' : 'none' }}>
                <Form onSubmit={handleSubmitUnit}>
                    <Form.Item>
                        <h4>Chi Hội</h4>
                        <div>
                            <span className="spanLabel">Đơn vị:</span>
                            {getFieldDecorator('tenchihoi')(
                                <Input type="text" style={{ width: "60%", backgroundColor: "white", color: "red", border: "none", borderBottom: "1px solid grey", borderRadius: 0, marginBottom: 2 }} />
                            )} <br />
                            <span className="spanLabel">Mã Đơn vị:</span>
                            {getFieldDecorator('machihoi')(
                                <Input type="text" style={{ width: "60%", backgroundColor: "white", color: "red", border: "none", borderBottom: "1px solid grey", borderRadius: 0, marginBottom: 2 }} />
                            )} <br />
                            <span className="spanLabel">Địa chỉ:</span>
                            {getFieldDecorator('diachi')(
                                <Input type="text" style={{ width: "60%", backgroundColor: "white", color: "red", border: "none", borderBottom: "1px solid grey", borderRadius: 0, marginBottom: 2 }} />
                            )} <br />
                            <span className="spanLabel">Đơn vị trực thuộc quản lý:</span>
                            {getFieldDecorator('donviql')(
                                <Input type="text" style={{ width: "60%", backgroundColor: "white", color: "red", border: "none", borderBottom: "1px solid grey", borderRadius: 0, marginBottom: 2 }} />
                            )} <br />
                            <span className="spanLabel">Phụ trách đơn vị hiện tại:</span>
                            {getFieldDecorator('phutrach')(
                                <Input type="text" style={{ width: "60%", backgroundColor: "white", color: "red", border: "none", borderBottom: "1px solid grey", borderRadius: 0, marginBottom: 2 }} />
                            )} <br />
                            <span className="spanLabel">Năm thành lập:</span>
                            {getFieldDecorator('ngaythanhlap')(
                                <Input type="number" style={{ width: "60%", backgroundColor: "white", color: "red", border: "none", borderBottom: "1px solid grey", borderRadius: 0, marginBottom: 2 }} />
                            )} <br />
                            <span className="spanLabel">Ngày truyền thống:</span>
                            {getFieldDecorator('ngaytruyenthong')(
                                <Input type="text" style={{ width: "60%", backgroundColor: "white", color: "red", border: "none", borderBottom: "1px solid grey", borderRadius: 0, marginBottom: 2 }} />
                            )} <br />
                            <span className="spanLabel">Số cơ sở trực thuộc chi Hội:</span>
                            {getFieldDecorator('csthuochoi')(
                                <Input type="text" style={{ width: "60%", backgroundColor: "white", color: "red", border: "none", borderBottom: "1px solid grey", borderRadius: 0, marginBottom: 2 }} />
                            )} <br />
                        </div>
                        <div>
                            <span className="spanLabel">Thành viên hiện tại: </span>
                        </div>
                        <div className="unit-table-infor">
                            <div className="unit-column-infor">
                                <div className="unit-div-infor">
                                    <div className="unit-div1-infor">
                                        <span className="unit-span-infor">Cảm tình viên</span>
                                    </div>
                                    <div className="unit-div2-infor">

                                        {getFieldDecorator('camtinhvien')(
                                            <Input type="number" min="0" style={{ width: "60%", height: 31, backgroundColor: "white", color: "red", border: "none", borderBottom: "1px solid grey", borderRadius: 0, marginBottom: 2 }} />
                                        )}

                                    </div>
                                </div>
                                <div className="unit-div-infor">
                                    <div className="unit-div1-infor">
                                        <span className="unit-span-infor">Tình nguyện viên</span>
                                    </div>
                                    <div className="unit-div2-infor">

                                        {getFieldDecorator('tnv')(
                                            <Input type="number" min="0" style={{ width: "60%", height: 31, backgroundColor: "white", color: "red", border: "none", borderBottom: "1px solid grey", borderRadius: 0, marginBottom: 2 }} />
                                        )}

                                    </div>
                                </div>
                                <div className="unit-div-infor">
                                    <div className="unit-div1-infor">
                                        <span className="unit-span-infor">Hội viên</span>
                                    </div>
                                    <div className="unit-div2-infor">

                                        {getFieldDecorator('hoivien')(
                                            <Input type="number" min="0" style={{ width: "60%", height: 31, backgroundColor: "white", color: "red", border: "none", borderBottom: "1px solid grey", borderRadius: 0, marginBottom: 2 }} />
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
                                            <Input type="number" min="0" style={{ width: "60%", height: 31, backgroundColor: "white", color: "red", border: "none", borderBottom: "1px solid grey", borderRadius: 0, marginBottom: 2 }} />
                                        )}
                                    </div>
                                </div>
                                <div className="unit-div-infor">
                                    <div className="unit-div1-infor">
                                        <span className="unit-span-infor">Huấn luyện viên</span>
                                    </div>
                                    <div className="unit-div2-infor">

                                        {getFieldDecorator('huanluyenvien')(
                                            <Input type="number" min="0" style={{ width: "60%", height: 31, backgroundColor: "white", color: "red", border: "none", borderBottom: "1px solid grey", borderRadius: 0, marginBottom: 2 }} />
                                        )}

                                    </div>
                                </div>
                                <div className="unit-div-infor">
                                    <div className="unit-div1-infor">
                                        <span className="unit-span-infor">Cán bộ</span>
                                    </div>
                                    <div className="unit-div2-infor">

                                        {getFieldDecorator('canbotangcuong')(
                                            <Input type="number" min="0" style={{ width: "60%", height: 31, backgroundColor: "white", color: "red", border: "none", borderBottom: "1px solid grey", borderRadius: 0, marginBottom: 2 }} />
                                        )}

                                    </div>
                                </div>
                            </div>
                        </div>

                        <span className="spanLabel">Điểm hiến máu thường xuyên tổ chức:</span>
                        {getFieldDecorator('diemhienmau')(
                            <Input type="text" style={{ width: "60%", backgroundColor: "white", color: "red", border: "none", borderBottom: "1px solid grey", borderRadius: 0, marginBottom: 2 }} />
                        )} <br />
                        <span className="spanLabel">Kết quả hoạt động:</span>
                        {getFieldDecorator('ketquahoatdong')(
                            <Input type="text" style={{ width: "60%", backgroundColor: "white", color: "red", border: "none", borderBottom: "1px solid grey", borderRadius: 0, marginBottom: 2 }} />
                        )}
                        <div className="buttonSubmitForMobile">
                            <Button className="buttonS" type="primary" htmlType="submit">Thêm mới</Button>
                        </div>
                    </Form.Item>
                </Form>

            </div>
            <div className="para" style={{ display: name ? 'none' : 'block' }}>
                <Form onSubmit={handleSubmitClub}>
                    <Form.Item>
                        <h4>Đội</h4>
                        <div>
                            <span className="spanLabel">Đơn vị:</span>
                            {getFieldDecorator('tenhoi')(
                                <Input type="text" style={{ width: "60%", backgroundColor: "white", color: "red", border: "none", borderBottom: "1px solid grey", borderRadius: 0, marginBottom: 2 }} />
                            )} <br />
                            <span className="spanLabel">Mã Đơn vị:</span>
                            {getFieldDecorator('madoi')(
                                <Input type="text" style={{ width: "60%", backgroundColor: "white", color: "red", border: "none", borderBottom: "1px solid grey", borderRadius: 0, marginBottom: 2 }} />
                            )} <br />
                            <span className="spanLabel">Địa chỉ:</span>
                            {getFieldDecorator('diachi')(
                                <Input type="text" style={{ width: "60%", backgroundColor: "white", color: "red", border: "none", borderBottom: "1px solid grey", borderRadius: 0, marginBottom: 2 }} />
                            )} <br />
                            <span className="spanLabel">Đơn vị trực thuộc quản lý:</span>
                            {getFieldDecorator('donviql')(
                                <Input type="text" style={{ width: "60%", backgroundColor: "white", color: "red", border: "none", borderBottom: "1px solid grey", borderRadius: 0, marginBottom: 2 }} />
                            )} <br />
                            <span className="spanLabel">Phụ trách đơn vị hiện tại:</span>
                            {getFieldDecorator('phutrach')(
                                <Input type="text" style={{ width: "60%", backgroundColor: "white", color: "red", border: "none", borderBottom: "1px solid grey", borderRadius: 0, marginBottom: 2 }} />
                            )} <br />
                            <span className="spanLabel">Năm thành lập:</span>
                            {getFieldDecorator('ngaythanhlap')(
                                <Input type="number" style={{ width: "60%", backgroundColor: "white", color: "red", border: "none", borderBottom: "1px solid grey", borderRadius: 0, marginBottom: 2 }} />
                            )} <br />
                            <span className="spanLabel">Ngày truyền thống:</span>
                            {getFieldDecorator('ngaytruyenthong')(
                                <Input type="date" style={{ width: "60%", backgroundColor: "white", color: "red", border: "none", borderBottom: "1px solid grey", borderRadius: 0, marginBottom: 2 }} />
                            )} <br />
                        </div>
                        <div>
                            <span className="spanLabel">Thành viên hiện tại: </span>
                        </div>
                        <div className="unit-table-infor">
                            <div className="unit-column-infor">
                                <div className="unit-div-infor">
                                    <div className="unit-div1-infor">
                                        <span className="unit-span-infor">Cảm tình viên</span>
                                    </div>
                                    <div className="unit-div2-infor">

                                        {getFieldDecorator('camtinhvien')(
                                            <Input type="number" min="0" style={{ width: "60%", backgroundColor: "white", color: "red", border: "none", borderBottom: "1px solid grey", borderRadius: 0, marginBottom: 2 }} />
                                        )}

                                    </div>
                                </div>
                                <div className="unit-div-infor">
                                    <div className="unit-div1-infor">
                                        <span className="unit-span-infor">Tình nguyện viên</span>
                                    </div>
                                    <div className="unit-div2-infor">

                                        {getFieldDecorator('tnv')(
                                            <Input type="number" min="0" style={{ width: "60%", backgroundColor: "white", color: "red", border: "none", borderBottom: "1px solid grey", borderRadius: 0, marginBottom: 2 }} />
                                        )}

                                    </div>
                                </div>
                                <div className="unit-div-infor">
                                    <div className="unit-div1-infor">
                                        <span className="unit-span-infor">Hội viên</span>
                                    </div>
                                    <div className="unit-div2-infor">

                                        {getFieldDecorator('hoivien')(
                                            <Input type="number" min="0" style={{ width: "60%", backgroundColor: "white", color: "red", border: "none", borderBottom: "1px solid grey", borderRadius: 0, marginBottom: 2 }} />
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
                                            <Input type="number" min="0" style={{ width: "60%", backgroundColor: "white", color: "red", border: "none", borderBottom: "1px solid grey", borderRadius: 0, marginBottom: 2 }} />
                                        )}

                                    </div>
                                </div>
                                <div className="unit-div-infor">
                                    <div className="unit-div1-infor">
                                        <span className="unit-span-infor">Huấn luyện viên</span>
                                    </div>
                                    <div className="unit-div2-infor">

                                        {getFieldDecorator('huanluyenvien')(
                                            <Input type="number" min="0" style={{ width: "60%", backgroundColor: "white", color: "red", border: "none", borderBottom: "1px solid grey", borderRadius: 0, marginBottom: 2 }} />
                                        )}

                                    </div>
                                </div>
                                <div className="unit-div-infor">
                                    <div className="unit-div1-infor">
                                        <span className="unit-span-infor">Cán bộ</span>
                                    </div>
                                    <div className="unit-div2-infor">

                                        {getFieldDecorator('canbotangcuong')(
                                            <Input type="number" min="0" style={{ width: "60%", backgroundColor: "white", color: "red", border: "none", borderBottom: "1px solid grey", borderRadius: 0, marginBottom: 2 }} />
                                        )}

                                    </div>
                                </div>
                            </div>{/*unit-column-infor*/}
                        </div>{/*---------------unit-table-infor-------------------------*/}
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

                        <span className="spanLabel">Điểm hiến máu thường xuyên tổ chức:</span>
                        {getFieldDecorator('diemhienmau')(
                            <Input type="text" style={{ width: "60%", backgroundColor: "white", color: "red", border: "none", borderBottom: "1px solid grey", borderRadius: 0, marginBottom: 2 }} />
                        )} <br />
                        <span className="spanLabel">Kết quả hoạt động:</span>
                        {getFieldDecorator('ketquahoatdong')(
                            <Input type="text" style={{ width: "60%", backgroundColor: "white", color: "red", border: "none", borderBottom: "1px solid grey", borderRadius: 0, marginBottom: 2 }} />
                        )}
                        <div className="buttonSubmitForMobile">
                            <Button className="buttonS" type="primary" htmlType="submit">Thêm mới</Button>
                        </div>
                    </Form.Item>
                </Form>
            </div>

        </div>
    )
}
export default Form.create()(AUDUnit)
