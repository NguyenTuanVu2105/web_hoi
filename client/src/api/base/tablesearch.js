import {createAuthApiRequest} from '../index'

export const getTableMember = (page) => {
    console.log(page)
    return createAuthApiRequest({
        url: `/api/admin/view/member?page=${page}`,
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
