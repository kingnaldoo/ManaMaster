import React from "react";
import { useNavigation } from "@react-navigation/native";
import { ButtonIcon, ContainerHome, Content, FloatingButton } from "./styles";
import { Deck } from "./components/Deck";

export function Home() {
  const { navigate } = useNavigation();

  return (
    <ContainerHome>
      <Content>
        <Deck />
        <Deck />
        <Deck />
        <Deck />
        <Deck />
        <Deck />
      </Content>
      <FloatingButton onPress={() => navigate("MyDeck" as never)}>
        <ButtonIcon />
      </FloatingButton>
    </ContainerHome>
  );
}
