import React from "react";
import {
  BackgroundGradient,
  BackgroundLogin,
  ButtonText,
  ContainerLogin,
  Content,
  Footer,
  GoogleIcon,
  IconWrapper,
  OauthButton,
  Subtitle,
  TextWrapper,
  Title,
} from "./styles";
import { useAuth } from "../../../hooks/useAuth";

export function Login() {
  const { setUser } = useAuth();

  return (
    <ContainerLogin>
      <BackgroundLogin />
      <BackgroundGradient />

      <Content>
        <Title>Incremente sua estratégia</Title>
        <Subtitle>
          Criação, o gerenciamento e a otimização facilitados, você consegue
          tudo que precisa para montar seu deck campeão.
        </Subtitle>

        <Footer>
          <OauthButton onPress={() => setUser("fruberv")}>
            <IconWrapper>
              <GoogleIcon />
            </IconWrapper>
            <TextWrapper>
              <ButtonText>Entrar com Google</ButtonText>
            </TextWrapper>
          </OauthButton>
        </Footer>
      </Content>
    </ContainerLogin>
  );
}
