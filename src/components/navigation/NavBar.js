/** @format */

import React from "react";
import { NavLink } from "react-router-dom";
import Logo from "./download.svg";
import style from "./NavBar.module.css";

export default function NavBar() {
  return (
    <div className={style.NavBar}>
      <div className={style.NavBar_container}>
        <NavLink to='/'>
          <img src={Logo} alt='Logo' />
        </NavLink>
        <nav>
          <ul>
            <NavLink to='/' exact className={style.NavLink}>
              <li>Product</li>
            </NavLink>
            <NavLink to='/about' className={style.NavLink}>
              <li>About</li>
            </NavLink>
            <NavLink to='/login' className={style.NavLink}>
              <li>Login</li>
            </NavLink>
            <NavLink to='/cart'>
              <button className={style.cart_btn}>
                <i className={"fas fa-cart-plus"}>My cart</i>
              </button>
            </NavLink>
          </ul>
        </nav>
      </div>
    </div>
  );
}
