import {createApiRequest} from '../index'

export const getLeaderAll = () => {
    return createApiRequest({
        url: 'http://localhost:5000/association/leader/all',
        method: 'get'
    })
}