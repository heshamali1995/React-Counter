import { Fragment, useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./Main.css";
import Navbar from './Navbar/Navbar';
import Products from './Products/Products';
import Counter from './Counter/Counter';
import ProductDetails from './ProductDetails/ProductDetails';
import Cart from './Cart/Cart';

function Main() {
  const [count, setCount] = useState(0);
  const handleClick = (e) => {
    setCount((prev) => prev + 1)
  }
  return (
    <Fragment>
      <BrowserRouter>
        <Navbar count={count}/>
        <Routes>
          <Route path="/" element={<Products count={count} setCount={handleClick}/>}/>
          <Route path="/counter" element={<Counter />}/>
          <Route path="/productDetails/:id" element={<ProductDetails setCount={handleClick}/>}/>
          <Route path="/cart" element={<Cart count={count}/>}/>
        </Routes>
      </BrowserRouter>
    </Fragment>
  )
}

export default Main;