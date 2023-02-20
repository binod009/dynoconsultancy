import { Collapse } from "antd";
import SubMenu from "antd/es/menu/SubMenu";
import { Link } from "react-router-dom";
const { Panel } = Collapse;

const MenuItem = ({ Header, subMenu }: any) => {
  const onChange = (key: string | string[]) => {
    console.log(key);
  };

  return (
    <Collapse defaultActiveKey={["1"]} onChange={onChange} bordered={false}>
      <Panel
        forceRender={false}
        showArrow={false}
        header={
          <div className="flex items-center justify-between  py-3">
            {/* icons */}
            <div className="flex gap-3 pl-7 items-center">
              {Header.icon}
              <span className="text-[#1E1E1E] text-[12px] font-normal">
                {Header.name}
              </span>
            </div>
            {subMenu && (
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
            )}
          </div>
        }
        key="1"
        extra={<></>}
      >
        {subMenu &&
          subMenu.length > 0 &&
          subMenu.map((item: any) => (
            <>
              <Link to={item.path}>
                <div className="ml-12">
                  <div className="flex items-center gap-2 px-4 py-4 hover:bg-[#f5f3f3]">
                    {item.icon}
                    <span className="text-[#1E1E1ECC] text-[12px] font-normal">
                      {item.name}
                    </span>
                  </div>
                </div>
              </Link>
            </>
          ))}
      </Panel>
    </Collapse>
  );
};

export default MenuItem;
