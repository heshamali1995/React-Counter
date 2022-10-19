import { useState, useEffect, useReducer } from "react";
import axios from "axios";
import "./Products.css";
import Product from "./Product/Product";
import Spinner from "../Spinner/Spinner";

const initialState = {
  loading: true,
  data: [],
  error: ""
}

const reducer = (state, action) => {
  switch (action.type) {
    case "loading":
      return {
        loading: true,
        data: [],
        error: ""
      }
    case "success":
      return {
        loading: false,
        data: action.payload
      }
    case "failed":
      return {
        loading: false,
        error: action.payload
      }
    default:
      return initialState
  }
}

function Products() {
  const [state, dispatch] = useReducer(reducer, initialState);
  useEffect(() => {
    axios.get("https://fakestoreapi.com/products").then((resp) => {
      dispatch({type: "success", payload: resp.data})
    }).catch((error) => {
      dispatch({type: "failed", payload: error.message})
    })
  }, []);
  return (
    <section className="products py-5">
        <div className="container">
          <div className="row gy-4">
            {state.loading ? (
              <Spinner />
            ) : state.error ? (
              <h2>Error In Fetching</h2>
            ) : (
              state.data.map((product) => {
                return (
                  <Product
                  key={product.id} 
                  product={product} />
                )
              })
            )}
          </div>
        </div>
    </section>
  )
}

export default Products;