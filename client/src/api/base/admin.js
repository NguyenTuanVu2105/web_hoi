import { uploadFileAdmin, createAuthApiRequest } from "../auth";
import { ApiConst } from "../../const";

export const getClubAll = () => {
  return createAuthApiRequest({
    url: ApiConst.ADMIN_GET_CLUB_ALL,
    method: "get",
  });
};

export const editProfileUser = (data) => {
  return createAuthApiRequest({
    url: ApiConst.ADMIN_EDIT_PROFILE_MEMBER,
    method: "put",
    data: data,
  });
};

export const viewProfileUser = (id) => {
  return createAuthApiRequest({
    url: `${ApiConst.ADMIN_VIEW_PROFILE_MEMBER}${id}`,
    method: "get",
  });
};

export const editAvatarUser = ({ data, filename, file, id }) => {
  return uploadFileAdmin(
    ApiConst.ADMIN_EDIT_AVATAR_MEMBER,
    data,
    filename,
    file,
    id
  );
};

export const editRoles = (data) => {
  return createAuthApiRequest({
    url: ApiConst.ADMIN_EDIT_ROLES,
    method: "post",
    data: data,
  });
};

export const viewRoles = (userId) => {
  return createAuthApiRequest({
    url: `${ApiConst.ADMIN_GET_ROLES}${userId}`,
    method: "get",
  });
};

export const getActivityAdmin = (id) => {
  return createAuthApiRequest({
    url: `${ApiConst.ADMIN_GET_ACTIVITY}${id}`,
    method: "get",
  });
};

export const getLearnActivityAdmin = (id) => {
  return createAuthApiRequest({
    url: `${ApiConst.ADMIN_GET_LEARN_AND_ACTIVITY}${id}`,
    method: "get",
  });
};

export const editLearnActivityAdmin = (data) => {
  return createAuthApiRequest({
    url: ApiConst.ADMIN_EDIT_LEARN_AND_ACTIVITY,
    method: "post",
    data: data,
  });
};

export const getTableMember = (page, data) => {
  return createAuthApiRequest({
    url: ApiConst.ADMIN_GET_TABLE_MEMBER,
    method: "get",
    params: { page, ...data },
  });
};

export const addNewMember = (data) => {
  return createAuthApiRequest({
    url: ApiConst.ADMIN_POST_MEMBER,
    method: "post",
    data: data,
  });
};

export const getPosition = () => {
  return createAuthApiRequest({
    url: ApiConst.GET_POSITION,
    method: "get",
  });
};

export const getSpecialized = () => {
  return createAuthApiRequest({
    url: ApiConst.GET_SPECIALIZED,
    method: "get",
  });
};
