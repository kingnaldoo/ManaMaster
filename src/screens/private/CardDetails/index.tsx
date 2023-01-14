import React from "react";
import {
  BackgroundCardDetails,
  BackgroundCardDetailsOverlay,
  ContainerCardDetails,
  Content,
  ImgCard,
  WrapperButton,
} from "./styles";
import { ButtonSubmit } from "../../../components";

export function CardDetails() {
  return (
    <ContainerCardDetails>
      <BackgroundCardDetails
        source={{
          uri: "https://cards.scryfall.io/art_crop/front/9/1/91d9bb89-d8f8-4dff-8b94-3f7b8aa8f299.jpg?1593274717",
        }}
      />
      <BackgroundCardDetailsOverlay />

      <Content>
        <ImgCard
          source={{
            uri: "https://cards.scryfall.io/png/front/9/1/91d9bb89-d8f8-4dff-8b94-3f7b8aa8f299.png?1593274717",
          }}
        />

        <WrapperButton>
          <ButtonSubmit title="Adicionar ao Deck" type="green" />
        </WrapperButton>
      </Content>
    </ContainerCardDetails>
  );
}
