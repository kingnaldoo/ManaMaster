import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { CardDetails, Home, MyDeck } from "../screens";

export function PrivateRoutes() {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="MyDeck" component={MyDeck} />
      <Stack.Screen name="CardDetails" component={CardDetails} />
    </Stack.Navigator>
  );
}
