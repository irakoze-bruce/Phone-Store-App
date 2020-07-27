/** @format */

import React from "react";
import style from "./Title.module.css";
function Title({ name, title }) {
  return (
    <div className={style.Title}>
      <h1>
        {name} <span>{title}</span>
      </h1>
    </div>
  );
}

export default Title;
