import { createSlice } from "@reduxjs/toolkit";

// Cart Types

const initialState = {
    cartCount: 0,
    cartList: []
}

// Cart Reducers

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        incrementCart: (state, action) => {
            state.cartCount += 1;
            state.cartList.push(action.payload);
        },
        decrementCart: (state, action) => {
            state.cartCount -= 1;
            state.cartList.map((item, index) => {
                if (action.payload.id === item.id) {
                    state.cartList.splice(index, 1)
                }
            })
        },
        removeAll: (state, action) => {
            state.cartList = [];
            state.cartCount = 0;
        }
    }
});

// Cart Actions

const { incrementCart, decrementCart, removeAll } = cartSlice.actions;

export {
    cartSlice,
    incrementCart,
    decrementCart,
    removeAll
}