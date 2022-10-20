import { Link } from "react-router-dom";
import { FaCartPlus } from 'react-icons/fa';
import { FaHeart } from "react-icons/fa";
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useSelector } from "react-redux";
import "./NavComponent.css";

function NavComponent() {
  const cartCount = useSelector((state) => state.cartCounter.cartCount);
  const favoriteCount = useSelector((state) => state.favoriteCounter.favorite);
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand>
          <Nav.Link as={Link} to="/">Products</Nav.Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="ms-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link as={Link} to="/cart" className="me-4 cart-item">
              <FaCartPlus className="cart-icon"/>
              <span className="ms-3">{cartCount}</span>
            </Nav.Link>
            <Nav.Link as={Link} to="/favorites" className="me-4 heart-item">
              <FaHeart className="icon-heart"/>
              <span className="ms-3">{favoriteCount}</span>
            </Nav.Link>
            <Nav.Link as={Link} to="/login" className="me-4">Login</Nav.Link>
            <Nav.Link as={Link} to="/counter" className="me-4">Counter</Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavComponent;