import React from "react";

export default function Addingwords() {
  const TextArea = () => {
    return (
      <textarea rows="5" cols="30">
        input
      </textarea>
    );
  };
  return (
    <div>
      <h1>문구추가</h1>
      <div className="w-[89%] border-y-[2px] border-l-[2px]   grid grid-rows-2 grid-cols-4 grid-flow-row ">
        <div className="border-b-[2px] border-r-[2px]">상품명 옆문구 추가</div>
        <div className=" border-b-[2px] border-r-[2px]">{TextArea()}</div>
        <div className="border-b-[2px] border-r-[2px]">상품명 뒷문구 추가</div>
        <div className="border-b-[2px] border-r-[2px]">{TextArea()}</div>
        <div className="border-r-[2px]">상품설명 상단문구 추가</div>
        <div className="border-r-[2px]">{TextArea()}</div>
        <div className="border-r-[2px]">상품설명 하단 문구 추가</div>
        {TextArea()}
      </div>
    </div>
  );
}
