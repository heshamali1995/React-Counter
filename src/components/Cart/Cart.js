import { useSelector, useDispatch } from "react-redux";
import { FaCartPlus, FaTrash } from 'react-icons/fa';
import Button from 'react-bootstrap/Button';
import "./Cart.css";
import { decrementCart, removeAll } from "../../redux/CartSlice/CartSlice";
import { Link } from "react-router-dom";

function Cart() {
  const cartList = useSelector((state) => state.cartCounter.cartList);
  console.log(cartList)
  const dispatch = useDispatch();
  const removeItem = (prod) => {
    dispatch(decrementCart(prod))
  };
  const emptyCart = () => {
    dispatch(removeAll());
  }
  return (
    <div className="cart py-5">
      <div className="container">
        {Object.keys(cartList).length == 0 ? (
          <div className="text-center pt-5">
            <h3 className="mb-5">Cart Is Empty</h3>
            <FaCartPlus className="icon-cart mb-5" />
            <Button variant="success" className="d-block m-auto" size="lg">
              <Link to="/" className="text-decoration-none text-white">
                Let's Add Items To Your Cart!
              </Link>
            </Button>
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
                <th>Remove From Cart</th>
              </tr>
            </thead>
            {cartList.map((item, index) => {
              return (
                <tbody key={item.id}>
                  <tr>
                    <td>{index + 1}</td>
                    <td>
                      <img className="item-img" src={item.image} alt="item" />
                    </td>
                    <td>{item.title}</td>
                    <td>{item.category}</td>
                    <td>{item.price} EGP</td>
                    <td>{item.rating.rate} <span className="star-icon">&#9733;</span></td>
                    <td>
                      <span onClick={() => removeItem(item)}>
                        <FaTrash className="trash-icon" />
                      </span>
                    </td>
                  </tr>
                </tbody>
              )
            })}
          </table>
        )}
        <div className="d-flex justify-content-around">
          <button style={{ display: cartList == 0 ? "none" : "block" }} className="btn btn-danger" onClick={emptyCart}>Empty Your Cart</button>
          <h3 style={{ display: cartList == 0 ? "none" : "block" }}>Total Price: {cartList.reduce((acc, item) => acc += item.price, 0)}</h3>
        </div>
      </div>
    </div>
  )
}

export default Cart;