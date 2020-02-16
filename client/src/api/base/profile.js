import { createAuthApiRequest } from "../index"

export const getUserProfile = () => {
  return createAuthApiRequest({
      url: `/admin/information/member`,
      method: 'get'
  })
}