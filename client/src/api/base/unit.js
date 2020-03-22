import {createAuthApiRequest} from '../index'

export const getUnitAll = () => {
    return createAuthApiRequest({
        url: '/api/branch/club/all',
        method: 'get'
    })
}

export const addUnit = (data) => {
    return createAuthApiRequest({
        url: '/api/admin/add/branch',
        method: 'post',
        data: data
    })
}
