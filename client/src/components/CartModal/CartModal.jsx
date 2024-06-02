// src/components/Cart/CartModal.jsx
import React, { useState,useContext } from 'react';
import { Modal, Button, ListGroup, Image } from 'react-bootstrap';
import { CartContext } from '../../context/CartContext';


const CartModal = ({ show, handleClose }) => {
    const { cartItems } = useContext(CartContext);

    

  const handleRemove =() => {

  }
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Shopping Cart</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <ListGroup>
        {cartItems.map((item, index) => (
            <ListGroup.Item key={index} className="d-flex justify-content-between align-items-center">
              <Image src={item.imageUrl} alt={item.title} thumbnail style={{ width: '50px', height: '50px' }} />
              <div>
                <h5>{item.title}</h5>
                <p>${item.price} x {item.quantity} = ${item.price * item.quantity}</p>
             
              </div>
              <Button variant="danger" onClick={() => handleRemove(index)}>Remove</Button>
            </ListGroup.Item>
          ))}
        </ListGroup>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default CartModal;
