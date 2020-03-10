import {createAuthApiRequest} from '../index'

export const editClub = (data) => {
    return createAuthApiRequest({
        url: '/admin/edit/club',
        method: 'post',
        data: data,
    })
}
export const getClub = (madoi) => {
    return createAuthApiRequest({
        url: `/information/club?madoi=${madoi}`,
        method: 'get'
    })
}