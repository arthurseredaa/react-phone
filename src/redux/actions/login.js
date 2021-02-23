import { authApi } from "../../api/api";
import { SET_IS_LOGIN, SET_CONFIG } from "../types";
import { setLoading } from "./app";

export const setLogin = (bool) => ({ type: SET_IS_LOGIN, bool });

export const setConfig = (config) => ({ type: SET_CONFIG, config });

export const userLogin = (data) => async (dispatch) => {
  dispatch(setLoading(true));

  const { status, data: response } = await authApi.login(data);

  if (status === 200) {
    dispatch(setConfig(response.data));
    dispatch(setLogin(true));
    localStorage.setItem("token", response.data.token);
    dispatch(setLoading(false));
  }

  dispatch(setLoading(false));
};

export const userLoginWithToken = () => async (dispatch) => {
  dispatch(setLoading(true));

  const token = localStorage.getItem("token");

  const { status, data } = await authApi.loginWithToken(token);

  if (status === 200) {
    dispatch(setConfig(data.data));
    dispatch(setLogin(true));
    dispatch(setLoading(false));
  }

  dispatch(setLoading(false));
};
