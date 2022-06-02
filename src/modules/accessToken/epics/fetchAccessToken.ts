import { from, Observable, of } from "rxjs";
import { map, mergeMap, catchError } from "rxjs/operators";
import { ofType, StateObservable } from "redux-observable";
import {
    AccountDetailsState,
    AccessTokenType,
    AccessTokenAction,
} from "../reducers/accessToken";

import axios from "axios";

export const fetchAccessTokenEpic = (
    action$: Observable<AccessTokenAction>,
    _payload: StateObservable<AccountDetailsState>
) =>
    action$.pipe(
        ofType(AccessTokenType.Fetch),
        mergeMap((_action: any) => {
            const requestBody = {
                token: _action.payload.token,
                data: _action.payload.data,
            };
            const results = from(
                axios.post("http://localhost:8000/", requestBody)
            ).pipe(
                map((res: any) => {
                    console.log("res122", res);
                    return {
                        type: AccessTokenType.FetchFinalized,
                        payload: {
                            status: res.data.status,
                            accessToken: res?.data?.payload?.access_token,
                        },
                    };
                }),
                catchError((err) =>
                    of({
                        type: AccessTokenType.FetchError,
                        payload: { message: err.message, status: err.status },
                    })
                )
            );

            return results;
        })
    );

export default fetchAccessTokenEpic;
