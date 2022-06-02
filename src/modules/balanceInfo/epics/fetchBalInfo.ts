import { from, Observable, of } from "rxjs";
import { map, mergeMap, catchError } from "rxjs/operators";
import { ofType, StateObservable } from "redux-observable";
import {
    // AccountDetailsState,
    // AccessTokenType,
    // AccessTokenAction,
    BalInfoState,
    BalInfoAction,
    BalInfoType
} from "../reducers/balInfo";

// import { Dependencies } from '../../../store/index';

import axios from "axios";

export const fetchBalInfoEpic = (
    action$: Observable<BalInfoAction>,
    _payload: StateObservable<BalInfoState>
) =>
    action$.pipe(
        ofType(BalInfoType.Fetch),
        mergeMap((_action: any) => {
            const requestBody = {
                public_token: _action.payload.public_token,
                account_id: _action.payload.account_id
            };
            const results = from(
                axios.post("http://localhost:8000/", requestBody)
            ).pipe(
                map((res: any) => {
                    console.log("res122", res);
                    return {
                        type: BalInfoType.FetchFinalized,
                        payload: {

                        },
                    };
                }),
                catchError((err) =>
                    of({
                        type: BalInfoType.FetchError,
                        payload: { message: err.message, status: err.status },
                    })
                )
            );

            return results;
        })
    );

export default fetchBalInfoEpic;
