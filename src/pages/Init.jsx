import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getFromLocalStorage } from "../util";
import { AppStateContext } from "../context/AppStateContext";

const Init = () => {
  const navigate = useNavigate();
  const { setUser, setToken } = useContext(AppStateContext);

  useEffect(() => {
    const ret = getFromLocalStorage("user");

    console.log("Init useEffect -> userId getFromLocalStorage", ret);

    if (ret) {
      setUser(ret.user);
      setToken(ret.token);
      navigate("main");
    } else {
      navigate("signIn");
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [navigate]);

  return <></>;
};

export default Init;
