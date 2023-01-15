import React from "react";
import { NavigationContainer } from "@react-navigation/native";

import { PrivateRoutes } from "./private.routes";
import { PublicRoutes } from "./public.routes";

import { useAuth } from "../hooks/useAuth";

export function Routes() {
  const { getLogin } = useAuth();

  return (
    <NavigationContainer>
      {getLogin.userId ? <PrivateRoutes /> : <PublicRoutes />}
    </NavigationContainer>
  );
}
