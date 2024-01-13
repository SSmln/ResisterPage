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

const initialState = {
  projectComponents: [],
  addProject: false,
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    onProjectAdd: (state, action) => {
      let newProject = {
        inputs: action.payload.inputs,
        name: action.payload.name,
        datetime: action.payload.datetime,
        form: action.payload.form,
      };
      state.projectComponents = [...state.projectComponents, newProject];
    },
    onToggleAddPeoject: (state, action) => {
      state.addProject = action.payload.flag;
    },
  },
});

export const { onProjectAdd, onToggleAddPeoject } = counterSlice.actions;

export default counterSlice.reducer;
