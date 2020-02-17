import {createAuthApiRequest} from '../index'

export const getClubAll = () => {
    return createAuthApiRequest({
        url: '/information/club/all', 
        method: 'get'
    })
}