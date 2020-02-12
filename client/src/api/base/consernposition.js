import {createApiRequest} from '../index'

export const getPosition = () => {
    return createApiRequest({
        url: '/admin/position/view', 
        method: 'get'
    })
}

export const getSpecialized = () => {
    return createApiRequest({
        url: '/admin/specialized/view', 
        method: 'get'
    })
}