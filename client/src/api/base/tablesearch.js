import {createAuthApiRequest} from '../index'

export const getTableMember = (limit, page) => {
    return createAuthApiRequest({
        url: `/api/admin/view/member`,
        method: 'get'
    })
}

export const addNewMember = (data) => {
    return createAuthApiRequest({
        url: `/api/admin/information/add`, 
        method: 'post',
        data: data
    })
}
