import {createAuthApiRequest} from '../index'

export const postClub = (data) => {
    return createAuthApiRequest({
        url: '/admin/edit/club',
        method: 'post',
        data: data,
    })
}
export const getClub = (madoi) => {
    return createAuthApiRequest({
        url: `/information/club/${madoi}`,
        method: 'get'
    })
}
export const delClub = (data) => {
    return createAuthApiRequest({
        url: '/admin/delete/club',
        method: 'post',
        data: data,
    })
}