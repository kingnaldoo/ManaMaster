import { Image, View } from "react-native";
import { ms } from "react-native-size-matters";
import styled from "styled-components";

export const ContainerCardDetails = styled(View)`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.primary};
`;

export const BackgroundCardDetails = styled(Image)`
  position: absolute;
  width: 100%;
  height: 100%;
`;

export const BackgroundCardDetailsOverlay = styled(View)`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgba(3, 13, 23, 0.88);
`;

export const Content = styled(View)`
  flex: 1;
  padding: 0 20px;
  justify-content: center;
  align-items: center;
`;

export const ImgCard = styled(Image)`
  width: 100%;
  min-height: ${ms(600)}px;
  elevation: 10;
  resize-mode: contain;
`;

export const WrapperButton = styled(View)`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-bottom: ${ms(20)}px;
`;
