import {createAuthApiRequest} from '../index'

export const getTableMember = (page, data) => {
    return createAuthApiRequest({
        url: `/api/admin/view/member`,
        method: 'get',
        params: {page, ...data}
    })
}

export const addNewMember = (data) => {
    return createAuthApiRequest({
        url: `/api/admin/information/add`, 
        method: 'post',
        data: data
    })
}
