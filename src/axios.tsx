import axios from "axios";
const access_token = localStorage.getItem("accessToken");
const AxiosInstance = axios.create({
  baseURL: "https://api.dynocrm.com/",
  timeout: 3000,
  headers: {
    "X-Custom-Header": "foobar",
    Authorization: "Bearer " + access_token,
  },
});

export default AxiosInstance;
