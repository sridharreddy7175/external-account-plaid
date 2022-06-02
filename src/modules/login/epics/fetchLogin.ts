import { from, Observable, of } from "rxjs";
import { map, mergeMap, catchError } from "rxjs/operators";
import { ofType, StateObservable } from "redux-observable";
import {
  UserLoginState,
  UserLoginType,
  UserLoginAction,
} from "../reducers/login";

import axios from "axios";

export const fetchLoginEpic = (
  action$: Observable<UserLoginAction>,
  _payload: StateObservable<UserLoginState>
) =>
  action$.pipe(
    ofType(UserLoginType.Fetch),
    mergeMap((_action: any) => {
      const requestBody = {
        email: _action.payload.email,
        password: _action.payload.password,
      };
      const results = from(
        axios.post("http://localhost:8080/user_login", requestBody, {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
        })
      ).pipe(
        map((res: any) => {
          // console.log("res122", res);
          return {
            type: UserLoginType.FetchFinalized,
            payload: res.data,
          };
        }),
        catchError((err) =>
          of({
            type: UserLoginType.FetchError,
            payload: { message: err.message, status: err.status },
          })
        )
      );

      return results;
    })
  );

export default fetchLoginEpic;
