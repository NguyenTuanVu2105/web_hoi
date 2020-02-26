import React, { Component, useEffect, useState } from 'react'
// import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css'; 
import '../css/InformationUser.css'
import Avatar from '../Component/UpdateImg'
import { Radio, Form } from 'antd'

const InformationUser = (props)=>{
    const {sttv, hovaten, ngaysinh, gioitinh} = props
    const style1 = {
        fontWeight: "100",
        color: "black",
        fontSize: "15px"
    }

    return (
        <div>
            {
                <Form action="" method="post" className="information">
                <fieldset>
                    <legend className="legendA">Thông tin cá nhân</legend>
                    <div class="row">
                        <div className="avatarForMobile" id="image_infor"  style={{paddingLeft: '8%'}}>
                            <Avatar/>
                        </div>
                        <div class="informationUserForMobile">
                            <label for="" class="label_information2">Mã thành viên: </label> {sttv}<br/>
                            <label for="" class="label_information2">Họ và tên: </label> {hovaten}<br/>
                            <label for="" class="label_information2">Ngày sinh: </label>
                            <input type="date" class="input_information2" defaultValue={ngaysinh} disabled={true}/><br/>
                            <label for="" class="label_information2">Giới tính: </label>
                            <Radio.Group disabled={true} value={gioitinh ? 1 : 2} name="radiogroup">
                                <Radio value={1}  style = {{marginLeft: '5px'}} class="radio_information"> Nam </Radio>
                                <Radio value={2}  class="radio_information"> Nữ </Radio>
                            </Radio.Group>
                        </div>
                    </div>
                </fieldset>       
            </Form>
            }
        </div>
    )
}
export default InformationUser;