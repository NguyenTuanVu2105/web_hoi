import { createApiRequest, createAuthApiRequest } from "../auth";
import { ApiConst } from "../../const";

export const login = (data) => {
  return createApiRequest({
    url: ApiConst.LOGIN,
    method: "post",
    data: data,
  });
};
export const forgetPassword = (data) => {
  return createApiRequest({
    url: ApiConst.FORGET_PASSWORD,
    method: "post",
    data: data,
  });
};
export const resetPassword = (data) => {
  return createApiRequest({
    url: ApiConst.RESET_PASSWORD,
    method: "post",
    data: data,
  });
};
export const changePassword = (data) => {
  return createAuthApiRequest({
    url: ApiConst.CHANGE_PASSWORD,
    method: "put",
    data: data,
  });
};

export const checkToken = (token) => {
  return createApiRequest({
    url: ApiConst.CHECK_TOKEN,
    method: "post",
    data: { token },
  });
};
