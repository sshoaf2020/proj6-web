import { AUTH_LOGIN, AUTH_LOGOUT, AUTH_ERROR, AUTH_CHECK } from "react-admin";

export default (type, params) => {
  if (type === AUTH_LOGIN) {
    const { username, password } = params;
    localStorage.setItem("authString", btoa(`${username}:${password}`));
  }
  if (type === AUTH_CHECK) {
    return localStorage.getItem("authString")
      ? Promise.resolve()
      : Promise.reject();
  }

  if (type === AUTH_LOGOUT) {
    localStorage.removeItem("authString");
  }
  if (type === AUTH_ERROR) {
    console.log("ERROR");
  }
  return Promise.resolve();
};
