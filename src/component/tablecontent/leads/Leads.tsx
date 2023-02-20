import {
  Button,
  Col,
  Drawer,
  Form,
  Input,
  message,
  Row,
  Select,
  Space,
} from "antd";
import { wrap } from "module";
import React from "react";
import { useState, useEffect } from "react";
import { BiUserPlus } from "react-icons/bi";
import { useRef } from "react";
import Table, { ColumnsType } from "antd/es/table";
import axios from "../../../axios";
import GlobalLayout from "../../globaLayout/GlobalLayout";
import { setInterval } from "timers/promises";

const Leads = ({ isFilterShown, setIsFilterShown }: any) => {
  const [form] = Form.useForm();
  const [LeadData, setLeadData] = useState<any>([]);
  const [opendrawer, setOpenDrawer] = useState(false);
  const [istableLoading, setIstableloading] = useState(true);
  useEffect(() => {
    getLeads();
  }, []);

  const handleOpendrawer = () => {
    setOpenDrawer(!opendrawer);
  };

  const getLeads = async () => {
    let leads_res = await axios.get(
      "/api/v1/contact?type=lead&pagination_page=1&pagination_limit=25"
    );
    // add key to the leads_res for rowselection feature

    setLeadData(leads_res.data);
    setIstableloading(false);
  };

  const validate = async () => {
    try {
      await form.validateFields();
      const formvalue = { ...form.getFieldsValue(), type: "lead" };
      console.log(formvalue);
      await axios.post("api/v1/contact", formvalue);
      setOpenDrawer(!opendrawer);
      form.resetFields();
    } catch (err) {
      console.log("validateerr", err);
    }
  };

  interface DataType {
    key: string;
    action: boolean;
    name: string;
    email: number;
    phone: string;
    tags: string;
    location: string;
    updateAt: string;
  }

  const Leadscolumns: ColumnsType<DataType> = [
    {
      title: "Name",
      dataIndex: "name",
      key: "_id",
      width: 150,
      fixed: "left",
      className: "text-[16px]",
    },
    {
      title: "Email",
      dataIndex: "email",
    },
    {
      title: "Phone",
      dataIndex: "phone",
    },
    {
      title: "Tags",
      dataIndex: "tags",

      className: "text-[16px]",
    },
    {
      title: "location",
      dataIndex: "location",

      className: "text-[16px]",
    },
    {
      title: "UpdateAt",
      dataIndex: "updateAt",

      className: "text-[16px]",
    },
    {
      title: "Action",
      key: "6",
      width: 100,
      className: "text-[16px]",
      fixed: "right",
    },
  ];

  return (
    <>
      <GlobalLayout
        isFilterShown={isFilterShown}
        setIsFilterShown={setIsFilterShown}
        opendrawer={opendrawer}
        handleOpendrawer={handleOpendrawer}
        setOpenDrawer={setOpenDrawer}
        columnStructure={Leadscolumns}
        tabledata={LeadData}
        istableLoading={istableLoading}
      />
      <Drawer
        title="Create a new account"
        width={700}
        onClose={handleOpendrawer}
        open={opendrawer}
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
              <div className="flex justify-end items-center gap-8 py-3">
                <Button
                  className="flex rounded-md items-center px-8 py-5 text-white text-lg border-0 bg-[#EF4444] hover:bg-[#DC2626] hovertextwhite"
                  onClick={() => setOpenDrawer(false)}
                  htmlType="submit"
                  typeof="submit"
                >
                  cancel
                </Button>

                <Button
                  className="flex rounded-md  items-center px-8 py-5 text-white border-0 text-lg bg-[#14B8A6] hover:bg-[#0D9488] hovertextwhite "
                  onClick={validate}
                  htmlType="submit"
                  typeof="submit"
                >
                  Submit
                </Button>
              </div>
            </div>
          </>
        }
      >
        <Form
          form={form}
          name="basic"
          autoComplete="off"
          style={{}}
          layout="vertical"
          initialValues={{ remember: true }}
        >
          <div className="flex justify-between items-center">
            <Form.Item
              label="Fullname"
              name="name"
              rules={[
                {
                  required: true,
                  message: "fullname is required",
                },
              ]}
            >
              <Input className="w-80 h-12" type="text" />
            </Form.Item>
            <Form.Item
              label="Phone"
              name="phone"
              rules={[
                {
                  required: true,
                  message: "Phone is required",
                },
              ]}
            >
              <Input className="w-80 h-12" type="text" />
            </Form.Item>
          </div>
          <div className="flex justify-between items-center">
            <Form.Item
              label="Email"
              name="email"
              rules={[
                {
                  required: true,
                  message: "Email is required",
                },
              ]}
            >
              <Input className="w-80 h-12" />
            </Form.Item>
            <Form.Item
              label="Address"
              name="address"
              rules={[
                {
                  required: true,
                  message: "address is required",
                },
              ]}
            >
              <Input className="w-80 h-12" />
            </Form.Item>
          </div>
          <div className="flex justify-between items-center">
            <Form.Item
              label="description"
              name="description"
              rules={[
                {
                  required: true,
                  message: "description is required",
                },
              ]}
            >
              <Input className="w-80 h-12 border" />
            </Form.Item>

            <Form.Item
              label="source"
              name="source"
              rules={[
                {
                  required: true,
                  message: "source is required",
                },
              ]}
            >
              <Select
                className="w-80 createuserSelect"
                showSearch
                placeholder="Search to Select"
                optionFilterProp="children"
                filterOption={(input, option) =>
                  (option?.label ?? "").includes(input)
                }
                filterSort={(optionA, optionB) =>
                  (optionA?.label ?? "")
                    .toLowerCase()
                    .localeCompare((optionB?.label ?? "").toLowerCase())
                }
                options={[
                  {
                    value: "Social",
                    label: "Social",
                  },
                  {
                    value: "Website",
                    label: "Website",
                  },
                  {
                    value: "Facebook",
                    label: "Facebook",
                  },
                  {
                    value: "Referral",
                    label: "Referral",
                  },
                  {
                    value: "Others",
                    label: "Others",
                  },
                ]}
              />
            </Form.Item>
          </div>
        </Form>
      </Drawer>
      {/* <div className="h[100vh] bg-[orange] w-[100%] text-right ">
        <div className="flex bg-[#b2c3ce] items-center justify-end gap-2 p-5">
          <div
            className="flex items-center bg-[#004f84] p-2 gap-2 hover:cursor-pointer hover:bg-[#003354]"
            onClick={handleOpendrawer}
          >
            <BiUserPlus color="white" size={20} />
            <p className="text-white">create User</p>
          </div>
          <Drawer
            title="Create a new account"
            width={700}
            headerStyle={{ background: "#e7e7e7" }}
            onClose={handleOpendrawer}
            open={opendrawer}
            bodyStyle={{
              paddingBottom: 80,
              background: "#e5e5e5",
            }}
            footerStyle={{
              background: "#001f34",
            }}
            footer={
              <>
                <div className="flex justify-end  items-center">
                  <div className="flex justify-end items-center gap-8 py-3">
                    <Button
                      className="flex rounded-md items-center px-8 py-5 text-white border-0 text-lg bg-red-500"
                      onClick={() => setOpenDrawer(false)}
                      htmlType="submit"
                      typeof="submit"
                    >
                      cancel
                    </Button>

                    <Button
                      className="flex rounded-md  items-center px-8 py-5 text-white border-0 text-lg bg-green-600"
                      onClick={validate}
                      htmlType="submit"
                      typeof="submit"
                    >
                      Submit
                    </Button>
                  </div>
                </div>
              </>
            }
          >
            <Form
              form={form}
              name="basic"
              autoComplete="off"
              style={{}}
              layout="vertical"
              initialValues={{ remember: true }}
            >
              <div className="flex justify-between items-center">
                <Form.Item
                  label="Fullname"
                  name="fullname"
                  rules={[
                    {
                      required: true,
                      message: "fullname is required",
                    },
                  ]}
                >
                  <Input
                    className="w-80 h-12 border border-[#004f84]"
                    type="text"
                  />
                </Form.Item>
                <Form.Item
                  label="Phone"
                  name="Phone"
                  rules={[
                    {
                      required: true,
                      message: "Phone is required",
                    },
                  ]}
                >
                  <Input
                    className="w-80 h-12 border border-[#004f84]"
                    type="text"
                  />
                </Form.Item>
              </div>
              <div className="flex justify-between items-center">
                <Form.Item
                  label="Email"
                  name="email"
                  rules={[
                    {
                      required: true,
                      message: "Email is required",
                    },
                  ]}
                >
                  <Input className="w-80 h-12 border border-[#004f84]" />
                </Form.Item>
                <Form.Item
                  label="Address"
                  name="address"
                  rules={[
                    {
                      required: true,
                      message: "address is required",
                    },
                  ]}
                >
                  <Input className="w-80 h-12 border border-[#004f84]" />
                </Form.Item>
              </div>
              <div className="flex justify-between items-center">
                <Form.Item
                  label="StudyLevel"
                  name="studylevel"
                  rules={[
                    {
                      required: true,
                      message: "Studylevel is required",
                    },
                  ]}
                >
                  <Input className="w-80 h-12 border border-[#004f84]" />
                </Form.Item>
              </div>
            </Form>
          </Drawer>
        </div>
      </div> */}
    </>
  );
};

export default Leads;
