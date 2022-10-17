import { useState, useEffect } from "react";
import axios from "axios";
import "./Products.css";
import Product from "./Product/Product";

function Products({count, setCount}) {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios.get("https://fakestoreapi.com/products").then((resp) => {
      setData(resp.data);
    })
  }, []);
  return (
    <section className="products py-5">
        <div className="container">
          <div className="row">
            {data.map((product) => {
                return (
                  <Product
                  key={product.id} 
                  product={product} 
                  count={count} 
                  setCount={setCount}/>
                )
              })}
          </div>
        </div>
    </section>
  )
}

export default Products;