import { Text, TouchableOpacity } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import { ms } from "react-native-size-matters";
import styled from "styled-components";

export const Button = styled(TouchableOpacity)`
  justify-content: center;
  align-items: center;
  flex: 1;
  margin-right: ${ms(20)}px;
`;

export const TextButton = styled(Text)`
  font-family: ${({ theme }) => theme.fonts.text400};
  font-size: ${RFValue(15)}px;
  color: ${({ theme }) => theme.colors.whiteText};
`;
