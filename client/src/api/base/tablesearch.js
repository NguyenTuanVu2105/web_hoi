import {createApiRequest} from '../index'

export const getTableMember = (limit, page) => {
    return createApiRequest({
        url: `http://localhost:5000/admin/view/member?limit=${limit}?&page=${page}`,
        method: 'get'
    })
}