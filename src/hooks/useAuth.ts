import { useDispatch, useSelector } from "react-redux";
import { login, logout } from "../redux/modules/auth/reducer";
import { UserProps } from "../redux/modules/auth/@types/user";

export const useAuth = () => {
  const auth = useSelector((state: any) => state.auth);
  const dispacth = useDispatch();

  const getLogin: UserProps = auth;

  const setLogin = (user: UserProps) => {
    dispacth(login(user));
  };

  const setLogout = () => {
    dispacth(logout());
  };

  return { getLogin, setLogin, setLogout };
};
