import React from "react";
import { Modal, ModalProps } from "react-native";
import ColorPicker, { HueSlider } from "reanimated-color-picker";
import {
  Content,
  IconClose,
  ModalBackground,
  Title,
  WrapperClose,
  WrapperColor,
  WrapperTitle,
} from "./styles";

interface ModalColorProps extends ModalProps {
  isVisible: boolean;
  onClose: () => void;
}

export function ModalColor({ isVisible, onClose, ...rest }: ModalColorProps) {
  return (
    <Modal visible={isVisible} transparent {...rest}>
      <ModalBackground>
        <Content>
          <WrapperTitle>
            <Title>Selecione uma cor</Title>
            <WrapperClose onPress={onClose}>
              <IconClose />
            </WrapperClose>
          </WrapperTitle>

          <WrapperColor>
            <ColorPicker>
              <HueSlider />
            </ColorPicker>
          </WrapperColor>
        </Content>
      </ModalBackground>
    </Modal>
  );
}
