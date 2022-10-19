import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import "./ProductDetails.css";
import { incrementCart } from "../../redux/cartSlice/CartState";
import { incrementFavorites } from "../../redux/favoriteSlice/FavoriteState";
import Spinner from "../Spinner/Spinner";

function ProductDetails() {
    // Selector On Each Button
    const cartButton = useSelector((state) => state.cartCounter.cartButtonClicked);
    const favoriteButton = useSelector((state) => state.favoriteCounter.favoriteButtonClicked);
    // Dispatch On Each Button
    const dispatch = useDispatch();
    const increment = (prod) => {
        dispatch(incrementCart(prod));
    }
    const incrementFav = (prod) => {
        dispatch(incrementFavorites(prod));
    }
    // Get Params
    const [product, setProduct] = useState([]);
    const params = useParams();
    useEffect(() => {
        axios.get(`https://fakestoreapi.com/products/${params.id}`).then((resp) => {
            setProduct(resp.data)
        })
    }, []);

  return (
    <div className="product-details py-5">
        <div className="container">
            {Object.keys(product).length == 0 ? (
                <Spinner />
            ) : (
                <div className="product-container d-flex justify-content-between">
                <div className="product-image me-5">
                    <img className="w-100" src={product.image} alt="product"/>
                </div>
                <div className="details px-5">
                    <div className="title">
                        <h5>Title:</h5>
                        <p>{product.title}</p>
                    </div>
                    <hr />
                    <div className="category">
                        <h5>Category:</h5>
                        <p>{product.category}</p>
                    </div>
                    <hr />
                    <div className="desc">
                        <h5>Description:</h5>
                        <p>{product.description}</p>
                    </div>
                    <hr />
                    <div className="price">
                        <h5>Price:</h5>
                        <p>{product.price}</p>
                    </div>
                    <hr />
                    <div className="rating">
                        <h5>Rating:</h5>
                        <p className="d-flex align-items-center">{product.rating.rate} <span className="ms-2 star">&#9733;</span></p>
                    </div>
                    <hr />
                    <div className="carts-buttons d-flex justify-content-around mb-3">
                        <button className="btn btn-success" onClick={() => increment(product)} disabled={cartButton ? true : false} >Add To Cart</button>
                        <button className="btn btn-danger" onClick={() => incrementFav(product)} disabled={favoriteButton ? true : false}>Add To Favorites</button>
                    </div>
                </div>
            </div>
            )}
        </div>
    </div>
  )
}

export default ProductDetails;