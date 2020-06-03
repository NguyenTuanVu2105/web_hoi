import {createAuthApiRequest, uploadFileAdmin} from '../index'

export const getClubAll = () => {
    return createAuthApiRequest({
        url: '/api/information/club/all', 
        method: 'get'
    })
}

export const editProfileUser = (data) => {
    return createAuthApiRequest({
        url: '/api/admin/edit/member/information', 
        method: 'put',
        data: data
    })
}

export const viewProfileUser = (id) => {
    return createAuthApiRequest({
        url: `/api/admin/view/member/information?id=${id}`,
        method: 'get'
    })
}

export const editAvatarUser = ({data, filename, file, id}) => {
    return uploadFileAdmin(`/api/admin/upload/avatar`, data, filename, file, id)
}

export const editRoles = (data) => {
    return createAuthApiRequest({
        url: '/api/admin/edit/roles', 
        method: 'post',
        data: data
    })
}

export const viewRoles = (userId) => {
    return createAuthApiRequest({
        url: `/api/admin/view/roles?userId=${userId}`,
        method: 'get'
    })
}