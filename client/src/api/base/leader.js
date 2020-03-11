import {createAuthApiRequest} from '../index'

export const getLeaderAll = () => {
    return createAuthApiRequest({
        url: '/api/association/leader/all',
        method: 'get'
    })
}