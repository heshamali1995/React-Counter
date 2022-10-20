import { createSlice } from "@reduxjs/toolkit";

// Favorites Types

const initialState = {
    favorite: 0,
    favoriteList: []
}

// Favorites Reducers

const favoriteSlice = createSlice({
    name: "favorite",
    initialState,
    reducers: {
        incrementFavorites: (state, action) => {
            state.favorite += 1;
            state.favoriteList.push(action.payload)
        },
        removeFromFavorites: (state, action) => {
            state.favorite -= 1;
            state.favoriteList.map((prod, i) => {
                if (action.payload.id === prod.id) {
                  state.favoriteList.splice(i, 1);
                }
              });
        },
        removeAll: (state, action) => {
            state.favoriteList = [];
            state.favorite = 0;
        }
    }
});

// Favorites Actions

const { incrementFavorites, removeFromFavorites, removeAll } = favoriteSlice.actions;

export {
    favoriteSlice,
    incrementFavorites,
    removeFromFavorites,
    removeAll
}