import React from "react";
import s from "./Header.module.css";
import { NavLink } from "react-router-dom";

const Header = ({ login, isAuth }) => (
  <header className={s.header}>
    <img
      alt={"Header image"}
      src="https://images.pexels.com/photos/3193889/pexels-photo-3193889.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
    />

    <div className={s.loginBlock}>
      {isAuth ? <span>{login}</span> : <NavLink to={"/login"}>Login</NavLink>}
    </div>
  </header>
);
export default Header;
