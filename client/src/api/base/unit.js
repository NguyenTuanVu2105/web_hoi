import {createAuthApiRequest} from '../index'

export const getUnitAll = () => {
    return createAuthApiRequest({
        url: '/api/branch/club/all',
        method: 'get'
    })
}

export const getUnitDetail = machihoi => {
    return createAuthApiRequest({
        url: `/api/information/branch?machihoi=${machihoi}`,
        method: 'get'
    })
}

export const updateUnit = (data) => {
    return createAuthApiRequest({
        url: '/api/admin/edit/branch',
        method: 'put',
        data: data
    })
}

export const addUnit = (data) => {
    return createAuthApiRequest({
        url: '/api/admin/add/branch',
        method: 'post',
        data: data
    })
}
