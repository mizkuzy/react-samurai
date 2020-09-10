import React from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

const useLoginRedirect = () => {
  const isAuth = useSelector((state) => state.auth.isAuth);
  const history = useHistory();
  // but you can use a location instead
  const location = {
    pathname: "/login",
  };
  if (!isAuth) {
    history.push(location);
  }
};

export default useLoginRedirect;
