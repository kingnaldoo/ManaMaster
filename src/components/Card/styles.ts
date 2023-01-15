import styled from "styled-components";
import { Dimensions, Image, TouchableOpacity } from "react-native";

import { ms } from "react-native-size-matters";

const { width } = Dimensions.get("window");

const GAP = ms(15);
const CARD_WIDTH = (width - GAP * 6) / 3;
const CARD_HEIGHT = CARD_WIDTH + CARD_WIDTH * 0.4;

export const ButtonCard = styled(TouchableOpacity)``;

export const ImageCard = styled(Image)`
  width: ${CARD_WIDTH}px;
  height: ${CARD_HEIGHT}px;
  margin-right: ${GAP * 1.6}px;
  margin-bottom: ${GAP * 1.6}px;
  border-radius: ${ms(5)}px;
  resize-mode: contain;
`;

export { GAP, CARD_WIDTH, CARD_HEIGHT };
