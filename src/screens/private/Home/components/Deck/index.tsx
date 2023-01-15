import React, { memo, useCallback } from "react";

import { useNavigation } from "@react-navigation/native";
import { CardProps } from "../../../../../redux/modules/card/@types/card";

import { useAuth } from "../../../../../hooks/useAuth";

import { updateDocument } from "../../../../../services";

import {
  ContainerDeck,
  WrapperDelete,
  ContentCards,
  ContentTitle,
  IconDelete,
  Title,
  Card,
} from "./styles";

interface DeckProps {
  id: string;
  title: string;
  color: string;
  cards: CardProps[];
}

function Deck({ id, title, color, cards }: DeckProps) {
  const { navigate } = useNavigation();
  const { getLogin, updateDecks } = useAuth();

  const handleDeleteDeck = useCallback(async () => {
    const newData = getLogin.decks.filter((_, index) => String(index) !== id);
    await updateDocument("users", getLogin.userId, {
      id: getLogin.userId,
      decks: newData,
    });
    updateDecks(id);
  }, [getLogin.decks, getLogin.userId, id, updateDecks]);

  const handleUpdateDeck = useCallback(() => {
    // setCurrentDeck(deckId);
    navigate(
      "MyDeck" as never,
      {
        id,
        title,
        color,
        cards,
      } as never
    );
  }, [cards, color, id, navigate, title]);

  return (
    <ContainerDeck style={{ borderColor: color }} onPress={handleUpdateDeck}>
      <ContentTitle>
        <Title style={{ color }}>{title}</Title>
        <WrapperDelete onPress={handleDeleteDeck}>
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
