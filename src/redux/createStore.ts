import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./modules/auth/reducer";
import deckReducer from "./modules/deck/reducer";
import cardReducer from "./modules/card/reducer";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    deck: deckReducer,
    card: cardReducer,
  },
});
