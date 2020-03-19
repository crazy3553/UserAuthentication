import React, { Component } from "react";
import { Container, Table, Col, Card } from "react-bootstrap";

export class Dashboard extends Component {
  render() {
    return (
      <div>
        <Container>
          <Col md={12}>
            <Card className="dashboard">
              <Table striped bordered hover>
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Age</th>
                    <th>Gender</th>
                    <th>Email</th>
                    <th>Mobile Number</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Nitesh Kumar</td>
                    <td>27</td>
                    <td>Male</td>
                    <td>nitesh174kumar@gmail.com</td>
                    <td>9320922002</td>
                  </tr>
                  <tr>
                    <td>Johan Smith</td>
                    <td>34</td>
                    <td>Male</td>
                    <td>johan@gmail.com</td>
                    <td>9320922002</td>
                  </tr>
                </tbody>
              </Table>
            </Card>
          </Col>
        </Container>
      </div>
    );
  }
}
