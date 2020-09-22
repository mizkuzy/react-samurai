import { useSelector } from "react-redux";
import { history } from "../helpers/history";

const useLoginRedirect = () => {
  const isAuth = useSelector((state) => state.auth.isAuth);

  if (!isAuth) {
    history.push("/login");
  }
};

export default useLoginRedirect;
