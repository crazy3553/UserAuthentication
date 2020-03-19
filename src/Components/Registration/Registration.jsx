import React, { Component } from "react";
import { Form, Button, Col, Container, Card, Alert } from "react-bootstrap";
import { history, store } from "../../_helpers";
import { RegistrationAction,CheckAdminAccount } from "../../_actions";

export class Registration extends Component {
  constructor(props) {
    super(props);
    this.state = {
      personName: "",
      personAge: "",
      personMobNo: "",
      password: "",
      cnfPassword: "",
      gender: "",
      email: "",
      isValidated: false,
      chkPassValid: false
    };
    this.redirectLogin = this.redirectLogin.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.submitRehistration = this.submitRehistration.bind(this);
  }
  componentDidMount() {
    store.dispatch(CheckAdminAccount.AdminAccountAccess());
  }
  redirectLogin = () => {
    history.push("/");
  };
  handleChange = e => {
    try {
      if (e.target.name === "personName") {
        this.setState({
          [e.target.name]: e.target.value.replace(/[^A-z\s]/g, "")
        });
      } else if (e.target.name === "personAge") {
        if (!e.target.value || /^[0-9]*$/.test(e.target.value)) {
          this.setState({ [e.target.name]: e.target.value });
        }
      } else if (e.target.name === "personMobNo") {
        if (!e.target.value || /^[0-9]*$/.test(e.target.value)) {
          this.setState({ [e.target.name]: e.target.value });
        }
      } else if (e.target.name === "gender") {
        this.setState({
          gender: e.target.value
        });
      } else {
        this.setState({ [e.target.name]: e.target.value });
      }
    } catch (error) {}
  };
  submitRehistration = e => {
    const { password, cnfPassword } = this.state;
    e.preventDefault();
    e.stopPropagation();
    const form = e.currentTarget;
    try {
      if (form.checkValidity() === true) {
        if (password !== cnfPassword) {
          this.setState({
            chkPassValid: true
          });
        } else {
          this.setState({
            chkPassValid: false
          });
          this.submitDetails();
        }
      } else {
        this.setState({ isValidated: true });
      }
    } catch (error) {
      debugger;
    }
  };
  submitDetails = () => {
    let regDetails = [];
    let role = "";
    const {
      personAge,
      personMobNo,
      personName,
      password,
      gender,
      email
    } = this.state;
    regDetails.push({
      Name: personName,
      Age: personAge,
      Email: email,
      Gender: gender,
      PhoneNumber: personMobNo,
      Password: password
    });
    console.log(store.getState().chkAccess.items);
    if (store.getState().chkAccess.items != undefined) {
      if (store.getState().chkAccess.items) {
        role = "Admin";
      } else role = "Guest";
    } else role = "Guest";
    RegistrationAction.Register(regDetails, role);
  };

  render() {
    return (
      <div>
        <Container className="regMainContent">
          <Col md={8}>
            <Card className="regForm">
              {this.state.chkPassValid && (
                <Alert variant="danger">
                  Password and Conform Password should Match.
                </Alert>
              )}

              <Form
                noValidate
                autoComplete="off"
                validated={this.state.isValidated}
                onSubmit={this.submitRehistration}
              >
                <Form.Row>
                  <Form.Group as={Col} controlId="name">
                    <Form.Label>Name</Form.Label>
                    <Form.Control
                      className="cust-font cust-input"
                      type="text"
                      autoComplete="off"
                      placeholder="Enter Name"
                      maxLength="50"
                      name="personName"
                      value={this.state.personName}
                      onChange={this.handleChange}
                      required
                    />
                    <Form.Control.Feedback type="invalid">
                      Please Enter Name
                    </Form.Control.Feedback>
                  </Form.Group>

                  <Form.Group as={Col} controlId="age">
                    <Form.Label>Age</Form.Label>
                    <Form.Control
                      className="cust-font cust-input"
                      type="text"
                      maxLength="3"
                      autoComplete="none"
                      placeholder="Age"
                      name="personAge"
                      value={this.state.personAge}
                      onChange={this.handleChange}
                      required
                    />
                    <Form.Control.Feedback type="invalid">
                      Please Enter Age
                    </Form.Control.Feedback>
                  </Form.Group>
                </Form.Row>
                <Form.Row>
                  <Form.Group as={Col} controlId="email">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                      className="cust-font cust-input"
                      type="email"
                      name="email"
                      autoComplete="none"
                      onChange={this.handleChange}
                      placeholder="Enter your Email"
                      required
                    />
                    <Form.Control.Feedback type="invalid">
                      Please Enter Email ID
                    </Form.Control.Feedback>
                  </Form.Group>

                  <Form.Group as={Col} controlId="phoneno">
                    <Form.Label>Mobile No</Form.Label>
                    <Form.Control
                      type="text"
                      autoComplete="none"
                      placeholder="Mobile Number"
                      maxLength="10"
                      name="personMobNo"
                      value={this.state.personMobNo}
                      onChange={this.handleChange}
                    />
                  </Form.Group>
                </Form.Row>
                <Form.Row>
                  <Form.Group as={Col} controlId="password">
                    <Form.Label>Passowrd</Form.Label>
                    <Form.Control
                      className="cust-font cust-input"
                      type="password"
                      autoComplete="none"
                      placeholder="Password"
                      name="password"
                      value={this.state.password}
                      onChange={this.handleChange}
                      required
                    />
                    <Form.Control.Feedback type="invalid">
                      Please enter Password
                    </Form.Control.Feedback>
                  </Form.Group>

                  <Form.Group as={Col} controlId="cnfPassword">
                    <Form.Label>Confirm Password</Form.Label>
                    <Form.Control
                      className="cust-font cust-input"
                      type="password"
                      name="cnfPassword"
                      value={this.state.cnfPassword}
                      onChange={this.handleChange}
                      autoComplete="none"
                      placeholder="Confirm Password"
                      required
                    />
                    <Form.Control.Feedback type="invalid">
                      Password and Confirm Password should match
                    </Form.Control.Feedback>
                  </Form.Group>
                </Form.Row>
                <Form.Row>
                  <Form.Check inline>
                    <Form.Group id="gender">
                      <Form.Check
                        type="radio"
                        name="gender"
                        label="Male"
                        value="Male"
                        onChange={this.handleChange}
                      />
                    </Form.Group>
                    <Form.Group id="gender">
                      <Form.Check
                        type="radio"
                        name="gender"
                        label="Female"
                        value="Female"
                        onChange={this.handleChange}
                      />
                    </Form.Group>
                    <Form.Group id="gender">
                      <Form.Check
                        type="radio"
                        name="gender"
                        label="Other"
                        value="Other"
                        onChange={this.handleChange}
                      />
                    </Form.Group>
                  </Form.Check>
                </Form.Row>
                <Form.Row>
                  <Button
                    variant="primary"
                    type="submit"
                    ref="btn"
                    className="regBtnSubmit"
                  >
                    Submit
                  </Button>
                  <Button
                    variant="danger"
                    className="LogPageRegBtn"
                    onClick={this.redirectLogin}
                  >
                    Cancel
                  </Button>
                </Form.Row>
              </Form>
            </Card>
          </Col>
        </Container>
      </div>
    );
  }
}
