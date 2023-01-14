import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { PrivateRoutes } from "./private.routes";
import { PublicRoutes } from "./public.routes";
import { useAuth } from "../hooks/useAuth";

export function Routes() {
  const { userId } = useAuth();

  return (
    <NavigationContainer>
      {userId ? <PrivateRoutes /> : <PublicRoutes />}
    </NavigationContainer>
  );
}
