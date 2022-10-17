import { Link } from "react-router-dom";

function Product({product, setCount}) {
  return (
    <div className="product col-xl-4">
        <div className="card">
            <img src={product.image} className="card-img-top w-100" alt="product"/>
            <div className="card-body">
                <h5 className="card-title">{product.title}</h5>
                <p className="card-text">{product.price} EGP</p>
                <button className="btn btn-primary" onClick={setCount}>Add To Cart</button>
                <Link to={`/productDetails/${product.id}`} className="btn btn-success">Product Details</Link>
            </div>
        </div>
    </div>
  )
}

export default Product;