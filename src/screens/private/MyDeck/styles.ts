import {
  ScrollView,
  View,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  Dimensions,
  Image,
} from "react-native";
import { ms } from "react-native-size-matters";
import styled from "styled-components";
import Icon from "react-native-vector-icons/Feather";
import { RFValue } from "react-native-responsive-fontsize";

const { width } = Dimensions.get("window");

export const ContainerMyDeck = styled(View)`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.primary};
`;

export const Content = styled(ScrollView)`
  flex: 1;
  padding: ${ms(10)}px ${ms(20)}px ${ms(30)}px ${ms(20)}px;
`;

export const CustomDeckSection = styled(View)``;

export const Divider = styled(View)`
  border-bottom-color: ${({ theme }) => theme.colors.grayText};
  border-bottom-width: ${StyleSheet.hairlineWidth}px;
  margin-bottom: ${ms(20)}px;
`;

export const SearchCardSection = styled(View)``;

export const WrapperTitle = styled(View)`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: ${ms(10)}px;
`;

export const WrapperInput = styled(TouchableOpacity)`
  min-height: ${ms(40)}px;
  width: 80%;
  flex-direction: row;
  align-items: center;
`;

export const InputTitle = styled(TextInput)`
  flex: 1;
  padding: 0;
  min-height: ${ms(40)}px;
  font-size: ${RFValue(20)}px;
  font-family: ${({ theme }) => theme.fonts.title700};
  color: ${({ theme }) => theme.colors.yellowText};
`;

export const Title = styled(Text)`
  font-size: ${RFValue(20)}px;
  font-family: ${({ theme }) => theme.fonts.title700};
  color: ${({ theme }) => theme.colors.yellowText};
`;

export const IconEdit = styled(Icon).attrs({
  name: "edit-2",
  size: RFValue(20),
  color: "#DCC600",
})`
  height: ${RFValue(20)}px;
  margin-left: ${ms(10)}px;
`;

export const InputColor = styled(TouchableOpacity)`
  width: ${ms(30)}px;
  height: ${ms(30)}px;
  border-radius: ${ms(15)}px;
  margin-left: ${ms(20)}px;
  background-color: ${({ theme }) => theme.colors.yellowText};
`;

export const WrapperCard = styled(View)`
  width: 100%;
  margin-bottom: ${ms(60)}px;
  min-height: ${ms(150)}px;
`;

export const WrapperButton = styled(View)`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-bottom: ${ms(20)}px;
`;

export const WrapperSearchCard = styled(View)`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-bottom: ${ms(20)}px;
`;

export const SearchField = styled(View)`
  flex-direction: row;
  width: 80%;
  border-radius: ${ms(5)}px;
  border: ${StyleSheet.hairlineWidth}px solid
    ${({ theme }) => theme.colors.grayText};
  padding: 0;
`;

export const SearchFieldInput = styled(TextInput).attrs({
  placeholder: "Pesquise por uma carta",
})`
  flex: 1;
  padding: 0 ${ms(10)}px;
  min-height: ${ms(40)}px;
  font-size: ${RFValue(10)}px;
  font-family: ${({ theme }) => theme.fonts.text400};
  color: ${({ theme }) => theme.colors.whiteText};
`;

export const WrapperSearchButton = styled(TouchableOpacity)`
  width: ${ms(40)}px;
  height: ${ms(40)}px;
  justify-content: center;
  align-items: center;
`;

export const IconSearch = styled(Icon).attrs({
  name: "search",
  size: RFValue(20),
  color: "#757575",
})``;

export const WrapperDeck = styled(View)`
  width: 100%;
  margin-bottom: ${ms(10)}px;
`;

const GAP = ms(15);
const CARD_WIDTH = (width - GAP * 6) / 3;
const CARD_HEIGHT = CARD_WIDTH + CARD_WIDTH * 0.4;

export const CardField = styled(View)`
  width: ${CARD_WIDTH}px;
  height: ${CARD_HEIGHT}px;
  margin-right: ${GAP * 1.6}px;
  margin-bottom: ${GAP * 1.6}px;
  border: 1px dashed ${({ theme }) => theme.colors.whiteText};
`;

export const ButtonCard = styled(TouchableOpacity)``;

export const ImageCard = styled(Image)`
  width: ${CARD_WIDTH}px;
  height: ${CARD_HEIGHT}px;
  margin-right: ${GAP * 1.6}px;
  margin-bottom: ${GAP * 1.6}px;
  border-radius: ${ms(5)}px;
  resize-mode: contain;
`;
