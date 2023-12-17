import { ReactNode } from "react";
import {AnyAction, combineReducers} from 'redux';
import loginReducer from './loginReducers/loginReducer';

export const appReducer = combineReducers({
    loginData: loginReducer,
});

export type RootState = ReturnType<typeof appReducer>;

const rootReducer = (state: any, action: AnyAction) => {
  if (action.type === "LOGOUT") {
    state = {};
  }

  return appReducer(state, action);
};

export default rootReducer;
