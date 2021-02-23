import { CLEAR_PHONE_NUMBER, SET_PHONE_NUMBER } from "../types";

export const setPhoneNumber = (number) => ({type: SET_PHONE_NUMBER, number});

export const clearPhoneNumber = () => ({type: CLEAR_PHONE_NUMBER});
