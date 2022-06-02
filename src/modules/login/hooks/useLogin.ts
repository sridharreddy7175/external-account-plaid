import { useDispatch, useSelector } from "react-redux";
import { State } from "../../../store/index";
import { UserLoginState, UserLoginType } from "../reducers/login";

function useLogin(): [
  UserLoginState,
  (email: string, password: string) => object
] {
  const dispatch = useDispatch();
  return [
    useSelector((state: State) => state.userLogin),
    (email, password) =>
      dispatch({
        type: UserLoginType.Fetch,
        payload: {
          email: email,
          password: password,
        },
      }),
  ];
}

function useLogout(): [UserLoginState, () => object] {
  const dispatch = useDispatch();
  return [
    useSelector((state: State) => state.userLogin),
    () =>
      dispatch({
        type: UserLoginType.UserLogout,
        payload: {},
      }),
  ];
}

export { useLogin, useLogout };
