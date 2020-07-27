/** @format */

import React from "react";
import { NavLink } from "react-router-dom";
import style from "../details/Details.module.css";
import { ProductConsumer } from "../../Context";

function Details() {
  return (
    <div>
      <ProductConsumer>
        {(value) => {
          const {
            id,
            company,
            img,
            price,
            info,
            title,
            inCart,
          } = value.detailProduct;
          return (
            <div className={style.Details}>
              <div className={style.Details_title}>
                <h1>{title}</h1>
              </div>

              <div className={style.Details_row}>
                <div className={style.imig}>
                  <img src={img} alt='pcz' />
                </div>

                <div className={style.Details_text}>
                  <h2>
                    made by:<span>{company}</span>
                  </h2>
                  <h4>
                    Price:<span>$</span>
                    {price}
                  </h4>

                  <p>{info}</p>

                  <div className={style.btn}>
                    <NavLink to='/'>
                      <button>Back to product</button>
                    </NavLink>

                    <button disabled={inCart ? true : false}>
                      {inCart ? "in cart" : "add to cart"}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          );
        }}
      </ProductConsumer>
    </div>
  );
}

export default Details;
