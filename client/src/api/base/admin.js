import {createAuthApiRequest, uploadFile} from '../index'

export const getClubAll = () => {
    return createAuthApiRequest({
        url: '/information/club/all', 
        method: 'get'
    })
}

export const editProfileUser = (data) => {
    return createAuthApiRequest({
        url: '/information/club/all', 
        method: 'put',
        data: data
    })
}

export const viewProfileUser = () => {
    return createAuthApiRequest({
        url: '/information/club/all', 
        method: 'get'
    })
}

export const editAvatarUser = ({data, filename, file}) => {
    return uploadFile('/admin/upload/avatar', data, filename, file)
  }