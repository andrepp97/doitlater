import { createSlice } from "@reduxjs/toolkit";

const initialState = null;

const addTodoReducer = createSlice({
    name: "whattodo",

    initialState,

    reducers: {
        // Add Initial
        initialList: (state, action) => {
            state = action.payload;
            return state;
        },
        
        // Add item to list
        addItem: (state, action) => {
            state.push(action.payload);
            return state;
        },

        // Remove item from list
        removeItem: (state, action) => {
            return state.filter((item) => item.id !== action.payload);
        },

        // Update item
        updateItem: (state, action) => {
            let temp = [...state];
            temp = temp.map(item => item.id !== action.payload.id ? item : action.payload);
            return temp;
        },
    },

});

export const {
    initialList,
    addItem,
    removeItem,
    updateItem,
} = addTodoReducer.actions;
export const reducer = addTodoReducer.reducer;