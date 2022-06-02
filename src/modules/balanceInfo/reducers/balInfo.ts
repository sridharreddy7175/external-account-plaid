import { Action, HashMap } from "../../../types";

export enum BalInfoType {
  Fetch = "BAL_INFO_FETCH",
  FetchFinalized = "BAL_INFO_FETCH_FINALIZED",
  FetchError = "BAL_INFO_FETCH_ERROR",
}

export type BalInfoAction = Action<BalInfoType, BalInfoState>;

export type BalInfoState = HashMap;

const balInfo: any = (
  state: BalInfoState = {},
  { type, payload }: BalInfoAction
) => {
  switch (type) {
    case BalInfoType.FetchFinalized:
      return payload;
    case BalInfoType.FetchError:
      return payload;
    default:
      return state;
  }
};

export default balInfo;
