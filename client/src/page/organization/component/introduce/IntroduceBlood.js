import React, { useState, useContext, useEffect } from 'react'
import HomepageContext from "../../../../context/HomepageContext";
import { introduleBloodList } from './contant/introduleBloodList'
import './introduleBlood.scss'
import { getUser, checkAuth } from '../../../../api/auth/auth'
import { Button , Input, Form, notification } from 'antd'
import { getAssociation, editAssociation } from '../../../../api/base/association'
import IntroUnit from './component/IntroUnit'

const IntroduceBlood = (props) => {
    const { getFieldDecorator } = props.form
    const [changeInput, setchangeInput] = useState(true)
    const { setNameMap, setLoading } = useContext(HomepageContext)
    const [association, setAssociation] = useState([])
    
    const handleUpdate = (e) => {
        e.preventDefault()
        props.form.validateFields(async (err, values) => {
            if (!err) {
                setLoading(true)
                const {success} = await editAssociation(values)
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
    const handleCa = () => {
        window.confirm('Bạn có chắc muốn Hủy thay đổi!');
        setchangeInput(true)
    }
    const fetchData = async () => {
        const result = await getAssociation()
        if (result.success) {
            if (result.data.success) {
                setAssociation(result.data.message)
            } else {
                console.log(result.data.message)
            }
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
            ['/gioi-thieu-ve-hoi']: 'Giới thiệu về Hội'
        })
    }, [])
    const [visibleIntro, setVisibleIntro] = useState(true)

    return (
        <div className="para-container-intro-s">
            <div className="header-introdule-blood-s">
                <div className="red-left-header" />
                <div className="content-header">
                    <div style={{ marginRight: 10, fontWeight: 500, color: visibleIntro ? "#ff4d4d" : "rgba(0, 0, 0, 0.65)" }} onClick={() => setVisibleIntro(true)}><a>Hội máu Hà Nội</a></div>
                    <div style={{ marginRight: 10, fontWeight: 500, color: visibleIntro ? "rgba(0, 0, 0, 0.65)" : "#ff4d4d" }} onClick={() => setVisibleIntro(false)}><a>Hoạt động và khen thưởng</a></div>
                </div>
            </div>
            {/* Hội máu Hà Nội */}
            <Form onSubmit={handleUpdate}>
                <div className="body-intro-blood-s" style={{ display: visibleIntro ? "flex" : "none" }}>
                    <div className="red-left-body" />
                    <div className="content-body-intro">
                        <div style={{ width: "100%", display: 'flex', flexWrap: "wrap" }}>
                            <div className="logo-intro-reponsive">
                                <img className="logo-intro-img-rp" src="./img/navbar/logomau.png" alt="logo" />
                                <div className="intro-tag-a-rp"><a className="h4-a-IB" href='/gioi-thieu-ve-hoi-chi-tiet'>Hội máu Hà Nội</a></div>
                            </div>
                            <div className="thuong-truc-s">
                                <h6 style={{ color: '#ff4d4d' }}>Thường trực ủy ban Hội</h6>
                                <div>
                                    <div className="list-name-intro">
                                        <span className="span-label">Chủ tịch Hội:</span>
                                        <span style={{ width: "auto", height: 30, lineHeight: '30px' }}>
                                        <Form.Item>
                                            {getFieldDecorator('Chutichhoi', {
                                                initialValue: association.Chutichhoi
                                            })(
                                                <Input type="text" style={{ width: "60%", backgroundColor: "white", border: "none", borderBottom: "1px solid grey", borderRadius: 0, marginBottom: 2 }} />
                                            )}
                                        </Form.Item>
                                        </span>
                                    </div>
                                    <div className="list-name-intro">
                                        <span className="span-label">Phó chủ tịch Hội:</span>
                                        <span style={{ width: "auto", height: 30, lineHeight: '30px' }}>
                                        <Form.Item>
                                            {getFieldDecorator('Phochutich_1', {
                                                initialValue: association.Phochutich_1
                                            })(
                                                <Input type="text" style={{ width: "60%", backgroundColor: "white", border: "none", borderBottom: "1px solid grey", borderRadius: 0, marginBottom: 2 }} />
                                            )}
                                        </Form.Item>
                                        </span>
                                    </div>
                                    <div className="list-name-intro">
                                        <span className="span-label">Phó chủ tịch Hội:</span>
                                        <span style={{ width: "auto", height: 30, lineHeight: '30px' }}>
                                        <Form.Item>
                                            {getFieldDecorator('Phochutich_2', {
                                                initialValue: association.Phochutich_2
                                            })(
                                                <Input type="text" style={{ width: "60%", backgroundColor: "white", border: "none", borderBottom: "1px solid grey", borderRadius: 0, marginBottom: 2 }} />
                                            )}
                                        </Form.Item>
                                        </span>
                                    </div>
                                    <div className="list-name-intro">
                                        <span className="span-label">Phó chủ tịch Hội:</span>
                                        <span style={{ width: "auto", height: 30, lineHeight: '30px' }}>
                                        <Form.Item>
                                            {getFieldDecorator('Phochutich_3', {
                                                initialValue: association.Phochutich_3
                                            })(
                                                <Input type="text" style={{ width: "60%", backgroundColor: "white", border: "none", borderBottom: "1px solid grey", borderRadius: 0, marginBottom: 2 }} />
                                            )}
                                        </Form.Item>
                                        </span>
                                    </div>
                                    <div className="list-name-intro">
                                        <span className="span-label">Phó chủ tịch Hội:</span>
                                        <span style={{ width: "auto", height: 30, lineHeight: '30px' }}>
                                        <Form.Item>
                                            {getFieldDecorator('Phochutich_4', {
                                                initialValue: association.Phochutich_4
                                            })(
                                                <Input type="text" style={{ width: "60%", backgroundColor: "white", border: "none", borderBottom: "1px solid grey", borderRadius: 0, marginBottom: 2 }} />
                                            )}
                                        </Form.Item>
                                        </span>
                                    </div>
                                    <div className="list-name-intro">
                                        <span className="span-label">Ủy viên Ban thường trực:</span>
                                        <span style={{ width: "auto", height: 30, lineHeight: '30px' }}>
                                        <Form.Item>
                                            {getFieldDecorator('Uyvien_1', {
                                                initialValue: association.Uyvien_1
                                            })(
                                                <Input type="text" style={{ width: "60%", backgroundColor: "white", border: "none", borderBottom: "1px solid grey", borderRadius: 0, marginBottom: 2 }} />
                                            )}
                                        </Form.Item>
                                        </span>
                                    </div>
                                    <div className="list-name-intro">
                                        <span className="span-label">Ủy viên Ban thường trực:</span>
                                        <span style={{ width: "auto", height: 30, lineHeight: '30px' }}>
                                        <Form.Item>
                                            {getFieldDecorator('Uyvien_2', {
                                                initialValue: association.Uyvien_2
                                            })(
                                                <Input type="text" style={{ width: "60%", backgroundColor: "white", border: "none", borderBottom: "1px solid grey", borderRadius: 0, marginBottom: 2 }} />
                                            )}
                                        </Form.Item>
                                        </span>
                                    </div>
                                </div>
                                <div>
                                    <span className="span-label">Năm thành lập: </span>
                                    <span style={{ width: "auto", height: 30, lineHeight: '30px' }}>
                                        <Form.Item>
                                            {getFieldDecorator('Namthanhlap', {
                                                initialValue: association.Namthanhlap
                                            })(
                                                <Input type="text" style={{ width: "60%", backgroundColor: "white", border: "none", borderBottom: "1px solid grey", borderRadius: 0, marginBottom: 2 }} />
                                            )}
                                        </Form.Item>
                                    </span>
                                </div>
                                <div>
                                    <span className="span-label">Ngày truyền thống: </span>
                                    <span style={{ width: "auto", height: 30, lineHeight: '30px' }}>
                                        <Form.Item>
                                            {getFieldDecorator('Ngaytruyenthong', {
                                                initialValue: association.Ngaytruyenthong
                                            })(
                                                <Input type="text" style={{ width: "60%", backgroundColor: "white", border: "none", borderBottom: "1px solid grey", borderRadius: 0, marginBottom: 2 }} />
                                            )}
                                        </Form.Item>
                                    </span>
                                </div>
                                <div>
                                    <span className="span-label">Tổng số thành viên: </span>
                                </div>
                            </div>
                            <div className="logo-intro">
                                <img className="logo-intro-img" src="./img/navbar/logomau.png" alt="logo" />
                                <div className="intro-tag-a"><a className="h4-a-IB" href='/gioi-thieu-ve-hoi-chi-tiet'>Hội máu Hà Nội</a></div>
                            </div>
                        </div>
                        <div style={{ width: "100%" }}>
                            <div className="unit-table-infor" style={{ width: "100%" }}>
                                <div className="unit-column-infor">
                                    <div className="unit-div-infor">
                                        <div className="unit-div1-infor">
                                            <span className="unit-span-infor">Cảm tình viên</span>
                                        </div>
                                        <div className="unit-div2-infor">

                                            <Form.Item>
                                                {getFieldDecorator('Camtinhvien', {
                                                initialValue: association.Camtinhvien
                                            })(
                                                    <Input type="text" style={{ width: "60%", backgroundColor: "white", border: "none", borderBottom: "1px solid grey", borderRadius: 0, marginBottom: 2 }} />
                                                )}
                                            </Form.Item>

                                        </div>
                                    </div>
                                    <div className="unit-div-infor">
                                        <div className="unit-div1-infor">
                                            <span className="unit-span-infor">Tình nguyện viên</span>
                                        </div>
                                        <div className="unit-div2-infor">

                                            <Form.Item>
                                                {getFieldDecorator('TNV', {
                                                initialValue: association.Tinhnguyenvien
                                            })(
                                                    <Input type="text" style={{ width: "60%", backgroundColor: "white", border: "none", borderBottom: "1px solid grey", borderRadius: 0, marginBottom: 2 }} />
                                                )}
                                            </Form.Item>

                                        </div>
                                    </div>
                                    <div className="unit-div-infor">
                                        <div className="unit-div1-infor">
                                            <span className="unit-span-infor">Hội viên</span>
                                        </div>
                                        <div className="unit-div2-infor">

                                            <Form.Item>
                                                {getFieldDecorator('Hoivien', {
                                                initialValue: association.Hoivien
                                            })(
                                                    <Input type="text" style={{ width: "60%", backgroundColor: "white", border: "none", borderBottom: "1px solid grey", borderRadius: 0, marginBottom: 2 }} />
                                                )}
                                            </Form.Item>

                                        </div>
                                    </div>
                                </div>
                                {/*unit-column-infor*/}

                                <div className="unit-column-infor">
                                    <div className="unit-div-infor">
                                        <div className="unit-div1-infor">
                                            <span className="unit-span-infor">Hướng dẫn viên/Cán bộ tăng cường</span>
                                        </div>
                                        <div className="unit-div2-infor">

                                            <Form.Item>
                                                {getFieldDecorator('Huongdanvien', {
                                                initialValue: association.Huongdanvien
                                            })(
                                                    <Input type="text" style={{ width: "60%", backgroundColor: "white", border: "none", borderBottom: "1px solid grey", borderRadius: 0, marginBottom: 2 }} />
                                                )}
                                            </Form.Item>

                                        </div>
                                    </div>
                                    <div className="unit-div-infor">
                                        <div className="unit-div1-infor">
                                            <span className="unit-span-infor">Huấn luyện viên</span>
                                        </div>
                                        <div className="unit-div2-infor">

                                            <Form.Item>
                                                {getFieldDecorator('Huanluyenvien', {
                                                initialValue: association.Huanluyenvien
                                            })(
                                                    <Input type="text" style={{ width: "60%", backgroundColor: "white", border: "none", borderBottom: "1px solid grey", borderRadius: 0, marginBottom: 2 }} />
                                                )}
                                            </Form.Item>

                                        </div>
                                    </div>
                                    <div className="unit-div-infor">
                                        <div className="unit-div1-infor">
                                            <span className="unit-span-infor">Cán bộ</span>
                                        </div>
                                        <div className="unit-div2-infor">

                                            <Form.Item>
                                                {getFieldDecorator('Canbotangcuong', {
                                                initialValue: association.Canbotangcuong
                                            })(
                                                    <Input type="text" style={{ width: "60%", backgroundColor: "white", border: "none", borderBottom: "1px solid grey", borderRadius: 0, marginBottom: 2 }} />
                                                )}
                                            </Form.Item>

                                        </div>
                                    </div>
                                </div>
                                {/*unit-column-infor*/}
                            </div>
                            {/*---------------unit-table-infor-------------------------*/}
                        </div>
                    </div>
                </div>
                {/* Hoạt động và khen thưởng */}
                <div className="body-intro-blood-s" style={{ display: visibleIntro ? "none" : "flex" }}>
                    <div className="red-left-body" />
                    <div className="content-body-intro">
                        <IntroUnit/>
                    </div>
                </div>
                {/* -------------------------- */}


                <div className="div-submit-IB">
                    <Form.Item>
                        <Button id="roleedit" className="button-dis-sub" onClick={() => setchangeInput(false) && roles}>Sửa</Button>
                        <Button id="rolesave" className="button-dis-sub" type="primary" htmlType="submit">Lưu thay đổi</Button>
                    </Form.Item>
                </div>
            </Form>
        </div>
    )
}

export default Form.create()(IntroduceBlood)