import React, { useContext, useState } from 'react'
import '../css/Login.css'
import { Form, Icon, Input, Alert, Button, notification,  Checkbox } from 'antd';
import AppContext from '../AppContext'
import { withRouter } from 'react-router-dom'
import { setUserCookies, getUser, checkAuth } from '../api/auth/auth'
import Loading from '../Component/Spin'
import { login,forgetpassword } from '../api/base/auth';

const LoginWrap = (props) => {
  const [idForget, setIdForget] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const context = useContext(AppContext)
  if (checkAuth()) {
    props.history.push('/')
  }
  const [message, setMessage] = useState('')
  const handleLogin = (data) => {
    
    if (data.Success) {
      setUserCookies(data.accessToken, data.message)
    }
    
  }
  const submitLogin = async (values) => {
    setIsLoading(true)
    const { success, data } = await login(values)
    if (success) {
      handleLogin(data)
      
      props.history.push('/')
    } else {
      setMessage(data)
    }
    setIsLoading(false)
  }
  const handleSubmit = e => {
    e.preventDefault();
    props.form.validateFields((err, values) => {
      if (!err) {
        submitLogin(values)
      }
    });
  }
  const handleForget = async () => {
    const { success, data } = await forgetpassword({username: idForget})
    if (success) {
      notification['success']({
        message: 'Vui lòng vào email ' + data.data + ' để nhận mật khẩu mới ',
      })
      
    }
  }
  const [open, setOpen] = useState(false)
  const { getFieldDecorator } = props.form;
  return (
    <div>
      <div style={{display:isLoading?'block':'none'}}>
        <Loading/>
      </div>
    <div className="login-wrap backgroundSignIn">
      
      <div className="backgroundOpacity"></div>

      <div className="setvisible" style={{ display: open ? 'block' : 'none' }}>
          <div className="row khungChua"> 
            <h4 style={{marginTop:20, marginLeft:15}}>Quên mật khẩu</h4>
            <button className="setClose" onClick={() => setOpen(false)}>&times;</button>            
          </div>
          <form>
            <input type="text" className="setEmail" placeholder="ID" value={idForget} onChange={(e) => setIdForget(e.target.value)} />
          </form>
          <div>
            <button type="button" style={{fontWeight:500}} className="Gui" onClick={handleForget}>Gửi</button>
          </div>
        </div>{/*setvisible*/}

      <Form onSubmit={handleSubmit} className="login-form">
        {message && <Alert style={{ marginBottom: '20px' }} message={message} type="error" />}
        <Form.Item>
          {getFieldDecorator('username', {
            rules: [{ required: true, message: 'Please input your username!' }],
          })(
            <Input
              prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
              placeholder="Username"
            />,
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator('password', {
            rules: [{ required: true, message: 'Please input your Password!' }],
          })(
            <Input
              prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
              type="password"
              placeholder="Password"
            />,
          )}
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit" className="login-form-button">
            Log in
                </Button>
        </Form.Item>
        <div className="divMK">
          <a className="quenDoiMK" onClick={() => setOpen(true)}>Quên mật khẩu</a>
        </div>

        {/* <div className="setvisible" style={{ display: open ? 'block' : 'none' }}>
          <div>
            <h4>Quên mật khẩu</h4>
            <button type="button" onClick={() => setOpen(false)}>&times;</button>
          </div>
          <form>
            <input type="text" className="changePass" placeholder="Email" />
            <input type="text" className="changePass" placeholder="Mật khẩu mới" />
            <input type="text" className="changePass" placeholder="Xác nhận lại mật khẩu" />
          </form>
          <div>
            <button type="button" >Lưu thay đổi</button>
          </div>
        </div>setvisible */}


      </Form>
    </div>
    </div>
  )
}

const signIn = Form.create()(LoginWrap);

export default withRouter(signIn)