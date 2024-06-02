import React, { useState,useContext } from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import CartModal from '../CartModal/CartModal';
import { CartContext } from '../../context/CartContext';

const Navigation = () => {
  const [showCart, setShowCart] = useState(false);
  const handleShowCart = () => setShowCart(true);
  const handleCloseCart = () => setShowCart(false);

  const { cartItems } = useContext(CartContext);

  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  return (
    <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">The Generics</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#store">Store</Nav.Link>
            <Nav.Link href="#about">About</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link onClick={handleShowCart}>
              <FontAwesomeIcon icon={faShoppingCart} />
              <span className="badge badge-light">{totalItems}</span>
            </Nav.Link>
          </Nav>
          <CartModal show={showCart} handleClose={handleCloseCart}/>
        </Container>
      </Navbar>
  )
}

export default Navigation