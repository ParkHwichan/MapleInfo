import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import { createWrapper } from "next-redux-wrapper";
import {themeSlice} from "@/store/themeSlice";

export const store = configureStore({
    reducer: {
        [themeSlice.name]: themeSlice.reducer,
    },
    devTools: true,
});

export type AppStore = typeof store;
export type AppState = ReturnType<typeof store.getState>;