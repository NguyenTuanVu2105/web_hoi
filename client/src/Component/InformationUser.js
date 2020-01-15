import React, { Component } from 'react'
// import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css'; 

const InformationUser = ()=>{
    const style = {
        paddingLeft : "0",
        width: "0 !important"
    }
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
                    <legend>Thông tin cá nhân</legend>
                    <div class="row">
                        <div className="col-3" id="image_infor">
                            <input type="image" width="48" height="120" />
                            <a href="" style={{style1}}>Cập nhật ảnh</a>
                        </div>
                        <div class="col-9">
                            <label for="" class="label_information">Số thẻ thành viên: </label>
                            <input type="text" class="input_information" /><br/>
                            <label for="" class="label_information">Họ và tên: </label>
                            <input type="text" class="input_information" /><br/>
                            <label for="" class="label_information">Ngày sinh: </label>
                            <input type="date" class="input_information" /><br/>
                            <label for="" class="label_information">giới tính: </label>
                            <input id="man" type="radio" class="radio_information" name="gioitinh" value="Nam" />
                            <label for="man" style ={{style}} class="label_information">Nam </label>
                            <input id="woman" type="radio" class="radio_information" name="gioitinh" value="Nữ" />
                            <label for="woman" style ={{style}} class="label_information">Nữ </label><br/>
                            <label for="" class="label_information">CMND/CCCD/HC: </label>
                            <input type="text" class="input_information" />
                        </div>
                    </div>
                </fieldset>       
            </form>
            }
        </div>
    )
}
export default InformationUser;