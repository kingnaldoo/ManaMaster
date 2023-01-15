import React, { useCallback } from "react";
import { TouchableOpacityProps } from "react-native";

import { ButtonSubmitText, ContainerButtonSubmit } from "./styles";

interface ButtonSubmitProps extends TouchableOpacityProps {
  title: string;
  type: "green" | "red";
}

export function ButtonSubmit({ title, type, ...rest }: ButtonSubmitProps) {
  const [isClicked, setIsClicked] = React.useState(false);

  const verifyCurrentColor = useCallback(() => {
    if (isClicked) {
      return type === "green" ? "#147B14" : "#731010";
    }

    return type === "green" ? "#083408" : "#2F0606";
  }, [isClicked, type]);

  return (
    <ContainerButtonSubmit
      style={{
        backgroundColor: verifyCurrentColor(),
      }}
      onPressIn={() => setIsClicked(true)}
      onPressOut={() => setIsClicked(false)}
      {...rest}
    >
      <ButtonSubmitText>{title}</ButtonSubmitText>
    </ContainerButtonSubmit>
  );
}
