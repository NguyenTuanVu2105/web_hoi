import React, { Component } from 'react'
// import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css'; 
import '../css/InformationUser.css'
import Avatar from '../Component/UpdateImg'
const InformationUser = ()=>{
    
    const style1 = {
        fontWeight: "100",
        color: "black",
        fontSize: "15px"
    }
    return (
        <div>
            {
                <form action="" method="post" className="information">
                <fieldset>
                    <legend>Thông tin cá nhân:</legend>
                    <div class="row">
                        <div className="col-3" id="image_infor">
                            <Avatar/>
                        </div>
                        <div class="col-9">
                            <label for="" class="label_information2">Mã thành viên: </label><br/>
                            <label for="" class="label_information2">Họ và tên: </label><br/>
                            <label for="" class="label_information2">Ngày sinh: </label>
                            <input type="date" class="input_information2" /><br/>
                            <label for="" class="label_information2">Giới tính: </label>
                            <input id="men" style = {{marginLeft: '5px'}} type="radio" class="radio_information" name="gioitinh" value="Nam" />
                            <label for="men" className="sex">Nam </label>
                            <input id="women" type="radio" class="radio_information" name="gioitinh" value="Nữ" />
                            <label for="women" className="sex">Nữ </label><br/>
                            
                        </div>
                    </div>
                </fieldset>       
            </form>
            }
        </div>
    )
}
export default InformationUser;