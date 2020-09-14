import React from "react";
import s from "./Header.module.css";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getAuthUserData, logout } from "../../redux/thunks";

const Header = () => {
  const dispatch = useDispatch();
  dispatch(getAuthUserData());

  const isAuth = useSelector((state) => state.auth.isAuth);
  const login = useSelector((state) => state.auth.login);

  const onLogout = () => {
    dispatch(logout());
  };

  return (
    <header className={s.header}>
      <img
        alt={"Header"}
        src="https://images.pexels.com/photos/3193889/pexels-photo-3193889.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
      />
      <div className={s.loginBlock}>
        {isAuth ? (
          <>
            <span>{login}</span> <button onClick={onLogout}>Log out</button>
          </>
        ) : (
          <NavLink to={"/login"}>Login</NavLink>
        )}
      </div>
    </header>
  );
};

export default Header;
