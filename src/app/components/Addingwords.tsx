"use client";
import * as React from "react";

export default function Addingwords() {
  const [inputs, setInputs] = React.useState({});

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

  return (
    <div>
      <h1>문구추가</h1>{" "}
      <div className="w-[89%] border-y-[2px] border-l-[2px]   grid grid-rows-2 grid-cols-4 grid-flow-row ">
        <div className="border-b-[2px] border-r-[2px]">상품명 옆문구 추가</div>
        <div className=" border-b-[2px] border-r-[2px]">
          {
            <input
              className="w-[80%] h-[200px] bg-gray-100"
              type="text"
              name="상품명 옆문구 추가"
              value={inputs.Product_name_Add_side_phrase}
              onChange={handleChange}
            />
          }
        </div>
        <div className="border-b-[2px] border-r-[2px]">상품명 뒷문구 추가</div>
        <div className="border-b-[2px] border-r-[2px]">
          {
            <input
              className="w-[80%] h-[200px] bg-gray-100"
              type="text"
              name=" 상품명 뒷문구 추가"
              value={inputs.Product_name_Add_back_phrase}
              onChange={handleChange}
            />
          }
        </div>
        <div className="border-r-[2px]">상품설명 상단문구 추가</div>
        <div className="border-r-[2px]">
          {
            <input
              className="w-[80%] h-[200px] bg-gray-100"
              type="text"
              name="상품설명 상단문구 추가"
              value={inputs.Add_product_description_top_phrase}
              onChange={handleChange}
            />
          }
        </div>
        <div className="  border-r-[2px]">상품설명 하단 문구 추가</div>
        <div className="border-r-[2px]">
          {
            <input
              className="w-[80%] h-[200px] bg-gray-100"
              type="text"
              name="상품설명 하단 문구 추가"
              value={inputs.Add_product_description_below_phrase}
              onChange={handleChange}
            />
          }
        </div>
      </div>
    </div>
  );
}
