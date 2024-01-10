"use client";

import React from "react";
import Itemsetting from "./components/Itemsetting";
import Tempalte from "./components/Tempalte";
import Addingwords from "./components/Addingwords";
import Receivement from "./components/Receivement";
import InputSample from "./components/InputSample";
// import SignUp from "./signUp";
import { useState } from "react";
export default function Totalpage() {
  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   console.log(inputs);
  // };

  return (
    <div className="ml-20">
      {/* <form onSubmit={handleSubmit}> */}
      <Tempalte />
      <br />

      <Itemsetting />
      <br />
      <Receivement />
      <br />
      <Addingwords />
      {/* <InputSample /> */}
      <input type="submit" />
      {/* </form> */}
    </div>
  );
}

// <form onSubmit={handleSubmit}>
