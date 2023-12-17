// import { LOG_IN, LOG_OUT } from "../actions/loginActions";

import { AnyAction } from "redux";
import { LOG_IN, LOG_OUT } from "../../actions/actiontypes";

export interface LoginType{
    userName: string
    password: string
    isLoggedIN: boolean
}

const initialState = {
    userName: "",
    password: "",
    isLoggedIN: false,
};

export default function loginReducer(state = initialState, action: AnyAction): LoginType {
  switch (action.type) {
    case LOG_IN:
      return {
        userName: action.payload.userName,
        password: action.payload.password,
        isLoggedIN: true,
      };
    case LOG_OUT:
      return {
        userName: "",
        password: "",
        isLoggedIN: false,
      };
    default:
      return state;
  }
}