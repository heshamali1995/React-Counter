import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { incrementCart } from "../../../redux/CartSlice/CartSlice";
import { incrementFavorites } from "../../../redux/FavoriteSlice/FavoriteSlice";

function Product({product}) {
  const cartList = useSelector((state) => state.cartCounter.cartList);
  const favoriteList = useSelector((state) => state.favoriteCounter.favoriteList)
  const dispatch = useDispatch();
  const addToCart = (prod) => {
    !cartList.some((item) => item .id === prod.id) && dispatch(incrementCart(prod))
  }
  const addToFavorite = (prod) => {
    !favoriteList.some((item) => item .id === prod.id) && dispatch(incrementFavorites(prod))
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
                <button className="btn btn-success" onClick={() => addToCart(product)}>Add To Cart</button>
                <button className="btn btn-danger" onClick={() => addToFavorite(product)}>Add To Favorites</button>
              </div>
              <Link to={`/productDetails/${product.id}`} className="btn btn-primary w-100">Product Details</Link>
          </div>
      </div>
    </div>
  )
}

export default Product;