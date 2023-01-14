import React from "react";
import {
  Card,
  ContainerDeck,
  ContentCards,
  ContentTitle,
  IconDelete,
  Title,
  WrapperDelete,
} from "./styles";

export function Deck() {
  return (
    <ContainerDeck>
      <ContentTitle>
        <Title>Armador</Title>
        <WrapperDelete>
          <IconDelete />
        </WrapperDelete>
      </ContentTitle>
      <ContentCards>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </ContentCards>
    </ContainerDeck>
  );
}
