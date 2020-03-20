import React, { Component } from "react";
import { Container, Table, Col, Card } from "react-bootstrap";
import { history } from "../../_helpers";
import { DashnoardAction } from "../../_actions";
import { connect } from "react-redux";
import { Button } from "react-bootstrap";

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      displayDetails: []
    };
    this.logout = this.logout.bind(this);
  }
  componentWillMount() {
    var userName = sessionStorage.getItem("UserName");
    var role = sessionStorage.getItem("Role");
    this.props.dispatch(DashnoardAction.DisplayDetails(userName, role));
  }
  logout = () => {
    history.push("/");
  };
  render() {
    let displayHeader = false;
    if (this.props.dashDetails.items != undefined) {
      displayHeader = true;
    }
    return (
      <div>
        <Button variant="secondary" className="logoutbtn" onClick={this.logout}>
          Logout
        </Button>
        <Container>
          <Col md={12}>
            <Card className="dashboard">
              {displayHeader && (
                <Table striped bordered hover>
                  <thead>
                    <tr>
                      <th>Name</th>
                      <th>Mobile Number</th>
                      <th>Email</th>
                      <th>Gender</th>
                      <th>Age</th>
                    </tr>
                  </thead>
                  <tbody>
                    {this.props.dashDetails.items &&
                      this.props.dashDetails.items.map(dispData => (
                        <tr key={dispData.id}>
                          <td>{dispData.Name}</td>
                          <td>{dispData.PhoneNumber}</td>
                          <td>{dispData.Email}</td>
                          <td>{dispData.Gender}</td>
                          <td>{dispData.Age}</td>
                        </tr>
                      ))}
                  </tbody>
                </Table>
              )}
            </Card>
          </Col>
        </Container>
      </div>
    );
  }
}

function mapStateToProps(state) {
  const { dashDetails } = state;
  return {
    dashDetails
  };
}
const dashComp = connect(mapStateToProps)(Dashboard);
export { dashComp as Dashboard };
