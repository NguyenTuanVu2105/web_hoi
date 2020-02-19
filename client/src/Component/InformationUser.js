import React, { Component, useEffect, useState } from 'react'
// import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css'; 
import '../css/InformationUser.css'
import Avatar from '../Component/UpdateImg'
import { getUserProfile } from '../api/base/profile'
import { Radio } from 'antd'

const InformationUser = ()=>{
    
    const style1 = {
        fontWeight: "100",
        color: "black",
        fontSize: "15px"
    }

    const [user, setUser] = useState([])

    const fetchData = async () => {
        const result = await getUserProfile()
        if (result) {
            if (result.success) {
                setUser(result.data.data)
            }
        }
    }

    useEffect(() => {
        fetchData()
    }, [])

    return (
        <div>
            {
                <form action="" method="post" className="information">
                <fieldset>
                    <legend className="legendA">Thông tin cá nhân</legend>
                    <div class="row">
                        <div className="avatarForMobile" id="image_infor"  style={{paddingLeft: '8%'}}>
                            <Avatar/>
                        </div>
                        <div class="informationUserForMobile">
                            <label for="" class="label_information2">Mã thành viên: </label> {user.Sothethanhvien}<br/>
                            <label for="" class="label_information2">Họ và tên: </label> {user.Hovaten}<br/>
                            <label for="" class="label_information2">Ngày sinh: </label>
                            <input type="date" class="input_information2" defaultValue={user.Ngaysinh} disabled={true}/><br/>
                            <label for="" class="label_information2">Giới tính: </label>
                            <Radio.Group disabled={true} value={user.Gioitinh ? 1 : 2} name="radiogroup">
                                <Radio value={1}  style = {{marginLeft: '5px'}} class="radio_information"> Nam </Radio>
                                <Radio value={2}  class="radio_information"> Nữ </Radio>
                            </Radio.Group>
                        </div>
                    </div>
                </fieldset>       
            </form>
            }
        </div>
    )
}
export default InformationUser;