import {createAuthApiRequest} from '../index'

export const getUnitAll = () => {
    return createAuthApiRequest({
        url: '/api/branch/club/all',
        method: 'get'
    })
}
