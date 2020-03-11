import {createAuthApiRequest} from '../index'

export const getPosition = () => {
    return createAuthApiRequest({
        url: '/api/admin/position/view', 
        method: 'get'
    })
}

export const getSpecialized = () => {
    return createAuthApiRequest({
        url: '/api/admin/specialized/view', 
        method: 'get'
    })
}