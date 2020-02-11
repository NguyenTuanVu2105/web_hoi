import {createApiRequest} from '../index'

export const getLeaderAll = () => {
    return createApiRequest({
        url: '/association/leader/all',
        method: 'get'
    })
}