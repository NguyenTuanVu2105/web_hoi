import {createApiRequest} from '../index'

export const getTableMember = (limit, page) => {
    return createApiRequest({
        url: `/admin/view/member?limit=${limit}?&page=${page}`,
        method: 'get'
    })
}