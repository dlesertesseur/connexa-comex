import { API } from "../Constants";

async function findAllApplicationsByRoleId(params) {
  try {
    const requestOptions = {
      method: "GET",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
        token: params.token,
      },
    };

    const res = await fetch(API.role.findAllApplicationsByRole + params.roleId, requestOptions);
    const data = await res.json();
    return data;
  } catch (error) {
    return error;
  }
}

async function findApplicationById(params) {
  try {
    const requestOptions = {
      method: "GET",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
        token: params.token,
      },
    };

    const res = await fetch(API.application.findById + params.id, requestOptions);
    const data = await res.json();
    return data;
  } catch (error) {
    return error;
  }
}

export { findAllApplicationsByRoleId, findApplicationById};
