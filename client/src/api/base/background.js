import {
  createApiRequest,
  createAuthApiRequest,
  uploadFileBackground,
} from "../auth";
import { ApiConst } from "../../const";

export const getSlideShowBackground = () => {
  return createApiRequest({
    url: ApiConst.GET_SLIDE_SHOW_BACKGROUND,
    method: "get",
  });
};

export const getAllBackground = () => {
  return createAuthApiRequest({
    url: ApiConst.GET_ALL_BACKGROUND,
    method: "get",
  });
};

export const editBackground = (data) => {
  return createAuthApiRequest({
    url: ApiConst.EDIT_BACKGROUND,
    method: "post",
    data: data,
  });
};

export const getOneBackground = (id) => {
  return createAuthApiRequest({
    url: `${ApiConst.GET_ONE_BACKGROUND}${id}`,
    method: "get",
  });
};

export const getBackground = (fileName) => {
  return createApiRequest({
    url: `${ApiConst.GET_BACKGROUND}${fileName}`,
    method: "get",
  });
};

export const deleteBackground = (id) => {
  return createAuthApiRequest({
    url: ApiConst.DELETE_BACKGROUND,
    method: "delete",
    data: { id: id },
  });
};
export const uploadBackground = ({ data, filename, file }, values) => {
  return uploadFileBackground(
    ApiConst.UPLOAD_BACKGROUND,
    data,
    filename,
    file,
    values
  );
};
