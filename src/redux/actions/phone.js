import { CLEAR_PHONE_NUMBER, SET_CALL_STATUS, SET_PHONE_NUMBER } from "../types";

export const setPhoneNumber = (number) => ({type: SET_PHONE_NUMBER, number});

export const clearPhoneNumber = () => ({type: CLEAR_PHONE_NUMBER});

export const setCallStatus = (status) => ({type: SET_CALL_STATUS, status});
