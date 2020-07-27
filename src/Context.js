/** @format */

import React, { Component } from "react";
import { storeProducts, detailProduct } from "../src/components/Data";

const ProductContext = React.createContext();

class ProductProvider extends Component {
  state = {
    products: [],
    detailProduct: detailProduct,
    cart: [],
  };

  componentDidMount() {
    this.setProduct();
  }

  setProduct = () => {
    let tempProduct = [];

    storeProducts.forEach((item) => {
      const singeItem = { ...item };
      tempProduct = [...tempProduct, singeItem];
    });

    this.setState(() => {
      return { products: tempProduct };
    });
  };

  getItems = (id) => {
    const products = this.state.products.find((item) => item.id === id);
    return products;
  };

  handleDetail = (id) => {
    const products = this.getItems(id);
    this.setState(() => {
      return { detailProduct: products };
    });
  };

  handleAddToCart = (id) => {
    let tempProduct = [...this.state.products];
    const index = tempProduct.indexOf(this.getItems(id));
    const products = tempProduct[index];
    products.inCart = true;
    products.count = 1;
    const price = products.price;
    products.total = price;

    this.setState(() => {
      return { products: tempProduct, cart: [...this.state.cart, products] };
    });

    console.log(products);
  };

  render() {
    return (
      <ProductContext.Provider
        value={{
          ...this.state,
          handleDetail: this.handleDetail,
          handleAddToCart: this.handleAddToCart,
        }}
      >
        {this.props.children}
      </ProductContext.Provider>
    );
  }
}

const ProductConsumer = ProductContext.Consumer;

export { ProductProvider, ProductConsumer };
