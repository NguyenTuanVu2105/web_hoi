import React, { useEffect, useState } from 'react'
import { changepassword } from '../api/base/auth';
import { notification} from 'antd';
import { logout } from '../api/auth/auth';
const ChangePass = () => {
    const [oldpassword, setoldpassword] = useState('')
    const [newpassword, setnewpassword] = useState('')
    const [passwordconfirm, setpasswordconfirm] = useState('')

    const handlePassword = async () => {
        const { success } = await changepassword({ password: oldpassword, newpassword: newpassword, passwordConfirm: passwordconfirm })
        if (success) {
            notification['success']({
                message: 'Cập nhật mật khẩu thành công ',
            }, logout())
        }
        else {
            notification['error']({
                message: 'Sai mật khẩu hoặc mật khẩu xác nhận. Vui long nhập lại',
            })
        }
    }
    return (
        <div className="modal fade" id="modalMK" role="dialog">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h4>Đổi mật khẩu</h4>
                        <button type="button" className="close" data-dismiss="modal">&times;</button>
                    </div>
                    <div className="modal-body">
                        <form>
                            <input type="password" className="changePass" placeholder="Mật khẩu cũ" value={oldpassword} onChange={(e) => setoldpassword(e.target.value)} />
                            <input type="password" className="changePass" placeholder="Mật khẩu mới" value={newpassword} onChange={(e) => setnewpassword(e.target.value)} />
                            <input type="password" className="changePass" placeholder="Xác nhận lại mật khẩu" value={passwordconfirm} onChange={(e) => setpasswordconfirm(e.target.value)} />
                        </form>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="footerButton" onClick={handlePassword}>Lưu thay đổi</button>

                    </div>
                </div>
            </div>
        </div>
    )
}
export default ChangePass;