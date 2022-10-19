import { Fragment, useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./Main.css";
import Navbar from './Navbar/Navbar';
import Products from './Products/Products';
import Counter from './Counter/Counter';
import ProductDetails from './ProductDetails/ProductDetails';
import Cart from './Cart/Cart';
import Favorites from "./Favorites/Favorites";

function Main() {
  return (
    <Fragment>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Products/>}/>
          <Route path="/counter" element={<Counter />}/>
          <Route path="/productDetails/:id" element={<ProductDetails/>}/>
          <Route path="/cart" element={<Cart/>}/>
          <Route path="/favorites" element={<Favorites />}/>
        </Routes>
      </BrowserRouter>
    </Fragment>
  )
}

export default Main;