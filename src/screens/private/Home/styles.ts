import { ScrollView, TouchableOpacity, View } from "react-native";
import styled from "styled-components";

import { ms } from "react-native-size-matters";
import Icon from "react-native-vector-icons/Feather";

export const ContainerHome = styled(View)`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.primary};
`;

export const Content = styled(ScrollView)`
  flex: 1;
  padding: ${ms(10)}px ${ms(20)}px ${ms(30)}px ${ms(20)}px;
`;

export const FloatingButton = styled(TouchableOpacity)`
  position: absolute;
  bottom: ${ms(30)}px;
  right: ${ms(20)}px;
  width: ${ms(55)}px;
  height: ${ms(55)}px;
  border-radius: ${ms(30)}px;
  background-color: ${({ theme }) => theme.colors.yellowText};
  justify-content: center;
  align-items: center;
  elevation: 5;
`;

export const ButtonIcon = styled(Icon).attrs({
  name: "plus",
  size: ms(40),
  color: "#fff",
})``;
