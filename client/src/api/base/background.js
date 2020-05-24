import { createApiRequest, createAuthApiRequest, uploadFileBackground } from "../index"

export const getSlideShowBackground = () => {
  return createApiRequest({
    url: `/api/slideshowbackground`,
    method: 'get'
  })
}

export const getAllBackground = () => {
  return createAuthApiRequest({
    url: `/api/viewbackground`,
    method: 'get'
  })
}

export const editBackground = (data) => {
  return createAuthApiRequest({
    url: `/api/editbackground`,
    method: 'post',
    data: data
  })
}

export const getBackground = (fileName) => {
  return createApiRequest({
    url: `/api/background/${fileName}`,
    method: 'get'
  })
}

export const deleteBackground = (id) => {
  return createAuthApiRequest({
    url: `/api/deletebackground`,
    method: 'delete',
    data: {id}
  })
}
export const uploadBackground = ({data, filename, file}, values) => {
  return uploadFileBackground('/api/upload/background', data, filename, file, values)
}