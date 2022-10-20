import { useEffect, useReducer } from "react";
import axios from "axios";
import "./Products.css";
import Spinner from "../Spinner/Spinner";
import Product from "./Product/Product";
import ErrorComponent from "../ErrorComponent/ErrorComponent";

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

function Products() {
  const [state, dispatch] = useReducer(reducer, initialState);
  useEffect(() => {
    axios.get("https://fakestoreapi.com/products").then((resp) => {
      dispatch({type: "success", payload: resp.data});
    }).catch((error) => {
      dispatch({type: "failed", payload: error.message})
    })
  }, [])
  return (
    <div className="products py-5">
      <div className="container">
        <div className="row gy-4">
          {state.loading ? (
            <Spinner />
          ) : state.error ? (
            <ErrorComponent />
          ) : (
            state.data.map((product) => {
              return (
                <Product 
                  key={product.id}
                  product={product}
                />
              )
            })
          )}
        </div>
      </div>
    </div>
  )
}

export default Products;