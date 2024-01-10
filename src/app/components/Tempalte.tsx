"use client";
import * as React from "react";
import { useState } from "react";
import { Switch } from "@fluentui/react-components";

export default function Tempalte() {
  const [inputs, setInputs] = useState({});
  const [checked_1, setChecked_1] = React.useState(false);
  const [checked_2, setChecked_2] = React.useState(false);

  const handleChange = React.useCallback(
    (e) => {
      const name = e.target.name;
      const value = e.target.value;
      setInputs({ ...inputs, [name]: value });
    },
    [inputs]
  );
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(inputs);
  };

  const onChange_1 = React.useCallback(
    (e) => {
      setChecked_1(e.currentTarget.checked);
    },
    [setChecked_1]
  );

  const onChange_2 = React.useCallback(
    (e) => {
      handleChange;
      setChecked_2(e.currentTarget.checked);
    },

    [setChecked_2]
  );

  return (
    <div>
      <h1>템플릿 정보</h1>
      <div
        className=" w-[89%] border-y-[2px]
        border-l-[2px] 
         grid grid-rows-2 grid-cols-4  grid-flow-row "
      >
        <div className="border-b-[2px] border-r-[2px]">기본템플릿 여부</div>
        <div className=" grid grid-col-subgrid col-span-3">
          <div className="border-b-[2px] border-r-[2px] color-black">
            <Switch
              name="기본템플릿 여부"
              className="SwitchToggle_1"
              checked={checked_1}
              onChange={onChange_1}
              onClick={handleChange}
              label={checked_1 ? "Checked" : "Unchecked"}
              value={inputs.defaultTemplate}
            />
            {/* 
              <input
                type="text"
                name="기본템플릿 여부"
                value={inputs.defaultTemplate}
                onChange={handleChange}
              /> */}
          </div>
        </div>

        <div className="border-r-[2px]">템플릿 명</div>
        <div className="border-r-[2px]">
          {/* {TextArea()} */}
          <input
            className="bg-gray-100"
            type="text"
            name="템플릿 명"
            value={inputs.tempaltename}
            onChange={handleChange}
          />
        </div>

        <div className="border-r-[2px]">중복전송 제외설정</div>
        <div className="border-r-[2px]">
          {/* <input
              type="text"
              name="중복전송 제외설정"
              value={inputs.duplicationPrevent}
              onChange={handleChange}
            /> */}
          <Switch
            name="중복전송 제외설정"
            className="SwitchToggle_2"
            checked={checked_2}
            onChange={onChange_2}
            onClick={handleChange}
            value={inputs.duplicationPrevent}
            label={checked_2 ? "Checked" : "Unchecked"}
          />
        </div>
      </div>
    </div>
  );
}
