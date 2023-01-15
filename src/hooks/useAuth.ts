import { useDispatch, useSelector } from "react-redux";

import { login, logout } from "../redux/modules/auth/reducer";
import { UserProps } from "../redux/modules/auth/@types/user";
import { CardProps } from "../redux/modules/card/@types/card";

export const useAuth = () => {
  const auth = useSelector((state: any) => state.auth) as UserProps;
  const dispacth = useDispatch();

  const setLogin = (user: UserProps) => {
    dispacth(login(user));
  };

  const setLogout = () => {
    dispacth(logout());
  };

  const updateDecks = (idDeck: string) => {
    const newData = auth.decks.filter((_, index) => String(index) !== idDeck);
    const data = {
      id: auth.userId,
      decks: newData,
    };
    dispacth(login(data));
  };

  const addDeck = (deck: CardProps) => {
    const newData = auth.decks.unshift(deck);
    const data = {
      id: auth.userId,
      decks: newData,
    };
    dispacth(login(data));
  };

  const createDeck = () => {
    const deck = {
      id: "",
      title: "Meu deck",
      color: "#fff",
      cards: [
        {
          name: "vazio",
          url: "",
          thumbnailUrl: "",
        },
      ],
    };
    const newData = [...auth.decks, deck];

    const data = {
      id: auth.userId,
      decks: newData,
    };
    dispacth(login(data));
  };

  return {
    getLogin: auth,
    setLogin,
    setLogout,
    updateDecks,
    addDeck,
    createDeck,
  };
};
