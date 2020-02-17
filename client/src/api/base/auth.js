import {createApiRequest} from '../index'

export const login = (data) => {
    return createApiRequest({
        url: '/api/login', 
        method: 'post',
        data: data
    })
}