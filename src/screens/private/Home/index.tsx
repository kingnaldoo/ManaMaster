import React from "react";
import { useNavigation } from "@react-navigation/native";
import { FlatList } from "react-native";
import { ButtonIcon, ContainerHome, Content, FloatingButton } from "./styles";
import Deck from "./components/Deck";
import { useAuth } from "../../../hooks/useAuth";

export function Home() {
  const { navigate } = useNavigation();
  const { getLogin } = useAuth();

  return (
    <ContainerHome>
      <Content>
        <FlatList
          data={getLogin.decks}
          keyExtractor={(item, index) => index.toString()}
          horizontal
          renderItem={({ item }) => {
            return (
              <Deck title={item.title} color={item.color} cards={item.cards} />
            );
          }}
        />
      </Content>
      <FloatingButton onPress={() => navigate("MyDeck" as never)}>
        <ButtonIcon />
      </FloatingButton>
    </ContainerHome>
  );
}
