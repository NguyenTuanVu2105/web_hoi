import { createAuthApiRequest } from "../index"

export const getUserProfile = () => {
  return createAuthApiRequest({
      url: '/api/auth/profile',
      method: 'get'
  })
}