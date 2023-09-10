"use client";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {HYDRATE} from "next-redux-wrapper";
import {AppState} from "@/store/store";
import Cookies from "js-cookie";

export interface ThemeState {
    darkMode: boolean;
}


const initialState: ThemeState = {
    darkMode:  Cookies.get("darkMode") === "true",
};


export const themeSlice = createSlice({
    name: "theme",
    initialState,
    reducers: {
        setDarkMode(state,
                    action: PayloadAction<Partial<ThemeState>>) {
           if(action.payload.darkMode)
                state.darkMode = action.payload.darkMode;
           else
               state.darkMode = false;

        },
    },
});

export const {setDarkMode} = themeSlice.actions;

export const selectThemeState = (state: AppState) => state.theme;

export default themeSlice.reducer;