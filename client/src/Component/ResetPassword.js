import React, { useContext, useState } from 'react'
import { notification} from 'antd';
import '../css/ResetPassword.css'
import { resetpassword } from '../api/base/auth';

const ResetPassword = () => {

  const [password, setpassword] = useState('')
  const [confirmpassword, setconfirmpassword] = useState('')
  const handlePassword = async () => {
    const { success, data } = await resetpassword({newpassword: password,passwordConfirm: confirmpassword})
    if (success) {
      notification['success']({
        message: 'Cập nhật mật khẩu thành công ',
      })
    }
    else{
      notification['error']({
        message: 'Mật khẩu xác nhận không chính xác. Vui lòng nhập lại',
      })
    }
  }
  return (
    <div className="Body">
          <form className="borderContent">           
            <div style={{ width: 240, margin:'0 auto'}}>
            <div className="logomauI"/>
            <input className="password" type="password" placeholder="New Password" value={password} onChange={(e) => setpassword(e.target.value)}/><br/>
            <input className="password" type="password" placeholder="Confirm Password"value={confirmpassword} onChange={(e) => setconfirmpassword(e.target.value)}/><br/>
            <button className="button-submit" onClick={handlePassword}>Lưu thay đổi</button>
            </div>            
          </form>
    </div>
  )
}

export default ResetPassword;

