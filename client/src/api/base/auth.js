import {createApiRequest} from '../index'

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