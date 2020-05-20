import {createAuthApiRequest} from '../index'

export const editClub = (data) => {
    return createAuthApiRequest({
        url: '/api/admin/edit/club',
        method: 'put',
        data: data,
    })
}
export const getClub = (madoi) => {
    return createAuthApiRequest({
        url: `/api/information/club?madoi=${madoi}`,
        method: 'get'
    })
}

export const addClub = (data) => {
    return createAuthApiRequest({
        url: '/api/admin/add/club',
        method: 'post',
        data: data
    })
}