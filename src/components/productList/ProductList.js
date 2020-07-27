/** @format */

import React, { Component } from "react";
import style from "./ProductList.module.css";
import Title from "../titles/Title";
import { storeProducts } from "../Data";
import { ProductConsumer } from "../../Context";
import Product from "../productList/products/Product";

class ProductList extends Component {
  state = {
    products: storeProducts,
  };
  render() {
    return (
      <div className={style.ProductList}>
        <Title name='our' title='Product' />
        <div className={style.row}>
          <ProductConsumer>
            {(value) => {
              return value.products.map((product) => {
                return <Product product={product} key={product.id} />;
              });
            }}
          </ProductConsumer>
        </div>
      </div>
    );
  }
}
export default ProductList;
