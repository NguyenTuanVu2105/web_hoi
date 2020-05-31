import React, { Component, useState, useContext, useEffect } from 'react'
import HomepageContext from "../context/HomepageContext";
import './organization/component/unit/UnitDetail.css'
import { getUser, checkAuth } from '../api/auth/auth'
import { getUnitDetail, updateUnit } from '../api/base/unit'
import { Button, Input, Form, notification } from 'antd';
import { useParams } from 'react-router-dom';
import IntroUnit from './organization/component/introduce/component/IntroUnit'
const ChiHoi = (props) => {
    const { getFieldDecorator } = props.form
    const [changeInput, setchangeInput] = useState(true)
    const { machihoi } = useParams()
    const { nameMap, setNameMap, setLoading } = useContext(HomepageContext)
    const [unit, setUnit] = useState([])

    const fetchData = async () => {
        setLoading(true)
        const result = await getUnitDetail(machihoi)
        setLoading(false)
        if (result.data.success) {
            setUnit(result.data.data)
            console.log(unit)
        }
    }

    // const roles = getUser().then((value) => {
    //     if (checkAuth()) {
    //         var edit = document.getElementById('roleedit')
    //         var save = document.getElementById('rolesave')
    //         if (value.role === 'member') {
    //             edit.style.display = 'none'
    //             save.style.display = 'none'
    //         } else {
    //             edit.style.display = 'block'
    //             save.style.display = 'block'
    //         }
    //     }
    // })

    useEffect(() => {
        fetchData()
        setNameMap({
            ['/']: 'Trang chủ',
            ['/ho-so-to-chuc']: 'Hồ sơ tổ chức',
            ['/ho-so-don-vi']: 'Hồ sơ đơn vị',
            ['/ho-so-chi-hoi']: 'Hồ sơ đơn vị(Chi Hội)'
        })
    }, [])

    const handleUpdate = async (e) => {
        e.preventDefault()
        props.form.validateFields(async (err, values) => {
            if (!err) {
                setLoading(true)
                const { success } = await updateUnit(values)
                setLoading(false)
                if (success) {
                    notification['success']({
                        message: 'Cập nhật thông tin đơn vị thành công!',
                    })
                }
                else {
                    notification['error']({
                        message: 'Cập nhật thông tin đơn vị thất bại!',
                    })
                }
                setchangeInput(true)
            }
        })
    }


    return (
        <div className="para-unit-s">
            <div className="header-unit-s">
                <a className="tag-a-header-unit-s">{unit.Tenchihoi}</a>
            </div>
            <div>
                <Form onSubmit={handleUpdate}>
                    <div className="content-unit-s">
                        <Form.Item>
                            <div style={{ width: "100%", display: 'flex', flexWrap: "wrap" }}>
                                <div className="reponsive-unit-s">
                                    <div>
                                        <span className="label-unit-s">Đơn vị:</span>
                                        {getFieldDecorator('tenchihoi', {
                                            initialValue: unit.Tenchihoi
                                        })(
                                            <Input type="text" style={{ width: "70%", backgroundColor: "white", color: "rgba(0, 0, 0, 0.6)", border: "none", marginBottom: 2 }} disabled={changeInput} />
                                        )}
                                    </div>
                                    <div>
                                        <span className="label-unit-s">Mã đơn vị:</span>
                                        {getFieldDecorator('machihoi', {
                                            initialValue: unit.Machihoi
                                        })(
                                            <Input type="text" style={{ width: "70%", backgroundColor: "white", color: "rgba(0, 0, 0, 0.6)", border: "none", marginBottom: 2 }} disabled={changeInput} />
                                        )}
                                    </div>
                                    <div>
                                        <span className="label-unit-s">Địa chỉ:</span>
                                        {getFieldDecorator('diachi', {
                                            initialValue: unit.Diachi
                                        })(
                                            <Input type="text" style={{ width: "70%", backgroundColor: "white", color: "rgba(0, 0, 0, 0.6)", border: "none", marginBottom: 2 }} disabled={changeInput} />
                                        )}
                                    </div>
                                    <div>
                                        <span className="label-unit-s">Đơn vị trực thuộc quản lý:</span>
                                        {getFieldDecorator('donviql', {
                                            initialValue: unit.DonviQL
                                        })(
                                            <Input type="text" style={{ width: "70%", backgroundColor: "white", color: "rgba(0, 0, 0, 0.6)", border: "none", marginBottom: 2 }} disabled={changeInput} />
                                        )}

                                    </div>
                                    <div>
                                        <span className="label-unit-s">Phụ trách đơn vị hiện tại:</span>
                                        {getFieldDecorator('phutrach', {
                                            initialValue: unit.Phutrach
                                        })(
                                            <Input type="text" style={{ width: "70%", backgroundColor: "white", color: "rgba(0, 0, 0, 0.6)", border: "none", marginBottom: 2 }} disabled={changeInput} />
                                        )}
                                    </div>
                                    <div>
                                        <span className="label-unit-s">Năm thành lập:</span>
                                        {getFieldDecorator('ngaythanhlap', {
                                            initialValue: unit.Ngaythanhlap
                                        })(
                                            <Input type="number" style={{ width: "70%", backgroundColor: "white", color: "rgba(0, 0, 0, 0.6)", border: "none", marginBottom: 2 }} disabled={changeInput} />
                                        )}
                                    </div>
                                    <div>
                                        <span className="label-unit-s">Ngày truyền thống:</span>
                                        {getFieldDecorator('ngaytruyenthong', {
                                            initialValue: unit.Ngaytruyenthong
                                        })(
                                            <Input type="date" style={{ width: "70%", backgroundColor: "white", color: "rgba(0, 0, 0, 0.6)", border: "none", marginBottom: 2 }} disabled={changeInput} />
                                        )}
                                    </div>
                                    <div>
                                        <span className="label-unit-s">Cơ sở thuộc hội:</span>
                                        {getFieldDecorator('csthuochoi', {
                                            initialValue: unit.CSthuochoi
                                        })(
                                            <Input type="text" style={{ width: "70%", backgroundColor: "white", color: "rgba(0, 0, 0, 0.6)", border: "none", marginBottom: 2 }} disabled={changeInput} />
                                        )}
                                    </div>
                                    <div>
                                        <span className="label-unit-s">Tổng số thành viên:</span><br />
                                    </div>
                                </div>
                                <div className="logo-unit-s">
                                    <img></img>
                                    <div>
                                        <a></a>
                                    </div>
                                </div>
                            </div>
                            {/*---------------unit-table-infor-------------------------*/}
                            <div className="unit-table-infor">
                                <div className="unit-column-infor">
                                    <div className="unit-div-infor">
                                        <div className="unit-div1-infor">
                                            <span className="unit-span-infor">Cảm tình viên</span>
                                        </div>
                                        <div className="unit-div2-infor">
                                            {getFieldDecorator('camtinhvien', {
                                                initialValue: unit.Camtinhvien
                                            })(
                                                <Input type="number" min="0" style={{ width: "100%", color: "rgba(0, 0, 0, 0.6)", border: "none", backgroundColor: "white", height: 28 }} disabled={changeInput} />
                                            )}
                                        </div>
                                    </div>
                                    <div className="unit-div-infor">
                                        <div className="unit-div1-infor">
                                            <span className="unit-span-infor">Tình nguyện viên</span>
                                        </div>
                                        <div className="unit-div2-infor">
                                            {getFieldDecorator('tnv', {
                                                initialValue: unit.TNV
                                            })(
                                                <Input type="number" min="0" style={{ width: "100%", color: "rgba(0, 0, 0, 0.6)", border: "none", backgroundColor: "white", height: 28 }} disabled={changeInput} />
                                            )}
                                        </div>
                                    </div>
                                    <div className="unit-div-infor">
                                        <div className="unit-div1-infor">
                                            <span className="unit-span-infor">Hội viên</span>
                                        </div>
                                        <div className="unit-div2-infor">
                                            {getFieldDecorator('hoivien', {
                                                initialValue: unit.Hoivien
                                            })(
                                                <Input type="number" min="0" style={{ width: "100%", color: "rgba(0, 0, 0, 0.6)", border: "none", backgroundColor: "white", height: 28 }} disabled={changeInput} />
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
                                            {getFieldDecorator('huongdanvien', {
                                                initialValue: unit.Huongdanvien
                                            })(
                                                <Input type="number" min="0" style={{ width: "100%", color: "rgba(0, 0, 0, 0.6)", border: "none", backgroundColor: "white", height: 28 }} disabled={changeInput} />
                                            )}
                                        </div>
                                    </div>
                                    <div className="unit-div-infor">
                                        <div className="unit-div1-infor">
                                            <span className="unit-span-infor">Huấn luyện viên</span>
                                        </div>
                                        <div className="unit-div2-infor">
                                            {getFieldDecorator('huanluyenvien', {
                                                initialValue: unit.Huanluyenvien
                                            })(
                                                <Input type="number" min="0" style={{ width: "100%", color: "rgba(0, 0, 0, 0.6)", border: "none", backgroundColor: "white", height: 28 }} disabled={changeInput} />
                                            )}
                                        </div>
                                    </div>
                                    <div className="unit-div-infor">
                                        <div className="unit-div1-infor">
                                            <span className="unit-span-infor">Cán bộ</span>
                                        </div>
                                        <div className="unit-div2-infor">
                                            {getFieldDecorator('canbotangcuong', {
                                                initialValue: unit.Canbotangcuong
                                            })(
                                                <Input type="number" min="0" style={{ width: "100%", color: "rgba(0, 0, 0, 0.6)", border: "none", backgroundColor: "white", height: 28 }} disabled={changeInput} />
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <span className="label-unit-s">Điểm hiến máu thường xuyên tổ chức:</span>
                            {getFieldDecorator('ketquahoatdong', {
                                initialValue: unit.Ketquahoatdong
                            })(
                                <Input type="text" style={{ width: "70%", backgroundColor: "white", color: "rgba(0, 0, 0, 0.6)", border: "none", marginBottom: 2 }} disabled={changeInput} />
                            )}
                            <br />
                            <span className="label-unit-s">Kết quả hoạt động:</span>
                            {getFieldDecorator('diemhienmau', {
                                initialValue: unit.Diemhienmau
                            })(
                                <Input type="text" style={{ width: "70%", backgroundColor: "white", color: "rgba(0, 0, 0, 0.6)", border: "none", marginBottom: 2 }} disabled={changeInput} />
                            )}
                        </Form.Item>
                    </div>
                    <div className="ButtonForMobileAdd">
                        <Button className="buttonDisable1" id='roleedit' onClick={() => setchangeInput(false)}>Sửa</Button>
                        <Form.Item>
                            <Button id='rolesave' className="buttonDisable1" type="primary" htmlType="submit">Lưu thay đổi</Button>
                        </Form.Item>
                    </div>
                </Form>
            </div>
        </div>
    )
}

export default Form.create()(ChiHoi);