import {createAuthApiRequest} from '../index'

export const getTableMember = (page, data) => {
    return createAuthApiRequest({
        url: `/api/admin/view/member?page=${page}&hovaten=${data.hovaten}&nhommau=${data.nhommau}&quequan=${data.quequan}&ngaysinh=${data.ngaysinh}&clubId=${data.clubId}&branchId=${data.branchId}`,
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
