import React, { useCallback } from "react";
import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";

import { ButtonSubmit } from "../../../components";

import { CardProps } from "../../../redux/modules/card/@types/card";

import { useAuth } from "../../../hooks/useAuth";

import {
  BackgroundCardDetailsOverlay,
  BackgroundCardDetails,
  ContainerCardDetails,
  WrapperButton,
  Content,
  ImgCard,
} from "./styles";

type CardDetailsProps = {
  card: CardProps;
  cardsInDeck: CardProps[];
};

type PropsParams = RouteProp<{ params: CardDetailsProps }, "params">;

export function CardDetails() {
  const { setOptions } = useNavigation();
  const { params } = useRoute<PropsParams>();
  const { card, cardsInDeck } = params;

  setOptions({
    title: card.name,
  });

  const verifyCardInDeck = useCallback(() => {
    const cardInDeck = cardsInDeck.find((value: CardProps) => {
      return value.name === card.name;
    });

    return cardInDeck;
  }, [card.name, cardsInDeck]);

  return (
    <ContainerCardDetails>
      <BackgroundCardDetails
        source={{
          uri: card.thumbnailUrl,
        }}
      />
      <BackgroundCardDetailsOverlay />

      <Content>
        <ImgCard
          source={{
            uri: card.url,
          }}
        />

        <WrapperButton>
          {verifyCardInDeck() ? (
            <ButtonSubmit
              title="Remover do Deck"
              type="red"
              // onPress={() => {}}
            />
          ) : (
            <ButtonSubmit
              title="Adicionar ao Deck"
              type="green"
              // onPress={() => {}}
            />
          )}
        </WrapperButton>
      </Content>
    </ContainerCardDetails>
  );
}
