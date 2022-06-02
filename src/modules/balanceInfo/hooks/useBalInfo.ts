import { useDispatch, useSelector } from "react-redux";
import { State } from "../../../store";
import { BalInfoState, BalInfoType } from "../reducers/balInfo";

export function useBalInfo(): [
  BalInfoState,
  (balance: string, public_token: string, account_id: string) => object
] {
  const dispatch = useDispatch();
  return [
    useSelector((state: State) => state.balInfo),
    (balance, public_token, account_id) =>
      dispatch({
        type: BalInfoType.Fetch,
        payload: {
          balance: balance,
          public_token: public_token,
          account_id: account_id,
        },
      }),
  ];
}
