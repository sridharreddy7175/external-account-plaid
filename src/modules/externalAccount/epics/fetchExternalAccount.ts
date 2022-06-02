import { Observable, of, from } from "rxjs";
import { map, mergeMap, catchError } from "rxjs/operators";
import { ofType, StateObservable } from "redux-observable";
// import { Dependencies } from '~/store';
import {
  ExternalAccountAction,
  ExternalAccountState,
  ExternalAccountType,
} from "../reducers/externalAccount";


import axios from "axios";

export const fetchExternalAccountEpic = (
  action$: Observable<ExternalAccountAction>,
  _payload: StateObservable<ExternalAccountState>
) =>
  action$.pipe(
    ofType(ExternalAccountType.Fetch),
    mergeMap((_action: any) => {
      const requestBody = {
        account_id: _action.payload.account_id,
        public_token: _action.payload.public_token,
        logged_in_user_id: _action.payload.logged_in_user_id
      };

      console.log("requestBody", requestBody);

      const results = from(
        axios.post("http://localhost:8080/get_info", requestBody, {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
        })
      ).pipe(
        map((res: any) => {
          console.log("res122", res);
          return {
            type: ExternalAccountType.FetchFinalized,
            payload: res.data,
          };
        }),
        catchError((err) =>
          of({
            type: ExternalAccountType.FetchError,
            payload: { message: err.message, status: err.status },
          })
        )
      );

      return results;
    })
  );

export default fetchExternalAccountEpic;

// export const deleteExternalAccount = (action$:any) =>
//   action$.ofType(ExternalAccountType.FetchDelete).filter(() => {
//     return {};
//   });

// export default deleteExternalAccount
