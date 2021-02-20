import * as axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "https://soft.cabinet24.com.ua/user/",
  headers: {
    "Content-Type": "application/json",
  },
});
