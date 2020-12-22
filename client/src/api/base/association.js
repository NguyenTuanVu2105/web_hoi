import { createAuthApiRequest } from "../auth";
import { ApiConst } from "../../const";

export const getAssociation = () => {
  return createAuthApiRequest({
    url: ApiConst.GET_ASSOCIATION,
    method: "get",
  });
};

export const editAssociation = (data) => {
  return createAuthApiRequest({
    url: ApiConst.EDIT_ASSOCIATION,
    method: "post",
    data: data,
  });
};

export const getPDF = () => {
  return createAuthApiRequest({
    url: ApiConst.GET_PDF,
    method: "get",
  });
};

export const editPDF = (data) => {
  return createAuthApiRequest({
    url: ApiConst.EDIT_PDF,
    method: "post",
    data: data,
  });
};

export const editPDFHistory = (data) => {
  return createAuthApiRequest({
    url: ApiConst.EDIT_PDF_HISTORY,
    method: "post",
    data: data,
  });
};

export const editLinkTest = (data) => {
  return createAuthApiRequest({
    url: ApiConst.EDIT_LINK_TEST,
    method: "post",
    data: data,
  });
};

export const getLinkTest = () => {
  return createAuthApiRequest({
    url: ApiConst.GET_LINK_TEST,
    method: "get",
  });
};

export const getLeaderAll = () => {
  return createAuthApiRequest({
    url: ApiConst.GET_LEADER_ALL,
    method: "get",
  });
};
