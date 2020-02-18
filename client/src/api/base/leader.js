import {createAuthApiRequest} from '../index'

export const getLeaderAll = () => {
    return createAuthApiRequest({
        url: '/association/leader/all',
        method: 'get'
    })
}