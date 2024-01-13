"use client";
import * as React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  onProjectAdd,
  onToggleAddPeoject,
} from "../GlobalRedux/Features/counter/counterSlice";
export default function Addingwords() {
  const [inputs, setInputs] = React.useState({});
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
  const dataset = [
    {
      id: 1,
      name: "상품명 옆문구 추가",
      value: inputs.Product_name_Add_side_phrase,
    },
    {
      id: 2,
      name: "상품명 뒷문구 추가",
      value: inputs.Product_name_Add_back_phrase,
    },
    {
      id: 3,
      name: "상품설명 상단문구 추가",
      value: inputs.Add_product_description_top_phrase,
    },
    {
      id: 4,
      name: "상품설명 하단 문구 추가",
      value: inputs.Add_product_description_below_phrase,
    },
  ];
  const addProjectItem = () => {
    dispatch(
      onProjectAdd({
        append: {
          id: 1,
          name: "상품명 옆문구 추가",
          value: inputs.Product_name_Add_side_phrase,
        },
      })
    ),
      dispatch(onToggleAddPeoject(false));
  };

  return (
    <div>
      <h1>문구추가</h1>
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
          <button onClick={addProjectItem}>추가</button>
        </div>
        <div>{dataset[1].value}</div>
      </div>
    </div>
  );
}
