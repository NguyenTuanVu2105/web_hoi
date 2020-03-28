import { createAuthApiRequest, uploadFileBackground } from "../index"

export const getSlideShowBackground = () => {
  return createAuthApiRequest({
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

export const getBackground = (fileName) => {
  return createAuthApiRequest({
    url: `/api/background/${fileName}`,
    method: 'get'
  })
}
  
export const uploadBackground = ({data, filename, file}, values) => {
  return uploadFileBackground('/api/upload/background', data, filename, file, values)
}