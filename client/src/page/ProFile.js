import React, { Component, useContext, useEffect, useState } from 'react'
import InformationUser from '../Component/InformationUser'
import { formChildren } from '../Component/FormChildren'
import { formChildrenRight } from '../Component/FormChildrenRight'
import HomepageContext from "../context/HomepageContext"
import { Select, Form, notification } from 'antd'
import '../css/profile.css'
import { getUserProfile, updateUserProfile } from '../api/base/profile'

function ProFileLeft(props) {
    const { getFieldDecorator } = props.form
    const { nameMap, setNameMap } = useContext(HomepageContext)
    const [user, setUser] = useState([])

    const fetchData = async () => {
        const result = await getUserProfile()
        if (result) {
            if (result.success) {
                setUser(result.data)
            }
        }
    }

    const handleSubmit = e => {
        e.preventDefault()
        props.form.validateFields((err, values) => {
          if (!err) {
            updateUserProfile(values)
            notification['success']({
              message: 'Cập nhật thông tin thành công!',
            })
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
        <div className="row">
            <div className="profileForMobile">
                <InformationUser />
                <Form onChange={handleSubmit} action="" method="post" className="information" autocomplete="on">
                    <fieldset>
                        <legend>Thông tin cơ bản</legend>
                        <div>
                            <label for="" style={style} className="label_information">CMND/CCCD/HC: </label>
                            <input type="text" defaultValue={user.CMTorHC} className="input_information" />
                            <label for="" style={style} className="label_information">Ngày cấp: </label>
                            <input type="text" defaultValue={user.Ngaycap} className="input_information" />
                            <label for="" style={style} className="label_information">Nơi cấp: </label>
                            <input type="text" defaultValue={user.Noicap} className="input_information" />
                            <label for="" style={style} className="label_information">Điện thoại: </label>
                            <input type="text" defaultValue={user.Dienthoai} className="input_information" />
                            <label for="" style={style} className="label_information">Link Facebook: </label>
                            <input type="text" defaultValue={user.Facebook} className="input_information" />
                            <label for="" style={style} className="label_information">Địa chỉ Email: </label>
                            <input type="text" defaultValue={user.Email} className="input_information" />
                        </div>
                    </fieldset>
                </Form>
                <Form onChange={handleSubmit} action="" method="post" className="information" autocomplete="on">
                    <fieldset>
                        <legend>Hiến máu</legend>
                        <label for="" style={style} className="label_information">Số lần hiến máu: </label>
                        <input type="number" defaultValue={user.SolanHM} className="input_information" />
                        <label for="" style={style} className="label_information">Nhóm máu: </label>
                        <Select defaultValue="disabled" style={{ marginLeft: 5, height: 30, width: 120 }}>
                            <Option style={{ textAlign: "center" }} value="disabled" disabled>{user.Nhommau}</Option>
                            <Option style={{ textAlign: "center" }} value="1">O</Option>
                            <Option style={{ textAlign: "center" }} value="2">A</Option>
                            <Option style={{ textAlign: "center" }} value="3">B</Option>
                            <Option style={{ textAlign: "center" }} value="4">AB</Option>
                        </Select><br />
                        <label for="" style={style} className="label_information">Rh(D): </label>
                        <Select defaultValue="disabled" style={{ marginLeft: 5, height: 30, width: 120 }}>
                            <Option style={{ textAlign: "center" }} value="disabled" disabled>{user.Rh ? "+" : "-"}</Option>
                            <Option style={{ textAlign: "center" }} value="1">+</Option>
                            <Option style={{ textAlign: "center" }} value="2">-</Option>
                        </Select>
                    </fieldset>
                </Form>
            </div>
            <div className="profileForMobile">
                <Form onChange={handleSubmit} action="" method="post" className="information" autocomplete="on">
                    <fieldset>
                        <legend>Đơn vị công tác</legend>
                        <div>
                            <label for="" style={style} className="label_information">Đơn vị học tập/Công tác: </label>
                            <input type="textarea" defaultValue={user.Donvi} className="input_information" />
                            <label for="" style={style} className="label_information">Khoa/Đơn vị cụ thể: </label>
                            <input type="textarea" defaultValue={user.Donvicuthe} className="input_information" />
                            <label for="" style={style} className="label_information">Đoàn viên/Đảng viên: </label>
                            <input type="textarea" defaultValue={user.DoanvienDangvien} className="input_information" />
                            <label for="" style={style} className="label_information">Trình độ học vấn: </label>
                            <input type="textarea" defaultValue={user.Trinhdohocvan} className="input_information" />
                        </div>
                    </fieldset>
                    <fieldset>
                        <legend>Địa chỉ</legend>
                        <div>
                            <label for="" style={style} className="label_information">Quê quán: </label>
                            <input type="textarea" defaultValue={user.Quequan} title={user.Quequan} className="input_information" />
                            <label for="" style={style} className="label_information">Nơi ở hiện nay: </label>
                            <input type="textarea" defaultValue={user.DiachiLL} title={user.DiachiLL} className="input_information" />
                        </div>
                    </fieldset>
                    <fieldset>
                        <legend>Liên hệ người thân</legend>
                        <div>
                            <label for="" style={style} className="label_information">Địa chỉ liên hệ: </label>
                            <input type="textarea" defaultValue={user.ThongtinlienheGD} title={user.ThongtinlienheGD} className="input_information" />
                        </div>
                    </fieldset>
                </Form>
                <Form onChange={handleSubmit} action="" method="post" className="information" autocomplete="on" style={{ heigh: 'auto' }}>
                    <fieldset>
                        <legend>Ghi chú khác</legend>
                        <label for="" style={style} className="label_information">Ghi chú: </label>
                        <textarea className="input_information" defaultValue={user.Ghichu} title={user.Ghichu} style={{ height: 26 }} cols="50" />
                    </fieldset>
                </Form>
                <div className="DIVprofile">
                    <a className="doiMK" data-toggle="modal" data-target="#modalMK">Đổi mật khẩu</a>
                    <button className="buttonProfile">Submit</button>
                    <button className="buttonProfile">Hủy</button>
                </div>

            </div>
            <div >      
                <div className="modal fade" id="modalMK" role="dialog">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h4>Đổi mật khẩu</h4>
                                <button type="button" className="close" data-dismiss="modal">&times;</button>
                            </div>
                            <div class="modal-body">
                                <form>
                                    <input type="text" className="changePass" placeholder="Mật khẩu cũ"/>
                                    <input type="text" className="changePass" placeholder="Mật khẩu mới"/>
                                    <input type="text" className="changePass" placeholder="Xác nhận lại mật khẩu"/>
                                </form>
                            </div>
                            <div class="modal-footer">
                                <button type="button" className="footerButton" data-dismiss="modal">Lưu thay đổi</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>// row

    )
}
export default Form.create()(ProFileLeft)