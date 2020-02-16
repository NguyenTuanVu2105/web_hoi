import {createApiRequest} from '../index'

export const getClubAll = () => {
    return createApiRequest({
        url: '/information/club/all', 
        method: 'get'
    })
}