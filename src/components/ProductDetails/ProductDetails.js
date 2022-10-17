import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import "./ProductDetails.css";

function ProductDetails({setCount}) {
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
            {
            Object.keys(product).length && 
            <div className="product-container d-flex justify-content-between">
                <div className="product-image me-5">
                    <img className="w-100" src={product?.image} alt="product"/>
                </div>
                <div className="details">
                    <div className="title">
                        <h3>Title:</h3>
                        <p>{product?.title}</p>
                    </div>
                    <div className="category">
                        <h3>Category:</h3>
                        <p>{product?.category}</p>
                    </div>
                    <div className="desc">
                        <h3>Description:</h3>
                        <p>{product?.description}</p>
                    </div>
                    <div className="price">
                        <h3>Price:</h3>
                        <p>{product?.price}</p>
                    </div>
                    <div className="rating">
                        <h3>Rating:</h3>
                        <p>{product?.rating.rate}</p>
                    </div>
                    <button className="btn btn-primary" onClick={setCount}>Add To Cart</button>
                </div>
            </div>
            }
        </div>
    </div>
  )
}

export default ProductDetails;