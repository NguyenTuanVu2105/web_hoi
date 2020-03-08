import React, { useEffect, useState } from 'react'
import { notification} from 'antd';
import { renderRoutes } from 'react-router-config'
import { Link, withRouter } from "react-router-dom";
import NavBar from '../Component/NavBar';
import { Breadcrumb, Input } from "antd";
import _ from 'lodash';
import HomepageContext from "../context/HomepageContext";
import { checkAuth, logout } from '../api/auth/auth';
import { changepassword } from '../api/base/auth';
import Slideshow from '../Component/slideshowHeader';
import Loading from '../Component/Spin';

function HomePage(props) {
    const [nameMap, setNameMap] = useState({})
    if (!checkAuth()) {
        props.history.push('/login')
    }

    const breadcrumb = _.map(nameMap, (name, url) => {
        return (
            <Breadcrumb.Item key={url}>
                <a href={url}>{name}</a>
            </Breadcrumb.Item>
        )
    })
    const [isLoading, setLoading] = useState(false)
    const [oldpassword, setoldpassword] = useState('')
    const [newpassword, setnewpassword] = useState('')
    const [passwordconfirm, setpasswordconfirm] = useState('')

    const handlePassword = async () => {
      const { success } = await changepassword({password : oldpassword, newpassword: newpassword,passwordConfirm: passwordconfirm})
      if (success) {
        notification['success']({
          message: 'Cập nhật mật khẩu thành công ',  
        }, logout())
      }
      else{
        notification['error']({
          message: 'Sai mật khẩu hoặc mật khẩu xác nhận. Vui long nhập lại',
        })
      }
    }

    return (
        <div className="container-fluid">            
            <div className="row homePageBlood">
            {isLoading && <Loading></Loading>}
                <div className="menu-left">
                    <NavBar />
                </div>
                <HomepageContext.Provider value={{
                    nameMap,
                    setNameMap,
                    isLoading,
                    setLoading
                }}>
                    <div className="content-right" >
                        <Slideshow/>
                        <Breadcrumb style={{ paddingLeft: 25, paddingTop: 10 }}>{breadcrumb}</Breadcrumb>
                        {renderRoutes(props.route.routes)}
                        <div >
                            <div className="modal fade" id="modalMK" role="dialog">
                                <div className="modal-dialog">
                                    <div className="modal-content">
                                        <div className="modal-header">
                                            <h4>Đổi mật khẩu</h4>
                                            <button type="button" className="close" data-dismiss="modal">&times;</button>
                                        </div>
                                        <div className="modal-body">
                                            <form>
                                                <input type="password" className="changePass" placeholder="Mật khẩu cũ"  value={oldpassword} onChange={(e) => setoldpassword(e.target.value)} />
                                                <input type="password" className="changePass" placeholder="Mật khẩu mới"  value={newpassword} onChange={(e) => setnewpassword(e.target.value)}/>
                                                <input type="password" className="changePass" placeholder="Xác nhận lại mật khẩu"  value={passwordconfirm} onChange={(e) => setpasswordconfirm(e.target.value)}/>
                                            </form>
                                        </div>
                                        <div className="modal-footer">
                                            <button type="button" className="footerButton" data-dismiss="modal" onClick={handlePassword}>Lưu thay đổi</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </HomepageContext.Provider>
            </div>
        </div>
    )
}

export default withRouter(HomePage)
