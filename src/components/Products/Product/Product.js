import { Link } from "react-router-dom";
import { Fragment, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { incrementCart } from "../../../redux/cartSlice/CartState";
import { incrementFavorites } from "../../../redux/favoriteSlice/FavoriteState";

function Product({product}) {
  const cartButton = useSelector((state) => state.cartCounter.cartButtonClicked);
  const favoriteButton = useSelector((state) => state.favoriteCounter.favoriteButtonClicked);
  const dispatch = useDispatch();
  const increment = (prod) => {
    dispatch(incrementCart(prod));
  }
  const incrementFav = (prod) => {
    dispatch(incrementFavorites(prod));
  }
  return (
    <div className="product col-xl-4">
        <div className="card position-relative justify-content-between">
          <div className="card-image m-auto border-1">
            <img src={product.image} className="card-img-top w-100 h-100" alt="product"/>
          </div>
            <div className="card-body-wrapper m-auto">
                <h6 className="card-title fw-bold">{product.title}</h6>
                <p className="card-text">{product.price} EGP</p>
                <div className="carts-buttons d-flex justify-content-between mb-3">
                  <button className="btn btn-success" onClick={() => increment(product)} disabled={cartButton ? true : false} >Add To Cart</button>
                  <button className="btn btn-danger" onClick={() => incrementFav(product)} disabled={favoriteButton ? true : false}>Add To Favorites</button>
                </div>
                <Link to={`/productDetails/${product.id}`} className="btn btn-primary w-100">Product Details</Link>
            </div>
        </div>
    </div>
  )
}

export default Product;