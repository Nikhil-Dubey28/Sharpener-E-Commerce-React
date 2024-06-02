// src/ProductsScreen.js
import React from 'react';
import Product from '../Product/Product';
import { Container, Row, Col } from 'react-bootstrap';

const productsArr = [
  {
    title: 'Colors',
    price: 100,
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
  },
  {
    title: 'Black and white Colors',
    price: 50,
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
  },
  {
    title: 'Yellow and Black Colors',
    price: 70,
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
  },
  {
    title: 'Blue Color',
    price: 100,
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%204.png',
  },
  {
    title: 'T-Shirt',
    price: 19.99,
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Shirt.png',
  },
  {
    title: 'Coffee Cup',
    price: 6.99,
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Cup.png',
  }
];

const ProductList = () => {
  return (
    <Container>
      <h2 className="text-center my-4">The Generics</h2>
      <h3 className="my-4">Music</h3>
      <Row>
        {productsArr.slice(0, 4).map((product, index) => (
          <Col key={index} sm={12} md={6} lg={4} xl={3}>
            <Product 
              title={product.title} 
              price={product.price} 
              imageUrl={product.imageUrl} 
            />
          </Col>
        ))}
      </Row>
      <h3 className="my-4">Merch</h3>
      <Row>
        {productsArr.slice(4).map((product, index) => (
          <Col key={index} sm={12} md={6} lg={4} xl={3}>
            <Product 
              title={product.title} 
              price={product.price} 
              imageUrl={product.imageUrl} 
            />
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default ProductList;
