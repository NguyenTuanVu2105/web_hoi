import {createAuthApiRequest} from '../index'

export const postClub = (data) => {
    return createAuthApiRequest({
        url: '/admin/edit/club',
        method: 'post',
        data: data,
    })
}
export const getClub = (data) => {
    return createAuthApiRequest({
        url: '/admin/add/club',
        method: 'post',
        data: data,
    })
}
export const delClub = (data) => {
    return createAuthApiRequest({
        url: '/admin/delete/club',
        method: 'post',
        data: data,
    })
}