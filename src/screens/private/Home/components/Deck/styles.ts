import { Dimensions, Image, Text, TouchableOpacity, View } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components";
import Icon from "react-native-vector-icons/Feather";
import { ms } from "react-native-size-matters";

const { width } = Dimensions.get("window");

export const ContainerDeck = styled(TouchableOpacity)`
  width: ${width - ms(40)}px;
  margin-bottom: ${ms(30)}px;
  border-radius: ${ms(10)}px;
  border: 1px solid ${({ theme }) => theme.colors.whiteText};
`;

export const ContentTitle = styled(View)`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0 0 0 ${ms(15)}px;
`;

export const Title = styled(Text)`
  font-size: ${RFValue(20)}px;
  font-family: ${({ theme }) => theme.fonts.title700};
  /* color: ${({ theme }) => theme.colors.whiteText}; */
`;

export const WrapperDelete = styled(TouchableOpacity)`
  justify-content: center;
  align-items: center;
  height: ${ms(45)}px;
  width: ${ms(60)}px;
`;

export const IconDelete = styled(Icon).attrs({
  name: "trash-2",
  size: RFValue(23),
  // color: "#fff",
})``;

export const ContentCards = styled(View)`
  background-color: ${({ theme }) => theme.colors.whiteText};
  padding: ${ms(10)}px ${ms(15)}px;
  height: 100px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  border-bottom-left-radius: ${ms(8)}px;
  border-bottom-right-radius: ${ms(8)}px;
`;

export const Card = styled(Image)`
  height: 100%;
  width: 13%;
  resize-mode: contain;
`;
