import { AUTH_LOGIN, AUTH_LOGOUT, AUTH_ERROR, AUTH_CHECK } from "react-admin";

export default (type, params) => {
  console.log(type);
  switch (type) {
    case "AUTH_LOGIN":
      const { username, password } = params;
      localStorage.setItem("authString", btoa(username + ":" + password));
      return Promise.resolve();
      break;
    case "AUTH_LOGOUT":
      localStorage.removeItem("authString");
      return Promise.resolve();
      break;
    case "AUTH_ERROR":
      const status = params.status;
      if (status === 401) {
        localStorage.removeItem("authString");
        return Promise.reject(); //catch
      }
      return Promise.resolve(); //then
      break;
    case "AUTH_CHECK":
      return localStorage.getItem("authString")
        ? Promise.resolve()
        : Promise.reject();
      break;
  }
};
