import { createSlice } from "@reduxjs/toolkit";

// Cart Types

const initialState = {
    cartList: [],
    itemsPrices: [],
    totalPrice: 0,
    counter: 0,
    cartButtonClicked: false
}

// Cart Reducers

const cartSlice = createSlice({
    name: "counter",
    initialState,
    reducers: {
        incrementCart: (state, action) => {
            state.counter = state.counter + 1;
            state.cartButtonClicked = true;
            state.cartList.push(action.payload);
        },
        removeFromCart: (state, action) => {
            state.counter = state.counter - 1;
            state.cartList.map((prod, i) => {
                if (action.payload.id === prod.id) {
                  state.cartList.splice(i, 1);
                }
            });
        },
        removeAll: (state, action) => {
            state.cartList = [];
            state.itemsPrices = [];
            state.counter = 0;
        }
    }
});

// Cart Actions

const { incrementCart, removeFromCart, removeAll } = cartSlice.actions;

export {
    cartSlice,
    incrementCart,
    removeFromCart,
    removeAll
}