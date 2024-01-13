// 'use client'

// import { createSlice } from "@reduxjs/toolkit"

// export interface counterState {
// value: string

// }
// const initialState: counterState ={
//     value: ""
// }

// export const counterSlice = createSlice ({
//     name: 'counter',
//     initialState,
//     reducers: {
//         increment : (state) => {state.value},
//         incre

//     }
// })

// export const {increment } = counterSlice.actions;

// export default counterSlice.reducer;

"use client";

import { createSlice } from "@reduxjs/toolkit";


const initialState ={
    AddingwordsInputs: [{
        Product_name_Add_side_phrase: "",
        Product_name_Add_back_phrase: "",
        Add_product_description_top_phrase: "",
        Add_product_description_below_phrase: "",
}]
   
  
}

export const counterSlice = createSlice ({
    name: 'counter',
    initialState,
    reducers: {
        onProjectAdd: (state=initialState , action) => {
                return {
                    ...state,
                    AddingwordsInputs:action.payload
                }
            
            }
            
            
        }

    })

export const {onProjectAdd} = counterSlice.actions;

export default counterSlice.reducer;
