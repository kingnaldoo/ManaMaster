import React from "react";

import { ActivityIndicator, FlatList, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { ButtonSubmit } from "../../../components";

import {
  ButtonCard,
  CardField,
  ContainerMyDeck,
  Content,
  CustomDeckSection,
  Divider,
  IconEdit,
  IconSearch,
  ImageCard,
  InputColor,
  InputTitle,
  SearchCardSection,
  SearchField,
  SearchFieldInput,
  Title,
  WrapperButton,
  WrapperCard,
  WrapperDeck,
  WrapperInput,
  WrapperSearchButton,
  WrapperSearchCard,
  WrapperTitle,
} from "./styles";
import { ModalColor } from "./components/Modal/ModalColor";

export function MyDeck() {
  const { navigate } = useNavigation();
  const [isEditableTitle, setIsEditableTitle] = React.useState(false);
  const [title, setTitle] = React.useState("Meu deck");
  const [loading, setLoading] = React.useState(false);
  const [modalVisible, setModalVisible] = React.useState(false);

  const data = [
    {
      id: "1",
      name: "Mago",
      image:
        "https://cards.scryfall.io/small/front/d/2/d2028115-f0de-4e8b-99bc-7369352e1e07.jpg?1673306647",
    },
    {
      id: "2",
      name: "Guerreiro",
      image:
        "https://cards.scryfall.io/large/front/7/9/79b12c44-9537-4863-a678-c982e8714a5a.jpg?1659102058",
    },
    {
      id: "3",
      name: "Arqueiro",
      image:
        "https://cards.scryfall.io/large/front/8/a/8a7df52e-fa91-4c2b-a465-47274bf7e6aa.jpg?1660688195",
    },
    {
      id: "4",
      name: "Mago",
      image:
        "https://cards.scryfall.io/large/front/3/9/396f9198-67b6-45d8-91b4-dc853bff9623.jpg?1660722100",
    },
    {
      id: "5",
      name: "Guerreiro",
      image: "",
    },
    {
      id: "6",
      name: "Arqueiro",
      image: "",
    },
  ];

  return (
    <>
      <ContainerMyDeck>
        <Content nestedScrollEnabled>
          <CustomDeckSection>
            <WrapperTitle>
              {isEditableTitle ? (
                <InputTitle
                  value={title}
                  onChangeText={(value) => setTitle(value)}
                  autoFocus
                  onBlur={() => setIsEditableTitle(false)}
                />
              ) : (
                <WrapperInput onPress={() => setIsEditableTitle(true)}>
                  <Title>{title}</Title>
                  <IconEdit />
                </WrapperInput>
              )}

              <InputColor onPress={() => setModalVisible(true)} />
            </WrapperTitle>

            <WrapperDeck>
              <ScrollView horizontal scrollEnabled={false}>
                <FlatList
                  data={data}
                  keyExtractor={(item) => item.id}
                  numColumns={3}
                  renderItem={({ item }) => {
                    return item.image ? (
                      <ButtonCard
                        onPress={() => navigate("CardDetails" as never)}
                      >
                        <ImageCard
                          source={{
                            uri: item.image,
                          }}
                        />
                      </ButtonCard>
                    ) : (
                      <CardField key={item.id} />
                    );
                  }}
                />
              </ScrollView>
            </WrapperDeck>

            <WrapperButton>
              <ButtonSubmit title="Excluir Deck" type="red" />
            </WrapperButton>
          </CustomDeckSection>

          <Divider />

          <SearchCardSection>
            <WrapperSearchCard>
              <SearchField>
                <SearchFieldInput />
                <WrapperSearchButton>
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
                    keyExtractor={(item) => item.id}
                    numColumns={3}
                    renderItem={({ item }) => {
                      return (
                        item.image && (
                          <ButtonCard>
                            <ImageCard
                              source={{
                                uri: item.image,
                              }}
                            />
                          </ButtonCard>
                        )
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
