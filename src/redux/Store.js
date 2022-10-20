import { configureStore } from "@reduxjs/toolkit";
import { cartSlice } from "./CartSlice/CartSlice";
import { favoriteSlice } from "./FavoriteSlice/FavoriteSlice";

const store = configureStore({
    reducer: {
        cartCounter: cartSlice.reducer,
        favoriteCounter: favoriteSlice.reducer
    }
});

export default store;