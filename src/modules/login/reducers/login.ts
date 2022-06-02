import { Action, HashMap } from "../../../types";

export enum UserLoginType {
  Fetch = "USER_LOGIN_FETCH",
  FetchFinalized = "USER_LOGIN_FETCH_FINALIZED",
  FetchError = "USER_LOGIN_FETCH_ERROR",
  UserLogout = "USER_LOGOUT",
}

export type UserLoginAction = Action<UserLoginType, UserLoginState>;

export type UserLoginState = HashMap;

const userLogin: any = (
  state: UserLoginState = {},
  { type, payload }: UserLoginAction
) => {
  switch (type) {
    case UserLoginType.FetchFinalized:
      return payload;
    case UserLoginType.FetchError:
      return payload;
    case UserLoginType.UserLogout:
      return payload;
    default:
      return state;
  }
};

export default userLogin;
