import React from "react";
import { useSelector } from "react-redux";

const useLoginRedirect = () => {
  const isAuth = useSelector((state) => state.auth.isAuth);
  // todo redirect to login if !isAuth
};

export default useLoginRedirect;
