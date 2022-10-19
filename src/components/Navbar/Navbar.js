import { Link } from "react-router-dom";
import { FaCartPlus } from 'react-icons/fa';
import { FaHeart } from "react-icons/fa";
import { useSelector } from "react-redux";
import "./Navbar.css";

function Navbar() {
    const globalStore = useSelector((state) => state.cartCounter.counter);
  return (
      <nav className="navbar navbar-expand-lg bg-light">
          <div className="container">
              <Link className="navbar-brand" to="/">Products</Link>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                  <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                      <li className="nav-item me-3">
                          <Link className="nav-link cart-item" to="/cart">
                            <FaCartPlus className="cart-icon"/>
                            <span className="ms-3">{globalStore}</span>
                          </Link>
                      </li>
                      <li className="nav-item me-3">
                          <Link className="nav-link" to="/favorites">
                            <FaHeart className="heart-icon"/>
                          </Link>
                      </li>
                      <li className="nav-item dropdown me-3">
                          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                              Dropdown
                          </a>
                          <ul className="dropdown-menu">
                              <li><a className="dropdown-item" href="#">Action</a></li>
                              <li><a className="dropdown-item" href="#">Another action</a></li>
                              <li><hr className="dropdown-divider"/></li>
                              <li><a className="dropdown-item" href="#">Something else here</a></li>
                          </ul>
                      </li>
                      <li className="nav-item me-3">
                          <Link className="nav-link" to="/sign">
                            <span>Sign Form</span>
                          </Link>
                      </li>
                  </ul>
                  <form className="d-flex" role="search">
                      <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                          <button className="btn btn-outline-success" type="submit">Search</button>
                  </form>
              </div>
          </div>
      </nav>
  )
}

export default Navbar;