"use client";
import * as React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  counterSlice,
  onProjectAdd,
} from "../GlobalRedux/Features/counter/counterSlice";
import AddingwordsInputs from "../GlobalRedux/Features/counter/counterSlice";
//database의 length에 따라 키값이 자동으로 출력되게 구현

export default function Addingwords() {
  const [inputs, setInputs] = React.useState({
    id: "",
    Product_name_Add_side_phrase: "",
    Product_name_Add_back_phrase: "",
    Add_product_description_top_phrase: "",
    Add_product_description_below_phrase: "",
  });

  // const [projectName, setProjectName] = useState("");
  // const [projectTime, setProjectTime] = useState("");
  // const [projectForm, setProjectForm] = useState("");

  const dispatch = useDispatch();

  const handleChange = React.useCallback(
    (e) => {
      const name = e.target.name;
      const value = e.target.value;
      setInputs({ ...inputs, [name]: value });
    },
    [inputs]
  );
  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   console.log(inputs);
  // };

  const addProjectItem = () => {
    dispatch(onProjectAdd(inputs));
    console.log(counterSlice.getInitialState);
  };

  return (
    <div>
      <h1>문구추가</h1>
      <div className="w-[89%] border-y-[2px] border-l-[2px]   grid grid-rows-2 grid-cols-4 grid-flow-row ">
        {/* <div className="border-b-[2px] border-r-[2px]">상품명 옆문구 추가</div> */}
        <div className=" border-b-[2px] border-r-[2px]">
          <b>상품명 옆문구 추가</b>
          {
            <input
              className="w-[80%] h-[200px] bg-gray-100"
              type="text"
              name="Product_name_Add_side_phrase"
              value={inputs.Product_name_Add_side_phrase}
              onChange={handleChange}
            />
          }
        </div>
        {/* <div className="border-b-[2px] border-r-[2px]">상품명 뒷문구 추가</div> */}
        <div className="border-b-[2px] border-r-[2px]">
          <b>상품명 뒷문구 추가</b>
          {
            <input
              className="w-[80%] h-[200px] bg-gray-100"
              type="text"
              name="Product_name_Add_back_phrase"
              value={inputs.Product_name_Add_back_phrase}
              onChange={handleChange}
            />
          }
        </div>
        {/* <div className="border-r-[2px]">상품설명 상단문구 추가</div> */}
        <div className="border-r-[2px]">
          <b>상품설명 상단문구 추가</b>
          {
            <input
              className="w-[80%] h-[200px] bg-gray-100"
              type="text"
              name="Add_product_description_top_phrase"
              value={inputs.Add_product_description_top_phrase}
              onChange={handleChange}
            />
          }
        </div>
        {/* <div className="border-r-[2px]">상품설명 하단 문구 추가</div> */}
        <div className="border-r-[2px]">
          <b>상품설명 하단 문구 추가</b>
          {
            <input
              className="w-[80%] h-[200px] bg-gray-100"
              type="text"
              name="Add_product_description_below_phrase"
              value={inputs.Add_product_description_below_phrase}
              onChange={handleChange}
            />
          }
        </div>
        <button
          onClick={() => {
            // console.log(inputs);
            addProjectItem();
          }}
        >
          추가
        </button>
      </div>
      <div></div>
    </div>
  );
}
