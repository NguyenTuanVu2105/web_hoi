import {createApiRequest, createAuthApiRequest} from '../index'

export const login = (data) => {
    return createApiRequest({
        url: '/api/login', 
        method: 'post',
        data: data
    })
}
export const forgetpassword = (data) => {
    return createApiRequest({
        url: '/api/forgetpassword', 
        method: 'post',
        data: data
    })
}
export const resetpassword = (data) => {
    return createApiRequest({
        url: '/api/newpassword', 
        method: 'post',
        data: data
    })
}
export const changepassword = (data) => {
    return createAuthApiRequest({
        url: '/api/user/edit/password', 
        method: 'put',
        data: data
    })
}