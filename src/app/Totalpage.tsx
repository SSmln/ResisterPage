"use client";
import React, { useState } from "react";
import type { RootState } from "./GlobalRedux/store";
import { useSelector, useDispatch } from "react-redux";
import Tempalte from "./components/Tempalte";
import Receivement from "./components/Receivement";
import Itemsetting from "./components/Itemsetting";

// import {
//   increment,
//   decrement,
//   incrementByAmount,
// } from "./GlobalRedux/Features/counter/counterSlice";
import Addingwords from "./components/Addingwords";

export default function Totalpage() {
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch();

  const [inputs, setInputs] = useState({});
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(inputs);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Addingwords />
        {/* <Addingwords /> */}

        {/*
        <Tempalte />
        <br />

        <Itemsetting />
        <br />
        <Receivement />
        <br />
        <Addingwords /> */}
      </form>
    </div>
  );
}

// "use client";
// import React from "react";
// import type { RootState } from "@reduxjs/toolkit/query";
// import Itemsetting from "./components/Itemsetting";
// import Tempalte from "./components/Tempalte";
// import Addingwords from "./components/Addingwords";
// import Receivement from "./components/Receivement";
// import InputSample from "./components/InputSample";
// import SignUp from "./signUp";
// import { useState } from "react";
// export default function Totalpage() {
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log(inputs);
//   };

//   return (
//     <div className="ml-20">
//       <form onSubmit={handleSubmit}>
//       <Tempalte />
//       <br />

//       <Itemsetting />
//       <br />
//       <Receivement />
//       <br />
//       <Addingwords />
//       <InputSample />
//       <input type="submit" />
//       </form>
//     </div>
//   );
// }

// <form onSubmit={handleSubmit}>

// "use client";
// import React, { useState } from "react";
// import type { RootState } from "./GlobalRedux/store";
// import { useSelector, useDispatch } from "react-redux";

// import {
//   increment,
//   incrementByAmount,
//   decrement,
// } from "./GlobalRedux/Features/counter/counterSlice";
// import Addingwords from "./components/Addingwords";

// export default function Totalpage() {
//   const count = useSelector((state: RootState) => state.counter.value);
//   const dispatch = useDispatch();

//   const [inputs, setInputs] = useState({});
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log(inputs);
//   };
//   return (
//     <div>
//       <form onSubmit={handleSubmit}>
//         <Addingwords />
//         <input type="submit" />
//       </form>
//       <button onClick={() => dispatch(increment())}>increment</button>
//       <span>{count}</span>
//       <button onClick={() => dispatch(decrement())}>decrement</button>
//       <button onClick={() => dispatch(incrementByAmount(2))}>
//         increment By 2
//       </button>
//     </div>
//   );
// }

// // "use client";
// // import React from "react";
// // import type { RootState } from "@reduxjs/toolkit/query";
// // import Itemsetting from "./components/Itemsetting";
// // import Tempalte from "./components/Tempalte";
// // import Addingwords from "./components/Addingwords";
// // import Receivement from "./components/Receivement";
// // import InputSample from "./components/InputSample";
// // import SignUp from "./signUp";
// // import { useState } from "react";
// // export default function Totalpage() {
// //   const handleSubmit = (e) => {
// //     e.preventDefault();
// //     console.log(inputs);
// //   };

// //   return (
// //     <div className="ml-20">
// //       <form onSubmit={handleSubmit}>
// //       <Tempalte />
// //       <br />

// //       <Itemsetting />
// //       <br />
// //       <Receivement />
// //       <br />
// //       <Addingwords />
// //       <InputSample />
// //       <input type="submit" />
// //       </form>
// //     </div>
// //   );
// // }

// // <form onSubmit={handleSubmit}>
