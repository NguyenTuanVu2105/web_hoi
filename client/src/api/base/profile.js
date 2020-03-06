import { createAuthApiRequest, uploadFile } from "../index"

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

export const uploadAvatar = ({data, filename, file}) => {
  return uploadFile('/api/upload/avatar', data, filename, file)
}

export const getLearnActivity = () => {
  return createAuthApiRequest({
    url: `/api/learnactivity/view`,
    method: 'get'
  })
}

export const editLearnActivity = (data) => {
  return createAuthApiRequest({
    url: `/api/learnactivity/edit`,
    method: 'post',
    data: data
  })
}