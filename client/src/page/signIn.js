import React, {useContext, useState} from 'react' 
import '../css/Login.css'
import { Form, Icon, Input, Alert, Button, Checkbox } from 'antd';
import AppContext from '../AppContext'
import { withRouter } from 'react-router-dom'
import {setUserCookies, getUser, checkAuth} from '../api/auth/auth'
import { login } from '../api/base/auth';

const LoginWrap = (props) => {
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
        const {success, data} = await login(values)
        if (success) {
          handleLogin(data)
          props.history.push('/')
        } else {
          setMessage(data)
        }
      } 
      const handleSubmit = e => {
        e.preventDefault();
        props.form.validateFields((err, values) => {
          if (!err) {
            submitLogin(values)
          }
        });
      }
      
    const { getFieldDecorator } = props.form;
    return (
        <div className="login-wrap">
            <Form onSubmit={handleSubmit} className="login-form">
            {message && <Alert style={{marginBottom: '20px'}} message={message} type="error"/>}
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
            </Form>
        </div>
    )
}

const signIn = Form.create()(LoginWrap);

export default withRouter(signIn)