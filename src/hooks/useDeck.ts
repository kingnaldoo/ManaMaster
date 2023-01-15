import { useAuth } from "./useAuth";
import { DeckProps } from "../redux/modules/deck/@types/deck";

export const useDeck = () => {
  const { getLogin, setLogin } = useAuth();

  const getDeck = (deckId: number) => {
    const value = getLogin.decks[deckId];
    return value;
  };

  const setDeck = (deckId: number, deck: DeckProps) => {
    const value = setLogin({
      ...getLogin,
      decks: [...getLogin.decks[deckId], deck],
    });
    return value;
  };

  return { getDeck, setDeck };
};
