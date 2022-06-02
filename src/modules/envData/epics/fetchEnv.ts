import { from, Observable, of } from "rxjs";
import { map, mergeMap, catchError } from "rxjs/operators";
import { ofType, StateObservable } from "redux-observable";
// import { Dependencies } from '../../../store/index';
import {
  EnvAction,
  EnvState,
  EnvType
   
  
} from "../reducers/env";

import axios from "axios";

export const fetchEnvEpic = (
  action$: Observable<EnvAction>,
  _payload: StateObservable<EnvState>
) =>
  action$.pipe(
    ofType(EnvType.Fetch),
    mergeMap((_action: any) => {
    
      const results = from(
        axios.post("http://localhost:8000/api/signin")
      ).pipe(
        map((res: any) => {
            // console.log("res122",res)
          return {
            type: EnvType.FetchFinalized,
            payload: res?.data?.payload
          };
        }),
        catchError((err) =>
          of({
            type: EnvType.FetchError,
            payload: { message: err.message, status: err.status },
          })
        )
      );

      return results;
    })
  );

export default fetchEnvEpic