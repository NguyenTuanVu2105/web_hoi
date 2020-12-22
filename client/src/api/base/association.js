import { createAuthApiRequest } from "../index";

export const getAssociation = () => {
  return createAuthApiRequest({
    url: `/api/admin/view/association`,
    method: "get",
  });
};

export const editAssociation = (data) => {
  return createAuthApiRequest({
    url: `/api/admin/update/association`,
    method: "post",
    data: data,
  });
};

export const getPDF = () => {
  return createAuthApiRequest({
    url: `/api/introduction`,
    method: "get",
  });
};

export const editPDF = (data) => {
  return createAuthApiRequest({
    url: `/api/update/introduction`,
    method: "post",
    data: data,
  });
};

export const editPDFHistory = (data) => {
  return createAuthApiRequest({
    url: `/api/update/history`,
    method: "post",
    data: data,
  });
};

export const editLinkTest = (data) => {
  return createAuthApiRequest({
    url: `/api/update/link-test`,
    method: "post",
    data: data,
  });
};

export const getLinkTest = () => {
  return createAuthApiRequest({
    url: `/api/link-test`,
    method: "get",
  });
};
