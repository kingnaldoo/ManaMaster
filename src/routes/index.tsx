import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import {
  TransitionPresets,
  createStackNavigator,
} from "@react-navigation/stack";
import { PrivateRoutes } from "./private.routes";
import { PublicRoutes } from "./public.routes";

export function Routes() {
  const Stack = createStackNavigator();
  const isAuth = false;

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          ...TransitionPresets.SlideFromRightIOS,
        }}
      >
        {isAuth ? <PrivateRoutes /> : <PublicRoutes />}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
