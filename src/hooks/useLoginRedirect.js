import React from "react";
import { useSelector } from "react-redux";
import { navigate } from "hookrouter";

const useLoginRedirect = () => {
  const isAuth = useSelector((state) => state.auth.isAuth);

  if (!isAuth) {
    navigate("/login");
  }
};

export default useLoginRedirect;
