"use client";
import * as React from "react";
import { Switch } from "@fluentui/react-components";
export default function Receivement() {
  const [checked, setChecked] = React.useState(true);
  const onChange = React.useCallback(
    (ev) => {
      setChecked(ev.currentTarget.checked);
    },
    [setChecked]
  );
  return (
    <div>
      <h1>정보 설정</h1>
      <div className="w-[89%]  border-y-[2px] border-l-[2px] grid grid-template-rows: repeat(3, minmax(0, 1fr)); grid-cols-4 grid-flow-row ">
        <div className=" border-b-[2px] border-r-[2px]">쇼핑몰명</div>
        <div className=" border-b-[2px] border-r-[2px] grid grid-col-subgrid col-span-3">
          <div>스마트 스토어</div>
        </div>
        <div className=" border-b-[2px] border-r-[2px] ">기본템플릿 여부</div>
        <div className=" border-b-[2px] border-r-[2px] grid grid-col-subgrid col-span-3">
          <div>
            배송비 판매가에 포함{" "}
            <Switch
              checked={checked}
              onChange={onChange}
              label={checked ? "Checked" : "Unchecked"}
            />
          </div>
        </div>
        <div className=" border-r-[2px]">출고지</div>
        <div className="border-r-[2px]"></div>
        <div className="border-r-[2px]">반품지</div>
        <div className="border-r-[2px]"></div>
      </div>
    </div>
  );
}
