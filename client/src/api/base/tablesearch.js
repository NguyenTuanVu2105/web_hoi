import {createApiRequest} from '../index'

export const getTableMember = (limit, page) => {
    return createApiRequest({
        url: `/admin/view/member?limit=${limit}?&page=${page}`,
        method: 'get'
    })
}

export const addNewMember = (data) => {
    return createApiRequest({
        url: `/admin/information/add`, 
        method: 'post',
        data: data
    })
}