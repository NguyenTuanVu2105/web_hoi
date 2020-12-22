import { createAuthApiRequest } from "../auth";
import { ApiConst } from "../../const";

export const getUnitAll = () => {
  return createAuthApiRequest({
    url: ApiConst.GET_UNIT_ALL,
    method: "get",
  });
};

export const getUnitDetail = (machihoi) => {
  return createAuthApiRequest({
    url: `${ApiConst.GET_UNIT_DETAIL}${machihoi}`,
    method: "get",
  });
};

export const updateUnit = (data) => {
  return createAuthApiRequest({
    url: ApiConst.EDIT_UNIT,
    method: "put",
    data: data,
  });
};

export const addUnit = (data) => {
  return createAuthApiRequest({
    url: ApiConst.POST_UNIT,
    method: "post",
    data: data,
  });
};

export const editClub = (data) => {
  return createAuthApiRequest({
    url: ApiConst.EDIT_CLUB,
    method: "put",
    data: data,
  });
};
export const getClub = (madoi) => {
  return createAuthApiRequest({
    url: `${ApiConst.GET_CLUB}${madoi}`,
    method: "get",
  });
};

export const addClub = (data) => {
  return createAuthApiRequest({
    url: ApiConst.POST_CLUB,
    method: "post",
    data: data,
  });
};
