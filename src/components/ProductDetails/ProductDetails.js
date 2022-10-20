import { useReducer, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { useParams } from "react-router-dom";
import "./ProductDetails.css";
import Spinner from "../Spinner/Spinner";
import ErrorComponent from "../ErrorComponent/ErrorComponent";
import { incrementCart } from "../../redux/CartSlice/CartSlice";
import { incrementFavorites } from "../../redux/FavoriteSlice/FavoriteSlice";

const initialState = {
    loading: true,
    data: [],
    error: ""
}

const reducer = (state, action) => {
    switch (action.type) {
        case "loading":
            return {
                loading: true
            };
        case "success":
            return {
                loading: false,
                data: action.payload
            };
        case "failed":
            return {
                loading: false,
                error: action.payload
            };
        default:
            return initialState;
    }
}

function ProductDetails() {
    const params = useParams();
    const [state, dispatch] = useReducer(reducer, initialState);
    const cartList = useSelector((state) => state.cartCounter.cartList);
    const favoriteList = useSelector((state) => state.favoriteCounter.favoriteList);
    useEffect(() => {
        axios.get(`https://fakestoreapi.com/products/${params.id}`).then((resp) => {
            dispatch({type: "success", payload: resp.data})
        }).catch((error) => {
            dispatch({type: "failed", payload: error.message})
        })
    }, []);
    const dispatchFunction = useDispatch();
    const addToCart = (prod) => {
        !cartList.some((item) => item .id === prod.id) && dispatchFunction(incrementCart(prod))
    }
    const addToFavorite = (prod) => {
        !favoriteList.some((item) => item .id === prod.id) && dispatchFunction(incrementFavorites(prod))
    }
  return (
    <div className="product-details py-5">
        <div className="container">
            {state.loading ? (
                <Spinner />
            ) : state.error ? (
                <ErrorComponent />
            ) : (
                <div className="product-container d-flex justify-content-between">
                    <div className="product-image me-5">
                        <img className="w-100" src={state.data.image} alt="product" />
                    </div>
                    <div className="details px-5">
                        <div className="title">
                            <h5>Title:</h5>
                            <p>{state.data.title}</p>
                        </div>
                        <hr />
                        <div className="category">
                            <h5>Category:</h5>
                            <p>{state.data.category}</p>
                        </div>
                        <hr />
                        <div className="desc">
                            <h5>Description:</h5>
                            <p>{state.data.description}</p>
                        </div>
                        <hr />
                        <div className="price">
                            <h5>Price:</h5>
                            <p>{state.data.price}</p>
                        </div>
                        <hr />
                        <div className="rating">
                            <h5>Rating:</h5>
                            <p className="d-flex align-items-center">{state.data.rating.rate} <span className="ms-2 star">&#9733;</span></p>
                        </div>
                        <hr />
                        <div className="carts-buttons d-flex justify-content-around mb-3">
                            <button className="btn btn-success" onClick={() => addToCart(state.data)}>Add To Cart</button>
                            <button className="btn btn-danger" onClick={() => addToFavorite(state.data)}>Add To Favorites</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    </div>
  )
}

export default ProductDetails;