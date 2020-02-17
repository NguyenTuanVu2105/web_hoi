import { createAuthApiRequest } from "../index"

export const getUserProfile = () => {
  return createAuthApiRequest({
      url: `/user/information/member`,
      method: 'get'
  })
}

export const updateUserProfile = (data) => {
  return createAuthApiRequest({
      url: `/user/information/edit`,
      method: 'put',
      data: data
  })
}