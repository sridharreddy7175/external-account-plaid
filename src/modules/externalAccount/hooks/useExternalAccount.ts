import { useDispatch, useSelector } from "react-redux";
import { State } from "../../../store";
import {
  ExternalAccountState,
  ExternalAccountType,
} from "../reducers/externalAccount";

export default function useExternalAccount(): [
  ExternalAccountState,
  (account_id: any, public_token: any, logged_in_user_id: any) => object
] {
  const dispatch = useDispatch();
  return [
    useSelector((state: State) => state.externalAccount),
    (account_id, public_token, logged_in_user_id) =>
      dispatch({
        type: ExternalAccountType.Fetch,
        payload: {
          account_id: account_id,
          public_token: public_token,
          logged_in_user_id: logged_in_user_id
        },
      }),
  ];
}
