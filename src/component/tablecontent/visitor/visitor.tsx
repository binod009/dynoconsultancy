import { Button, Table } from "antd";
import { ColumnsType } from "antd/es/table";
import { AiFillFilter } from "react-icons/ai";
import FilterSection from "../../filter/filter";
import GlobalLayout from "../../globaLayout/GlobalLayout";
import SideContent from "../../sidecontent/SideContent";

const Visitor = ({ isFilterShown, setIsFilterShown }: any) => {
  return (
    <>
      <GlobalLayout
        isFilterShown={isFilterShown}
        setIsFilterShown={setIsFilterShown}
      />
    </>
  );
};

export default Visitor;
