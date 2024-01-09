import React from "react";
import TextArea from "./Tempalte";
export default function Itemsetting() {
  const TextArea = () => {
    return (
      <textarea rows="1" cols="15">
        input
      </textarea>
    );
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
        <div className="border-r-[2px] border-b-[2px]">{TextArea()}원</div>
        <div className="border-r-[2px] border-b-[2px]">{TextArea()}%</div>
        <div className="border-r-[2px] border-b-[2px]">{TextArea()}%</div>
        <div className="border-r-[2px] border-b-[2px]">{TextArea()}%</div>
        <div className="border-r-[2px] border-b-[2px]">{TextArea()}%</div>
        <div className="border-r-[2px] border-b-[2px]">{TextArea()}원</div>
        <div className="border-r-[2px] border-b-[2px]">{TextArea()}원</div>

        <div className="items-center grid grid-col-subgrid col-span-2">
          <div className=" grid grid-col-subgrid border-r-[2px] border-b-[2px] ">
            고객센터 연락처
          </div>
        </div>
        <div className="items-center grid grid-col-subgrid col-span-2">
          <div className="border-r-[2px] border-b-[2px] grid grid-col-subgrid ">
            {TextArea()}
          </div>
        </div>
        <div className="items-center grid grid-col-subgrid col-span-2">
          <div className="border-r-[2px] border-b-[2px] grid grid-col-subgrid ">
            판매기간설정
          </div>
        </div>
        <div className=" items-center grid grid-col-subgrid col-span-3">
          <div className="border-r-[2px] border-b-[2px] grid grid-col-subgrid">
            {TextArea()}
          </div>
        </div>

        <div className="items-center grid grid-col-subgrid col-span-2">
          <div className=" grid grid-col-subgrid border-r-[2px]">
            가격센터 연락처
          </div>
        </div>
        <div className="items-center grid grid-col-subgrid col-span-7">
          <div className="grid grid-col-subgrid border-r-[2px] ">
            {" "}
            {TextArea()}
          </div>
        </div>
      </div>
    </div>
  );
}

// <div className="w-[80%] justify-items-center grid  grid-cols-4 grid-rows-3 bg-purple-200">
// <div>가격설정</div>
// <div className="">
//   <input role="switch" type="checkbox" />
// </div>
// <div>
//   <br />
// </div>
// <div>
//   <br />
// </div>

// <div>고객센터 연락처</div>
// <div className="">중복전송 제외설정</div>
// <div>판매기간설정</div>
// <div className="">
//   <input role="switch" type="checkbox" />
// </div>
// <div>고객센터 안내</div>
// <div>템플릿 명</div>
// <div>
//   <br />
// </div>
// <div>
//   <br />
// </div>
// </div>

// <div className="w-[80%] grid grid-cols-2 grid-row-3 divide-y bg-gray-200">
// <div>가격 설정</div>
// <div className="grid grid-cols-7 grid-row-2 divide-y">
//   <div>02</div>
//   <div>03</div>
//   <div>04</div>
//   <div>05</div>
//   <div>06</div>
//   <div>07</div>
//   <div>08</div>
//   <div>09</div>
//   <div>10</div>
//   <div>11</div>
//   <div>12</div>
//   <div>13</div>
//   <div>14</div>
//   <div>15</div>
// </div>{" "}
// </div>

// <div className="bg-gray-200 w-[80%] grid grid-cols-4 grid-row-1 divide-x">
// <div>고객센터 안내</div>
// <div>02</div>
// <div>03</div>
// <div>04</div>
// </div>

// <div className=" bg-purple-200 grid grid-cols-2 grid-row-3">
// <div className="">가격설정</div>
// <div className=" grid grid-cols-7 divide-x ">
//   <div>테스트가격</div>
//   <div>마진율</div>
//   <div>수수료율</div>
//   <div>판매자할인</div>
//   <div>할인율</div>
//   <div>정액할인</div>
//   <div>최종판매</div>
//   <div>원</div>
//   <div>%</div>
//   <div>%</div>
//   <div>%</div>
//   <div>%</div>
//   <div>원</div>
//   <div>원</div>
// </div>
// <div>고객센터 연락처</div>
// <div className="grid grid-cols-3">
//   <div>010101</div>
//   <div>판매기간설정</div>

//   <div>20202~202020</div>
// </div>
// <div>고객센터 안내</div>
// <div>업무상 부재로인하여 뭐시기</div>
// </div>
