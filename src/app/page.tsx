import React from "react";
import Itemsetting from "./components/Itemsetting";
import Tempalte from "./components/Tempalte";
import Addingwords from "./components/Addingwords";
import Receivement from "./components/Receivement";
import InputSample from "./components/InputSample";
import Totalpage from "./Totalpage";
import { useDispatch } from "react-redux";
// import SignUp from "./signUp";

let projectList = [];

projectList.push(Addingwords.inputs);

export default function page() {
  // const dispatch = useDispatch();

  return (
    <div>
      <Totalpage></Totalpage>
    </div>
  );
}

// <form onSubmit={handleSubmit}>
