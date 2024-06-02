// src/Product.js
import React, {useContext} from 'react';
import { Card, Button } from 'react-bootstrap';
import { CartContext } from '../../context/CartContext';

const Product = ({ product}) => {
    const { addToCart } = useContext(CartContext);

  return (
    <Card style={{ width: '18rem', margin: '10px' }}>
      <Card.Img variant="top" src={product.imageUrl} />
      <Card.Body>
        <Card.Title>{product.title}</Card.Title>
        <Card.Text>
          ${product.price}
        </Card.Text>
        <Button variant="primary" onClick={()=>addToCart(product)}>Add to Cart</Button>
      </Card.Body>
    </Card>
  );
}

export default Product;
