import React, { Component } from "react";
import { Form, Button, Col, Container, Card } from "react-bootstrap";
import {history} from '../../_helpers';
export class Login extends Component {
  constructor(props) {
    super(props);
    this.redirectRegistration = this.redirectRegistration.bind(this);
  }
  redirectRegistration = () => {
    history.push("/Registration");
  };
  render() {
    return (
      <div>
        <Container className="loginMainContent">
          <Col md={8}>
            <Card className="loginForm">
              <Form>
                <Form.Row>
                  <Form.Group as={Col} controlId="username">
                    <Form.Label>User Name</Form.Label>
                    <Form.Control
                      type="text"
                      autoComplete="off"
                      placeholder="User Name"
                    />
                  </Form.Group>
                </Form.Row>
                <Form.Row>
                  <Form.Group as={Col} controlId="password">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                      type="password"
                      autoComplete="none"
                      placeholder="Password"
                    />
                  </Form.Group>
                </Form.Row>
                <Form.Row>
                  <Form.Group>
                    <Button variant="primary" type="submit">
                      Login
                    </Button>
                  </Form.Group>
                  <Form.Group className="LogPageRegBtn">
                    <Button
                      variant="success"
                      onClick={this.redirectRegistration}
                    >
                      Registration
                    </Button>
                  </Form.Group>
                </Form.Row>
              </Form>
            </Card>
          </Col>
        </Container>
      </div>
    );
  }
}
