import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

/**
 * Custom hook redirect to current profile if profile is not specified
 * or from basic url
 */
const useCurrentProfileRedirect = () => {
  console.log("useCurrentRedirect");
  const isAuth = useSelector((state) => state.auth.isAuth);
  const userId = useSelector((state) => state.auth.userId);

  const history = useHistory();
  const profilePath = "/profile";
  const homePath = "/";
  const currentPath = history.location.pathname;

  const path =
    currentPath === profilePath || homePath
      ? `${profilePath}/${userId}`
      : currentPath;

  if (isAuth && currentPath !== path) {
    history.push(path);
  }
};

export default useCurrentProfileRedirect;
