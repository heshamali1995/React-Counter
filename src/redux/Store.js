import { configureStore } from "@reduxjs/toolkit";
import { cartSlice } from "./cartSlice/CartState";
import { favoriteSlice } from "./favoriteSlice/FavoriteState";

const store = configureStore({
    reducer: {
        cartCounter: cartSlice.reducer,
        favoriteCounter: favoriteSlice.reducer
    }
});

export default store;