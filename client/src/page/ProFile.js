import React, { useContext, useEffect, useState } from 'react'
import InformationUser from '../Component/InformationUser'
// import { formChildren } from '../Component/FormChildren'
// import { formChildrenRight } from '../Component/FormChildrenRight'
import HomepageContext from "../context/HomepageContext"
import { Select, Form, notification, Input, Button } from 'antd'
import '../css/profile.css'
import { getUserProfile, updateUserProfile, uploadAvatar } from '../api/base/profile'
// import TextArea from 'antd/lib/input/TextArea'

function ProFileLeft(props) {
    const { getFieldDecorator } = props.form
    const { nameMap, setNameMap, setLoading } = useContext(HomepageContext)
    const [user, setUser] = useState([])
    const [file, setFile] = useState({})
    const fetchData = async () => {
        setLoading(true)
        const result = await getUserProfile()
        setLoading(false)
        if (result) {
            if (result.success) {
                setUser(result.data.data)
            }
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        props.form.validateFields(async (err, values) => {
            if (!err) {
                setLoading(true)
                await uploadAvatar(file)
                const {success} = await updateUserProfile(values)
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
        setNameMap({
            ['/']: 'Trang chủ',
            ['/profile']: 'Hồ sơ cá nhân'
        })
    }, [])

    const style = {
        textAlign: 'end',
        width: '32%'
    }

    //nhóm máu
    const { Option } = Select;
    return (
        <div>
            <Form onSubmit={handleSubmit} className="row">
                <div className="profileForMobile">
                    <InformationUser image={user.Image} file={file} setFile={setFile} sttv={user.Sothethanhvien} hovaten={user.Hovaten} ngaysinh={user.Ngaysinh} gioitinh={user.Gioitinh} image={user.Image} />
                    <Form.Item action="" method="post" className="information" autocomplete="on">
                        <fieldset>
                            <legend className="legendA">Thông tin cơ bản</legend>
                            <div>
                                <label style={style} className="label_information">CMND/CCCD/HC: </label>
                                {getFieldDecorator('cmtorhc', {
                                    initialValue: user.CMTorHC
                                })(
                                    <Input type="text" className="input_information" />
                                )}
                                <label style={style} className="label_information">Ngày cấp: </label>
                                {getFieldDecorator('ngaycap', {
                                    initialValue: user.Ngaycap
                                })(
                                    <Input type="date" className="input_information" />
                                )}
                                <label style={style} className="label_information">Nơi cấp: </label>
                                {getFieldDecorator('noicap', {
                                    initialValue: user.Noicap
                                })(
                                    <Input type="text" className="input_information" />
                                )}
                                <label style={style} className="label_information">Điện thoại: </label>
                                {getFieldDecorator('dienthoai', {
                                    initialValue: user.Dienthoai
                                })(
                                    <Input type="text" className="input_information" />
                                )}
                                <label style={style} className="label_information">Link Facebook: </label>
                                {getFieldDecorator('facebook', {
                                    initialValue: user.Facebook
                                })(
                                    <Input type="text" className="input_information" />
                                )}
                                <label style={style} className="label_information">Địa chỉ Email: </label>
                                {getFieldDecorator('email', {
                                    initialValue: user.Email
                                })(
                                    <Input type="text" className="input_information" />
                                )}
                            </div>
                        </fieldset>
                    </Form.Item>
                    <Form.Item action="" method="post" className="information" autocomplete="on">
                        <fieldset>
                            <legend className="legendA">Hiến máu</legend>
                            <label style={style} className="label_information">Số lần hiến máu: </label>
                            {getFieldDecorator('solanhm', {
                                initialValue: user.SolanHM
                            })(
                                <Input type="text" className="input_information" />
                            )}
                            <label style={style} className="label_information">Nhóm máu: </label>
                            {getFieldDecorator('nhommau', {
                                initialValue: user.Nhommau ? user.Nhommau : null
                            })(
                                <Select style={{ marginLeft: 5, height: 30, width: 120, marginTop:5 }}>
                                    <Option style={{ textAlign: "center" }} value="O">O</Option>
                                    <Option style={{ textAlign: "center" }} value="A">A</Option>
                                    <Option style={{ textAlign: "center" }} value="B">B</Option>
                                    <Option style={{ textAlign: "center" }} value="AB">AB</Option>
                                </Select>
                            )} <br />
                            <label style={style} className="label_information">Rh(D): </label>
                            {getFieldDecorator('rh', {
                                initialValue: user.Rh ? user.Rh : null
                            })(
                                <Select style={{ marginLeft: 5, height: 30, width: 120, marginTop:5 }}>
                                    <Option style={{ textAlign: "center" }} value={true}>+</Option>
                                    <Option style={{ textAlign: "center" }} value={false}>-</Option>
                                </Select>
                            )}
                        </fieldset>
                    </Form.Item>
                </div>
                <div className="profileForMobile">
                    <Form.Item action="" method="post" className="information" autocomplete="on">
                        <fieldset>
                            <legend className="legendA">Đơn vị công tác</legend>
                            <div>
                                <label style={style} className="label_information">Đơn vị học tập/Công tác: </label>
                                {getFieldDecorator('donvi', {
                                    initialValue: user.Donvi
                                })(
                                    <Input type="text" className="input_information" />
                                )}
                                <label style={style} className="label_information">Khoa/Đơn vị cụ thể: </label>
                                {getFieldDecorator('donvicuthe', {
                                    initialValue: user.Donvicuthe
                                })(
                                    <Input type="text" className="input_information" />
                                )}
                                <label style={style} className="label_information">Đoàn viên/Đảng viên: </label>
                                {getFieldDecorator('doanviendangvien', {
                                    initialValue: user.DoanvienDangvien
                                })(
                                    <Input type="text" className="input_information" />
                                )}
                                <label style={style} className="label_information">Trình độ học vấn: </label>
                                {getFieldDecorator('trinhdohocvan', {
                                    initialValue: user.Trinhdohocvan
                                })(
                                    <Input type="text" className="input_information" />
                                )}
                            </div>
                        </fieldset>
                        <fieldset>
                            <legend className="legendA">Địa chỉ</legend>
                            <div>
                                <label style={style} className="label_information">Quê quán: </label>
                                {getFieldDecorator('quequan', {
                                    initialValue: user.Quequan
                                })(
                                    <Input type="text" className="input_information" />
                                )}
                                <label style={style} className="label_information">Nơi ở hiện nay: </label>
                                {getFieldDecorator('diachill', {
                                    initialValue: user.DiachiLL
                                })(
                                    <Input type="text" className="input_information" />
                                )}
                            </div>
                        </fieldset>
                        <fieldset>
                            <legend className="legendA">Liên hệ người thân</legend>
                            <div>
                                <label style={style} className="label_information">Địa chỉ liên hệ: </label>
                                {getFieldDecorator('thongtinlienhegd', {
                                    initialValue: user.ThongtinlienheGD
                                })(
                                    <Input type="text" className="input_information" />
                                )}
                            </div>
                        </fieldset>
                    </Form.Item>
                    <Form.Item action="" method="post" className="information" autocomplete="on" style={{ heigh: 'auto' }}>
                        <fieldset>
                            <legend className="legendA">Ghi chú khác</legend>
                            <label style={style} className="label_information">Ghi chú: </label>
                            {getFieldDecorator('ghichukhac', {
                                initialValue: user.Ghichukhac
                            })(
                                <Input type="text" className="input_information" />
                            )}
                        </fieldset>
                    </Form.Item>
                    <div className="DIVprofile">
                        {/* <a className="doiMK" data-toggle="modal" data-target="#modalMK">Đổi mật khẩu</a> */}
                        <Form.Item>
                            <Button className="buttonProfile" type="primary" htmlType="submit">Submit</Button>
                        </Form.Item>
                        {/* <button className="buttonProfile">Hủy</button> */}
                    </div>

                </div>
            </Form>
        </div>// row

    )
}
export default Form.create()(ProFileLeft)