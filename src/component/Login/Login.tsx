import { Button, Form, Input } from "antd";
import { useHistory } from "react-router-dom";

import axios from "../../axios";
const Login = () => {
  const history = useHistory();
  const onFormSubmit = async (value: any) => {
    const login_res = await axios.post("api/v1/users/login", value);
    localStorage.setItem("accessToken", login_res.data.accessToken);

    history.push("/dashboard");
  };
  return (
    <div className="max-w-lg mx-auto pt-12">
      <div className="flex justify-center items-center mb-5">
        <h2 className="font-bold p-2">DynoCMS</h2>
        <img
          src="https://www.courts.vic.gov.au/sites/all/themes/custom/csv_theme_reskin/images/csv-cms-logo-rgb.png"
          alt="logo"
          width={80}
          height={80}
        />
      </div>

      <div className="rounded text-center bg-[#ffffff] boxshadow p-10">
        <div className="">
          <Form
            name="basic"
            autoComplete="off"
            layout="vertical"
            onFinish={onFormSubmit}
          >
            <Form.Item label="username" name="email" className="font-semibold">
              <Input className="h-12" />
            </Form.Item>
            <Form.Item
              label="password"
              name="password"
              className="font-semibold"
            >
              <Input.Password className="h-12" />
            </Form.Item>

            <Form.Item className="">
              <Button
                className="w-[100%] py-6 flex items-center justify-center text-xl font-thin"
                htmlType="submit"
              >
                Login to CMS
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default Login;
