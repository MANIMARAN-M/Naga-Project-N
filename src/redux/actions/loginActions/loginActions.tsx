import { ReactNode } from "react";
import { LoginType } from "../../reducers/loginReducers/loginReducer";
import { LOG_IN, LOG_OUT } from "../actiontypes";

/** Sidebar Action for open */
export const loginAction = (value: LoginType) => {
  return {
    payload: value,
    type: LOG_IN,
  };
};

/** Sidebar Action for close */
export const logOutAction = () => {
  return {
    type: LOG_OUT,
  };
};
