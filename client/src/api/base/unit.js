import {createAuthApiRequest} from '../index'

export const getUnitAll = () => {
    return createAuthApiRequest({
        url: '/branch/club/all',
        method: 'get'
    })
}