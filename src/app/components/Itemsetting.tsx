"use client";
import React, { useState } from "react";

export default function Itemsetting() {
  const [inputs, setInputs] = useState({});
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
      <h1>상품 및 판매 설정</h1>

      <div className=" w-[100%] border-y-[2px] border-l-[2px] grid grid-rows-4 grid-cols-9 grid-flow-row ">
        <div className="border-b-[2px] border-r-[2px] items-center grid grid-row-subgrid row-span-2 grid-col-subgrid col-span-2">
          <div className="">가격설정</div>
        </div>
        <div className="border-r-[2px] border-b-[2px]">테스트가격</div>
        <div className="border-r-[2px] border-b-[2px]">마진율</div>
        <div className="border-r-[2px] border-b-[2px]">수수료율</div>
        <div className="border-r-[2px] border-b-[2px]">판매자할인</div>
        <div className="border-r-[2px] border-b-[2px]">할인율</div>
        <div className="border-r-[2px] border-b-[2px]">정액할인</div>
        <div className="border-r-[2px] border-b-[2px]">최종판매</div>
        <div className="border-r-[2px] border-b-[2px]">
          {
            <input
              className="w-[50%] bg-gray-100"
              type="number"
              name="테스트 가격"
              value={inputs.test_price}
              onChange={handleChange}
            />
          }
          원
        </div>
        <div className="border-r-[2px] border-b-[2px]">
          {
            <input
              className="w-[50%] bg-gray-100"
              type="number"
              name="마진율"
              value={inputs.margin_rate}
              onChange={handleChange}
            />
          }
          %
        </div>
        <div className="border-r-[2px] border-b-[2px]">
          {
            <input
              className="w-[50%] bg-gray-100"
              type="number"
              name="수수료율"
              value={inputs.commission_rate}
              onChange={handleChange}
            />
          }
          %
        </div>
        <div className="border-r-[2px] border-b-[2px]">
          {
            <input
              className="w-[50%] bg-gray-100"
              type="number"
              name="판매자할인"
              value={inputs.seller_discount}
              onChange={handleChange}
            />
          }
          %
        </div>
        <div className="border-r-[2px] border-b-[2px]">
          {
            <input
              className="w-[50%] bg-gray-100"
              type="number"
              name="할인율"
              value={inputs.discount_rate}
              onChange={handleChange}
            />
          }
          %
        </div>
        <div className="border-r-[2px] border-b-[2px]">
          {
            <input
              className="w-[50%] bg-gray-100"
              type="number"
              name="정액할인"
              value={inputs.flat_rate_discount}
              onChange={handleChange}
            />
          }
          원
        </div>
        <div className="border-r-[2px] border-b-[2px]">
          {
            <input
              className="w-[50%] bg-gray-100"
              type="number"
              name="최종판매"
              value={inputs.final_sale_price}
              onChange={handleChange}
            />
          }
          원
        </div>

        <div className="items-center border-r-[2px]  grid grid-col-subgrid col-span-2">
          <div className=" grid grid-col-subgrid  border-b-[2px] ">
            고객센터 연락처
          </div>
        </div>
        <div className="items-center grid grid-col-subgrid col-span-2">
          <div className="border-r-[2px] border-b-[2px] grid grid-col-subgrid ">
            {
              <input
                className="w-[60%] bg-gray-100"
                type="number"
                name="고객센터 연락처"
                value={inputs.Customer_Center_Contact_number}
                onChange={handleChange}
              />
            }
          </div>
        </div>
        <div className="items-center grid grid-col-subgrid col-span-2">
          <div className="border-r-[2px] border-b-[2px] grid grid-col-subgrid ">
            판매기간설정
          </div>
        </div>
        <div className=" items-center grid grid-col-subgrid col-span-3">
          <div className="border-r-[2px] border-b-[2px] grid grid-col-subgrid ">
            <div className="flex">
              <input
                className="w-[120px] bg-gray-100"
                type="date"
                name="판매기간설정_시작날짜"
                value={inputs.Setting_the_sales_period_start}
                onChange={handleChange}
              />
              ~
              <input
                className="w-[120px] bg-gray-100"
                type="date"
                name="판매기간설정_마감날짜"
                value={inputs.Setting_the_sales_period_end}
                onChange={handleChange}
              />
            </div>
          </div>
        </div>

        <div className="items-center border-r-[2px] grid grid-col-subgrid col-span-2">
          <div className=" grid grid-col-subgrid  ">가격센터 연락처</div>
        </div>
        <div className="items-center grid grid-col-subgrid col-span-7">
          <div className="grid grid-col-subgrid border-r-[2px] ">
            {
              <input
                className="w-[17.1%] bg-gray-100"
                type="number"
                name="가격센터 연락처"
                value={inputs.price_Center_Contact_Information_number}
                onChange={handleChange}
              />
            }
          </div>
        </div>
      </div>
    </div>
  );
}
