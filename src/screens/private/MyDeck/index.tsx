import React, { useCallback } from "react";

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
import { useAuth } from "../../../hooks/useAuth";

export function MyDeck() {
  const { navigate } = useNavigation();
  const [isEditableTitle, setIsEditableTitle] = React.useState(false);
  const [title, setTitle] = React.useState("Meu deck");
  const [loading, setLoading] = React.useState(false);
  const [modalVisible, setModalVisible] = React.useState(false);
  const { getLogin } = useAuth();

  const handleSearchCard = useCallback(() => {
    setLoading(true);
  }, []);

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
                  data={getLogin.decks[0].cards}
                  keyExtractor={(item) => item}
                  numColumns={3}
                  renderItem={({ item }) => {
                    return item.url ? (
                      <ButtonCard
                        onPress={() => navigate("CardDetails" as never)}
                      >
                        <ImageCard
                          source={{
                            uri: item.url,
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
                  {/* <FlatList
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
                  /> */}
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
