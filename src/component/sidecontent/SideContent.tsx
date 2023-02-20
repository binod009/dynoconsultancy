import { Button } from "antd";
import Table, { ColumnsType } from "antd/es/table";
import React, { useState } from "react";
import { AiFillAlert, AiFillFilter, AiOutlineFilter } from "react-icons/ai";
import FilterSection from "../filter/filter";
import Header from "../head/Header";

const SideContent = ({ isFilterShown, setIsFilterShown }: any) => {
  interface DataType {
    key: React.Key;
    name: string;
    age: number;
    address: string;
  }

  const columns: ColumnsType<DataType> = [
    {
      title: "Full Name",
      dataIndex: "name",
      key: "name",
      fixed: "left",
      width: 100,
    },
    {
      title: "Age",
      dataIndex: "age",
      key: "age",
      width: 100,
    },
    {
      title: "Column 1",
      dataIndex: "address",
      key: "1",
      width: 100,
    },
    {
      title: "Column 2",
      dataIndex: "address",
      key: "2",
      width: 100,
    },
    {
      title: "Column 3",
      dataIndex: "address",
      key: "3",
      width: 100,
    },
    {
      title: "Column 4",
      dataIndex: "address",
      key: "4",
      width: 100,
    },
    {
      title: "Column 5",
      dataIndex: "address",
      key: "5",
      width: 100,
    },
    {
      title: "Column 6",
      dataIndex: "address",
      key: "6",
      width: 100,
    },
    {
      title: "Column 7",
      dataIndex: "address",
      key: "7",
      width: 100,
    },

    { title: "Column 8", dataIndex: "address", key: "8", width: 100 },
    {
      title: "Column 9",
      dataIndex: "address",
      key: "9",
      width: 100,
    },
    {
      title: "Column",
      dataIndex: "address",
      key: "",
      width: 100,
    },
    {
      title: "Column 11",
      dataIndex: "address",
      key: "11",
      width: 100,
    },
    {
      title: "Column 12",
      dataIndex: "address",
      key: "12",
      width: 100,
    },
    {
      title: "Column 13",
      dataIndex: "address",
      key: "13",
      width: 100,
    },
    {
      title: "Column 14",
      dataIndex: "address",
      key: "14",
      width: 100,
    },
    {
      title: "Column 15",
      dataIndex: "address",
      key: "15",
      width: 100,
    },
    {
      title: "Column 16",
      dataIndex: "address",
      key: "16",
      width: 100,
    },
    {
      title: "Column 17",
      dataIndex: "address",
      key: "17",
      width: 100,
    },
    {
      title: "Column 18",
      dataIndex: "address",
      key: "18",
      width: 100,
    },
    {
      title: "Column 19",
      dataIndex: "address",
      key: "19",
      width: 100,
    },
    {
      title: "Column 20",
      dataIndex: "address",
      key: "20",
      width: 100,
    },
    {
      title: "Column 21",
      dataIndex: "address",
      key: "21",
      width: 100,
    },
    {
      title: "Column 22",
      dataIndex: "address",
      key: "22",
      width: 100,
    },
    {
      title: "Column 23",
      dataIndex: "address",
      key: "23",
      width: 100,
    },
    {
      title: "Column 24",
      dataIndex: "address",
      key: "24",
      width: 100,
    },
    {
      title: "Column 25",
      dataIndex: "address",
      key: "25",
      width: 100,
    },
    {
      title: "Column 26",
      dataIndex: "address",
      key: "26",
      width: 100,
    },
    {
      title: "Column 27",
      dataIndex: "address",
      key: "27",
      width: 100,
    },
    {
      title: "Column 28",
      dataIndex: "address",
      key: "28",
      width: 100,
    },
    {
      title: "Column 29",
      dataIndex: "address",
      key: "29",
      width: 100,
    },
    {
      title: "Column 30",
      dataIndex: "address",
      key: "30",
      width: 150,
    },
    {
      title: "Column 31",
      dataIndex: "address",
      key: "31",
      width: 150,
    },
    {
      title: "Column 32",
      dataIndex: "address",
      key: "32",
    },
    {
      title: "Column 33",
      dataIndex: "address",
      key: "33",
      width: 150,
    },

    {
      title: "Action",
      key: "operation",
      width: 150,
      fixed: "right",
    },
  ];
  const data: DataType[] = [];
  for (let i = 0; i < 100; i++) {
    data.push({
      key: i,
      name: `Edrward ${i}`,
      age: 32,
      address: `London Park no. ${i}`,
    });
  }

  return (
    <>
      <div className="p-4">
        <Button
          onClick={() => {
            setIsFilterShown(!isFilterShown);
          }}
        >
          <AiFillFilter color="#02bfe7" />
        </Button>
      </div>
      <div className="p-2">
        <Table
          tableLayout="fixed"
          columns={columns}
          dataSource={data}
          scroll={{ x: 4000, y: 300 }}
          pagination={{
            defaultPageSize: 500,
          }}
        />
      </div>
    </>
  );
};

export default SideContent;
