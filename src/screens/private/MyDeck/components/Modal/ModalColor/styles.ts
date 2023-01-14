import { Dimensions, Text, TouchableOpacity, View } from "react-native";
import { ms } from "react-native-size-matters";
import styled from "styled-components";
import Icon from "react-native-vector-icons/Feather";

const { height } = Dimensions.get("window");

export const ModalBackground = styled(View)`
  width: 100%;
  height: ${height}px;
  background-color: rgba(0, 0, 0, 0.7);
  justify-content: center;
  align-items: center;
`;

export const Content = styled(View)`
  width: 80%;
  background-color: #161616;
  border-radius: 10px;
  padding: ${ms(15)}px 0 0 0;
`;

export const WrapperTitle = styled(View)`
  flex-direction: row;
  justify-content: space-between;
  padding: 0 ${ms(15)}px;
`;

export const Title = styled(Text)`
  width: 80%;
  font-size: ${ms(20)}px;
  color: #fff;
  font-family: ${({ theme }) => theme.fonts.text400};
  text-align: center;
`;

export const WrapperClose = styled(TouchableOpacity)`
  width: 20%;
  align-items: flex-end;
`;

export const IconClose = styled(Icon).attrs({
  name: "x",
  size: ms(20),
  color: "#fff",
})``;

export const WrapperColor = styled(View)`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: ${ms(25)}px ${ms(20)}px;
`;
