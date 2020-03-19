import React, { Component } from "react";
import { Form, Button, Col, Container, Card } from "react-bootstrap";
import { history } from "../../_helpers";
export class Registration extends Component {
  constructor() {
    super();
    this.redirectLogin = this.redirectLogin.bind(this);
  }
  redirectLogin = () => {
    history.push("/");
  };
  render() {
    return (
      <div>
        <Container className="regMainContent">
          <Col md={8}>
            <Card className="regForm">
              <Form>
                <Form.Row>
                  <Form.Group as={Col} controlId="name">
                    <Form.Label>Name</Form.Label>
                    <Form.Control
                      type="text"
                      autoComplete="off"
                      placeholder="Enter Name"
                    />
                  </Form.Group>

                  <Form.Group as={Col} controlId="age">
                    <Form.Label>Age</Form.Label>
                    <Form.Control
                      type="number"
                      autoComplete="none"
                      placeholder="Age"
                    />
                  </Form.Group>
                </Form.Row>
                <Form.Row>
                  <Form.Group as={Col} controlId="email">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                      type="email"
                      autoComplete="none"
                      placeholder="Enter your Email"
                    />
                  </Form.Group>

                  <Form.Group as={Col} controlId="phoneno">
                    <Form.Label>Mobile No</Form.Label>
                    <Form.Control
                      type="number"
                      autoComplete="none"
                      placeholder="Mobile Number"
                    />
                  </Form.Group>
                </Form.Row>
                <Form.Row>
                  <Form.Group as={Col} controlId="password">
                    <Form.Label>Passowrd</Form.Label>
                    <Form.Control
                      type="password"
                      autoComplete="none"
                      placeholder="Password"
                    />
                  </Form.Group>

                  <Form.Group as={Col} controlId="cnfPassword">
                    <Form.Label>Confirm Password</Form.Label>
                    <Form.Control
                      type="password"
                      autoComplete="none"
                      placeholder="Confirm Password"
                    />
                  </Form.Group>
                </Form.Row>
                <Form.Row>
                  <Form.Check inline>
                    <Form.Group id="gender">
                      <Form.Check type="radio" name="gender" label="Male" />
                    </Form.Group>
                    <Form.Group id="gender">
                      <Form.Check type="radio" name="gender" label="Female" />
                    </Form.Group>
                    <Form.Group id="gender">
                      <Form.Check type="radio" name="gender" label="Other" />
                    </Form.Group>
                  </Form.Check>
                </Form.Row>
                <Form.Row>
                  <Form.Group>
                    <Button
                      variant="success"
                      type="submit"
                      className="regBtnSubmit"
                    >
                      Submit
                    </Button>
                  </Form.Group>
                  <Form.Group>
                    <Button variant="danger" className="LogPageRegBtn" onClick={this.redirectLogin}>
                      Cancel
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
