import React, {Component, useContext, useEffect, useState} from 'react'
import InformationUser from '../Component/InformationUser'
import {formChildren} from '../Component/FormChildren'
import {formChildrenRight} from '../Component/FormChildrenRight'
import HomepageContext from "../context/HomepageContext"
import { Select} from 'antd'
import '../css/profile.css'
import { getUserProfile } from '../api/base/profile'

function ProFileLeft(props) {
    const {nameMap, setNameMap} = useContext(HomepageContext)
    const [user, setUser] = useState([])

    const fetchData = async () => {
        const result = await getUserProfile()
        if (result.success) {
            setUser(result.data)
        }
    }

    useEffect(() => {
        fetchData()
        setNameMap({
            ['/']: 'Trang chủ',
            ['/profile']: 'Hồ sơ cá nhân'
        })
    }, [])

    const style = {
        textAlign:'end',
        width : '32%'
    }

    //nhóm máu
    const { Option } = Select;
    return (
        <div className="row">
            <div className = "profileForMobile">
                <InformationUser />
                    <form action="" method="post" className="information"  autocomplete="on">
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
                    </form>
                <form action="" method="post" className="information"  autocomplete="on">
                    <fieldset>
                        <legend>Hiến máu:</legend>
                        <label for="" style={style} className="label_information">Số lần hiến máu: </label>
                        <input type="text" defaultValue={user.SolanHM} className="input_information" />
                        <label for="" style={style} className="label_information">Nhóm máu: </label>
                        <Select defaultValue="disabled" style={{marginLeft:5, height: 30,width:120}}>
                            <Option style={{ textAlign: "center" }} value="disabled" disabled>{user.Nhommau}</Option>
                            <Option style={{ textAlign: "center" }} value="1">O</Option>
                            <Option style={{ textAlign: "center" }} value="2">A</Option>
                            <Option style={{ textAlign: "center" }} value="3">B</Option>
                            <Option style={{ textAlign: "center" }} value="4">AB</Option>
                        </Select><br/>
                        <label for="" style={style} className="label_information">Rh(D): </label>
                        <Select defaultValue="disabled" style={{marginLeft:5, height: 30,width:120}}>
                            <Option style={{ textAlign: "center" }} value="disabled" disabled>{user.Rh ? "+" : "-"}</Option>
                            <Option style={{ textAlign: "center" }} value="1">+</Option>
                            <Option style={{ textAlign: "center" }} value="2">-</Option>
                        </Select>
                    </fieldset>
                </form>
            </div>
            <div className = "profileForMobile">
                <form action = "" method = "post" className = "information"  autocomplete="on">
                    <fieldset>
                        <legend>Đơn vị công tác:</legend>
                            <div>
                                <label for="" style={style} className="label_information">Đơn vị học tập/Công tác: </label>
                                <input type="textarea" defaultValue={user.Donvi} className="input_information" />
                                <label for="" style={style} className="label_information">Khoa/Đơn vị cụ thể: </label>
                                <input type="textarea" defaultValue={user.Donvicuthe}  className="input_information" />
                                <label for="" style={style} className="label_information">Lớp/Phòng ban: </label>
                                <input type="textarea" defaultValue={user.Donvicuthe} className="input_information" />
                                <label for="" style={style} className="label_information">Trình độ học vấn: </label>
                                <input type="textarea" defaultValue={user.Trinhdohocvan} className="input_information" />
                            </div>                                 
                    </fieldset>
                    <fieldset>
                        <legend>Địa chỉ:</legend>
                            <div>
                                <label for="" style={style} className="label_information">Quê quán: </label>
                                <input type="textarea" defaultValue={user.Quequan} className="input_information" />
                                <label for="" style={style} className="label_information">Nơi ở hiện nay: </label>
                                <input type="textarea" defaultValue={user.DiachiLL} className="input_information" />
                            </div>                                 
                    </fieldset>
                    <fieldset>
                        <legend>Liên hệ người thân:</legend>
                            <div>
                                <label for="" style={style} className="label_information">Địa chỉ liên hệ: </label>
                                <input type="textarea" defaultValue={user.ThongtinlienheGD} className="input_information" />
                            </div>                                 
                    </fieldset>
                </form>
                <form action="" method="post" className="information"  autocomplete="on">
                    <fieldset>
                        <legend>Ghi chú khác:</legend>
                        <label for="" style={style} className="label_information">Ghi chú: </label>
                        <textarea className="input_information" defaultValue={user.Ghichu} style={{height:26}} cols="50"/>                      
                    </fieldset>
                </form>
                <div className="DIVprofile">
                    <button className="buttonProfile">Submit</button>
                    <button className="buttonProfile">Hủy</button>
                </div>                
            </div>
        </div>// row

    )
}
export default ProFileLeft;