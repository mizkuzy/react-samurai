import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

const useLoginRedirect = () => {
  console.log("useLoginRedirect");
  const isAuth = useSelector((state) => state.auth.isAuth);

  const history = useHistory();
  if (!isAuth) {
    const loginPath = "/login";
    const beforeLoginPath = history.location.pathname;
    const param =
      beforeLoginPath === loginPath
        ? ""
        : `?prev_path=${encodeURIComponent(beforeLoginPath)}`;

    history.push(`${loginPath}${param}`);
  }
};

export default useLoginRedirect;
