import { Button, Input, Select } from "antd";
import React from "react";

const FilterDrawer = () => {
  const handleChange = (value: string) => {
    alert(value);
  };

  return (
    <>
      <div className="flex-colbg-[#f31f1f] rounded-md py-3 ">
        <div className="flex-col">
          <Select
            className="w-[100%] mb-1"
            defaultValue="Contains"
            onChange={handleChange}
            options={[
              { value: "", label: "Jack" },
              { value: "lucy", label: "Lucy" },
              { value: "Yiminghe", label: "yiminghe" },
              { value: "disabled", label: "Disabled", disabled: true },
            ]}
          />
          <Input />
        </div>
        <div className="flex justify-end items-center m-2">
          <Button
            typeof="submit"
            className="bg-[#004f84] border-none rounded-sm"
          >
            Apply
          </Button>
        </div>
      </div>
    </>
  );
};

export default FilterDrawer;
