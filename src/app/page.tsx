import React from "react";
import Itemsetting from "./cmponent/Itemsetting";
import Tempalte from "./cmponent/Tempalte";
import Addingwords from "./cmponent/Addingwords";
import Receivement from "./cmponent/Receivement";

export default function page() {
  return (
    <div className="ml-20">
      <Tempalte />
      <br />

      <Itemsetting />
      <br />
      <Receivement />
      <br />
      <Addingwords />
    </div>
  );
}
