import { createAuthApiRequest, uploadFile } from "../index"

export const getUserProfile = () => {
  return createAuthApiRequest({
    url: `/api/user/information/member`,
    method: 'get'
  })
}

export const updateUserProfile = (data) => {
  return createAuthApiRequest({
    url: `/api/user/information/edit`,
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

export const getActivity = () => {
  return createAuthApiRequest({
    url: `/api/activity/view`,
    method: 'get'
  })
}
export const getActivityAdmin = (id) => {
  return createAuthApiRequest({
    url: `/api/admin/activity/view?id=${id}`,
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

export const getLearnActivityAdmin = (id) => {
  return createAuthApiRequest({
    url: `/api/admin/la/view?id=${id}`,
    method: 'get'
  })
}

export const editLearnActivityAdmin = (data) => {
  return createAuthApiRequest({
    url: `/api/admin/la/edit`,
    method: 'post',
    data: data
  })
}