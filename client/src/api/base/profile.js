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

export const getAvatar = (fileName) => {
  return createAuthApiRequest({
    url: `/api/avatar/${fileName}`,
    method: 'get'
  })
}

export const uploadAvatar = (data) => {
  return createAuthApiRequest({
    url: `/api/upload/avatar`,
    method: 'post',
    data: data
  })
}