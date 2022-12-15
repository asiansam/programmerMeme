// src/redux/modules/config/configStore.js

import { configureStore } from "@reduxjs/toolkit";

import memesCards from "../modules/memesCardsSlice";
import cards from "../modules/memesCardsSlice";


const store = configureStore({
    reducer: {
        memesCards: memesCards,
        cards: cards,
    },
});

export default store;
