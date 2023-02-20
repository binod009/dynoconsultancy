import React, { useEffect } from "react";

import {
  Avatar,
  Button,
  Drawer,
  Dropdown,
  Input,
  message,
  Modal,
  Select,
  Steps,
  Table,
} from "antd";
import { ColumnsType } from "antd/es/table";
import { AiFillFilter } from "react-icons/ai";
import { useState } from "react";
import FilterSection from "../filter/filter";
import { BiUserPlus } from "react-icons/bi";
import axios from "../../axios";
import type { MenuProps } from "antd";
import { DatePicker, Space } from "antd";
import type { DatePickerProps, RangePickerProps } from "antd/es/date-picker";
import dayjs from "dayjs";
import duration from "dayjs/plugin/duration";
import utc from "dayjs/plugin/utc";
import { BsAlarmFill } from "react-icons/bs";
import TextArea from "antd/es/input/TextArea";

dayjs.extend(duration);
interface DataType {
  key: React.Key;
  name: string;
  email: string;
  phone: string;
  tags: string;
  location: string;
  updateat: string;
}

const { RangePicker } = DatePicker;

const GlobalLayout = ({
  isFilterShown,
  setIsFilterShown,
  handleOpendrawer,
  columnStructure,
  tabledata,
  istableLoading,
}: any) => {
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  const [openleadUserdrawer, setLeaderuserDrawer] = useState(false);
  const [singleUserData, setSingleUserData] = useState<any>({});
  const [current, setCurrent] = useState(0);
  const [followuptimedate, setfollowuptimedate] = useState<any>(
    dayjs().add(1, "day").set("hours", 10).set("minute", 30).set("seconds", 0)
  );
  const [remainingTeForFollowup, setRemainingTimeForFollowup] = useState<any>();
  const [isfollwupOpen, setisfollowupOpen] = useState(false);

  const showfollowupmodel = () => {
    setisfollowupOpen(true);
  };
  const closefollowupmodel = () => {
    setisfollowupOpen(false);
  };

  const getFollowupRemainingTime = () => {
    let currentTime = dayjs();
    let diffInHours = followuptimedate.diff(currentTime, "hours");
    let diffInDays = followuptimedate.diff(currentTime, "days");
    let diffInMonths = followuptimedate.diff(currentTime, "months");
    if (diffInDays >= 1 && !diffInMonths) {
      // check if difference in days is greater than or equal to 1
      return diffInDays === 1
        ? diffInDays + " " + "day"
        : diffInDays + " " + "days";
    } else if (diffInMonths) {
      return diffInMonths === 1
        ? diffInMonths + " " + "month"
        : diffInMonths + " " + "months";
    } else {
      return diffInHours === 1
        ? diffInHours + " " + "hour"
        : diffInHours + " " + "hours";
    }
  };

  useEffect(() => {
    setRemainingTimeForFollowup(getFollowupRemainingTime());
  }, [followuptimedate]);
  //after clicking the table username calling the api and saving state of user id
  const getSingleLeaduserData = async (_id: any) => {
    const singledata = await axios.get("api/v1/contact/" + _id);
    setSingleUserData(singledata.data.data);
    setLeaderuserDrawer(!openleadUserdrawer);
  };

  const columns: ColumnsType<DataType> = columnStructure
    ? columnStructure.map((columnHead: any, index: Number) => {
        return {
          title: columnHead.title,
          render:
            index === 0 &&
            ((text: any, record: any) => (
              <a onClick={async () => await getSingleLeaduserData(record._id)}>
                {text}
              </a>
            )),
          dataIndex: columnHead.dataIndex,
          key: columnHead.key,
          fixed: columnHead.fixed ? columnHead.fixed : "",
          width: columnHead.width ? columnHead.width : "",
          className: columnHead.className,
        };
      })
    : [
        {
          title: "name",
          dataIndex: "name",
          key: "1",
          fixed: "left",
          width: 180,
          className: "text-[16px]",
        },
        {
          title: "Email",
          dataIndex: "email",
          key: "2",
        },
        {
          title: "Phone",
          dataIndex: "phone",
          key: "3",
        },

        {
          title: "sadas",
          dataIndex: "phone",
          key: "5",
        },
        {
          title: "Tags",
          dataIndex: "tags",
          key: "4",
          className: "text-[16px]",
        },
        {
          title: "Location",
          dataIndex: "location",
          key: "4",
          className: "text-[16px]",
        },
        {
          title: "Updateat",
          dataIndex: "updateat",
          key: "4",
          className: "text-[16px]",
        },
        {
          title: "Action",
          key: "6",
          fixed: "right",
          width: 100,
          className: "text-[16px]",
        },
      ];

  const items: MenuProps["items"] = [
    {
      key: "1",
      label: <a onClick={() => showfollowupmodel()}>creat a follow up</a>,
    },
    {
      key: "2",
      label: (
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.aliyun.com"
        >
          coming soon !
        </a>
      ),
    },
    {
      key: "3",
      label: (
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.luohanacademy.com"
        >
          coming soon!
        </a>
      ),
    },
  ];

  const data: DataType[] = [];
  for (let i = 0; i < 100; i++) {
    data.push({
      key: i,
      name: `Edrward ${i}`,
      email: "ksjdas2sldk.com",
      phone: "8348238",
      tags: "sdlask",
      location: "saldkns",
      updateat: "sadjs-sdlks-asd",
    });
  }

  const onSelectChange = (newSelectedRowKeys: any) => {
    setSelectedRowKeys(newSelectedRowKeys);
  };

  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
  };

  const next = () => {
    setCurrent(current + 1);

    console.log(
      "date_and_time",
      dayjs(followuptimedate).startOf("second").toISOString()
    );
    console.log(
      "remind_at",
      followuptimedate.subtract(15, "minute").startOf("second").toISOString()
    );
  };
  const prev = () => {
    setCurrent(current - 1);
  };

  const onChange = (
    value: DatePickerProps["value"] | RangePickerProps["value"],
    dateString: [string, string] | string
  ) => {
    console.log("Selected Time: ", value);

    console.log("Formatted Selected Time: ", dateString);
    console.log("initializedstateDate", followuptimedate);
  };

  const onOk = (
    value: DatePickerProps["value"] | RangePickerProps["value"]
  ) => {
    setfollowuptimedate(value);
  };

  const headerStyle = { fontSize: "12px", color: "red" };
  const steps = [
    {
      content: (
        <>
          <div className="py-3">
            <div className="mb-2 ml-4">
              <span className="font-semibold text-gray-600">
                When would you like to Follow-up['Quick selector']
              </span>
            </div>
            <div className="text-center">
              {" "}
              <DatePicker
                format={"MMMM, D YYYY, h:mm A"}
                use12Hours={true}
                defaultValue={followuptimedate}
                onOk={onOk}
                onChange={onChange}
                showTime={{
                  format: "h:mm A",
                  use12Hours: true,
                }}
                size="middle"
                style={{
                  width: "95%",
                  borderRadius: 0,
                }}
                showMinute={true}
                showNow={false}
              />
            </div>
          </div>
          <div className="ml-3">
            <span className="font-semibold text-sm text-black">
              Time Until Follow Up:<span> {remainingTeForFollowup}</span>
            </span>
          </div>
        </>
      ),
    },
    {
      content: (
        <>
          <div className="py-3">
            <div className="mb-2 ml-4">
              <span className="font-semibold text-gray-600">
                When should dynoCMS remind you about this follow-up ?
              </span>
            </div>
            <div className="text-center">
              <Select
                style={{ width: "95%" }}
                options={[
                  {
                    value: "15 minute before due",
                    label: "15 minute before due",
                  },
                  {
                    value: "10 minute before due",
                    label: "10 minute defore due",
                  },
                  {
                    value: "15 minute before due",
                    label: "15 minute before due",
                  },
                  {
                    value: "30 minute before due",
                    label: "30 minute before due",
                  },
                  { value: "1 hour before due", label: "1 hour before due" },
                  { value: "2 hour before due", label: "2 hour before due" },
                  { value: "5 hour before due", label: "5 hour before due" },
                  { value: "1 day before due", label: "1 day before due" },
                ]}
                className="rounded-none"
              />
            </div>
          </div>
        </>
      ),
    },
    {
      content: (
        <>
          <div className="py-3">
            <div className="mb-2 ml-4">
              <span className="font-semibold text-gray-600">
                What should be the title of this follow-up ?
              </span>
            </div>
            <div className="text-center">
              <Input />
            </div>
          </div>
        </>
      ),
    },
    {
      content: (
        <>
          <div className="mt-2">
            <div className="ml-4">
              <span className="font-semibold text-gray-600">
                What is the agend of this follow-up ?
              </span>
            </div>
            <div className="text-center">
              <TextArea
                style={{
                  padding: "1.2rem",
                }}
              />
            </div>
          </div>
        </>
      ),
    },
  ];

  // has undefine value to show step icon
  const stepsitem = steps.map((item: any) => ({
    key: item.title,
    title: item.title,
  }));

  const handleLeadOpenDrawer = () => {
    setLeaderuserDrawer(!openleadUserdrawer);
  };

  return (
    <>
      <div
        className="shadow-md"
        style={{
          height: "95vh",
          width: `${isFilterShown ? "15%" : "0"}`,
          overflowY: "scroll",
          background: "#A3A3A3",
        }}
      >
        {/* filter section */}
        <FilterSection />
      </div>

      <div
        style={{
          height: "95vh",
          width: `${isFilterShown ? "84%" : "100%"}`,
          overflow: "auto",
          background: "#e7e7e7",
        }}
      >
        {/* sidebar content */}
        <div className="flexbg-[white]">
          <div className="flex items-center  justify-between  px-8 py-3 gap-1 hover:cursor-pointer">
            <div
              className="p-3 bg-[white] rounded-md"
              onClick={() => {
                setIsFilterShown(!isFilterShown);
              }}
            >
              <AiFillFilter color="#2181c2" />
            </div>

            <Button
              className="flex px-4 py-4 items-center justify-center bg-[#A3A3A3] gap-2"
              onClick={handleOpendrawer}
            >
              <BiUserPlus color="white" size={20} />
              <p className="text-white text-lg">Create User</p>
            </Button>
          </div>
        </div>

        <div className="p-2">
          <p>lorem500</p>
          <Table
            rowSelection={rowSelection}
            className={`${isFilterShown ? "visitor-table" : "fullwidth-table"}`}
            columns={columns}
            loading={istableLoading}
            dataSource={tabledata ? tabledata.data : data}
            scroll={{ x: 2000, y: "65vh" }}
            rowKey="_id"
            pagination={{ defaultPageSize: 100 }}
          />
        </div>
      </div>

      <Drawer
        title={singleUserData.name ? singleUserData.name : ""}
        width={450}
        onClose={handleLeadOpenDrawer}
        open={openleadUserdrawer}
        bodyStyle={{
          paddingBottom: 80,
          background: "#e5e5e5",
        }}
        footerStyle={{
          background: "#a3a3a3",
        }}
        footer={
          <>
            <div className="flex justify-end  items-center">
              <div className="flex justify-end w-full items-center py-2 px-2">
                <Button
                  className="w-full border-none text-white rounded-none bg-[#09927b] hover:bg-[#0f766e] hoverwhite"
                  typeof="submit"
                  size="large"
                >
                  View Lead
                </Button>
              </div>
            </div>
          </>
        }
      >
        <div className="flex-col ">
          <div className="flex items-center gap-5">
            <Avatar size={64} className="flex items-center justify-center">
              <h1 className="text-xl flex items-center justify-center">
                {singleUserData.name ? singleUserData.name[0] : ""}
              </h1>
            </Avatar>
            <span className="font-semibold text-md">
              {singleUserData.name ? singleUserData.name : ""}
            </span>
          </div>
          <div className="mt-2 p-2 max-w-[450px] border-b-2 border-zinc-300"></div>
        </div>
        <div className="py-2 px-1">
          <Dropdown menu={{ items }} placement="bottomLeft">
            <Button className="bg-[#1161ca] text-white rounded-sm hoverwhite">
              Action
            </Button>
          </Dropdown>
        </div>
      </Drawer>

      {/* followup model */}
      <Modal
        title={<p className="font-normal">Quick follow Up</p>}
        className="md:h-80 lg:h-2/5"
        centered={true}
        closable={false}
        open={isfollwupOpen}
        width={520}
        bodyStyle={{ minHeight: "12rem", padding: "0.5rem" }}
        footer={
          <div className="flex items-center justify-between hovertextwhite p-2">
            <div className="px-2">
              <Button
                className="rounded-none text-black font-semibold hovertextwhit w-20 h-9"
                onClick={closefollowupmodel}
              >
                Cancel
              </Button>
            </div>
            <div className="flex justify-end item-end px-2 py-2">
              <Button
                className="rounded-none bg-[#0c917f] text-white font-semibold hovertextwhite hover:bg-[#087264] w-20 h-9"
                disabled={current > 0 ? false : true}
                onClick={prev}
              >
                Previous
              </Button>
              {current === steps.length - 1 ? (
                <Button
                  className="rounded-none bg-[#2cce75] hovertextwhite text-white font-semibold hover:bg-[#1cad5e] w-20 h-9"
                  onClick={() => {
                    closefollowupmodel();
                    {
                      message.success("Processing complete!");
                    }
                  }}
                >
                  Done
                </Button>
              ) : (
                <Button
                  className="rounded-none bg-[#2266d3] hovertextwhite text-white w-20 h-9"
                  onClick={next}
                >
                  Next
                </Button>
              )}
            </div>
          </div>
        }
      >
        {/* 520 *345 */}
        <Steps
          className="px-4 py-2 "
          current={current}
          items={stepsitem}
          style={{
            display: "flex",
            alignItems: "center",
            textAlign: "center",
          }}
        />
        {steps[current].content}

        {/* <div style={{ marginTop: 24 }}>
          {current < steps.length - 1 && (
            <Button type="primary" onClick={() => next()}>
              Next
            </Button>
          )}
          {current === steps.length - 1 && (
            <Button
              type="primary"
              onClick={() => message.success("Processing complete!")}
            >
              Done
            </Button>
          )}
          {current > 0 && (
            <Button style={{ margin: "0 8px" }} onClick={() => prev()}>
              Previous
            </Button>
          )}
        </div> */}
      </Modal>
    </>
  );
};

export default GlobalLayout;
