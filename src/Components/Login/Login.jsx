import React, { Component } from "react";
import { connect } from "react-redux";
import { Form, Button, Col, Container, Card } from "react-bootstrap";
import { history, store } from "../../_helpers";
import { LoginAction } from "../../_actions";

export class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isValidated: false,
      userName: "",
      password: ""
    };
    this.redirectRegistration = this.redirectRegistration.bind(this);
    this.SubmitLogin = this.SubmitLogin.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  componentWillMount() {
    sessionStorage.removeItem("UserName");
    sessionStorage.removeItem("Role");
  }
  redirectRegistration = () => {
    history.push("/Registration");
  };
  SubmitLogin = e => {
    let LoginDetails = [];
    e.preventDefault();
    e.stopPropagation();
    const form = e.currentTarget;
    try {
      if (form.checkValidity() === true) {
        LoginDetails.push({
          UserName: this.state.userName,
          Password: this.state.password
        });
        store.dispatch(LoginAction.Login(LoginDetails));
      } else {
        this.setState({ isValidated: true });
      }
    } catch (error) {}
  };
  handleChange = e => {
    try {
      this.setState({ [e.target.name]: e.target.value });
    } catch (error) {}
  };
  render() {
    return (
      <div>
        <Container className="loginMainContent">
          <Col md={8}>
            <Card className="loginForm">
              <Form
                noValidate
                autoComplete="off"
                validated={this.state.isValidated}
                onSubmit={this.SubmitLogin}
              >
                <Form.Row>
                  <Form.Group as={Col} controlId="username">
                    <Form.Label>User Name</Form.Label>
                    <Form.Control
                      type="text"
                      autoComplete="off"
                      placeholder="User Name"
                      name="userName"
                      value={this.state.userName}
                      onChange={this.handleChange}
                      required
                    />
                    <Form.Control.Feedback type="invalid">
                      Please Enter User Name
                    </Form.Control.Feedback>
                  </Form.Group>
                </Form.Row>
                <Form.Row>
                  <Form.Group as={Col} controlId="password">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                      type="password"
                      autoComplete="none"
                      placeholder="Password"
                      name="password"
                      value={this.state.password}
                      onChange={this.handleChange}
                      required
                    />
                    <Form.Control.Feedback type="invalid">
                      Please Enter Password
                    </Form.Control.Feedback>
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
