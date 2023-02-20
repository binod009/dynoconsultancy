import { Avatar, Collapse, DatePicker, Input, Popover } from "antd";
import { Children, useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { BiLogOut } from "react-icons/bi";
import { BsFillPeopleFill, BsPlus } from "react-icons/bs";
import { IoIosNotificationsOutline } from "react-icons/io";
import { MdDashboard, MdOutlineEmojiPeople } from "react-icons/md";
import { RxDotFilled } from "react-icons/rx";
import { Link, Route, useHistory } from "react-router-dom";
import { sidebardata } from "../../../customApi/sidebarJson";
import MenuItem from "../../collapseMenu/MenuItem";

import Applicant from "../applicant/Applicant";
import Leads from "../leads/Leads";
import Visitor from "../visitor/visitor";
const { RangePicker } = DatePicker;
const { Panel } = Collapse;

const AdminTest = () => {
  const [isFilterShown, setIsFilterShown] = useState(true);
  const [searchBarWidth, setSearchBarwidth] = useState(false);
  const [isnotification, setIsNotification] = useState(true);
  const history = useHistory();

  const handleLogout = () => {
    localStorage.removeItem("accessToken");
    history.push("/");
  };

  const onChange = (key: string | string[]) => {
    console.log(key);
  };

  return (
    <>
      <div
        style={{
          height: "100vh",
          width: "100vw",
          overflow: "hidden",
        }}
      >
        {/* header */}
        <div
          style={{
            height: "5vh",
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "2.3rem",
            textAlign: "center",
            overflow: "hidden",
          }}
          className="bg-white border-[1px] border-slate-400"
        >
          {/* header-items */}
          <div className="min-w-[11rem] py-3 bg-gradient-to-r from-cyan-500 to-[#14B8A6] rounded-md">
            <span className="text-white font-semibold">CMS</span>
          </div>
          <div className="flex items-center justify-center">
            {/* 357 */}
            <div
              className={`flex items-center justify-end w-[357px] py-3 bg-[#e8eff1] rounded-lg`}
            >
              <div className="px-3" typeof="button">
                <svg
                  width="22"
                  onClick={() => setSearchBarwidth(!searchBarWidth)}
                  height="22"
                  viewBox="0 0 22 22"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M21 21L19 19M10.5 20C11.7476 20 12.9829 19.7543 14.1355 19.2769C15.2881 18.7994 16.3354 18.0997 17.2175 17.2175C18.0997 16.3354 18.7994 15.2881 19.2769 14.1355C19.7543 12.9829 20 11.7476 20 10.5C20 9.25244 19.7543 8.0171 19.2769 6.86451C18.7994 5.71191 18.0997 4.66464 17.2175 3.78249C16.3354 2.90033 15.2881 2.20056 14.1355 1.72314C12.9829 1.24572 11.7476 1 10.5 1C7.98044 1 5.56408 2.00089 3.78249 3.78249C2.00089 5.56408 1 7.98044 1 10.5C1 13.0196 2.00089 15.4359 3.78249 17.2175C5.56408 18.9991 7.98044 20 10.5 20Z"
                    stroke="black"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
            </div>
            <div className="flex gap-4 px-3 ">
              <Avatar
                size={42}
                style={{
                  backgroundColor: "#e8eff1",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
                icon={
                  <svg
                    className={`${
                      isnotification ? "animate-notification" : ""
                    }`}
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M11.9999 6.44V9.77M12.0199 2C8.3399 2 5.3599 4.98 5.3599 8.66V10.76C5.3599 11.44 5.0799 12.46 4.7299 13.04L3.4599 15.16C2.6799 16.47 3.2199 17.93 4.6599 18.41C9.44118 20 14.6086 20 19.3899 18.41C19.7054 18.3048 19.9932 18.13 20.2321 17.8986C20.471 17.6671 20.6548 17.385 20.77 17.073C20.8852 16.761 20.9288 16.4271 20.8976 16.096C20.8665 15.7649 20.7613 15.445 20.5899 15.16L19.3199 13.04C18.9699 12.46 18.6899 11.43 18.6899 10.76V8.66C18.6799 5 15.6799 2 12.0199 2Z"
                      stroke="black"
                      stroke-width="1.5"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                    />
                    <path
                      d="M15.3299 18.82C15.3299 20.65 13.8299 22.15 11.9999 22.15C11.0899 22.15 10.2499 21.77 9.64992 21.17C9.04992 20.57 8.66992 19.73 8.66992 18.82"
                      stroke="black"
                      stroke-width="1.5"
                      stroke-miterlimit="10"
                    />
                  </svg>
                }
              />
              <Popover
                className="hover:cursor-pointer"
                placement="bottom"
                trigger="click"
                content={
                  <>
                    <div
                      className="flex justify-center items-center gap-2 hover:cursor-pointer"
                      onClick={handleLogout}
                    >
                      <BiLogOut color="black" size={20} />
                      <h2 className="text-">Logout</h2>
                    </div>
                  </>
                }
              >
                <Avatar
                  src="/assets/images/userimg.png"
                  className="hover:bg-[white]"
                  size={42}
                  style={{
                    backgroundColor: "#e8eff1",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    alignContent: "center",
                    color: "white",
                  }}
                />
              </Popover>
            </div>
          </div>
        </div>

        {/* content div-started */}
        <div
          style={{
            height: "95vh",
            width: "100%",
            overflow: "hidden",
          }}
        >
          <div className="flex shadow-md">
            <div
              className="bg-white"
              style={{
                width: "17rem",
                minWidth: "17rem",
                height: "95vh",
                overflow: "scroll",
                color: "white",
              }}
            >
              {/* dashboardMenu */}
              <div className="flex items-center px-11 py-6 gap-3 bg-[#F3FBFD]">
                <svg
                  width="18"
                  height="20"
                  viewBox="0 0 18 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M14.54 7.06C12.77 7.06 11.33 5.62 11.33 3.85C11.33 2.08 12.77 0.639999 14.54 0.639999C16.31 0.639999 17.75 2.08 17.75 3.85C17.75 5.62 16.31 7.06 14.54 7.06ZM14.54 2.13C13.6 2.13 12.83 2.9 12.83 3.84C12.83 4.78 13.6 5.55 14.54 5.55C15.48 5.55 16.25 4.78 16.25 3.84C16.25 2.9 15.48 2.13 14.54 2.13ZM3.46 7.06C1.69 7.06 0.25 5.62 0.25 3.85C0.25 2.08 1.69 0.639999 3.46 0.639999C5.23 0.639999 6.67 2.08 6.67 3.85C6.67 5.62 5.23 7.06 3.46 7.06ZM3.46 2.13C2.52 2.13 1.75 2.9 1.75 3.84C1.75 4.78 2.52 5.55 3.46 5.55C4.4 5.55 5.17 4.78 5.17 3.84C5.17 2.9 4.41 2.13 3.46 2.13ZM14.54 19.37C12.77 19.37 11.33 17.93 11.33 16.16C11.33 14.39 12.77 12.95 14.54 12.95C16.31 12.95 17.75 14.39 17.75 16.16C17.75 17.93 16.31 19.37 14.54 19.37ZM14.54 14.44C13.6 14.44 12.83 15.21 12.83 16.15C12.83 17.09 13.6 17.86 14.54 17.86C15.48 17.86 16.25 17.09 16.25 16.15C16.25 15.21 15.48 14.44 14.54 14.44ZM3.46 19.37C1.69 19.37 0.25 17.93 0.25 16.16C0.25 14.39 1.69 12.95 3.46 12.95C5.23 12.95 6.67 14.39 6.67 16.16C6.67 17.93 5.23 19.37 3.46 19.37ZM3.46 14.44C2.52 14.44 1.75 15.21 1.75 16.15C1.75 17.09 2.52 17.86 3.46 17.86C4.4 17.86 5.17 17.09 5.17 16.15C5.17 15.21 4.41 14.44 3.46 14.44Z"
                    fill="#12A5D0"
                  />
                </svg>
                <span className="text-[#12A5D0] text-sm">Dashboard</span>
              </div>
              {/* CMS menu */}
              {/* <div className="flex items-center justify-between px-4 py-4 gap-3 hover:bg-[#f5f2f2]">
                <div className="flex items-center gap-3 px-6">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M14 8H19M15 12H19M17 16H19M17 21H7C3 21 2 20 2 16V8C2 4 3 3 7 3H17C21 3 22 4 22 8V16C22 20 21 21 17 21Z"
                      stroke="black"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M12 16.33C11.9327 15.628 11.6219 14.9718 11.1214 14.475C10.621 13.9782 9.96243 13.6722 9.26 13.61C8.75457 13.56 8.24543 13.56 7.74 13.61C7.03826 13.674 6.38078 13.9807 5.88069 14.4771C5.3806 14.9735 5.06918 15.6287 5 16.33M8.5 11.29C8.98004 11.29 9.44042 11.0993 9.77986 10.7599C10.1193 10.4204 10.31 9.96004 10.31 9.48C10.31 8.99996 10.1193 8.53958 9.77986 8.20014C9.44042 7.86069 8.98004 7.67 8.5 7.67C8.01996 7.67 7.55958 7.86069 7.22014 8.20014C6.8807 8.53958 6.69 8.99996 6.69 9.48C6.69 9.96004 6.8807 10.4204 7.22014 10.7599C7.55958 11.0993 8.01996 11.29 8.5 11.29Z"
                      stroke="black"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                  <span className="text-[#1E1E1E] text-[12px] font-normal">
                    CMS
                  </span>
                </div>
                <div className="">
                  <svg
                    width="14"
                    height="9"
                    viewBox="0 0 18 9"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M16.9201 0.950012L10.4001 7.47001C9.63008 8.24001 8.37008 8.24001 7.60008 7.47001L1.08008 0.950012"
                      stroke="black"
                      stroke-width="1.5"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </div>
              </div> */}
              {sidebardata.map((menu: any) => (
                <MenuItem Header={menu.header} subMenu={menu.submenu} />
              ))}
            </div>

            <div
              style={{
                height: "95vh",
                width: "100%",
                background: "#F3F3F3",
              }}
            >
              <div className="flex">
                <Route path="/dashboard/visitor">
                  <Visitor
                    isFilterShown={isFilterShown}
                    setIsFilterShown={setIsFilterShown}
                  />
                </Route>
                <Route path="/dashboard/leads">
                  <Leads
                    isFilterShown={isFilterShown}
                    setIsFilterShown={setIsFilterShown}
                  />
                </Route>
                <Route path="/dashboard/applicant" component={Applicant} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminTest;
