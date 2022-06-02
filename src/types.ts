import { Action as ReduxAction } from 'redux';

export interface Action<Type = string, Payload = any>
  extends ReduxAction<Type> {
  payload: Payload;
}
export interface HashMap<T = any> {
  [key: string]: T;
}

export interface AccountDetails {
  accessToken: string;
  status: string;
}

export interface loginUserDetails {
  email: string;
  password: string;
}

export interface BalInfo {
  balance: boolean;
  publicToken: string;
  accessToken: string;
}