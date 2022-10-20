import { Fragment } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./Main.css";
import NavComponent from "./Navbar/NavComponent";
import Products from "./Products/Products";
import Cart from "./Cart/Cart";
import ProductDetails from "./ProductDetails/ProductDetails";
import Favorites from "./Favorites/Favorites";
import Login from "./Login/Login";
import Sign from "./Sign/Sign";
import Counter from "./Counter/Counter";

function Main() {
  return (
    <Fragment>
      <BrowserRouter>
        <NavComponent />
        <Routes>
          <Route exact path="/" element={<Products />}/>
          <Route path="/cart" element={<Cart />}/>
          <Route path="/favorites" element={<Favorites />}/>
          <Route path="/productDetails/:id" element={<ProductDetails />}/>
          <Route path="/login" element={<Login />}/>
          <Route path="/sign" element={<Sign />}/>
          <Route path="/counter" element={<Counter />}/>
        </Routes>
      </BrowserRouter>
    </Fragment>
  )
}

export default Main