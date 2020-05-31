import {createAuthApiRequest} from '../index'

export const getAssociation = () => {
    return createAuthApiRequest({
        url: `/api/admin/view/association`,
        method: 'get'
    })
}
  
export const editAssociation = (data) => {
    return createAuthApiRequest({
        url: `/api/admin/update/association`,
        method: 'post',
        data: data
    })
}