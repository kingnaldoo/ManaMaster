import React, { useCallback } from "react";
import {
  TransitionPresets,
  createStackNavigator,
} from "@react-navigation/stack";
import { Platform, StatusBar } from "react-native";
import { ms } from "react-native-size-matters";
import { useNavigation } from "@react-navigation/native";
import { CardDetails, Home, MyDeck } from "../screens";
import { theme } from "../global/styles/theme";
import { Button, IconReturn, TextButton } from "./styles";
import { useAuth } from "../hooks/useAuth";
import { signOut } from "../services";

function LogoutButton() {
  const { setLogout } = useAuth();

  const handleSignOut = useCallback(() => {
    signOut().then(() => {
      setLogout();
      console.log("deslogado");
    });
  }, [setLogout]);

  return (
    <Button onPress={handleSignOut}>
      <TextButton>Sair</TextButton>
    </Button>
  );
}

function ReturnButton() {
  const { goBack } = useNavigation();

  return (
    <Button onPress={() => goBack()}>
      <IconReturn />
    </Button>
  );
}

const Stack = createStackNavigator();

export function PrivateRoutes() {
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
        ...TransitionPresets.SlideFromRightIOS,
      }}
    >
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          title: "Decks",
          headerRight: LogoutButton,
        }}
      />
      <Stack.Group
        screenOptions={{
          headerLeft: ReturnButton,
        }}
      >
        <Stack.Screen
          name="MyDeck"
          component={MyDeck}
          options={{ title: "Meu Deck" }}
        />
        <Stack.Screen
          name="CardDetails"
          component={CardDetails}
          options={{
            headerTransparent: true,
          }}
        />
      </Stack.Group>
    </Stack.Navigator>
  );
}
