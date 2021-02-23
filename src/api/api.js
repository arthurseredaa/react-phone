import { axiosInstance } from "./axiosInstance";

export const authApi = {
  login: ({ email, password }) =>
    axiosInstance.post("login", { email, password }),
  loginWithToken: (token) => {
    axiosInstance.defaults.headers.post["Authorization"] = `Bearer ${token}`;
    return axiosInstance.post("login/token");
  },
};
