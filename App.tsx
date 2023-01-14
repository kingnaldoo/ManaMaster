import "react-native-gesture-handler";
import React, { useEffect } from "react";
import { Platform, StatusBar } from "react-native";
import SplashScreen from "react-native-splash-screen";
import { ThemeProvider } from "styled-components";
import { Routes } from "./src/routes";
import { theme } from "./src/global/styles/theme";
import { ReduxProvider } from "./src/redux";

export default function App() {
  useEffect(() => {
    StatusBar.setBarStyle("light-content");

    if (Platform.OS === "android") {
      StatusBar.setBackgroundColor("transparent");
      StatusBar.setTranslucent(true);
    }

    SplashScreen.hide();
  }, []);

  return (
    <ReduxProvider>
      <ThemeProvider theme={theme}>
        <Routes />
      </ThemeProvider>
    </ReduxProvider>
  );
}
