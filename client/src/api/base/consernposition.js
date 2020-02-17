import {createAuthApiRequest} from '../index'

export const getPosition = () => {
    return createAuthApiRequest({
        url: '/admin/position/view', 
        method: 'get'
    })
}

export const getSpecialized = () => {
    return createAuthApiRequest({
        url: '/admin/specialized/view', 
        method: 'get'
    })
}