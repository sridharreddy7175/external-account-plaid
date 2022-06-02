import { Observable, of, from } from "rxjs";
import { map, mergeMap, catchError } from "rxjs/operators";
import { ofType, StateObservable } from "redux-observable";
import {
  LinkTokenAction,
  LinkTokenState,
  LinkTokenType,
} from "../reducers/linkToken";

import axios from "axios";

export const fetchLinkTokenEpic = (
  action$: Observable<LinkTokenAction>,
  _payload: StateObservable<LinkTokenState>
) =>
  action$.pipe(
    ofType(LinkTokenType.Fetch),
    mergeMap((_action: any) => {
      const results = from(
        axios.post("http://localhost:8080/create_link_token", {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
        })
      ).pipe(
        map((res: any) => {
          // console.log("res122", res);
          return {
            type: LinkTokenType.FetchFinalized,
            payload: res?.data?.link_token,
          };
        }),
        catchError((err) =>
          of({
            type: LinkTokenType.FetchError,
            payload: { message: err.message, status: err.status },
          })
        )
      );

      return results;
    })
  );

export default fetchLinkTokenEpic;
