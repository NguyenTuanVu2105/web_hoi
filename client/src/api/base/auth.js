import {createAuthApiRequest} from '../index'

export const login = (data) => {
    return createAuthApiRequest({
        url: '/api/login', 
        method: 'post',
        data: data
    })
}