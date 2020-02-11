import {createApiRequest} from '../index'

export const getUnitAll = () => {
    return createApiRequest({
        url: '/branch/club/all',
        method: 'get'
    })
}