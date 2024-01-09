"use client";
import * as React from "react";

import { Switch } from "@fluentui/react-components";
export default function Tempalte() {
  const [checked, setChecked] = React.useState(true);
  const onChange = React.useCallback(
    (ev) => {
      setChecked(ev.currentTarget.checked);
    },
    [setChecked]
  );

  const TextArea = () => {
    return (
      <textarea id="story" name="story">
        input message
      </textarea>
    );
  };
  return (
    <div>
      <h1>템플릿 설정</h1>
      <div>
        <div
          className=" w-[89%] border-y-[2px]
        border-l-[2px] 
         grid grid-rows-2 grid-cols-4  grid-flow-row "
        >
          <div className="border-b-[2px] border-r-[2px]">기본템플릿 여부</div>
          <div className=" grid grid-col-subgrid col-span-3">
            <div className="border-b-[2px] border-r-[2px]">
              {" "}
              <Switch
                checked={checked}
                onChange={onChange}
                label={checked ? "Checked" : "Unchecked"}
              />
            </div>
          </div>

          <div className="border-r-[2px]">템플릿 명</div>
          {TextArea()}
          <div className="border-r-[2px]">중복전송 제외설정</div>
          <div className="border-r-[2px]">
            {" "}
            <Switch
              checked={checked}
              onChange={onChange}
              label={checked ? "Checked" : "Unchecked"}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
