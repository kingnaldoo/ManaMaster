import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Platform, StatusBar } from "react-native";
import { ms } from "react-native-size-matters";
import { CardDetails, Home, MyDeck } from "../screens";
import { theme } from "../global/styles/theme";
import { Button, TextButton } from "./styles";

function LogoutButton() {
  return (
    <Button>
      <TextButton>Sair</TextButton>
    </Button>
  );
}

export function PrivateRoutes() {
  const Stack = createStackNavigator();

  if (Platform.OS === "android") {
    StatusBar.setBackgroundColor("#030D17");
    StatusBar.setTranslucent(false);
  }

  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerStyle: {
          backgroundColor: "#030D17",
          shadowColor: "transparent",
        },
        headerTintColor: "#fff",
        headerTitleAlign: "center",
        headerTitleStyle: {
          fontFamily: theme.fonts.title700,
          fontSize: ms(20),
        },
      }}
    >
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          title: "Decks",
          headerRight: () => <LogoutButton />,
        }}
      />
      <Stack.Screen
        name="MyDeck"
        component={MyDeck}
        options={{ title: "Meu Deck" }}
      />
      <Stack.Screen name="CardDetails" component={CardDetails} />
    </Stack.Navigator>
  );
}
