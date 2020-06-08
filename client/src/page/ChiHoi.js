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
        }
    }

    const roles = getUser().then((value) => {
        if (checkAuth()) {
            var edit = document.getElementById('roleedit')
            var save = document.getElementById('rolesave')
            if (value.role === 'hoitruong') {
                edit.style.display = 'block'
                save.style.display = 'block'
            } else {
                edit.style.display = 'none'
                save.style.display = 'none'
            }
        }
    })

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
                                    <div className="row-unit-s">
                                        <div className="label-unit-s">Đơn vị:</div>
                                        <div style={{ display: changeInput ? "block" : "none" }}>
                                            <label className="label-value-s" >{unit.Tenchihoi}</label>
                                        </div>
                                        <div style={{ display: changeInput ? "none" : "block" }}>
                                            {getFieldDecorator('tenchihoi', {
                                                initialValue: unit.Tenchihoi
                                            })(
                                                <Input type="text" className="input-unit-s" disabled={changeInput} />
                                            )}
                                        </div>
                                    </div>
                                    <div className="row-unit-s">
                                        <div className="label-unit-s">Mã đơn vị:</div>
                                        <div style={{ display: changeInput ? "block" : "none" }}>
                                            <label className="label-value-s" >{unit.Machihoi}</label>
                                        </div>
                                        <div style={{ display: changeInput ? "none" : "block" }}>
                                            {getFieldDecorator('machihoi', {
                                                initialValue: unit.Machihoi
                                            })(
                                                <Input type="text" className="input-unit-s" disabled={changeInput} />
                                            )}
                                        </div>
                                    </div>
                                    <div className="row-unit-s">
                                        <div className="label-unit-s">Địa chỉ:</div>
                                        <div style={{ display: changeInput ? "block" : "none" }}>
                                            <label className="label-value-s" >{unit.Diachi}</label>
                                        </div>
                                        <div style={{ display: changeInput ? "none" : "block" }}>
                                            {getFieldDecorator('diachi', {
                                                initialValue: unit.Diachi
                                            })(
                                                <Input type="text" className="input-unit-s" disabled={changeInput} />
                                            )}
                                        </div>
                                    </div>
                                    <div className="row-unit-s">
                                        <div className="label-unit-s">Đơn vị trực thuộc quản lý:</div>
                                        <div style={{ display: changeInput ? "block" : "none" }}>
                                            <label className="label-value-s" >{unit.DonviQL}</label>
                                        </div>
                                        <div style={{ display: changeInput ? "none" : "block" }}>
                                            {getFieldDecorator('donviql', {
                                                initialValue: unit.DonviQL
                                            })(
                                                <Input type="text" className="input-unit-s" disabled={changeInput} />
                                            )}
                                        </div>
                                    </div>
                                    <div className="row-unit-s">
                                        <div className="label-unit-s">Phụ trách đơn vị hiện tại:</div>
                                        <div style={{ display: changeInput ? "block" : "none" }}>
                                            <label className="label-value-s" >{unit.Phutrach}</label>
                                        </div>
                                        <div style={{ display: changeInput ? "none" : "block" }}>
                                            {getFieldDecorator('phutrach', {
                                                initialValue: unit.Phutrach
                                            })(
                                                <Input type="text" className="input-unit-s" disabled={changeInput} />
                                            )}
                                        </div>
                                    </div>
                                    <div className="row-unit-s">
                                        <div className="label-unit-s">Năm thành lập:</div>
                                        <div style={{ display: changeInput ? "block" : "none" }}>
                                            <label className="label-value-s" >{unit.Ngaythanhlap}</label>
                                        </div>
                                        <div style={{ display: changeInput ? "none" : "block" }}>
                                            {getFieldDecorator('ngaythanhlap', {
                                                initialValue: unit.Ngaythanhlap
                                            })(
                                                <Input type="number" className="input-unit-s" disabled={changeInput} />
                                            )}
                                        </div>
                                    </div>
                                    <div className="row-unit-s">
                                        <div className="label-unit-s">Ngày truyền thống:</div>
                                        <div style={{ display: changeInput ? "block" : "none" }}>
                                            <label className="label-value-s" >{unit.Ngaytruyenthong}</label>
                                        </div>
                                        <div style={{ display: changeInput ? "none" : "block" }}>
                                            {getFieldDecorator('ngaytruyenthong', {
                                                initialValue: unit.Ngaytruyenthong
                                            })(
                                                <Input type="date" className="input-unit-s" disabled={changeInput} />
                                            )}
                                        </div>
                                    </div>
                                    <div className="row-unit-s">
                                        <div className="label-unit-s">Cơ sở thuộc hội:</div>
                                        <div style={{ display: changeInput ? "block" : "none" }}>
                                            <label className="label-value-s" >{unit.CSthuochoi}</label>
                                        </div>
                                        <div style={{ display: changeInput ? "none" : "block" }}>
                                            {getFieldDecorator('csthuochoi', {
                                                initialValue: unit.CSthuochoi
                                            })(
                                                <Input type="text" className="input-unit-s" disabled={changeInput} />
                                            )}
                                        </div>
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
                                            <div style={{ display: changeInput ? "flex" : "none", justifyContent: "center" }}>
                                                <label className="label-value-s" >{unit.Camtinhvien}</label>
                                            </div>
                                            <div style={{ display: changeInput ? "none" : "block" }}>
                                                {getFieldDecorator('camtinhvien', {
                                                    initialValue: unit.Camtinhvien
                                                })(
                                                    <Input type="number" min="0" style={{ width: "100%", color: "rgba(0, 0, 0, 0.6)", backgroundColor: "white", height: 30 }} disabled={changeInput} />
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="unit-div-infor">
                                        <div className="unit-div1-infor">
                                            <span className="unit-span-infor">Tình nguyện viên</span>
                                        </div>
                                        <div className="unit-div2-infor">
                                            <div style={{ display: changeInput ? "flex" : "none", justifyContent: "center" }}>
                                                <label className="label-value-s" >{unit.TNV}</label>
                                            </div>
                                            <div style={{ display: changeInput ? "none" : "block" }}>
                                                {getFieldDecorator('tnv', {
                                                    initialValue: unit.TNV
                                                })(
                                                    <Input type="number" min="0" style={{ width: "100%", color: "rgba(0, 0, 0, 0.6)", backgroundColor: "white", height: 30 }} disabled={changeInput} />
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="unit-div-infor">
                                        <div className="unit-div1-infor">
                                            <span className="unit-span-infor">Hội viên</span>
                                        </div>
                                        <div className="unit-div2-infor">
                                            <div style={{ display: changeInput ? "flex" : "none", justifyContent: "center" }}>
                                                <label className="label-value-s" >{unit.Hoivien}</label>
                                            </div>
                                            <div style={{ display: changeInput ? "none" : "block" }}>
                                                {getFieldDecorator('hoivien', {
                                                    initialValue: unit.Hoivien
                                                })(
                                                    <Input type="number" min="0" style={{ width: "100%", color: "rgba(0, 0, 0, 0.6)", backgroundColor: "white", height: 30 }} disabled={changeInput} />
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                </div>{/*unit-column-infor*/}

                                <div className="unit-column-infor">
                                    <div className="unit-div-infor">
                                        <div className="unit-div1-infor">
                                            <span className="unit-span-infor">Hướng dẫn viên/Cán bộ tăng cường</span>
                                        </div>
                                        <div className="unit-div2-infor">
                                            <div style={{ display: changeInput ? "flex" : "none", justifyContent: "center" }}>
                                                <label className="label-value-s" >{unit.Huongdanvien}</label>
                                            </div>
                                            <div style={{ display: changeInput ? "none" : "block" }}>
                                                {getFieldDecorator('huongdanvien', {
                                                    initialValue: unit.Huongdanvien
                                                })(
                                                    <Input type="number" min="0" style={{ width: "100%", color: "rgba(0, 0, 0, 0.6)", backgroundColor: "white", height: 30 }} disabled={changeInput} />
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="unit-div-infor">
                                        <div className="unit-div1-infor">
                                            <span className="unit-span-infor">Huấn luyện viên</span>
                                        </div>
                                        <div className="unit-div2-infor">
                                            <div style={{ display: changeInput ? "flex" : "none", justifyContent: "center" }}>
                                                <label className="label-value-s" >{unit.Huanluyenvien}</label>
                                            </div>
                                            <div style={{ display: changeInput ? "none" : "block" }}>
                                                {getFieldDecorator('huanluyenvien', {
                                                    initialValue: unit.Huanluyenvien
                                                })(
                                                    <Input type="number" min="0" style={{ width: "100%", color: "rgba(0, 0, 0, 0.6)", backgroundColor: "white", height: 30 }} disabled={changeInput} />
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="unit-div-infor">
                                        <div className="unit-div1-infor">
                                            <span className="unit-span-infor">Cán bộ</span>
                                        </div>
                                        <div className="unit-div2-infor">
                                            <div style={{ display: changeInput ? "flex" : "none", justifyContent: "center" }}>
                                                <label className="label-value-s" >{unit.Canbotangcuong}</label>
                                            </div>
                                            <div style={{ display: changeInput ? "none" : "block" }}>
                                                {getFieldDecorator('canbotangcuong', {
                                                    initialValue: unit.Canbotangcuong
                                                })(
                                                    <Input type="number" min="0" style={{ width: "100%", color: "rgba(0, 0, 0, 0.6)", backgroundColor: "white", height: 30 }} disabled={changeInput} />
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row-unit-s">
                                <div className="label-unit-s">Kết quả hoạt động:</div>
                                <div style={{ display: changeInput ? "block" : "none" }}>
                                    <label className="label-value-s" >{unit.Ketquahoatdong}</label>
                                </div>
                                <div style={{ display: changeInput ? "none" : "block" }}>
                                    {getFieldDecorator('ketquahoatdong', {
                                        initialValue: unit.Ketquahoatdong
                                    })(
                                        <Input type="text" className="input-unit-s" disabled={changeInput} />
                                    )}
                                </div>
                            </div>
                            <div className="row-unit-s">
                                <div className="label-unit-s">Điểm hiến máu thường xuyên tổ chức:</div>
                                <div style={{ display: changeInput ? "block" : "none" }}>
                                    <label className="label-value-s" >{unit.Diemhienmau}</label>
                                </div>
                                <div style={{ display: changeInput ? "none" : "block" }}>
                                    {getFieldDecorator('diemhienmau', {
                                        initialValue: unit.Diemhienmau
                                    })(
                                        <Input type="text" className="input-unit-s" disabled={changeInput} />
                                    )}
                                </div>
                            </div>
                        </Form.Item>
                    </div>
                    <div className="ButtonForMobileAdd">
                        <Button className="buttonDisable1" id='roleedit' onClick={() => setchangeInput(false) && roles}>Sửa</Button>
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