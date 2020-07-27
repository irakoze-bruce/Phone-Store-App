/** @format */

import React from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import ProductList from "./components/productList/ProductList";
import Default from "./components/Default";
import Details from "./components/details/Details";
import Cart from "./components/Cart";
import NavBar from "./components/navigation/NavBar";

function App() {
  return (
    <>
      <NavBar />
      <Switch>
        <Route path='/' exact component={ProductList} />
        <Route path='/details' component={Details} />
        <Route path='/cart' component={Cart} />
        <Route component={Default} />
      </Switch>
    </>
  );
}

export default App;
