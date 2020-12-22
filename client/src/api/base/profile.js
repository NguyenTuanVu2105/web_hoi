import { createAuthApiRequest, uploadFile } from "../auth";
import { ApiConst } from "../../const";

export const getUserProfile = () => {
  return createAuthApiRequest({
    url: ApiConst.GET_MEMBER_PROFILE,
    method: "get",
  });
};

export const updateUserProfile = (data) => {
  return createAuthApiRequest({
    url: ApiConst.EDIT_MEMBER_PROFILE,
    method: "put",
    data: data,
  });
};

export const getAvatar = (fileName) => {
  return createAuthApiRequest({
    url: `${ApiConst.GET_AVATAR}${fileName}`,
    method: "get",
  });
};

export const uploadAvatar = ({ data, filename, file }) => {
  return uploadFile(ApiConst.UPLOAD_AVATAR, data, filename, file);
};

export const getLearnActivity = () => {
  return createAuthApiRequest({
    url: ApiConst.GET_LEARN_AND_ACTIVITY,
    method: "get",
  });
};

export const getActivity = () => {
  return createAuthApiRequest({
    url: ApiConst.GET_ACTIVITY,
    method: "get",
  });
};

export const editLearnActivity = (data) => {
  return createAuthApiRequest({
    url: ApiConst.EDIT_LEARN_AND_ACTIVITY,
    method: "post",
    data: data,
  });
};
