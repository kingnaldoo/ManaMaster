import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login, logout } from "../redux/modules/auth/reducer";

export const useAuth = () => {
  const [loading, setLoading] = useState(false);
  const auth = useSelector((state: any) => state.auth);
  const dispacth = useDispatch();

  const setAuth = async () => {
    try {
      setLoading(true);
      const uid = "aeys";
      dispacth(login(uid));
      setLoading(false);
    } catch (error) {
      console.log("ERROR: ", error);
      setLoading(false);
    }
  };

  const sair = () => {
    dispacth(logout());
  };

  return { auth, setAuth, sair, loadingAuth: loading };
};
