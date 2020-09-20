import React from "react";
import s from "./Navbar.module.css";
import { A } from "hookrouter";

const Navbar = () => (
  <nav className={s.nav}>
    <div className={s.item}>
      <A href={"/profile"} activeClassName={s.active}>
        Profile
      </A>
    </div>
    <div className={s.item}>
      <A href={"/dialogues"} activeClassName={s.active}>
        Messages
      </A>
    </div>
    <div className={s.item}>
      <A href={"/news"} activeClassName={s.active}>
        News
      </A>
    </div>
    <div className={s.item}>
      <A href={"/music"} activeClassName={s.active}>
        Music
      </A>
    </div>
    <div className={s.item}>
      <A href={"/settings"} activeClassName={s.active}>
        Settings
      </A>
    </div>
    <div className={s.item}>
      <A href={"/users"} activeClassName={s.active}>
        Users
      </A>
    </div>
  </nav>
);
export default Navbar;
