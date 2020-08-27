import React from "react";
import s from "./Info.module.css";

const Info = () => (
  <div>
    <img
      className={s.img_profile}
      src="https://101kote.ru/upload/resize_cache/iblock/8cd/400_400_240cd750bba9870f18aada2478b24840a/oriental5.jpg"
    />
    <p>Description</p>
  </div>
);

export default Info;
