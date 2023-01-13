import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { PrivateRoutes } from "./private.routes";
import { PublicRoutes } from "./public.routes";

export function Routes() {
  const isAuth = true;

  return (
    <NavigationContainer>
      {isAuth ? <PrivateRoutes /> : <PublicRoutes />}
    </NavigationContainer>
  );
}
