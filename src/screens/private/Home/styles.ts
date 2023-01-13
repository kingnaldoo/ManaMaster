import { ScrollView, View } from "react-native";
import { ms } from "react-native-size-matters";
import styled from "styled-components";

export const ContainerHome = styled(View)`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.primary};
`;

export const Content = styled(ScrollView)`
  flex: 1;
  padding: ${ms(20)}px ${ms(20)}px ${ms(40)}px ${ms(20)}px;
`;
