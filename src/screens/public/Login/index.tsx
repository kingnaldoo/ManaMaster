import React, { useCallback } from "react";

import { createDocument, getDocument, signIn } from "../../../services";

import { UserProps } from "../../../redux/modules/auth/@types/user";

import { useAuth } from "../../../hooks/useAuth";

import {
  BackgroundGradient,
  BackgroundLogin,
  ContainerLogin,
  IconWrapper,
  OauthButton,
  TextWrapper,
  ButtonText,
  GoogleIcon,
  Subtitle,
  Content,
  Footer,
  Title,
} from "./styles";

export function Login() {
  const { setLogin } = useAuth();

  const handleSignUp = useCallback(
    async (userId: string) => {
      const user = {
        userId,
        decks: [],
      };

      await createDocument("users", userId, user)
        .then(() => {
          setLogin(user);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    [setLogin]
  );

  const handleLogin = useCallback(async () => {
    await signIn().then(async (res) => {
      const userId = res.user.id;

      if (userId) {
        await getDocument("users", "oEZoBVlUUJemP32KMr6u")
          .then(async (doc) => {
            if (doc.exists) {
              const user = doc.data() as UserProps;
              setLogin(user);
            } else {
              await handleSignUp(userId).catch((err) => {
                console.log(err);
              });
            }
          })
          .catch((err) => {
            console.log(err);
          });
      }
    });
  }, [handleSignUp, setLogin]);

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
          <OauthButton onPress={handleLogin}>
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
