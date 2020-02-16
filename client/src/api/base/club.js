import {createApiRequest} from '../index'

export const postClub = (data) => {
    return createApiRequest({
        url: '/admin/edit/club',
        method: 'post',
        data: data,
    })
}
export const getClub = (data) => {
    return createApiRequest({
        url: '/admin/add/club',
        method: 'post',
        data: data,
    })
}
export const delClub = (data) => {
    return createApiRequest({
        url: '/admin/delete/club',
        method: 'post',
        data: data,
    })
}