import React, { useCallback, useState } from "react";
import { ActivityIndicator, FlatList, ScrollView } from "react-native";
import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";

import { ButtonSubmit, Card } from "../../../components";
import { ModalColor } from "./components/Modal/ModalColor";

import { useAuth } from "../../../hooks/useAuth";

import { api, updateDocument } from "../../../services";

import { CardProps } from "../../../redux/modules/card/@types/card";
import { DeckProps } from "../../../redux/modules/deck/@types/deck";

import {
  WrapperSearchButton,
  WrapperSearchCard,
  CustomDeckSection,
  SearchCardSection,
  SearchFieldInput,
  ContainerMyDeck,
  WrapperButton,
  WrapperInput,
  WrapperTitle,
  WrapperCard,
  WrapperDeck,
  SearchField,
  IconSearch,
  InputColor,
  InputTitle,
  IconEdit,
  Content,
  Divider,
  Title,
  // ImageCard,
} from "./styles";

type PropsParams = RouteProp<{ params: DeckProps }, "params">;

export function MyDeck() {
  const { navigate } = useNavigation();
  const { params } = useRoute<PropsParams>();
  const { title, color, cards } = params;

  const [isEditableTitle, setIsEditableTitle] = useState(false);

  const [titleDeck, setTitleDeck] = useState(title);
  const [colorDeck, setColorDeck] = useState(color);

  const [loading, setLoading] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);

  const [searchInputText, setSearchInputText] = useState("");

  const [data, setData] = useState<CardProps[]>([]);

  const handleViewDetails = useCallback(
    (card: CardProps) => {
      navigate(
        "CardDetails" as never,
        {
          card,
          cardsInDeck: cards,
        } as never
      );
    },
    [cards, navigate]
  );

  const handleSearchCard = useCallback(async () => {
    setLoading(true);

    api
      .get("/cards/search", {
        params: {
          q: searchInputText,
        },
      })
      .then(async (res) => {
        const result = res.data;
        const cardsResult: CardProps[] = [];

        await result.data.forEach((item: any) => {
          if (item.image_uris) {
            cardsResult.push({
              id: "",
              name: item.name,
              url: item.image_uris?.png,
              thumbnailUrl: item.image_uris?.art_crop,
            });
          }
        });

        setData(cardsResult);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [searchInputText]);

  return (
    <>
      <ContainerMyDeck>
        <Content nestedScrollEnabled>
          <CustomDeckSection>
            <WrapperTitle>
              {isEditableTitle ? (
                <InputTitle
                  value={titleDeck}
                  onChangeText={(value) => setTitleDeck(value)}
                  autoFocus
                  onBlur={() => setIsEditableTitle(false)}
                  style={{
                    color: colorDeck,
                  }}
                />
              ) : (
                <WrapperInput onPress={() => setIsEditableTitle(true)}>
                  <Title
                    style={{
                      color: colorDeck,
                    }}
                  >
                    {titleDeck}
                  </Title>
                  <IconEdit
                    style={{
                      color: colorDeck,
                    }}
                  />
                </WrapperInput>
              )}

              <InputColor
                onPress={() => setModalVisible(true)}
                style={{
                  backgroundColor: colorDeck,
                }}
              />
            </WrapperTitle>

            <WrapperDeck>
              <ScrollView horizontal scrollEnabled={false}>
                <FlatList
                  data={cards}
                  keyExtractor={(item, index) => index.toString()}
                  numColumns={3}
                  renderItem={({ item }) => {
                    return <Card image={item.url} />;
                  }}
                />
              </ScrollView>
            </WrapperDeck>
          </CustomDeckSection>

          <Divider />

          <SearchCardSection>
            <WrapperSearchCard>
              <SearchField>
                <SearchFieldInput
                  value={searchInputText}
                  onChangeText={(value) => setSearchInputText(value)}
                  onSubmitEditing={handleSearchCard}
                />
                <WrapperSearchButton onPress={handleSearchCard}>
                  <IconSearch />
                </WrapperSearchButton>
              </SearchField>
            </WrapperSearchCard>

            {loading ? (
              <WrapperButton>
                <ActivityIndicator color="#FFF" />
              </WrapperButton>
            ) : (
              <WrapperCard>
                <ScrollView
                  horizontal
                  scrollEnabled={false}
                  style={{ flex: 1 }}
                >
                  <FlatList
                    data={data}
                    keyExtractor={(item, index) => index.toString()}
                    numColumns={3}
                    renderItem={({ item, index }) => {
                      return (
                        <Card
                          image={item.url}
                          onPress={() => handleViewDetails(data[index])}
                        />
                      );
                    }}
                  />
                </ScrollView>
              </WrapperCard>
            )}
          </SearchCardSection>
        </Content>
      </ContainerMyDeck>
      <ModalColor
        isVisible={modalVisible}
        onClose={() => setModalVisible(false)}
      />
    </>
  );
}
