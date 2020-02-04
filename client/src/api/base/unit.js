import {createApiRequest} from '../index'

export const getUnitAll = () => {
    return createApiRequest({
        url: 'localhost:5000/branch/club/all', 
        method: 'get'
    })
}