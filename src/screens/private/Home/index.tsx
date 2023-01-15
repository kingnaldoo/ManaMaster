import React, { useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { FlatList } from "react-native";

import Deck from "./components/Deck";

import { useAuth } from "../../../hooks/useAuth";

import { ButtonIcon, ContainerHome, Content, FloatingButton } from "./styles";
import { getDocument, updateDocument } from "../../../services";
import { UserProps } from "../../../redux/modules/auth/@types/user";

export function Home() {
  const { navigate, addListener } = useNavigation();
  const { getLogin, createDeck, setLogin } = useAuth();

  const handleCreateNewDeck = async () => {
    try {
      const deck = {
        id: "",
        title: "Meu deck",
        color: "#fff",
        cards: [
          {
            name: "vazio",
            url: "",
            thumbnailUrl: "",
          },
        ],
      };
      const newData = [...getLogin.decks, deck];

      await updateDocument("users", getLogin.userId, {
        id: getLogin.userId,
        decks: newData,
      });
      navigate("MyDeck" as never);
      // createDeck();
    } catch (error) {
      console.log("error: ", error);
    }
  };

  useEffect(() => {
    const focusListener = addListener("focus", async () => {
      const data = await getDocument("users", getLogin.userId);
      const { decks } = data.data() as UserProps;
      setLogin({
        ...getLogin,
        decks,
      });
    });
    return focusListener;
  }, [addListener, getLogin, setLogin]);

  return (
    <ContainerHome>
      <Content>
        <FlatList
          data={getLogin.decks}
          keyExtractor={(item, index) => index.toString()}
          horizontal
          renderItem={({ item, index }) => {
            return (
              <Deck
                id={String(index)}
                title={item.title}
                color={item.color}
                cards={item.cards}
              />
            );
          }}
        />
      </Content>
      <FloatingButton onPress={() => handleCreateNewDeck()}>
        <ButtonIcon />
      </FloatingButton>
    </ContainerHome>
  );
}
