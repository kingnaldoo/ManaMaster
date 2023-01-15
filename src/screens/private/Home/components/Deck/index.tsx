import React, { memo } from "react";
import { FlatList } from "react-native";
import {
  Card,
  ContainerDeck,
  ContentCards,
  ContentTitle,
  IconDelete,
  Title,
  WrapperDelete,
} from "./styles";
import { CardProps } from "../../../../../redux/modules/card/@types/card";

type DeckProps = {
  title: string;
  color: string;
  cards: CardProps[];
};

function Deck({ title, color, cards }: DeckProps) {
  return (
    <ContainerDeck style={{ borderColor: color }}>
      <ContentTitle>
        <Title style={{ color }}>{title}</Title>
        <WrapperDelete>
          <IconDelete color={color} />
        </WrapperDelete>
      </ContentTitle>
      <ContentCards style={{ backgroundColor: color }}>
        <Card
          source={{
            uri: cards[0].url,
          }}
        />
      </ContentCards>
    </ContainerDeck>
  );
}

export default memo(Deck);
