import React from "react";
import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
const AccessControl = ({ children }: any) => {
  const history = useHistory();
  const [loading, setLoading] = useState(true);
  let accessToken = localStorage.getItem("accessToken");
  useEffect(() => {
    if (!accessToken) {
      history.push("/");
    } else {
      setLoading(false);
    }
  }, []);

  return loading ? <>loading..</> : children;
};
export default AccessControl;
