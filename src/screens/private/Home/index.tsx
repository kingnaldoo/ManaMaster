import React from "react";
import { ContainerHome, Content } from "./styles";
import { Deck } from "./components/Deck";

export function Home() {
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
    </ContainerHome>
  );
}
