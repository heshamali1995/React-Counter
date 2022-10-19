import "./Favorites.css";
import { useSelector, useDispatch } from "react-redux";
import { FaHeart, FaTrash } from "react-icons/fa";
import { removeAll, removeFromFavorites } from "../../redux/favoriteSlice/FavoriteState";

function Cart() {
  const favoriteList = useSelector((state) => state.favoriteCounter.favoriteList);
  const dispatch = useDispatch();
  const removeFav = (prod) => {
    dispatch(removeFromFavorites(prod))
  }
  const emptyFavoriteList = () => {
    dispatch(removeAll());
  }
  return (
    <div className="cart py-5">
        <div className="container">
            {Object.keys(favoriteList).length == 0 ? (
              <div className="text-center pt-5">
                <h3 className="mb-5">Favorites Is Empty</h3>
                <FaHeart className="icon-heart"/>
              </div>
            ) : (
              <table className="p-3 text-center mb-5">
                <thead>
                  <tr>
                    <th>P NO.</th>
                    <th>IMG</th>
                    <th>Product Name</th>
                    <th>Category</th>
                    <th>Price</th>
                    <th>Rating</th>
                    <th>Remove From Favorites</th>
                  </tr>
                </thead>
                {favoriteList.map((item, index) => {
                  return (
                    <tbody key={item.id}>
                      <tr>
                        <td>{index + 1}</td>
                        <td>
                          <img className="item-img" src={item.image} alt="item"/>
                        </td>
                        <td>{item.title}</td>
                        <td>{item.category}</td>
                        <td>{item.price} EGP</td>
                        <td>{item.rating.rate} <span className="star-icon">&#9733;</span></td>
                        <td>
                          <span onClick={() => removeFav(item)}>
                            <FaTrash className="trash-icon"/>
                          </span>
                        </td>
                      </tr>
                    </tbody>
                  )
                })}
              </table>
            )}
            <div className="d-flex justify-content-around">
              <button style={{display: favoriteList == 0 ? "none" : "block"}} className="btn btn-danger" onClick={emptyFavoriteList}>Empty Your Favorite List</button>
            </div>
        </div>
    </div>
  )
}

export default Cart;