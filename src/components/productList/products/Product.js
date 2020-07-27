/** @format */

import React from "react";
import style from "./Products.module.css";
import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";
import { ProductConsumer } from "../../../Context";

function Product(props) {
  const { img, id, price, inCart, title } = props.product;
  return (
    <div className={style.Product}>
      <div className={style.Product_row}>
        <ProductConsumer>
          {(value) => (
            <div
              className={style.Product_container}
              onClick={() => {
                value.handleDetail(id);
              }}
            >
              <NavLink to='/details'>
                <img src={img} alt='pcz' />
              </NavLink>

              <button
                className={style.cartBtn}
                disabled={inCart ? true : false}
                onClick={() => {
                  value.handleAddToCart(id);
                }}
              >
                {inCart ? (
                  <p className={style.btn_cart}>in Cart</p>
                ) : (
                  <i className='fas fa-cart-plus'></i>
                )}
              </button>
            </div>
          )}
        </ProductConsumer>

        <div className={style.cart_paragraph}>
          <p>{title}</p>
          <h5>
            $ <span>{price}</span>
          </h5>
        </div>
      </div>
    </div>
  );
}

export default Product;

Product.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number,
    price: PropTypes.number,
    inCart: PropTypes.bool,
    title: PropTypes.string,
    img: PropTypes.string,
  }).isRequired,
};
