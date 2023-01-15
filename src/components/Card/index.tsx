import React, { memo } from "react";
import { TouchableOpacityProps } from "react-native";

import { ButtonCard, ImageCard } from "./styles";

import CardField from "../../assets/images/card-field.png";

interface CardProps extends TouchableOpacityProps {
  image: string;
}

export function Card({ image, ...rest }: CardProps) {
  console.log("IMAGE: ", image);

  return (
    <ButtonCard {...rest}>
      <ImageCard
        source={
          image
            ? {
                uri: image,
              }
            : CardField
        }
      />
    </ButtonCard>
  );
}

export default memo(Card);
