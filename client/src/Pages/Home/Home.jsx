import React from 'react';
import { Container, Row, Col, Button, Table } from 'react-bootstrap';
import Footer from '../../components/Footer/Footer';

const TourPage = () => {
  return (
    <Container fluid className="text-center p-5" >
      <Row className="justify-content-center">
        <Col md={8}>
          <h1 className="display-4" >The Generics</h1>
          <Button variant="primary" className="mt-4" size="lg">Get our Latest Album</Button>
          <div className="mt-5">
            <h2>Tours</h2>
            <Table striped bordered hover className="mt-3">
              <thead>
                <tr>
                  <th>Date</th>
                  <th>Location</th>
                  <th>Venue</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>JUL 16</td>
                  <td>Detroit, MI</td>
                  <td>DTE Energy Music Theatre</td>
                  <td><Button variant="info">Buy Tickets</Button></td>
                </tr>
                <tr>
                  <td>JUL 19</td>
                  <td>Toronto, ON</td>
                  <td>Budweiser Stage</td>
                  <td><Button variant="info">Buy Tickets</Button></td>
                </tr>
                <tr>
                  <td>JUL 22</td>
                  <td>Bristow, VA</td>
                  <td>Jiggy Lube Live</td>
                  <td><Button variant="info">Buy Tickets</Button></td>
                </tr>
                <tr>
                  <td>JUL 29</td>
                  <td>Phoenix, AZ</td>
                  <td>AK-Chin Pavilion</td>
                  <td><Button variant="info">Buy Tickets</Button></td>
                </tr>
                <tr>
                  <td>AUG 2</td>
                  <td>Las Vegas, NV</td>
                  <td>T-Mobile Arena</td>
                  <td><Button variant="info">Buy Tickets</Button></td>
                </tr>
                <tr>
                  <td>AUG 7</td>
                  <td>Concord, CA</td>
                  <td>Concord Pavilion</td>
                  <td><Button variant="info">Buy Tickets</Button></td>
                </tr>
              </tbody>
            </Table>
          </div>
        </Col>
      </Row>
      <Footer />
    </Container>
  );
};

export default TourPage;
