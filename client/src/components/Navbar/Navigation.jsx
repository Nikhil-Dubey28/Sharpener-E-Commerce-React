import React from 'react'
import { Navbar, Container, Nav } from 'react-bootstrap';

const Navigation = () => {
  return (
    <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">The Generics</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#store">Store</Nav.Link>
            <Nav.Link href="#about">About</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
  )
}

export default Navigation