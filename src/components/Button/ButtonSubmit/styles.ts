import styled from "styled-components";
import { Text, TouchableOpacity, StyleSheet } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import { ms } from "react-native-size-matters";

export const ContainerButtonSubmit = styled(TouchableOpacity)`
  width: 80%;
  border: ${StyleSheet.hairlineWidth}px solid
    ${({ theme }) => theme.colors.whiteText};
  padding: ${ms(5)}px 0;
`;

export const ButtonSubmitText = styled(Text)`
  font-size: ${RFValue(17)}px;
  font-family: ${({ theme }) => theme.fonts.title700};
  color: ${({ theme }) => theme.colors.whiteText};
  text-align: center;
`;
