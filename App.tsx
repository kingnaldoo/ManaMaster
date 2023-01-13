import "react-native-gesture-handler";
import React, { useEffect } from "react";
import { Platform, StatusBar } from "react-native";
import SplashScreen from "react-native-splash-screen";
import { Routes } from "./src/routes";

export default function App() {
  useEffect(() => {
    StatusBar.setBarStyle("light-content");

    if (Platform.OS === "android") {
      StatusBar.setBackgroundColor("transparent");
      StatusBar.setTranslucent(false);
    }

    SplashScreen.hide();
  }, []);

  return <Routes />;
}
