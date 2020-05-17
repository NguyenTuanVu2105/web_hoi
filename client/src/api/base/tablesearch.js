import {createAuthApiRequest} from '../index'

export const getTableMember = (page) => {
    return createAuthApiRequest({
        url: `/api/admin/view/member?page=${page}&hovaten=&nhommau=&quequan=&ngaysinh=&clubId=&branchId=`,
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
