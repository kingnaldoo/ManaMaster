import { Image, Text, TouchableOpacity, View } from "react-native";
import styled from "styled-components";

import LinearGradient from "react-native-linear-gradient";
import { ms } from "react-native-size-matters";
import { RFValue } from "react-native-responsive-fontsize";
import BackgroundImg from "../../../assets/images/login_background.png";
import GoogleImg from "../../../assets/images/google.png";

export const ContainerLogin = styled(View)`
  flex: 1;
`;

export const BackgroundLogin = styled(Image).attrs({
  source: BackgroundImg,
})`
  position: absolute;
  height: 100%;
  left: -95%;
`;

export const BackgroundGradient = styled(LinearGradient).attrs({
  colors: ["rgba(0,0,0,0)", "rgba(3, 13, 23, 1)"],
  start: { x: 0, y: 0 },
  end: { x: 0, y: 0.5 },
})`
  position: absolute;
  bottom: 0;
  height: 50%;
  width: 100%;
`;

export const Content = styled(View)`
  flex: 1;
  padding: 0 ${ms(20)}px ${ms(40)}px ${ms(20)}px;
  justify-content: flex-end;
`;

export const Title = styled(Text)`
  font-size: ${RFValue(40)}px;
  font-family: ${({ theme }) => theme.fonts.title700};
  color: ${({ theme }) => theme.colors.yellowText};
  line-height: ${RFValue(40)}px;
  margin-bottom: ${ms(10)}px;
`;

export const Subtitle = styled(Text)`
  font-size: ${RFValue(15)}px;
  font-family: ${({ theme }) => theme.fonts.text400};
  color: ${({ theme }) => theme.colors.whiteText};
  margin-bottom: ${ms(70)}px;
`;

export const Footer = styled(View)`
  align-items: center;
`;

export const OauthButton = styled(TouchableOpacity)`
  width: 80%;
  background-color: #f4f4f4;
  flex-direction: row;
  padding: ${ms(10)}px ${ms(10)}px;
  border-radius: ${ms(5)}px;
`;

export const IconWrapper = styled(View)`
  width: 20%;
  justify-content: center;
  align-items: center;
`;

export const TextWrapper = styled(View)`
  width: 80%;
  justify-content: center;
  align-items: center;
`;

export const GoogleIcon = styled(Image).attrs({
  source: GoogleImg,
})`
  width: ${ms(25)}px;
  height: ${ms(25)}px;
`;

export const ButtonText = styled(Text)`
  width: 80%;
  text-align: center;
  font-size: ${RFValue(15)}px;
  font-family: ${({ theme }) => theme.fonts.text400};
  color: ${({ theme }) => theme.colors.primary};
`;
