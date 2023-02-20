import {
  Space,
  DatePicker,
  Input,
  Checkbox,
  Row,
  Col,
  Collapse,
  Select,
} from "antd";
import { AiFillFilter } from "react-icons/ai";
import React from "react";
import FilterDrawer from "./FilterDrawer";

const { RangePicker } = DatePicker;
const { Panel } = Collapse;

const FilterSection = () => {
  const onChange = (key: string | string[]) => {
    console.log(key);
  };
  return (
    <>
      <div className="flex items-center justify-center gap-2 py-1 mb-2">
        <h1 className="text-gray text-bold">Filter</h1>
      </div>
      <hr />
      <div className="mt-4 px-2">
        <div>
          <span className="text-sm font-[500] text-[#1f263a]">
            Filter By Date
          </span>
          <Space direction="vertical" size={8}>
            <RangePicker size="middle" />
          </Space>
        </div>

        <div className="mt-5">
          <span className="text-sm font-[500]">Filter By Tags</span>
          <Input />
        </div>
        <div className="mt-5">
          <h3 className="text-sm font-[500]">Advance Filters</h3>
          <Checkbox.Group className="flex-col justify-start items-start  mt-2 px-2">
            <Checkbox value="1">Name</Checkbox>
            <br />
            <Checkbox value="2">Email</Checkbox>
            <br />
            <Checkbox value="3">Phone</Checkbox>
            <br />
            <Checkbox value="4">Tags</Checkbox>
          </Checkbox.Group>
          {/* <FilterDrawer /> */}
        </div>
        <div className="mt-5">
          <span className="text-sm font-[500]">Purpose</span>
          <Input />
          <Checkbox.Group className="grid text-start  px-2 gap-1">
            <Checkbox value="1">General Purpose</Checkbox>
            <br />
            <Checkbox value="2">Class Enrollment</Checkbox>
            <br />
            <Checkbox value="3">Apply</Checkbox>
            <br />
          </Checkbox.Group>
        </div>
      </div>
    </>
  );
};

export default FilterSection;
