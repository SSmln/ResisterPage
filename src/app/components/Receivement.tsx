"use client";
import * as React from "react";
import { Switch } from "@fluentui/react-components";
export default function Receivement() {
  const [inputs, setInputs] = React.useState({});
  const [checked, setChecked] = React.useState(false);

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

  const onChange = React.useCallback(
    (e) => {
      setChecked(e.currentTarget.checked);
    },
    [setChecked]
  );
  return (
    <div>
      <h1>정보 설정</h1>

      <div className="w-[89%]  border-y-[2px] border-l-[2px] grid grid-template-rows: repeat(3, minmax(0, 1fr)); grid-cols-4 grid-flow-row ">
        {" "}
        <div className=" border-b-[2px] border-r-[2px]">쇼핑몰명</div>
        <div className=" border-b-[2px] border-r-[2px] grid grid-col-subgrid col-span-3">
          <div>
            <input
              className="w-[16.6%] bg-gray-100"
              type="text"
              name="쇼핑몰명"
              value={inputs.shop_name}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className=" border-b-[2px] border-r-[2px] ">배송비</div>
        <div className=" border-b-[2px] border-r-[2px] grid grid-col-subgrid col-span-3">
          <div>
            배송비 판매가에 포함{" "}
            <Switch
              name=" 배송비 판매가에 포함"
              className="SwitchToggle_1"
              checked={checked}
              onChange={onChange}
              onClick={handleChange}
              label={checked ? "Checked" : "Unchecked"}
              value={inputs.includes_receivement_payment}
            />
          </div>
        </div>
        <div className=" border-r-[2px]">출고지</div>
        <div className="border-r-[2px]">
          <input
            className="w-[50%] bg-gray-100"
            type="text"
            name="쇼핑출고지몰명"
            value={inputs.forwarding_address}
            onChange={handleChange}
          />
        </div>
        <div className="border-r-[2px]">반품지</div>
        <div className="border-r-[2px]">
          <input
            className="w-[50%] bg-gray-100"
            type="text"
            name="반품지"
            value={inputs.return_address}
            onChange={handleChange}
          />
        </div>
      </div>
    </div>
  );
}
